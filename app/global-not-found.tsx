import type { Metadata } from "next";
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
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-cyan-300">404</p>
            <h1 className="text-4xl font-bold">Page not found</h1>
            <p className="text-gray-400">
              The page you are looking for does not exist or has moved.
            </p>
            <Link
              href="/"
              className="inline-flex px-6 py-3 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
