import { Metadata } from "next";
import Link from "next/link";
import { staticPages } from "../../data/static-pages";

export const metadata: Metadata = {
  title: "Capital Investment",
  description:
    "Jones Properties invests in Cleveland, TN real estate. Strategic property acquisitions and improvements for long-term community growth.",
};

export default function CapitalInvestmentPage() {
  const page = staticPages.capitalInvestment;

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Real Estate Investment
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

          {/* Highlights */}
          <div className="bg-background rounded-lg p-8 border border-gray-100 mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Investment Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-body text-foreground/70">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-3">
              Interested in Partnering?
            </h2>
            <p className="font-body text-white/60 mb-6">
              Contact us to discuss investment opportunities in Cleveland, TN real estate.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
