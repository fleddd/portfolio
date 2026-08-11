import { EXPERIENCE_TIMELINE } from '@/constants/experience';
import type { Locale } from '@/constants/i18n';
import { Section, SectionHeader } from '@/components/ui';

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const items = EXPERIENCE_TIMELINE[locale];
  const copy = locale === 'ua'
    ? {
      title: 'Історія досвіду',
      description: 'Комерційний досвід у розвитку та стабілізації full-stack продуктів — від legacy-систем й інтеграцій до захищених платформ бронювання.',
    }
    : {
      title: 'Professional Experience',
      description: 'Commercial experience building and stabilizing full-stack products—from legacy systems and integrations to secure booking platforms.',
    };

  return (
    <Section id="experience" bg="gradient-down">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader index="02" title={copy.title} description={copy.description} />

        <div className="relative mx-auto max-w-4xl">
          <span className="absolute bottom-3 left-[9px] top-3 w-px bg-white/15" aria-hidden="true" />
          <ol aria-label={copy.title}>
            {items.map((item) => (
              <li key={`${item.period}-${item.company}`} className="relative pb-10 pl-12 last:pb-0 md:pl-16">
                <span className="absolute left-0 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/50 bg-[#0a0a0f]" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </span>

                <article className="rounded-2xl border border-white/10 bg-[#111116] p-5 md:p-7">
                  <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">{item.company}</h3>
                      <p className="mt-1 font-medium text-gray-300">{item.role}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-cyan-400">{item.period}</p>
                  </header>

                  <ul className="mt-5 space-y-2.5 text-gray-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="relative pl-5 leading-relaxed">
                        <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-cyan-400/80" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={locale === 'ua' ? 'Технології' : 'Technologies'}>
                    {item.technologies.map((technology) => (
                      <li key={technology} className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-medium text-gray-300">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
