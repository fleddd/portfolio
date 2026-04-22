import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
  title: "Умови користування",
  description: "Умови користування сайтом fedkiv.tech.",
  alternates: {
    canonical: `${SITE_URL}/uk/terms-of-service`,
  },
};

export default function TermsOfServiceUkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Умови користування</h1>
        <p className="text-gray-300">Оновлено: 22 квітня 2026</p>
        <p className="text-gray-300">
          Матеріали сайту мають ознайомчий характер і призначені для презентації послуг та первинного контакту.
        </p>
        <p className="text-gray-300">
          Обсяг робіт, терміни, вартість, етапи та підтримка погоджуються індивідуально в межах конкретного договору або письмової домовленості.
        </p>
        <p className="text-gray-300">
          Надсилаючи форму, ви підтверджуєте актуальність та коректність наданих даних.
        </p>
        <p className="text-gray-300">
          Для деталей співпраці звертайтесь: fedkiv20172@gmail.com.
        </p>
      </div>
    </main>
  );
}
