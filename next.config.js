/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'fakestoreapi.com',
      'picsum.photos',
      'https://myshop-polijlow9-dawid-jugowiec.vercel.app/',
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
