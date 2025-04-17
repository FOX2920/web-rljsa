/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Optimize for performance
  experimental: {
    // Remove the optimizeCss option that requires critters
    optimizePackageImports: ['lucide-react'],
  },
  // Improve static generation
  staticPageGenerationTimeout: 120,
  // Don't block any IPs
  poweredByHeader: false,
};

export default nextConfig;
