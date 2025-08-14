import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's2.googleusercontent.com',
        port: '',
        pathname: '/s2/favicons/**',
      },
      {
        protocol: 'https',
        hostname: 'deifkwefumgah.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
