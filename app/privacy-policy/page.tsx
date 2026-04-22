import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for fedkiv.tech and contact form data processing.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-300">Last updated: April 22, 2026</p>
        <p className="text-gray-300">
          This website collects only the data you provide via the contact form: name, email, subject, and message.
        </p>
        <p className="text-gray-300">
          The data is used solely to respond to your inquiry, discuss potential collaboration, and provide requested services.
        </p>
        <p className="text-gray-300">
          Contact form submissions are sent securely via email provider infrastructure. Data is not sold or shared for third-party advertising.
        </p>
        <p className="text-gray-300">
          You can request data deletion or correction anytime by contacting: fedkiv20172@gmail.com.
        </p>
      </div>
    </main>
  );
}
