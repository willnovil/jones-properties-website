import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPropertyById, getPropertyListings } from "../../../lib/rentcafe";
import PropertyGallery from "../../../components/PropertyGallery";
import PropertyDetails from "../../../components/PropertyDetails";

export const revalidate = 900;

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const listing = await getPropertyById(params.id);

  if (!listing) {
    return { title: "Property Not Found" };
  }

  return {
    title: listing.property.propertyName,
    description: listing.property.description || `${listing.property.propertyName} - ${listing.property.address}, ${listing.property.city}, ${listing.property.state}`,
  };
}

export async function generateStaticParams() {
  const listings = await getPropertyListings();
  return listings.map((l) => ({ id: l.property.propertyId }));
}

export default async function PropertyPage({ params }: Props) {
  const listing = await getPropertyById(params.id);

  if (!listing) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 font-body text-sm">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/properties" className="text-white/50 hover:text-white transition-colors">
              Properties
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">{listing.property.propertyName}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Gallery - 3 cols */}
            <div className="lg:col-span-3">
              <PropertyGallery
                images={listing.property.images}
                propertyName={listing.property.propertyName}
              />
            </div>

            {/* Details - 2 cols */}
            <div className="lg:col-span-2">
              <PropertyDetails listing={listing} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
