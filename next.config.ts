import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  output: "export",
};

export default nextConfig;
