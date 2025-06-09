import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production"
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: isProduction ? "/samiksharana-portfolio" : "",
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
