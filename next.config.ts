import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
      },
      {
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
