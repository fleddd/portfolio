import { About, BusinessSolutions, Contact, Experience, Footer, Hero, Navigation, Projects } from "@/components/index";
import { Locale } from "@/constants/i18n";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main id="main-content" tabIndex={-1}>
        <Hero locale={locale} />
        <About locale={locale} />
        <BusinessSolutions locale={locale} />
        <Experience locale={locale} />
        <Projects locale={locale} mode="business" />
        <Contact locale={locale} sectionIndex="04" />
      </main>

      <Footer locale={locale} mode="business" />
    </div>
  );
}
