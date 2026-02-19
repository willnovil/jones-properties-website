import { Metadata } from "next";
import { aboutContent } from "../../data/about";
import { teamMembers } from "../../data/team";
import TeamMember from "../../components/TeamMember";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jones Properties — Cleveland, Tennessee's trusted property management company with 90+ residential and commercial rental properties.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Our Story
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {aboutContent.headline}
          </h1>
          <p className="font-body text-white/60 text-lg max-w-3xl">
            {aboutContent.intro}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {aboutContent.story.map((paragraph, i) => (
              <p key={i} className="font-body text-foreground/70 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Our Mission
            </p>
            <p className="font-heading text-xl md:text-2xl font-semibold text-primary leading-relaxed">
              &ldquo;{aboutContent.mission}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center"
              >
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-foreground/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Our Service Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutContent.serviceAreas.map((area) => (
              <div
                key={area.title}
                className="bg-background rounded-lg p-8 border border-gray-100"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {area.title}
                </h3>
                <p className="font-body text-foreground/60 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Our Team
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
              Have Questions?
            </h2>
            <p className="font-body text-white/80">
              We&apos;d love to hear from you. Reach out to our team today.
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
