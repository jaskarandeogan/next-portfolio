/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  analytics: {
    googleAnalyticsId: 'G-H2JY9SK2FK',
  },
}

module.exports = nextConfig
