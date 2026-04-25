import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";
import { getCopy } from "@/constants/i18n";
import { SITE_URL } from "@/constants/site";

const seo = getCopy("ua").seoTechnical;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${SITE_URL}/ua/technical`,
    languages: {
      "en-US": `${SITE_URL}/technical`,
      "uk-UA": `${SITE_URL}/ua/technical`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "uk_UA",
    url: `${SITE_URL}/ua/technical`,
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

export default function TechnicalUaPage() {
  return <TechnicalPage locale="ua" />;
}
