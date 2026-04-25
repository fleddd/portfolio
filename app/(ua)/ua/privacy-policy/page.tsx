import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Політика конфіденційності",
  description: "Політика конфіденційності сайту fedkiv.tech: контактна форма, аналітика та технічна діагностика.",
  alternates: {
    canonical: `${SITE_URL}/ua/privacy-policy`,
    languages: {
      "en-US": `${SITE_URL}/privacy-policy`,
      "uk-UA": `${SITE_URL}/ua/privacy-policy`,
      "x-default": `${SITE_URL}/privacy-policy`,
    },
  },
};

export default function PrivacyPolicyUkPage() {
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
        name: "Політика конфіденційності",
        item: `${SITE_URL}/ua/privacy-policy`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Політика конфіденційності</h1>
        <p className="text-gray-300">Оновлено: 16 червня 2026</p>
        <p className="text-gray-300">
          Сайт збирає лише дані, які ви добровільно надсилаєте через контактну форму: ім&apos;я, email, тему та текст повідомлення.
        </p>
        <p className="text-gray-300">
          Ці дані використовуються виключно для відповіді на запит, обговорення співпраці та надання послуг.
        </p>
        <p className="text-gray-300">
          Дані з форми обробляються через інфраструктуру email-доставки та можуть зберігатися у поштовій скриньці для обробки проєктних запитів.
          Продаж або передача даних третім сторонам для реклами не здійснюється.
        </p>
        <p className="text-gray-300">
          Сайт використовує Vercel Analytics і Vercel Speed Insights для розуміння відвідуваності, продуктивності та технічної стабільності.
          Ці інструменти збирають агреговані діагностичні дані: перегляди сторінок, контекст пристрою/браузера та показники Web Vitals.
        </p>
        <p className="text-gray-300">
          Дані із запитів зберігаються лише стільки, скільки потрібно для відповіді, ведення співпраці або розумного обліку бізнес-комунікації.
          Ви можете запросити доступ, виправлення або видалення надісланих даних.
        </p>
        <p className="text-gray-300">
          Контакт: {CONTACT_EMAIL}.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </main>
  );
}
