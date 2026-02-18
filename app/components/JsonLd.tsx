const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oleh Fedkiv",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer crafting exceptional digital experiences with precision and technical excellence.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/olehfedkiv",
    "https://linkedin.com/in/olehfedkiv",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oleh Fedkiv Portfolio",
  url: SITE_URL,
  description: "Portfolio of Oleh Fedkiv - Full-Stack Developer",
  author: {
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
    </>
  );
}
