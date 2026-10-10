import Link from 'next/link';
import { Briefcase, Building2, CalendarCheck, Megaphone, MousePointerClick, Newspaper, ShoppingBag, Sparkles, type LucideIcon } from 'lucide-react';
import type { Locale } from '@/constants/i18n';
import { INQUIRY_OPTIONS, type ProjectType } from '@/constants/inquiry';
import { ArrowNE, IconBadge, Section, SectionHeader } from '@/components/ui';

const FORMAT_ICONS: Record<ProjectType, LucideIcon> = {
  'online-store': ShoppingBag,
  'business-card': Briefcase,
  corporate: Building2,
  landing: MousePointerClick,
  promo: Megaphone,
  portal: Newspaper,
  custom: Sparkles,
  'online-service': CalendarCheck,
};

type BusinessSolutionsProps = { locale: Locale };

const solutionCopy = {
  en: {
    title: 'What I can build',
    accent: 'for you',
    description: 'Choose a familiar website format. If none feels quite right, start with a custom website and I’ll help define the best solution.',
    linkLabel: 'Start a project',
  },
  ua: {
    title: 'Що можу створити',
    accent: 'для вас',
    description: 'Оберіть знайомий формат сайту. Якщо жоден не підходить — почніть із кастомного сайту, а я допоможу визначити оптимальне рішення.',
    linkLabel: 'Обговорити проєкт',
  },
} as const;

export function BusinessSolutions({ locale }: BusinessSolutionsProps) {
  const copy = solutionCopy[locale];
  const items = INQUIRY_OPTIONS[locale].projectTypes;
  const inquiryBase = locale === 'ua' ? '/ua/inquiry' : '/inquiry';

  return (
    <Section id="solutions">
      <div className="mx-auto max-w-[90rem] safe-area-x">
        <SectionHeader title={copy.title} accent={copy.accent} description={copy.description} />

        <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.value}
              href={`${inquiryBase}?projectType=${item.value}`}
              aria-label={`${item.label}: ${copy.linkLabel}`}
              className="group relative flex min-h-56 flex-col border-b border-r border-line p-6 outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent md:min-h-64"
            >
              <div className="flex items-start justify-between">
                <IconBadge icon={FORMAT_ICONS[item.value]} />
                <ArrowNE className="h-5 w-5 text-ink lg:translate-y-1 lg:opacity-0 lg:transition-[opacity,translate] lg:duration-500 lg:ease-out-expo lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100 motion-reduce:lg:translate-y-0" />
              </div>
              <h3 className="mt-auto pt-10 text-xl font-normal leading-tight tracking-[-0.02em] text-ink">{item.label}</h3>
              <p className="mt-3 max-w-[17rem] text-[13px] leading-relaxed text-mute">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
