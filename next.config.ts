import type { NextConfig } from "next";
import path from "path";

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || process.env.EXPORT === "true";
const repo = "Studio-template";

const nextConfig: NextConfig = {
  /* config options here */
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  allowedDevOrigins: ["192.168.1.*", "localhost:*", "127.0.0.1:*"],
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
