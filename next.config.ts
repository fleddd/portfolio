import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/uk",
        destination: "/ua",
        permanent: true,
      },
      {
        source: "/uk/:path*",
        destination: "/ua/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
