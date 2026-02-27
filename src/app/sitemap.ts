import { getPropertyListings } from "../lib/rentcafe";

export default async function sitemap() {
  const listings = await getPropertyListings();

  const propertyUrls = listings.map((listing) => ({
    url: `https://www.jonesproperties.biz/properties/${listing.property.propertyId}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.jonesproperties.biz",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: "https://www.jonesproperties.biz/properties",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.jonesproperties.biz/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.jonesproperties.biz/services",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.jonesproperties.biz/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.jonesproperties.biz/tenant-portal",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://www.jonesproperties.biz/we-buy-houses",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://www.jonesproperties.biz/capital-investment",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: "https://www.jonesproperties.biz/development",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    ...propertyUrls,
  ];
}
