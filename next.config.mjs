/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@babel/runtime'], // transpila @babel/runtime (onde objectSpread2 vive) de ESM → CJS
};

export default nextConfig;
