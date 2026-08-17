import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/constants/site";
import { Footer, Navigation } from "@/components/index";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Політика конфіденційності",
  description: "Політика конфіденційності сайту fedkiv.tech: дані запиту на проєкт, аналітика та технічна діагностика.",
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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navigation locale="ua" mode="business" />
      <main id="main-content" tabIndex={-1}>
      <div className="max-w-4xl mx-auto px-6 pb-20 pt-32 space-y-6">
        <h1 className="text-4xl font-bold">Політика конфіденційності</h1>
        <p className="text-gray-300">Оновлено: 17 серпня 2026</p>
        <p className="text-gray-300">
          Сайт збирає лише дані, які ви добровільно надсилаєте через форму запиту на проєкт: тип продукту, вибрані функції, опис, поточний етап, бажані терміни, бюджетний діапазон, ім&apos;я, email і необов&apos;язкову назву компанії або сайт.
        </p>
        <p className="text-gray-300">
          Ці дані використовуються виключно для відповіді на запит, обговорення співпраці та надання послуг.
        </p>
        <p className="text-gray-300">
          Дані запиту обробляються через інфраструктуру email-доставки та можуть зберігатися у поштовій скриньці для обробки проєктних запитів.
          Продаж або передача даних третім сторонам для реклами не здійснюється.
        </p>
        <p className="text-gray-300">
          Чернетка відповідей і позначка про успішне надсилання зберігаються локально у вашому браузері, щоб прогрес не втрачався після випадкового перезавантаження, а одна заявка не надсилалася двічі. Ці дані можна очистити через налаштування сховища браузера.
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
          Контакт: <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">{CONTACT_EMAIL}</a>.
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
