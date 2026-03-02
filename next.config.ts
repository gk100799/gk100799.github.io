import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/devtoolbox",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
