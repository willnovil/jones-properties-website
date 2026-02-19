import { Metadata } from "next";
import Link from "next/link";
import { staticPages } from "../../data/static-pages";

export const metadata: Metadata = {
  title: "We Buy Houses",
  description:
    "Jones Properties buys houses in Cleveland, TN. Fair cash offers, quick closing, no repairs needed. Contact us today.",
};

export default function WeBuyHousesPage() {
  const page = staticPages.weBuyHouses;

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Sell Your Property
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

          {/* Benefits */}
          <div className="bg-background rounded-lg p-8 border border-gray-100 mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Why Sell to Jones Properties?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-available flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-foreground/70">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-3">
              Ready to Sell?
            </h2>
            <p className="font-body text-white/60 mb-6">
              {page.cta}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:4234724000"
                className="btn-primary"
              >
                Call (423) 472-4000
              </a>
              <Link href="/contact" className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
