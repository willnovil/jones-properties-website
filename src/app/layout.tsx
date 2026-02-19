import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jones Properties | Cleveland, TN Property Management",
    template: "%s | Jones Properties",
  },
  description:
    "Professional property management in Cleveland, Tennessee. Browse 90+ apartments, houses, and commercial properties for rent. Online tenant portal available.",
  keywords: [
    "Cleveland TN rentals",
    "Cleveland Tennessee apartments",
    "property management Cleveland TN",
    "houses for rent Cleveland TN",
    "Jones Properties",
    "commercial space Cleveland TN",
  ],
  openGraph: {
    title: "Jones Properties | Cleveland, TN Property Management",
    description:
      "Professional property management in Cleveland, Tennessee. Browse 90+ rental properties.",
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
    "Professional property management in Cleveland, Tennessee. 90+ residential and commercial rental properties.",
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
