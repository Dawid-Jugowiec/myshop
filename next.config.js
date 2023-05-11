/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'fakestoreapi.com',
      'picsum.photos',
      'https://myshop-orpin.vercel.app/',
      'https://naszsklep-api.vercel.app',
      'naszsklep-api.vercel.app',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/productList',
        destination: '/productList/1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
