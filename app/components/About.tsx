import { Section, SectionHeader } from '@/components/ui';
import { Locale, getCopy } from '@/constants/i18n';

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const t = getCopy(locale).about;

  return (
    <Section id="about">
      <div className="mx-auto max-w-[90rem] safe-area-x">
        <SectionHeader title={t.titleMain} accent={t.titleAccent} description={t.p1} />

        <h3 className="text-lg font-normal tracking-[-0.01em] text-ink">{t.p2}</h3>

        {/* The steps are a real sequence, so the numbers carry meaning here. */}
        <ol className="mt-6 grid gap-1.5 md:grid-cols-3" aria-label={locale === 'ua' ? 'Етапи роботи' : 'Delivery roadmap'}>
          {t.features.map((feature, index) => (
            <li key={feature.title} className="flex flex-col rounded-[18px] bg-surface p-6">
              <span className="font-mono text-xs text-accent" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-6 text-xl font-normal leading-tight tracking-[-0.02em] text-ink">{feature.title}</h4>
              <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-mute">{feature.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-mute/80">{t.keywords}</p>
        <ul className="sr-only">
          {t.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
