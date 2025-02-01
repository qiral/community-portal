/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  transpilePackages: ['@community/ui', '@community/utils'],
}

module.exports = nextConfig
