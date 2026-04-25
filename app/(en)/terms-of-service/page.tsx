import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Terms of Service",
  description: "Terms of Service for services presented on fedkiv.tech.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
    languages: {
      "en-US": `${SITE_URL}/terms-of-service`,
      "uk-UA": `${SITE_URL}/ua/terms-of-service`,
      "x-default": `${SITE_URL}/terms-of-service`,
    },
  },
};

export default function TermsOfServicePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Service",
        item: `${SITE_URL}/terms-of-service`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-gray-300">Last updated: June 16, 2026</p>
        <p className="text-gray-300">
          Information on this website is provided for general service presentation and project inquiry purposes.
        </p>
        <p className="text-gray-300">
          Project scope, delivery timeline, pricing, and support terms are agreed individually in writing for each client engagement.
        </p>
        <p className="text-gray-300">
          Website content, examples, timelines, and service descriptions are informational and do not create a binding offer until both parties confirm the scope in writing.
        </p>
        <p className="text-gray-300">
          Clients are responsible for providing accurate project information, access, content, and approvals needed for delivery.
          Third-party platforms, hosting, domains, APIs, and payment providers may have separate terms.
        </p>
        <p className="text-gray-300">
          By submitting a contact form, you confirm that the information you provide is accurate and relevant to your request.
        </p>
        <p className="text-gray-300">
          For collaboration details, contact: {CONTACT_EMAIL}.
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
