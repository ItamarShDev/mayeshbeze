import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "מה יש בזה?",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "מה יש בזה?",
  "og:description":
    "קובי מלמד ואלעד יצחקיאן יורדים לעומקם של סיפורים מופרכים שקרו באמת",
  "og:image:url": "https://mayeshbeze.tech/logo.webp",
  "og:image:alt": "logo",
  "twitter:card": "summary_large_image",
  "twitter:domain": "https://mayeshbeze.tech",
  "twitter:title": "מה יש בזה?",
  "twitter:description":
    "קובי מלמד ואלעד יצחקיאן יורדים לעומקם של סיפורים מופרכים שקרו באמת",
  "twitter:image:url": "https://mayeshbeze.tech/logo.webp",
  "twitter:image:alt": "logo",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
