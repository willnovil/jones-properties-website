import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tenant Portal",
  description:
    "Access the Jones Properties tenant portal to pay rent, submit maintenance requests, and view your lease information.",
};

const portalUrl =
  process.env.RENTCAFE_PORTAL_URL ||
  "https://www.rentcafe.com/residents/jonesproperties";

export default function TenantPortalPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            For Current Tenants
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Tenant Portal
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Access your account to pay rent, submit maintenance requests, and
            manage your lease — all online.
          </p>
        </div>
      </section>

      {/* Portal Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {/* Login CTA */}
          <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-100 text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-3">
              Access Your Tenant Portal
            </h2>
            <p className="font-body text-foreground/60 mb-8 max-w-lg mx-auto">
              Log in to pay rent, view your account balance, submit maintenance
              requests, and access important documents.
            </p>
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-block"
            >
              Log In to Tenant Portal
            </a>
          </div>

          {/* Features */}
          <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
            What You Can Do Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Pay Rent Online",
                desc: "Make secure rent payments from your bank account or credit card. Set up autopay for convenience.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
              },
              {
                title: "Submit Maintenance Requests",
                desc: "Report maintenance issues and track their progress. Include photos and detailed descriptions.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "View Lease Information",
                desc: "Access your lease agreement, review terms, and stay informed about your rental agreement.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Account History",
                desc: "View your payment history, track balances, and download statements for your records.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Support */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              Need Help?
            </h3>
            <p className="font-body text-white/60 mb-6 max-w-lg mx-auto">
              If you&apos;re having trouble accessing the tenant portal or need
              assistance, please contact our office.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:4234724000"
                className="flex items-center gap-2 text-accent font-body font-semibold hover:text-accent-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (423) 472-4000
              </a>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-light text-white font-semibold text-sm py-2.5 px-6 rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
