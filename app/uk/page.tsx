import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getCopy } from "@/constants/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const seo = getCopy("uk").seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${SITE_URL}/uk`,
    languages: {
      "en-US": SITE_URL,
      "uk-UA": `${SITE_URL}/uk`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "uk_UA",
    url: `${SITE_URL}/uk`,
    title: seo.title,
    description: seo.description,
  },
};

export default function HomeUk() {
  return <HomePage locale="uk" />;
}
