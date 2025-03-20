/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mxayitmkbfthrunrhgfk.supabase.co',
        pathname: '/storage/v1/object/public/images/**',
      },
    ],
  },
  transpilePackages: ['@community/ui', '@community/utils'],
}

module.exports = nextConfig
