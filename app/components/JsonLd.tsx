import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_URL } from "@/constants/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Oleh Fedkiv",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  jobTitle: "Full-Stack Developer",
  description: SITE_DESCRIPTION,
  inLanguage: ["en", "uk"],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Technical SEO",
    "API Integrations",
  ],
  sameAs: [
    "https://github.com/fleddd",
    "https://www.linkedin.com/in/olehfedkiv/",
    "https://telegram.me/olehfedkiv",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Oleh Fedkiv Portfolio",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: ["en", "uk"],
  author: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  name: "Oleh Fedkiv - Full-Stack Development Services",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  areaServed: ["Ukraine", "Europe", "Worldwide"],
  availableLanguage: ["English", "Ukrainian"],
  serviceType: [
    "Next.js Website Development",
    "MVP Development",
    "Technical SEO",
    "API Integrations",
    "Custom Business Modules",
  ],
  provider: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
