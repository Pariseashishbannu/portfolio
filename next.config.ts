import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true, // Enable Gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
  /* config options here */
};


export default nextConfig;