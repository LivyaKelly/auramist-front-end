import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@babel/runtime'],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@babel/runtime/helpers/esm/objectSpread2': require.resolve('@babel/runtime/helpers/objectSpread2'),
    };
    return config;
  },
  images: {
    domains: ['psridwmrvikfxczmttwp.supabase.co'],
  },
};

export default nextConfig;
