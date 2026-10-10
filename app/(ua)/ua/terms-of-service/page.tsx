import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/constants/site";
import { Footer, Navigation } from "@/components/index";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Умови користування",
  description: "Умови користування сайтом fedkiv.tech.",
  alternates: {
    canonical: `${SITE_URL}/ua/terms-of-service`,
    languages: {
      "en-US": `${SITE_URL}/terms-of-service`,
      "uk-UA": `${SITE_URL}/ua/terms-of-service`,
      "x-default": `${SITE_URL}/terms-of-service`,
    },
  },
};

export default function TermsOfServiceUkPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Головна",
        item: `${SITE_URL}/ua`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Умови користування",
        item: `${SITE_URL}/ua/terms-of-service`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-canvas text-white">
      <Navigation locale="ua" mode="business" />
      <main id="main-content" tabIndex={-1}>
      <div className="max-w-4xl mx-auto px-6 pb-20 pt-32 space-y-6">
        <h1 className="text-4xl font-light uppercase tracking-[-0.03em]">Умови користування</h1>
        <p className="text-mute">Оновлено: 16 червня 2026</p>
        <p className="text-mute">
          Матеріали сайту мають ознайомчий характер і призначені для презентації послуг та первинного контакту.
        </p>
        <p className="text-mute">
          Обсяг робіт, терміни, вартість, етапи та підтримка погоджуються індивідуально в межах конкретного договору або письмової домовленості.
        </p>
        <p className="text-mute">
          Контент сайту, приклади, строки та описи послуг є інформаційними і не створюють обов&apos;язкової пропозиції до моменту письмового погодження скоупу обома сторонами.
        </p>
        <p className="text-mute">
          Клієнт відповідає за надання коректної інформації, доступів, матеріалів і погоджень, необхідних для виконання робіт.
          Сторонні платформи, хостинг, домени, API та платіжні сервіси можуть мати власні умови.
        </p>
        <p className="text-mute">
          Надсилаючи форму, ви підтверджуєте актуальність та коректність наданих даних.
        </p>
        <p className="text-mute">
          Для деталей співпраці звертайтесь: <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline decoration-accent underline-offset-4 transition-colors hover:decoration-ink">{CONTACT_EMAIL}</a>.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      </main>
      <Footer locale="ua" mode="business" />
    </div>
  );
}
