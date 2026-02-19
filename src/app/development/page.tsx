import { Metadata } from "next";
import Link from "next/link";
import { staticPages } from "../../data/static-pages";

export const metadata: Metadata = {
  title: "Development",
  description:
    "Jones Properties develops residential and commercial properties in Cleveland, TN. Building quality spaces for our growing community.",
};

export default function DevelopmentPage() {
  const page = staticPages.development;

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Building The Future
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

      {/* Focus Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary">
              Development Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {page.focus.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-foreground/60 leading-relaxed">
                  {item.description}
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
              Have a Development Opportunity?
            </h2>
            <p className="font-body text-white/80">
              We&apos;re always looking for new development opportunities in Cleveland.
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
