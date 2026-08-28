'use client';

import { Section, AnimatedCounter } from '@/components/ui';
import { Locale, getCopy } from '@/constants/i18n';
import { getExperienceStats } from '@/constants/experience';

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const t = getCopy(locale).about;
  const experience = getExperienceStats();

  const localizedStats = [
    { value: `${experience.developmentYears}+`, label: t.stats.years },
    { value: `${experience.commercialMonths}+`, label: t.stats.months },
    { value: t.values.projects, label: t.stats.projects },
    { value: t.values.clients, label: t.stats.clients }
  ];

  return (
    <Section id="about">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {t.titleMain}{' '}
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                {t.titleAccent}
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed md:text-xl">
              {t.p1}
            </p>

            <p className="text-base font-medium text-gray-200 leading-relaxed">
              {t.p2}
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              {t.keywords}
            </p>

            <ul className="sr-only">
              {t.chips.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <ol
            className="space-y-5"
            aria-label={locale === 'ua' ? 'Етапи роботи' : 'Delivery roadmap'}
          >
            {t.features.map((feature, index) => (
              <li
                key={feature.title}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-4 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 font-mono text-sm font-bold text-cyan-300 md:h-12 md:w-12 md:text-base">
                  {index + 1}
                </div>
                <article className="rounded-2xl border border-white/10 bg-[#111116] p-5 transition-colors group-hover:border-cyan-400/30 md:p-6">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-300">{feature.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24 pt-10 md:pt-12 border-t border-white/10">
          {localizedStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                <AnimatedCounter text={stat.value} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
