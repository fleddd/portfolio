import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/ServicesHubPage";
import { SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Послуги | Розробка Next.js та API-інтеграції",
  description: "Розробка Next.js, створення MVP, інтеграції та автоматизація для росту бізнесу. Ознайомтеся з кожною послугою і оберіть потрібну.",
  alternates: {
    canonical: `${SITE_URL}/ua/services`,
    languages: {
      "en-US": `${SITE_URL}/services`,
      "uk-UA": `${SITE_URL}/ua/services`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    locale: "uk_UA",
    url: `${SITE_URL}/ua/services`,
    title: "Послуги | Розробка Next.js та API-інтеграції",
    description: "Розробка Next.js, створення MVP, інтеграції та автоматизація для росту бізнесу.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги | Розробка Next.js та API-інтеграції",
    description: "Розробка Next.js, створення MVP, інтеграції та автоматизація для росту бізнесу.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function ServicesUaPage() {
  return <ServicesHubPage locale="ua" />;
}
