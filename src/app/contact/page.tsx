import { Metadata } from "next";
import MapEmbed from "../../components/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jones Properties. Call (423) 472-4000 or visit us at 201 Keith Street SW, Suite 80, Cleveland, TN 37311.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Have a question about a property, need maintenance, or want to learn
            more? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info - Full Width */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                  Get In Touch
                </h2>
                <p className="font-body text-foreground/70 text-lg leading-relaxed mb-6">
                  We&apos;d love to hear from you. Give us a call or send us an email and we&apos;ll get back to you within 1 business day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:4234724000"
                    className="btn-primary text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (423) 472-4000
                  </a>
                  <a
                    href="mailto:ehale@jonesmanagement.com"
                    className="btn-outline text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Info */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="font-heading text-xl font-bold text-primary mb-6">
                  Office Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-0.5">Address</p>
                      <p className="font-body text-sm text-foreground/60">
                        201 Keith Street SW, Suite 80<br />
                        Cleveland, TN 37311
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-0.5">Phone</p>
                      <a href="tel:4234724000" className="font-body text-sm text-accent hover:text-accent-light transition-colors">
                        (423) 472-4000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-0.5">Email</p>
                      <a href="mailto:ehale@jonesmanagement.com" className="font-body text-sm text-accent hover:text-accent-light transition-colors">
                        ehale@jonesmanagement.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-0.5">Office Hours</p>
                      <p className="font-body text-sm text-foreground/60">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-primary rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Emergency Maintenance?
                </h3>
                <p className="font-body text-white/60 text-sm mb-4">
                  For after-hours maintenance emergencies, please call our main line.
                </p>
                <a
                  href="tel:4234724000"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold text-sm py-2.5 px-5 rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (423) 472-4000
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Find Us
            </h2>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
