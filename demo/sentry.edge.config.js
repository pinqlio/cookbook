import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1a6db8c143b187f72fee1ccfb12ce553@o4507209993682944.ingest.us.sentry.io/4507210025205760",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
