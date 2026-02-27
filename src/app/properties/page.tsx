import { Metadata } from "next";
import PropertyGrid from "../../components/PropertyGrid";
import { getPropertyListings } from "../../lib/rentcafe";
import { PropertyType } from "../../lib/types";

export const metadata: Metadata = {
  title: "Properties for Rent",
  description:
    "Browse apartments, houses, and commercial properties for rent in Cleveland, TN. Filter by type, bedrooms, and price range.",
};

export const revalidate = 900;

const validTypes: PropertyType[] = ["apartment", "house", "commercial", "all"];

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const listings = await getPropertyListings();
  const initialType = validTypes.includes(searchParams.type as PropertyType)
    ? (searchParams.type as PropertyType)
    : "all";

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Browse Our Portfolio
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Properties for Rent
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Explore our selection of apartments, houses, and commercial spaces
            throughout Cleveland, Tennessee.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <PropertyGrid listings={listings} initialType={initialType} />
        </div>
      </section>
    </>
  );
}
