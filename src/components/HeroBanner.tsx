import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-primary min-h-[600px] flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/90" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 border border-white/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <p className="font-body text-accent-light text-sm font-semibold uppercase tracking-widest mb-4">
            Cleveland, Tennessee
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Modern Living in{" "}
            <span className="text-accent-light">Cleveland, TN</span>
          </h1>
          <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Discover quality apartments, houses, and commercial spaces managed
            by a team that cares. 90+ properties across Cleveland and Bradley
            County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/properties"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors duration-200 text-center text-lg"
            >
              View Available Properties
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/60 text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded transition-colors duration-200 text-center text-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/20">
            <div>
              <p className="font-heading text-3xl font-bold text-white">90+</p>
              <p className="font-body text-white/60 text-sm mt-1">
                Properties Managed
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-white">20+</p>
              <p className="font-body text-white/60 text-sm mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-white">24/7</p>
              <p className="font-body text-white/60 text-sm mt-1">
                Maintenance Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
