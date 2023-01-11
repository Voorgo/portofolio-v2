/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
    };
    return paths; //<--this was missing previously
  },
};

module.exports = nextConfig;
