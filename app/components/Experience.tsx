'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '@/constants/experience';
import type { Locale } from '@/constants/i18n';
import { Section, SectionHeader } from '@/components/ui';
import { getTechnologyDescription } from '@/constants/technology';
import { getExperienceStats } from '@/constants/experience';
import { getCopy } from '@/constants/i18n';

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const items = EXPERIENCE_TIMELINE[locale];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const copy = locale === 'ua'
    ? {
      title: 'Історія',
      accent: 'досвіду',
      description: 'Комерційний досвід у розвитку та стабілізації full-stack продуктів — від legacy-систем й інтеграцій до захищених платформ бронювання.',
      showDetails: 'Детальніше',
      hideDetails: 'Згорнути',
    }
    : {
      title: 'Professional',
      accent: 'experience',
      description: 'Commercial experience building and stabilizing full-stack products—from legacy systems and integrations to secure booking platforms.',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
    };

  const stats = getExperienceStats();
  const statLabels = getCopy(locale).about.stats;

  const toggle = (index: number) => {
    setExpandedIndex(current => current === index ? null : index);
  };

  return (
    <Section id="experience">
      <div className="mx-auto max-w-[90rem] safe-area-x">
        <SectionHeader
          title={copy.title}
          accent={copy.accent}
          description={copy.description}
          className="!mb-6"
        />
        <p className="text-xs text-mute">
              <span className="font-mono text-ink">{stats.developmentYears}+</span> {statLabels.years.toLowerCase()}
              <span className="mx-2 text-line" aria-hidden="true">/</span>
              <span className="font-mono text-ink">{stats.commercialMonths}+</span> {statLabels.months.toLowerCase()}
        </p>

        <ol aria-label={`${copy.title} ${copy.accent}`} className="mt-12 border-t border-line">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const panelId = `experience-panel-${index}`;

            return (
              <li key={`${item.period}-${item.company}`} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-2 py-7 text-left md:grid-cols-[13rem_minmax(0,1fr)_auto] md:py-9"
                >
                  <span className="font-mono text-xs text-mute md:order-none">{item.period}</span>
                  <span className="col-start-1 row-start-2 min-w-0 md:col-start-2 md:row-start-1">
                    <span className="block text-2xl font-normal leading-tight tracking-[-0.02em] text-ink md:text-3xl">{item.company}</span>
                    <span className="mt-1.5 block text-sm text-mute">{item.role}</span>
                  </span>
                  <span
                    className={`col-start-2 row-span-2 row-start-1 flex h-11 w-11 items-center justify-center rounded-full border transition-[border-color,background-color,color] duration-300 md:col-start-3 md:row-span-1 ${isExpanded ? 'border-ink bg-ink text-canvas' : 'border-white/25 text-ink group-hover:border-white/70'}`}
                    aria-hidden="true"
                  >
                    <Plus className={`h-4 w-4 transition-transform duration-500 ease-out-expo ${isExpanded ? 'rotate-45' : ''}`} strokeWidth={1.5} />
                  </span>
                  <span className="sr-only">{isExpanded ? copy.hideDetails : copy.showDetails}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-9 md:ml-[13rem] md:pl-6 md:pr-20">
                        <ul className="max-w-3xl space-y-3 text-[15px] text-mute">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="relative pl-6 leading-relaxed">
                              <span className="absolute left-0 top-[0.72em] h-px w-3 bg-accent" aria-hidden="true" />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <ul className="mt-6 flex flex-wrap gap-2" aria-label={locale === 'ua' ? 'Технології' : 'Technologies'}>
                          {item.technologies.map((technology) => (
                            <li
                              key={technology}
                              className="rounded-full border border-line px-3 py-1 text-xs text-ink/85"
                              title={getTechnologyDescription(technology, locale)}
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
