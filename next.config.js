/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://n8n.cloud.heimv.ch" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
