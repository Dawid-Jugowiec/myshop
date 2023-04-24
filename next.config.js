/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'fakestoreapi.com',
      'picsum.photos',
      'myshop-hi4i8cgx7-dawid-jugowiec.vercel.app',
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
