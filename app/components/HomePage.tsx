import { About, BusinessSolutions, Contact, Experience, Footer, Hero, Navigation, Projects } from "@/components/index";
import { Locale } from "@/constants/i18n";
import { BackToTop } from "@/components/BackToTop";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main id="main-content" tabIndex={-1}>
        <Hero locale={locale} />
        <About locale={locale} />
        <BusinessSolutions locale={locale} />
        <Projects locale={locale} mode="business" />
        <Experience locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="business" />
      <BackToTop locale={locale} />
    </div>
  );
}
