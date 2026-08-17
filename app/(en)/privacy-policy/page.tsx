import type { Metadata } from "next";
import { SITE_URL, CONTACT_EMAIL } from "@/constants/site";
import { Footer, Navigation } from "@/components/index";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Policy",
  description: "Privacy Policy for fedkiv.tech, project inquiry data processing, analytics, and website diagnostics.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
    languages: {
      "en-US": `${SITE_URL}/privacy-policy`,
      "uk-UA": `${SITE_URL}/ua/privacy-policy`,
      "x-default": `${SITE_URL}/privacy-policy`,
    },
  },
};

export default function PrivacyPolicyPage() {
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
        name: "Privacy Policy",
        item: `${SITE_URL}/privacy-policy`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navigation locale="en" mode="business" />
      <main id="main-content" tabIndex={-1}>
      <div className="max-w-4xl mx-auto px-6 pb-20 pt-32 space-y-6">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-300">Last updated: August 17, 2026</p>
        <p className="text-gray-300">
          This website collects only the data you provide through the project inquiry flow: project type, selected features, project context, current stage, preferred timeline, budget range, name, email, and an optional company or website.
        </p>
        <p className="text-gray-300">
          The data is used solely to respond to your inquiry, discuss potential collaboration, and provide requested services.
        </p>
        <p className="text-gray-300">
          Project inquiries are processed through email delivery infrastructure and may be stored in the mailbox used to manage project inquiries.
          Data is not sold or shared for third-party advertising.
        </p>
        <p className="text-gray-300">
          Draft answers and a successful-submission marker are stored locally in your browser so progress survives accidental reloads and the same inquiry is not submitted twice. You can clear this information through your browser storage settings.
        </p>
        <p className="text-gray-300">
          The site uses Vercel Analytics and Vercel Speed Insights to understand page usage, performance, and technical reliability.
          These tools collect aggregated diagnostic information such as page views, device/browser context, and Web Vitals measurements.
        </p>
        <p className="text-gray-300">
          Inquiry data is retained only as long as needed to respond, manage collaboration, or meet reasonable business record requirements.
          You can request access, correction, or deletion of your submitted data at any time.
        </p>
        <p className="text-gray-300">
          Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">{CONTACT_EMAIL}</a>.
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
