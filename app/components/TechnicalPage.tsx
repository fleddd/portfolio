import { Contact, Footer, Navigation, Projects, Skills } from "@/components/index";
import { Locale } from "@/constants/i18n";

type TechnicalPageProps = {
  locale: Locale;
};

export function TechnicalPage({ locale }: TechnicalPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="technical" />

      <main>
        <Skills locale={locale} />
        <Projects locale={locale} mode="technical" />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="technical" />
    </div>
  );
}
