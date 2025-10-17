import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @import "@/styles/variables.scss";
      @import "@/styles/mixins.scss";
    `,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
};

export default nextConfig;
