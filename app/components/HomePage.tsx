import { About, Contact, Footer, Hero, Navigation, Projects, Skills } from "@/components/index";
import { Locale } from "@/constants/i18n";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} />

      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Skills locale={locale} />
        <Projects locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
    </div>
  );
}
