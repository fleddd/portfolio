import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/ServicesHubPage";
import { getCopy } from "@/constants/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const seo = getCopy("en");

export const metadata: Metadata = {
  title: "Services | Web Development & API Integration",
  description: "Next.js development, MVP creation, and API integrations for business growth. Learn about each service and choose what fits your needs.",
  alternates: {
    canonical: `${SITE_URL}/services`,
    languages: {
      "en-US": `${SITE_URL}/services`,
      "uk-UA": `${SITE_URL}/ua/services`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "en_US",
    url: `${SITE_URL}/services`,
    title: "Services | Web Development & API Integration",
    description: "Next.js development, MVP creation, and API integrations for business growth.",
  },
};

export default function ServicesPage() {
  return <ServicesHubPage locale="en" />;
}
