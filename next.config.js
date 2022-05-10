
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

// localhost/:1          GET https://lh3.googleusercontent.com/_next/static/chunks/pages/_app.js?ts=1652134967805 net::ERR_ABORTED 400