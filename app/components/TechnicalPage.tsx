import { Contact, Footer, Navigation, Projects, Skills } from "@/components/index";
import { Locale } from "@/constants/i18n";
import { SITE_URL } from "@/constants/site";

type TechnicalPageProps = {
  locale: Locale;
};

export function TechnicalPage({ locale }: TechnicalPageProps) {
  const pagePath = locale === "ua" ? "/ua/technical" : "/technical";
  const homePath = locale === "ua" ? "/ua" : "";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ua" ? "Головна" : "Home",
        item: `${SITE_URL}${homePath}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "ua" ? "Технічні навички" : "Technical Profile",
        item: `${SITE_URL}${pagePath}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="technical" />

      <main>
        <Skills locale={locale} />
        <Projects locale={locale} mode="technical" />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="technical" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </div>
  );
}
