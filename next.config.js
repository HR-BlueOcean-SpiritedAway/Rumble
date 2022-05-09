/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

/* installed next-image, and this is for config for next-image */
const withImages = require('next-images')
module.exports = withImages()