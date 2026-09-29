import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH || (process.env.GITHUB_PAGES === "true" ? "/milo-hart-profile" : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
