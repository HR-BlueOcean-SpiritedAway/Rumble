/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: ["https://lh3.googleusercontent.com"],
  },

})