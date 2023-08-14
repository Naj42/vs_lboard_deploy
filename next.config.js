/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cloudflare-ipfs.com'], // Add the domain where your images are hosted
  },
}

module.exports = nextConfig
