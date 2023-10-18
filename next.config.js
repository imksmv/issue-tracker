/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "referrer-policy", value: "no-referrer" }],
      },
    ]
  },
}

module.exports = nextConfig

const { withSentryConfig } = require("@sentry/nextjs")

module.exports = withSentryConfig(
  module.exports,
  {
    silent: true,
    org: "im-t5",
    project: "issue-tracker",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
  }
)
