import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import Link from "next/link";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 | Oleh Fedkiv",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Oleh Fedkiv Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Oleh Fedkiv - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-canvas text-white antialiased">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-light uppercase tracking-[-0.03em]">
              <span className="mb-3 block font-display text-[clamp(4.5rem,14vw,6rem)] leading-none tracking-[0.01em]">404</span>
              Page not found
            </h1>
            <p className="text-mute">
              The page you are looking for does not exist or has moved.
            </p>
            <Link
              href="/"
              className="silver inline-flex min-h-12 items-center rounded-full px-7 text-sm font-medium text-canvas transition-[filter] duration-300 hover:brightness-110"
            >
              Go Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
