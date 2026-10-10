import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/constants/site";
import { Footer, Navigation } from "@/components/index";

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
    <div className="min-h-screen bg-canvas text-white">
      <Navigation locale="en" mode="business" />
      <main id="main-content" tabIndex={-1}>
      <div className="max-w-4xl mx-auto px-6 pb-20 pt-32 space-y-6">
        <h1 className="text-4xl font-light uppercase tracking-[-0.03em]">Terms of Service</h1>
        <p className="text-mute">Last updated: June 16, 2026</p>
        <p className="text-mute">
          Information on this website is provided for general service presentation and project inquiry purposes.
        </p>
        <p className="text-mute">
          Project scope, delivery timeline, pricing, and support terms are agreed individually in writing for each client engagement.
        </p>
        <p className="text-mute">
          Website content, examples, timelines, and service descriptions are informational and do not create a binding offer until both parties confirm the scope in writing.
        </p>
        <p className="text-mute">
          Clients are responsible for providing accurate project information, access, content, and approvals needed for delivery.
          Third-party platforms, hosting, domains, APIs, and payment providers may have separate terms.
        </p>
        <p className="text-mute">
          By submitting a contact form, you confirm that the information you provide is accurate and relevant to your request.
        </p>
        <p className="text-mute">
          For collaboration details, contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline decoration-accent underline-offset-4 transition-colors hover:decoration-ink">{CONTACT_EMAIL}</a>.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      </main>
      <Footer locale="en" mode="business" />
    </div>
  );
}
