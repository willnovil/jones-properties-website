// Static property listings sourced from Shopify (jonesproperties.biz)
// These are properties that exist in Shopify but NOT in the RentCafe API.
// They get merged into the main listings so every property is visible on the site.

import { propertyImages, normalize, leadingNumber } from "./property-images";
import type { PropertyListing, PropertyImage } from "../lib/types";
import { slugify } from "../lib/utils";

/**
 * Returns PropertyListing objects for Shopify-only properties
 * (i.e. entries in propertyImages that do NOT match any RentCafe property).
 */
export function getStaticListings(
  rentCafeProperties: { address: string; name: string }[]
): PropertyListing[] {
  // Build lookup sets from RentCafe properties for fast matching
  const rcNormAddresses = rentCafeProperties.map((p) => normalize(p.address));
  const rcNormNames = rentCafeProperties.map((p) => normalize(p.name));

  const unmatched = propertyImages.filter((entry) => {
    const normAddr = normalize(entry.address);
    const normName = normalize(entry.name);
    const entryNum = leadingNumber(entry.address) || leadingNumber(entry.name);

    // Stage 1: exact normalized address match
    for (const rcAddr of rcNormAddresses) {
      if (rcAddr === normAddr || rcAddr === normName) return false;
    }
    // Also check if entry address matches any RC name
    for (const rcName of rcNormNames) {
      if (rcName === normAddr || rcName === normName) return false;
    }

    // Stage 2: leading number + word overlap
    if (entryNum) {
      for (const rc of rentCafeProperties) {
        const rcNum = leadingNumber(rc.address) || leadingNumber(rc.name);
        if (rcNum === entryNum) {
          const entryWords = normAddr.split(" ").filter((w) => w.length > 2);
          const rcWords = normalize(rc.address).split(" ").filter((w) => w.length > 2);
          const overlap = entryWords.some((w) => rcWords.includes(w));
          if (overlap) return false;
        }
      }
    }

    // Stage 3: name match
    for (const rc of rentCafeProperties) {
      if (normalize(rc.name) === normName) return false;
    }

    return true; // no match found – this is a Shopify-only property
  });

  return unmatched.map((entry) => {
    const images: PropertyImage[] = entry.images.map((url, i) => ({
      url,
      caption: entry.name,
      isPrimary: i === 0,
    }));

    return {
      property: {
        propertyId: "static-" + slugify(entry.address),
        propertyName: entry.name,
        address: entry.address,
        city: "Cleveland",
        state: "TN",
        zip: "",
        phone: "(423) 472-4000",
        email: "info@jonesproperties.biz",
        website: entry.shopifyUrl,
        description: "",
        images,
        amenities: [],
        type: entry.type,
        petFriendly: false,
      },
      floorPlans: [],
      availableUnits: [],
      minRent: 0,
      maxRent: 0,
      totalUnits: 0,
      availableCount: 0,
    };
  });
}
