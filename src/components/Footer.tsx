import Link from "next/link";

const quickLinks = [
  { href: "/properties", label: "Available Properties" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Property Services" },
  { href: "/tenant-portal", label: "Tenant Portal" },
  { href: "/contact", label: "Contact Us" },
];

const moreLinks = [
  { href: "/we-buy-houses", label: "We Buy Houses" },
  { href: "/capital-investment", label: "Capital Investment" },
  { href: "/development", label: "Development" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Jones Properties
            </h3>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-4">
              Professional property management serving Cleveland, Tennessee and
              the surrounding communities. 90+ residential and commercial
              rental properties.
            </p>
            <p className="font-body text-accent font-semibold">
              (423) 472-4000
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white/70 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              More
            </h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white/70 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Contact Us
            </h4>
            <address className="font-body text-white/70 text-sm not-italic space-y-2">
              <p>201 Keith Street SW, Suite 80</p>
              <p>Cleveland, TN 37311</p>
              <p className="pt-2">
                <span className="text-white/50">Phone:</span>{" "}
                <a href="tel:4234724000" className="hover:text-accent transition-colors">
                  (423) 472-4000
                </a>
              </p>
              <p>
                <span className="text-white/50">Email:</span>{" "}
                <a
                  href="mailto:info@jonesproperties.biz"
                  className="hover:text-accent transition-colors"
                >
                  info@jonesproperties.biz
                </a>
              </p>
              <p className="pt-2">
                <span className="text-white/50">Hours:</span> Mon-Fri 8am-5pm
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Jones Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-white/40 text-xs">
              Cleveland, Tennessee Property Management
            </p>
            <Link
              href="/admin/login"
              className="font-body text-white/30 hover:text-white/50 text-xs transition-colors"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
