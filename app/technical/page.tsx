import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";
import { getCopy } from "@/constants/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const seo = getCopy("en").seoTechnical;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${SITE_URL}/technical`,
    languages: {
      "en-US": `${SITE_URL}/technical`,
      "uk-UA": `${SITE_URL}/ua/technical`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "en_US",
    url: `${SITE_URL}/technical`,
    title: seo.title,
    description: seo.description,
  },
};

export default function TechnicalEnPage() {
  return <TechnicalPage locale="en" />;
}
