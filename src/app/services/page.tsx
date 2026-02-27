import { Metadata } from "next";
import Link from "next/link";
import { staticPages } from "../../data/static-pages";

export const metadata: Metadata = {
  title: "Property Services",
  description:
    "Quality rental properties in Cleveland, TN. Well-maintained apartments, houses, and commercial spaces with professional on-site management.",
};

export default function ServicesPage() {
  const page = staticPages.services;

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {page.title}
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6 mb-12">
            {page.content.map((paragraph, i) => (
              <p key={i} className="font-body text-foreground/70 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.servicesList.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
              Looking for Your Next Home?
            </h2>
            <p className="font-body text-white/80">
              Browse our available properties or contact us to find the perfect rental for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
