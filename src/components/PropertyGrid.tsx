"use client";

import { useState, useMemo } from "react";
import { PropertyListing, PropertyType } from "../lib/types";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";

interface PropertyGridProps {
  listings: PropertyListing[];
  initialType?: PropertyType;
}

export default function PropertyGrid({ listings, initialType = "all" }: PropertyGridProps) {
  const [type, setType] = useState<PropertyType>(initialType);
  const [beds, setBeds] = useState("any");
  const [priceRange, setPriceRange] = useState("any");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...listings];

    // Filter by type
    if (type !== "all") {
      result = result.filter((l) => l.property.type === type);
    }

    // Filter by beds
    if (beds !== "any") {
      const bedCount = parseInt(beds);
      result = result.filter((l) =>
        l.floorPlans.some((fp) =>
          bedCount === 3 ? fp.beds >= 3 : fp.beds === bedCount
        )
      );
    }

    // Filter by price
    if (priceRange !== "any") {
      if (priceRange === "1500+") {
        result = result.filter((l) => l.maxRent >= 1500);
      } else {
        const [min, max] = priceRange.split("-").map(Number);
        result = result.filter(
          (l) => l.minRent <= max && l.maxRent >= min
        );
      }
    }

    // Filter available only
    if (availableOnly) {
      result = result.filter((l) => l.availableCount > 0);
    }

    // Sort: available first, then alphabetically
    result.sort((a, b) => {
      if (a.availableCount > 0 && b.availableCount === 0) return -1;
      if (a.availableCount === 0 && b.availableCount > 0) return 1;
      return a.property.propertyName.localeCompare(b.property.propertyName);
    });

    return result;
  }, [listings, type, beds, priceRange, availableOnly]);

  return (
    <div>
      <PropertyFilters
        type={type}
        beds={beds}
        priceRange={priceRange}
        availableOnly={availableOnly}
        onTypeChange={setType}
        onBedsChange={setBeds}
        onPriceChange={setPriceRange}
        onAvailableChange={setAvailableOnly}
      />

      {/* Results count */}
      <p className="font-body text-foreground/50 text-sm mb-6">
        Showing {filtered.length} {filtered.length === 1 ? "property" : "properties"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((listing) => (
            <PropertyCard key={listing.property.propertyId} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg className="w-16 h-16 text-foreground/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h3 className="font-heading text-xl font-bold text-foreground/40 mb-2">
            No Properties Found
          </h3>
          <p className="font-body text-foreground/40">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
}
