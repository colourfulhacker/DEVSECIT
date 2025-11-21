import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

if (env.REPLIT_DOMAINS) {
  (nextConfig as any).allowedDevOrigins = env.REPLIT_DOMAINS.split(",");
}

module.exports = nextConfig;
