import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The local raster assets are already resized and compressed. Serving them
  // directly avoids redundant runtime work and keeps deployments predictable.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
