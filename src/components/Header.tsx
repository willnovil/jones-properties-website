"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/tenant-portal", label: "Tenant Portal" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="container-custom flex items-center justify-between h-36">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Jones Properties"
            width={500}
            height={150}
            className="h-32 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary font-body text-sm font-medium px-4 py-2 rounded transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/properties"
            className="ml-4 bg-primary hover:bg-primary-light text-white font-semibold text-sm py-2.5 px-6 rounded transition-colors duration-200"
          >
            View Rentals
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground/70 hover:text-primary hover:bg-primary/5 font-body text-base px-6 py-3 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-3">
            <Link
              href="/properties"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded transition-colors duration-200"
            >
              View Rentals
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
