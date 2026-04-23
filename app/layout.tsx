import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "./components/Toaster";
import { JsonLd } from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oleh Fedkiv | Full-Stack Developer",
    template: "%s | Oleh Fedkiv",
  },
  description:
    "Full-Stack Developer crafting high-performance websites, MVPs, and business modules with technical SEO and strong Core Web Vitals.",
  keywords: [
    "Full-Stack Developer",
    "Oleh Fedkiv",
    "Олег Федьків",
    "Фулстек розробник",
    "Веб-розробка",
    "Створення сайтів",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Oleh Fedkiv", url: SITE_URL }],
  creator: "Oleh Fedkiv",
  publisher: "Oleh Fedkiv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["uk_UA"],
    url: SITE_URL,
    siteName: "Oleh Fedkiv Portfolio",
    title: "Oleh Fedkiv | Full-Stack Developer",
    description:
      "Full-Stack Developer crafting high-performance websites, MVPs, and business modules with technical SEO.",
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
    title: "Oleh Fedkiv | Full-Stack Developer",
    description:
      "Full-Stack Developer crafting high-performance websites, MVPs, and business modules with technical SEO.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "uk-UA": `${SITE_URL}/ua`,
      "x-default": SITE_URL,
    },
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <JsonLd />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}