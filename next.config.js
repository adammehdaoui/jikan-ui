/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
}

module.exports = nextConfig
