import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @import "@/styles/variables.scss";
      @import "@/styles/mixins.scss";
    `,
  },
};

export default nextConfig;
