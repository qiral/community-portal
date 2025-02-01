import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  transpilePackages: ['@community/ui', '@community/utils'],
}

export default nextConfig
