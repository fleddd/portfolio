import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getCopy } from "@/constants/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const seo = getCopy("ua").seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${SITE_URL}/ua`,
    languages: {
      "en-US": SITE_URL,
      "uk-UA": `${SITE_URL}/ua`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "uk_UA",
    url: `${SITE_URL}/ua`,
    title: seo.title,
    description: seo.description,
  },
};

export default function HomeUk() {
  return <HomePage locale="ua" />;
}
