import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getCopy } from "@/constants/i18n";
import { SITE_URL } from "@/constants/site";

const seo = getCopy("ua").seo;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function HomeUk() {
  return <HomePage locale="ua" />;
}
