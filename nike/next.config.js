/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PRODUCTS_API: process.env.PRODUCTS_API,
  },
};

module.exports = nextConfig;
