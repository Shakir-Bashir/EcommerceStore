import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["lodash", "date-fns"], // example
  },
};

export default nextConfig;
