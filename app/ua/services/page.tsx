import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/ServicesHubPage";
import { getCopy } from "@/constants/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
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
    description: "Розробка Next.js, création MVP, інтеграції та автоматизація для росту бізнесу.",
  },
};

export default function ServicesUaPage() {
  return <ServicesHubPage locale="ua" />;
}
