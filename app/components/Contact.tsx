import { ArrowRight, Clock3, FileText, Save } from 'lucide-react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui';
import type { Locale } from '@/constants/i18n';

type ContactProps = {
  locale: Locale;
  sectionIndex?: string;
};

const content = {
  en: {
    titleLeft: 'Ready to Plan',
    titleRight: 'Your Project?',
    description: 'Share the essentials in four short steps. I’ll review the scope and reply with a practical next step.',
    cta: 'Start Your Project Brief',
    note: 'Takes about 3 minutes. Your progress is saved automatically.',
    benefits: [
      { icon: FileText, text: 'Only the details needed for an initial assessment' },
      { icon: Save, text: 'Leave and return without losing your answers' },
      { icon: Clock3, text: 'A personal response, usually within 24 hours' },
    ],
  },
  ua: {
    titleLeft: 'Готові спланувати',
    titleRight: 'ваш проєкт?',
    description: 'Поділіться основним за чотири короткі кроки. Я перегляну scope і запропоную практичне продовження.',
    cta: 'Заповнити опис проєкту',
    note: 'Приблизно 3 хвилини. Прогрес зберігається автоматично.',
    benefits: [
      { icon: FileText, text: 'Лише дані, потрібні для первинної оцінки' },
      { icon: Save, text: 'Можна вийти й повернутися без втрати відповідей' },
      { icon: Clock3, text: 'Особиста відповідь, зазвичай протягом 24 годин' },
    ],
  },
} as const;

export function Contact({ locale, sectionIndex }: ContactProps) {
  const copy = content[locale];
  const inquiryHref = locale === 'ua' ? '/ua/inquiry' : '/inquiry';

  return (
    <Section id="contact" bg="gradient-up">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-1/4 -top-1/2 h-[800px] w-[800px] rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-blue-600/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          index={sectionIndex}
          title={
            <>
              {copy.titleLeft}{' '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {copy.titleRight}
              </span>
            </>
          }
          description={copy.description}
          className="!mb-10"
        />

        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-300/20 bg-[#111116] p-6 shadow-2xl shadow-cyan-950/15 md:p-9">
          <ul className="grid gap-3 md:grid-cols-3">
            {copy.benefits.map(benefit => {
              const Icon = benefit.icon;
              return (
                <li key={benefit.text} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/3 p-4 text-sm leading-relaxed text-gray-300">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300" aria-hidden="true">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{benefit.text}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-7 text-center">
            <Link href={inquiryHref} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20">
              {copy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-3 text-sm text-gray-400">{copy.note}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
