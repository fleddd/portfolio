import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/constants/i18n';
import { INQUIRY_OPTIONS } from '@/constants/inquiry';
import { Section, SectionHeader } from '@/components/ui';

type BusinessSolutionsProps = { locale: Locale };

const solutionCopy = {
  en: {
    title: 'What I Can Build for You',
    description: 'Choose a familiar website format. If none feels quite right, start with a custom website and I’ll help define the best solution.',
    linkLabel: 'Start a project',
  },
  ua: {
    title: 'Що можу створити для вас',
    description: 'Оберіть знайомий формат сайту. Якщо жоден не підходить — почніть із кастомного сайту, а я допоможу визначити оптимальне рішення.',
    linkLabel: 'Обговорити проєкт',
  },
} as const;

export function BusinessSolutions({ locale }: BusinessSolutionsProps) {
  const copy = solutionCopy[locale];
  const items = INQUIRY_OPTIONS[locale].projectTypes;
  const inquiryBase = locale === 'ua' ? '/ua/inquiry' : '/inquiry';

  return (
    <Section id="solutions" bg="gradient-down" className="!py-16 md:!py-20 lg:!py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader index="01" title={copy.title} description={copy.description} className="!mb-10 md:!mb-12 lg:!mb-14" />

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Link
              key={item.value}
              href={`${inquiryBase}?projectType=${item.value}`}
              aria-label={`${item.label}: ${copy.linkLabel}`}
              className="group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111116] p-5 outline-none transition-[background-color,border-color,box-shadow] duration-300 hover:border-cyan-300/30 hover:bg-[#13131a] hover:shadow-[0_20px_55px_-30px_rgba(34,211,238,0.45)] focus-visible:border-cyan-300/50 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] md:min-h-64 md:p-6"
            >
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_62%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
              <span className="pointer-events-none absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-300 to-blue-500 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 md:inset-x-6" aria-hidden="true" />
              <article className="relative flex h-full flex-col">
                <h3 className="max-w-[15rem] text-xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-50 group-focus-visible:text-cyan-50 md:text-2xl">{item.label}</h3>
                <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
                <div className="mt-auto flex items-end justify-between pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/8 text-cyan-300 opacity-100 transition-[background-color,border-color,opacity] duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/12 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-cyan-400">
                    {String(index + 1).padStart(2, '0')} <span className="text-gray-600 transition-colors group-hover:text-gray-400 group-focus-visible:text-gray-400">/ 08</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
