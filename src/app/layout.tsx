import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jones Properties | Cleveland, TN Rental Properties",
    template: "%s | Jones Properties",
  },
  description:
    "Quality rental properties in Cleveland, Tennessee. Browse 500+ apartments, houses, and commercial spaces for rent. Online tenant portal available.",
  keywords: [
    "Cleveland TN rentals",
    "Cleveland Tennessee apartments",
    "rental properties Cleveland TN",
    "houses for rent Cleveland TN",
    "Jones Properties",
    "commercial space Cleveland TN",
  ],
  openGraph: {
    title: "Jones Properties | Cleveland, TN Rental Properties",
    description:
      "Quality rental properties in Cleveland, Tennessee. Browse 500+ apartments, houses, and commercial spaces for rent.",
    url: "https://www.jonesproperties.biz",
    siteName: "Jones Properties",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Jones Properties",
  description:
    "Quality rental properties in Cleveland, Tennessee. 500+ residential and commercial spaces for rent.",
  url: "https://www.jonesproperties.biz",
  telephone: "(423) 472-4000",
  email: "info@jonesproperties.biz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "201 Keith Street SW, Suite 80",
    addressLocality: "Cleveland",
    addressRegion: "TN",
    postalCode: "37311",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: {
    "@type": "City",
    name: "Cleveland",
    containedInPlace: {
      "@type": "State",
      name: "Tennessee",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
