import Link from "next/link";
import Image from "next/image";
import { PropertyListing } from "../lib/types";
import { formatRentRange, formatBedsBaths } from "../lib/utils";
import AvailabilityBadge from "./AvailabilityBadge";

interface PropertyCardProps {
  listing: PropertyListing;
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  const { property, floorPlans, availableCount, minRent, maxRent } = listing;

  const bedsRange = floorPlans.length > 0
    ? {
        min: Math.min(...floorPlans.map((fp) => fp.beds)),
        max: Math.max(...floorPlans.map((fp) => fp.beds)),
      }
    : { min: 0, max: 0 };

  const bedsLabel =
    bedsRange.min === bedsRange.max
      ? bedsRange.min === 0
        ? "Studio"
        : `${bedsRange.min} Bed`
      : `${bedsRange.min === 0 ? "Studio" : bedsRange.min} - ${bedsRange.max} Bed`;

  const bathsRange = floorPlans.length > 0
    ? {
        min: Math.min(...floorPlans.map((fp) => fp.baths)),
        max: Math.max(...floorPlans.map((fp) => fp.baths)),
      }
    : { min: 1, max: 1 };

  const typeLabel =
    property.type === "apartment"
      ? "Apartment"
      : property.type === "house"
      ? "House"
      : "Commercial";

  return (
    <Link
      href={`/properties/${property.propertyId}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {property.images.length > 0 && property.images[0].url ? (
          <Image
            src={property.images[0].url}
            alt={property.propertyName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
            {typeLabel}
          </span>
        </div>

        {/* Availability badge */}
        <div className="absolute top-3 right-3">
          <AvailabilityBadge available={availableCount > 0} count={availableCount > 0 ? availableCount : undefined} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200 mb-1">
          {property.propertyName}
        </h3>
        <p className="font-body text-foreground/50 text-sm mb-3">
          {property.address}, {property.city}, {property.state}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="font-heading text-lg font-bold text-accent">
              {minRent > 0 ? formatRentRange(minRent, maxRent) : "Contact Us"}
            </p>
            <p className="font-body text-foreground/50 text-xs">
              {minRent > 0 ? "/month" : "for pricing"}
            </p>
          </div>
          <div className="text-right">
            <p className="font-body text-foreground/70 text-sm font-medium">
              {bedsLabel}
            </p>
            <p className="font-body text-foreground/50 text-xs">
              {bathsRange.min === bathsRange.max
                ? formatBedsBaths(0, bathsRange.min).split("/ ")[1]
                : `${bathsRange.min} - ${bathsRange.max} Bath`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
