const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oleh Fedkiv",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer crafting high-performance websites and SEO-ready products.",
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
  name: "Oleh Fedkiv Portfolio",
  url: SITE_URL,
  description: "Portfolio of Oleh Fedkiv - Full-Stack Developer | React, Next.js, Node.js, NestJS",
  inLanguage: ["en", "uk"],
  author: {
    "@type": "Person",
    name: "Oleh Fedkiv",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Oleh Fedkiv - Full-Stack Development Services",
  url: SITE_URL,
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
    name: "Oleh Fedkiv",
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
