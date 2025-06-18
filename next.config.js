/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true
  }
}

module.exports = nextConfig 