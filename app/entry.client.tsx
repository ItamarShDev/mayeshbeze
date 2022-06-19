import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

declare global {
  interface Window {
    GLOBALS: Record<string, string | undefined>;
  }
}

hydrate(<RemixBrowser />, document);
