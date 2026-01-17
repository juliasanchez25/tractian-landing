import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/en/who-we-serve",
        permanent: true,
      },
      {
        source: "/es",
        destination: "/es/who-we-serve",
        permanent: true,
      },
      {
        source: "/",
        destination: "/pt/who-we-serve",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgix.tractian.com",
      },
      {
        protocol: "https",
        hostname: "tractian-webpage.s3.us-east-1.amazonaws.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
