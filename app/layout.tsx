import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "./components/Toaster";
import { JsonLd } from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oleh Fedkiv | Full-Stack Developer",
    template: "%s | Oleh Fedkiv",
  },
  // Додано український контекст та повний стек у description
  description:
    "Full-Stack Developer crafting exceptional digital experiences with precision and technical excellence. Фулстек веб-розробник (React, Next.js, NestJS, Node.js).",
  keywords: [
    "Full-Stack Developer",
    "Oleh Fedkiv",
    "Олег Федків",
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
    description: "Full-Stack Developer crafting exceptional digital experiences. Фулстек веб-розробник.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleh Fedkiv | Full-Stack Developer",
    description: "Full-Stack Developer crafting exceptional digital experiences. Фулстек веб-розробник.",
    images: [],
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
      </body>
    </html>
  );
}
