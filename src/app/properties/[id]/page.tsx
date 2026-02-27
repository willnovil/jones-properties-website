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

  const desc = listing.property.description
    ? listing.property.description
    : `${listing.property.propertyName} for rent at ${listing.property.address}, ${listing.property.city}, ${listing.property.state}.${listing.minRent > 0 ? ` Starting at $${listing.minRent}/month.` : ""}${listing.availableCount > 0 ? ` ${listing.availableCount} units available.` : ""} Apply online today.`;

  return {
    title: `${listing.property.propertyName} | For Rent in Cleveland, TN`,
    description: desc,
    openGraph: {
      title: `${listing.property.propertyName} | For Rent in Cleveland, TN`,
      description: desc,
      images: listing.property.images.length > 0 ? [listing.property.images[0].url] : undefined,
    },
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

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: listing.property.propertyName,
    description: listing.property.description || `${listing.property.propertyName} for rent in ${listing.property.city}, ${listing.property.state}`,
    url: `https://www.jonesproperties.biz/properties/${listing.property.propertyId}`,
    ...(listing.property.images.length > 0 && { image: listing.property.images[0].url }),
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.property.address,
      addressLocality: listing.property.city,
      addressRegion: listing.property.state,
      postalCode: listing.property.zip,
      addressCountry: "US",
    },
    ...(listing.minRent > 0 && {
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: listing.minRent,
        availability: listing.availableCount > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      },
    }),
    ...(listing.property.latitude && listing.property.longitude && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: listing.property.latitude,
        longitude: listing.property.longitude,
      },
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jonesproperties.biz" },
      { "@type": "ListItem", position: 2, name: "Properties", item: "https://www.jonesproperties.biz/properties" },
      { "@type": "ListItem", position: 3, name: listing.property.propertyName },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
