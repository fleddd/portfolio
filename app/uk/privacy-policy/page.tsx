import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description: "Політика конфіденційності сайту fedkiv.tech.",
  alternates: {
    canonical: `${SITE_URL}/uk/privacy-policy`,
  },
};

export default function PrivacyPolicyUkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Політика конфіденційності</h1>
        <p className="text-gray-300">Оновлено: 22 квітня 2026</p>
        <p className="text-gray-300">
          Сайт збирає лише дані, які ви добровільно надсилаєте через контактну форму: ім&apos;я, email, тему та текст повідомлення.
        </p>
        <p className="text-gray-300">
          Ці дані використовуються виключно для відповіді на запит, обговорення співпраці та надання послуг.
        </p>
        <p className="text-gray-300">
          Дані з форми передаються через захищену інфраструктуру email-провайдера. Продаж або передача даних третім сторонам для реклами не здійснюється.
        </p>
        <p className="text-gray-300">
          Для видалення або виправлення даних звертайтесь: fedkiv20172@gmail.com.
        </p>
      </div>
    </main>
  );
}
