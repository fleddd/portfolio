import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getCopy } from "@/constants/i18n";
import { SITE_URL } from "@/constants/site";

const seo = getCopy("en").seo;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
