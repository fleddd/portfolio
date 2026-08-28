'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '@/constants/experience';
import type { Locale } from '@/constants/i18n';
import { Section, SectionHeader } from '@/components/ui';
import { getTechnologyDescription } from '@/constants/technology';

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const items = EXPERIENCE_TIMELINE[locale];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const copy = locale === 'ua'
    ? {
      title: 'Історія досвіду',
      description: 'Комерційний досвід у розвитку та стабілізації full-stack продуктів — від legacy-систем й інтеграцій до захищених платформ бронювання.',
      showDetails: 'Детальніше',
      hideDetails: 'Згорнути',
    }
    : {
      title: 'Professional Experience',
      description: 'Commercial experience building and stabilizing full-stack products—from legacy systems and integrations to secure booking platforms.',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
    };

  const toggle = (index: number) => {
    setExpandedIndex(current => current === index ? null : index);
  };

  return (
    <Section id="experience" bg="gradient-down">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader index="02" title={copy.title} description={copy.description} />

        <div className="relative mx-auto max-w-4xl">
          <span className="absolute bottom-3 left-2 top-3 w-px bg-white/15" aria-hidden="true" />
          <ol aria-label={copy.title}>
            {items.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <li key={`${item.period}-${item.company}`} className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-x-6 pb-10 last:pb-0 md:gap-x-9">
                  <span className="z-10 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/50 bg-[#0a0a0f]" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  </span>

                  <article className="rounded-2xl border border-white/10 bg-[#111116] transition-colors hover:border-white/15">
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-7"
                    >
                      <div className="min-w-0 flex-1">
                        <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <div>
                            <h3 className="text-xl font-bold text-white md:text-2xl">{item.company}</h3>
                            <p className="mt-1 font-medium text-gray-300">{item.role}</p>
                          </div>
                          <p className="shrink-0 text-sm font-semibold text-cyan-400">{item.period}</p>
                        </header>
                      </div>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white"
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 md:px-7 md:pb-7">
                            <ul className="space-y-2.5 text-gray-300">
                              {item.highlights.map((highlight) => (
                                <li key={highlight} className="relative pl-5 leading-relaxed">
                                  <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-cyan-400/80" aria-hidden="true" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>

                            <ul className="mt-5 flex flex-wrap gap-2" aria-label={locale === 'ua' ? 'Технології' : 'Technologies'}>
                              {item.technologies.map((technology) => (
                                <li
                                  key={technology}
                                  className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-medium text-gray-200"
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
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
