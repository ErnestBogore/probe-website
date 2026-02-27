import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'recharts', 'date-fns'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleapis.com https://*.gstatic.com https://*.hubspot.com https://*.hsforms.com https://*.hs-scripts.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.usemessages.com https://*.hs-banner.com https://js.hsadspixel.net https://js.hs-analytics.net https://js.usemessages.com https://js.hscollectedforms.net https://*.cloudflareinsights.com https://static.cloudflareinsights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://*.datocms-assets.com https://*.googleusercontent.com https://*.google-analytics.com https://*.googletagmanager.com https://deifkwefumgah.cloudfront.net https://*.hubspot.com https://*.hsforms.com https://*.hs-analytics.net",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.hubspot.com https://*.hsforms.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.datocms-assets.com https://*.datocms.com https://*.cloudflareinsights.com",
              "frame-src 'self' https://*.hubspot.com https://*.hsforms.com https://*.youtube.com https://*.youtube-nocookie.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.hubspot.com https://*.hsforms.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
      // Content-Language headers for locale pages
      ...['de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'tr', 'zh'].map((locale) => ({
        source: `/free-tools/${locale}/:path*`,
        headers: [{ key: 'Content-Language', value: locale }],
      })),
      ...['de', 'es', 'fr', 'it', 'nl'].map((locale) => ({
        source: `/blog/${locale}/:path*`,
        headers: [{ key: 'Content-Language', value: locale }],
      })),
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
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

export default withBundleAnalyzer(nextConfig);
