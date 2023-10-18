import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://9f7f486d11539f5aba364dc798556f4e@o4506073384747008.ingest.sentry.io/4506073399951360",
  tracesSampleRate: 1,
  debug: false,
})
