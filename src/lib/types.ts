export interface Property {
  propertyId: string;
  propertyName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  images: PropertyImage[];
  amenities: string[];
  type: "apartment" | "house" | "commercial";
  petFriendly: boolean;
  latitude?: number;
  longitude?: number;
}

export interface PropertyImage {
  url: string;
  caption?: string;
  isPrimary?: boolean;
  source?: "shopify" | "admin";
}

export interface AdminPhoto {
  propertyId: string;
  url: string;
  caption?: string;
  isPrimary: boolean;
  uploadedAt: string;
  filename: string;
}

export interface FloorPlan {
  floorPlanId: string;
  propertyId: string;
  name: string;
  beds: number;
  baths: number;
  sqft: number;
  sqftRange?: { min: number; max: number };
  rentRange: { min: number; max: number };
  deposit?: number;
  availableUnits: number;
  images: PropertyImage[];
  description?: string;
}

export interface UnitAvailability {
  unitId: string;
  propertyId: string;
  floorPlanId: string;
  floorPlanName: string;
  unitName: string;
  beds: number;
  baths: number;
  sqft: number;
  rent: number;
  deposit?: number;
  availableDate: string;
  isAvailable: boolean;
  amenities: string[];
  images: PropertyImage[];
  applyUrl?: string;
}

export interface PropertyListing {
  property: Property;
  floorPlans: FloorPlan[];
  availableUnits: UnitAvailability[];
  minRent: number;
  maxRent: number;
  totalUnits: number;
  availableCount: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyOfInterest?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export type PropertyType = "apartment" | "house" | "commercial" | "all";

export interface PropertyFilters {
  type: PropertyType;
  minBeds: number;
  maxBeds: number;
  minPrice: number;
  maxPrice: number;
  availableOnly: boolean;
}
