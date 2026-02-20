/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.rentcafe.com",
      },
      {
        protocol: "https",
        hostname: "cdn.rentcafe.com",
      },
      {
        protocol: "https",
        hostname: "media.rentcafe.com",
      },
      {
        protocol: "https",
        hostname: "jonesproperties.biz",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
