import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Preserve the legacy digital business card at /card (served from public/card.html)
      { source: "/card", destination: "/card.html" },
    ];
  },
};

export default nextConfig;
