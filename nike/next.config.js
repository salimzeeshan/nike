/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PRODUCTS_API: process.env.REACT_APP_PRODUCTS_API,
    MONGO_DB: process.env.REACT_APP_MONGO_DB,
  },
};

module.exports = nextConfig;
