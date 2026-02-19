import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import PropertyCard from "../components/PropertyCard";
import CategoryCard from "../components/CategoryCard";
import { getPropertyListings } from "../lib/rentcafe";

export const revalidate = 900; // Revalidate every 15 minutes

export default async function HomePage() {
  const listings = await getPropertyListings();

  const availableListings = listings
    .filter((l) => l.availableCount > 0)
    .slice(0, 6);

  const aptCount = listings.filter((l) => l.property.type === "apartment").length;
  const houseCount = listings.filter((l) => l.property.type === "house").length;
  const commercialCount = listings.filter((l) => l.property.type === "commercial").length;

  return (
    <>
      {/* Hero */}
      <HeroBanner />

      {/* Available Properties */}
      {availableListings.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Now Leasing
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Available Properties
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableListings.map((listing) => (
                <PropertyCard key={listing.property.propertyId} listing={listing} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/properties" className="btn-primary">
                View All Properties
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Property Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Browse By Type
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Property Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard
              title="Apartments"
              description="Modern apartment communities with convenient amenities and professional management."
              count={aptCount}
              href="/properties?type=apartment"
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <CategoryCard
              title="Houses"
              description="Single-family homes, duplexes, and townhomes with private yards and parking."
              count={houseCount}
              href="/properties?type=house"
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <CategoryCard
              title="Commercial"
              description="Office suites and retail spaces in prime Cleveland locations."
              count={commercialCount}
              href="/properties?type=commercial"
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-accent-light text-sm font-semibold uppercase tracking-widest mb-2">
                About Jones Properties
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Cleveland&apos;s Trusted Property Manager
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                With over two decades of experience managing 90+ properties in
                Cleveland, Tennessee, Jones Properties is committed to providing
                quality housing and exceptional service to our tenants and
                community.
              </p>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                From apartments and single-family homes to commercial spaces, we
                handle every aspect of property management so you can focus on
                what matters most.
              </p>
              <Link href="/about" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors duration-200">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-bold text-white mb-1">90+</p>
                <p className="font-body text-white/60 text-sm">Properties</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-bold text-white mb-1">20+</p>
                <p className="font-body text-white/60 text-sm">Years</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-bold text-white mb-1">3</p>
                <p className="font-body text-white/60 text-sm">Property Types</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-bold text-white mb-1">24/7</p>
                <p className="font-body text-white/60 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Our Difference
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Why Choose Jones Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Professional Management",
                desc: "Experienced team handling every detail of property management.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Online Portal",
                desc: "Pay rent and submit maintenance requests online, anytime.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Pet Friendly",
                desc: "Many of our properties welcome your furry family members.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: "Quality Properties",
                desc: "Well-maintained properties you'll be proud to call home.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg hover:bg-background transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 text-accent rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-foreground/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-14">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Find Your Next Home?
            </h2>
            <p className="font-body text-white/80">
              Call us at{" "}
              <a href="tel:4234724000" className="font-semibold text-white underline">
                (423) 472-4000
              </a>{" "}
              or reach out online.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded transition-colors duration-200 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
