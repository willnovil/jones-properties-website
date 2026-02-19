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
    ],
  },
};

export default nextConfig;
