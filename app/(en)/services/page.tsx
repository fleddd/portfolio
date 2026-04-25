import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/ServicesHubPage";
import { SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Development & API Integration",
    description: "Next.js development, MVP creation, and API integrations for business growth.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function ServicesPage() {
  return <ServicesHubPage locale="en" />;
}
