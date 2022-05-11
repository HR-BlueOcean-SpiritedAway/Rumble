/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: ["https://lh3.googleusercontent.com", "s3-media0.fl.yelpcdn.com"],
    disableStaticImages: true,
  },
})