import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "imgix.tractian.com" },
      { hostname: "tractian-webpage.s3.us-east-1.amazonaws.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
