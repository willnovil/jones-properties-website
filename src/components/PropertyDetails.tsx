import { PropertyListing } from "../lib/types";
import { formatCurrency, formatBedsBaths, formatSqft } from "../lib/utils";
import AvailabilityBadge from "./AvailabilityBadge";

interface PropertyDetailsProps {
  listing: PropertyListing;
}

export default function PropertyDetails({ listing }: PropertyDetailsProps) {
  const { property, floorPlans, availableUnits } = listing;
  const portalUrl = process.env.RENTCAFE_PORTAL_URL || "#";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="bg-primary/10 text-primary text-xs font-body font-semibold px-3 py-1 rounded-full capitalize">
            {property.type}
          </span>
          <AvailabilityBadge
            available={listing.availableCount > 0}
            count={listing.availableCount > 0 ? listing.availableCount : undefined}
            size="md"
          />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
          {property.propertyName}
        </h1>
        <p className="font-body text-foreground/50 text-lg">
          {property.address}, {property.city}, {property.state} {property.zip}
        </p>
      </div>

      {/* Description */}
      {property.description && (
        <div>
          <h2 className="font-heading text-xl font-bold text-primary mb-3">
            About This Property
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed">
            {property.description}
          </p>
        </div>
      )}

      {/* Floor Plans */}
      {floorPlans.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-bold text-primary mb-4">
            Floor Plans
          </h2>
          <div className="space-y-3">
            {floorPlans.map((fp) => (
              <div
                key={fp.floorPlanId}
                className="bg-background rounded-lg p-5 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      {fp.name}
                    </h3>
                    <p className="font-body text-foreground/60 text-sm mt-1">
                      {formatBedsBaths(fp.beds, fp.baths)} &middot; {formatSqft(fp.sqft)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-xl font-bold text-accent">
                      {fp.rentRange.min > 0
                        ? fp.rentRange.min === fp.rentRange.max
                          ? formatCurrency(fp.rentRange.min)
                          : `${formatCurrency(fp.rentRange.min)} - ${formatCurrency(fp.rentRange.max)}`
                        : "Contact Us"}
                    </p>
                    <p className="font-body text-foreground/40 text-xs">/month</p>
                    <div className="mt-1">
                      <AvailabilityBadge available={fp.availableUnits > 0} count={fp.availableUnits > 0 ? fp.availableUnits : undefined} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Units */}
      {availableUnits.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-bold text-primary mb-4">
            Available Units
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="font-heading text-sm font-semibold text-primary py-3 pr-4">Unit</th>
                  <th className="font-heading text-sm font-semibold text-primary py-3 pr-4">Floor Plan</th>
                  <th className="font-heading text-sm font-semibold text-primary py-3 pr-4">Bed/Bath</th>
                  <th className="font-heading text-sm font-semibold text-primary py-3 pr-4">Sq Ft</th>
                  <th className="font-heading text-sm font-semibold text-primary py-3 pr-4">Rent</th>
                  <th className="font-heading text-sm font-semibold text-primary py-3 pr-4">Available</th>
                  <th className="font-heading text-sm font-semibold text-primary py-3"></th>
                </tr>
              </thead>
              <tbody>
                {availableUnits.map((unit) => (
                  <tr key={unit.unitId} className="border-b border-gray-100">
                    <td className="font-body text-sm text-foreground py-3 pr-4">{unit.unitName}</td>
                    <td className="font-body text-sm text-foreground/70 py-3 pr-4">{unit.floorPlanName}</td>
                    <td className="font-body text-sm text-foreground/70 py-3 pr-4">
                      {formatBedsBaths(unit.beds, unit.baths)}
                    </td>
                    <td className="font-body text-sm text-foreground/70 py-3 pr-4">
                      {formatSqft(unit.sqft)}
                    </td>
                    <td className="font-heading text-sm font-semibold text-accent py-3 pr-4">
                      {formatCurrency(unit.rent)}
                    </td>
                    <td className="font-body text-sm text-foreground/70 py-3 pr-4">
                      {unit.availableDate
                        ? new Date(unit.availableDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Now"}
                    </td>
                    <td className="py-3">
                      {unit.applyUrl ? (
                        <a
                          href={unit.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                        >
                          Apply
                        </a>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Amenities */}
      {property.amenities.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-bold text-primary mb-4">
            Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {property.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-available flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-sm text-foreground/70">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-center"
        >
          Apply Now
        </a>
        <a href="/contact" className="btn-outline text-center">
          Contact Us About This Property
        </a>
      </div>

      {/* Contact Info */}
      <div className="bg-background rounded-lg p-6 border border-gray-100">
        <h3 className="font-heading text-lg font-bold text-primary mb-3">
          Questions?
        </h3>
        <p className="font-body text-foreground/60 text-sm mb-4">
          Contact us for more information about this property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:4234724000"
            className="flex items-center gap-2 font-body text-foreground/70 hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (423) 472-4000
          </a>
          <a
            href="mailto:info@jonesproperties.biz"
            className="flex items-center gap-2 font-body text-foreground/70 hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@jonesproperties.biz
          </a>
        </div>
      </div>
    </div>
  );
}
