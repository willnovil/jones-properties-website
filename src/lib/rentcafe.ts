import {
  Property,
  FloorPlan,
  UnitAvailability,
  PropertyListing,
  PropertyImage,
} from "./types";
import { getMockListings } from "../data/mock-properties";
import { findPropertyImage } from "../data/property-images";

const API_BASE = "https://api.rentcafe.com/rentcafeapi.aspx";
const API_TOKEN = process.env.RENTCAFE_API_TOKEN;
const PROPERTY_IDS = process.env.RENTCAFE_PROPERTY_IDS?.split(",").map((s) => s.trim()).filter(Boolean) || [];

const isApiConfigured =
  API_TOKEN &&
  API_TOKEN !== "your_api_token_here" &&
  PROPERTY_IDS.length > 0;

// In-memory cache with longer duration to reduce API calls
const cache: Map<string, { data: unknown; timestamp: number }> = new Map();
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_DURATION) {
    return entry.data as T;
  }
  return null;
}

function setCache(key: string, data: unknown): void {
  cache.set(key, { data, timestamp: Date.now() });
}

async function apiCall(params: Record<string, string>): Promise<unknown> {
  if (!isApiConfigured) {
    throw new Error("RentCafe API not configured");
  }

  const searchParams = new URLSearchParams({
    apiToken: API_TOKEN!,
    ...params,
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout per call

  try {
    const response = await fetch(`${API_BASE}?${searchParams.toString()}`, {
      signal: controller.signal,
      next: { revalidate: 1800 }, // 30 min ISR
    });

    if (!response.ok) {
      throw new Error(`RentCafe API error: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length === 1 && data[0].Error) {
      throw new Error(`RentCafe API error code: ${data[0].Error}`);
    }

    return data;
  } finally {
    clearTimeout(timeout);
  }
}

// Process items in batches to avoid overwhelming the API
async function batchProcess<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  batchSize: number = 5
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}

// Fetch a single property by ID
async function fetchProperty(propertyId: string): Promise<Property | null> {
  try {
    const data = (await apiCall({
      requestType: "property",
      propertyId,
    })) as Array<Record<string, string>>;

    if (!Array.isArray(data) || data.length === 0) return null;

    const p = data[0];
    const name = p.name || "";
    const address = p.address || "";

    // Match scraped images from jonesproperties.biz
    const matchedEntry = findPropertyImage(address, name);
    const images: PropertyImage[] = matchedEntry
      ? matchedEntry.images.map((url, i) => ({ url, caption: matchedEntry.name, isPrimary: i === 0 }))
      : [];

    return {
      propertyId: p.PropertyId || propertyId,
      propertyName: name,
      address,
      city: p.city || "Cleveland",
      state: p.state || "TN",
      zip: p.zipcode || "",
      phone: p.phone || "(423) 472-4000",
      email: p.email || "",
      website: p.url || "",
      description: p.description || "",
      images,
      amenities: [],
      type: inferPropertyType(name, p.description || ""),
      petFriendly: (p.description || "").toLowerCase().includes("pet"),
      latitude: parseFloat(p.Latitude) || undefined,
      longitude: parseFloat(p.Longitude) || undefined,
    };
  } catch {
    return null;
  }
}

// Fetch all properties (batched, 5 at a time)
async function fetchAllProperties(): Promise<Property[]> {
  const cached = getCached<Property[]>("all_properties");
  if (cached) return cached;

  const results = await batchProcess(PROPERTY_IDS, fetchProperty, 5);
  const properties = results.filter((p): p is Property => p !== null);
  setCache("all_properties", properties);
  return properties;
}

// Fetch floor plans for a property
async function fetchFloorPlans(propertyId: string): Promise<FloorPlan[]> {
  const cacheKey = `floorplans_${propertyId}`;
  const cached = getCached<FloorPlan[]>(cacheKey);
  if (cached) return cached;

  try {
    const data = (await apiCall({
      requestType: "floorplan",
      propertyId,
    })) as Array<Record<string, string>>;

    const floorPlans: FloorPlan[] = (Array.isArray(data) ? data : []).map((fp) => ({
      floorPlanId: fp.FloorplanId || "",
      propertyId: fp.PropertyId || propertyId,
      name: fp.FloorplanName || "",
      beds: parseInt(fp.Beds) || 0,
      baths: parseFloat(fp.Baths) || 1,
      sqft: parseInt(fp.MaximumSQFT) || parseInt(fp.MinimumSQFT) || 0,
      sqftRange: {
        min: parseInt(fp.MinimumSQFT) || 0,
        max: parseInt(fp.MaximumSQFT) || 0,
      },
      rentRange: {
        min: parseFloat(fp.MinimumRent) || 0,
        max: parseFloat(fp.MaximumRent) || 0,
      },
      deposit: parseFloat(fp.MinimumDeposit) || undefined,
      availableUnits: parseInt(fp.AvailableUnitsCount) || 0,
      images: fp.FloorplanImageURL ? [{ url: fp.FloorplanImageURL }] : [],
      description: "",
    }));

    setCache(cacheKey, floorPlans);
    return floorPlans;
  } catch {
    return [];
  }
}

// Fetch unit availability for a property
async function fetchAvailability(propertyId: string): Promise<UnitAvailability[]> {
  const cacheKey = `availability_${propertyId}`;
  const cached = getCached<UnitAvailability[]>(cacheKey);
  if (cached) return cached;

  try {
    const data = (await apiCall({
      requestType: "apartmentavailability",
      propertyId,
    })) as Array<Record<string, unknown>>;

    const units: UnitAvailability[] = (Array.isArray(data) ? data : []).map((u) => ({
      unitId: String(u.ApartmentId || ""),
      propertyId: String(u.PropertyId || propertyId),
      floorPlanId: String(u.FloorplanId || ""),
      floorPlanName: String(u.FloorplanName || ""),
      unitName: String(u.ApartmentName || ""),
      beds: parseInt(String(u.Beds)) || 0,
      baths: parseFloat(String(u.Baths)) || 1,
      sqft: parseInt(String(u.SQFT)) || 0,
      rent: parseFloat(String(u.MinimumRent)) || 0,
      deposit: parseFloat(String(u.Deposit)) || undefined,
      availableDate: String(u.AvailableDate || ""),
      isAvailable: true,
      amenities: parseAmenities(u.Amenities),
      images: parseUnitImages(u.UnitImageURLs),
      applyUrl: String(u.ApplyOnlineURL || ""),
    }));

    setCache(cacheKey, units);
    return units;
  } catch {
    return [];
  }
}

// Helper: parse unit image URLs
function parseUnitImages(raw: unknown): PropertyImage[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw
      .filter((url) => typeof url === "string" && url.trim() !== "")
      .map((url) => ({ url: String(url) }));
  }
  return [];
}

// Helper: parse amenities
function parseAmenities(raw: unknown): string[] {
  if (!raw) return [];
  if (typeof raw === "string") return raw.split(",").map((a) => a.trim()).filter(Boolean);
  if (Array.isArray(raw)) return raw.map(String);
  return [];
}

// Helper: infer property type from name and description
function inferPropertyType(name: string, description: string): "apartment" | "house" | "commercial" {
  const text = `${name} ${description}`.toLowerCase();
  if (text.includes("commercial") || text.includes("office") || text.includes("retail") || text.includes("warehouse")) {
    return "commercial";
  }
  if (
    text.includes("house") ||
    text.includes("home") ||
    text.includes("cottage") ||
    text.includes("duplex") ||
    text.includes("bedroom") ||
    text.includes("yard") ||
    text.includes("garage") ||
    /^\d+\s/.test(name)
  ) {
    return "house";
  }
  return "apartment";
}

// === Main public API ===

export async function getPropertyListings(): Promise<PropertyListing[]> {
  if (!isApiConfigured) {
    return getMockListings();
  }

  const cached = getCached<PropertyListing[]>("all_listings");
  if (cached) return cached;

  const properties = await fetchAllProperties();

  // Fetch floorplans and availability in batches of 5 properties at a time
  const listings = await batchProcess(
    properties,
    async (property) => {
      const [floorPlans, availableUnits] = await Promise.all([
        fetchFloorPlans(property.propertyId),
        fetchAvailability(property.propertyId),
      ]);

      const allImages = [
        ...property.images,
        ...floorPlans.flatMap((fp) => fp.images),
        ...availableUnits.flatMap((u) => u.images),
      ].filter((img) => img.url && img.url.trim() !== "");

      const allAmenities = [
        ...property.amenities,
        ...availableUnits.flatMap((u) => u.amenities),
      ];
      const uniqueAmenities = Array.from(new Set(allAmenities)).filter(Boolean);

      const rents = [
        ...floorPlans.map((fp) => fp.rentRange.min),
        ...floorPlans.map((fp) => fp.rentRange.max),
        ...availableUnits.map((u) => u.rent),
      ].filter((r) => r > 0);

      return {
        property: {
          ...property,
          images: allImages.length > 0 ? allImages : property.images,
          amenities: uniqueAmenities.length > 0 ? uniqueAmenities : property.amenities,
        },
        floorPlans,
        availableUnits,
        minRent: rents.length > 0 ? Math.min(...rents) : 0,
        maxRent: rents.length > 0 ? Math.max(...rents) : 0,
        totalUnits: floorPlans.reduce((sum, fp) => sum + fp.availableUnits, 0) || availableUnits.length,
        availableCount: availableUnits.length,
      };
    },
    5
  );

  setCache("all_listings", listings);
  return listings;
}

export async function getPropertyById(id: string): Promise<PropertyListing | null> {
  const listings = await getPropertyListings();
  return listings.find((l) => l.property.propertyId === id) || null;
}

export async function getAvailableListings(): Promise<PropertyListing[]> {
  const listings = await getPropertyListings();
  return listings.filter((l) => l.availableCount > 0);
}
