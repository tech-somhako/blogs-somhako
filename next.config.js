// @ts-check

/*** @type {import('next').NextConfig} **/

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler:{
    removeConsole: true,
  }
}

module.exports = withContentlayer({ ...nextConfig })
