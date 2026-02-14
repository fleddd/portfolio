import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "./components/Toaster";
import { JsonLd } from "./components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://olehfedkiv.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oleh Fedkiv | Full-Stack Developer",
    template: "%s | Oleh Fedkiv",
  },
  description:
    "Full-Stack Developer crafting exceptional digital experiences with precision and technical excellence. React, Next.js, TypeScript, Node.js.",
  keywords: [
    "Full-Stack Developer",
    "Oleh Fedkiv",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
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
    url: SITE_URL,
    siteName: "Oleh Fedkiv Portfolio",
    title: "Oleh Fedkiv | Full-Stack Developer",
    description: "Full-Stack Developer crafting exceptional digital experiences with precision and technical excellence.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleh Fedkiv | Full-Stack Developer",
    description: "Full-Stack Developer crafting exceptional digital experiences.",
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
      </body>
    </html>
  );
}
