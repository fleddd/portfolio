import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for services presented on fedkiv.tech.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-gray-300">Last updated: April 22, 2026</p>
        <p className="text-gray-300">
          Information on this website is provided for general service presentation and project inquiry purposes.
        </p>
        <p className="text-gray-300">
          Project scope, delivery timeline, pricing, and support terms are agreed individually in writing for each client engagement.
        </p>
        <p className="text-gray-300">
          By submitting a contact form, you confirm that the information you provide is accurate and relevant to your request.
        </p>
        <p className="text-gray-300">
          For collaboration details, contact: fedkiv20172@gmail.com.
        </p>
      </div>
    </main>
  );
}
