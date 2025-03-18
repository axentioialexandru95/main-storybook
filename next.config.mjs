/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.imagepig.com', 'api.imgpig.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.imagepig.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.imgpig.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
