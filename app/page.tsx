import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getCopy } from "./constants/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const seo = getCopy("en").seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "uk-UA": `${SITE_URL}/ua`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "en_US",
    url: SITE_URL,
    title: seo.title,
    description: seo.description,
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
