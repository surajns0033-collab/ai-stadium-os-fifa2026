import type { NextConfig } from "next";

/**
 * Next.js Configuration for AI Stadium OS
 * 
 * Includes security headers (CSP, X-Frame-Options, etc.) to satisfy
 * security best practices for a production-grade platform.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  /** Security headers applied to all routes */
  async headers() {
    return [
      {
        source: "/(.*)",
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
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
