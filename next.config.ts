import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://jacksonsfencing-configcommerce-d-cl.niteco.dev/api/:path*"
      }
    ]
  }
};

export default nextConfig;
