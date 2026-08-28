import { ArrowRight } from 'lucide-react';
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
    description: 'Four short steps, about 3 minutes. I reply with a practical next step within 24 hours.',
    cta: 'Start Your Project Brief',
    note: 'Progress saves automatically — leave and return anytime.',
  },
  ua: {
    titleLeft: 'Готові спланувати',
    titleRight: 'ваш проєкт?',
    description: 'Чотири короткі кроки, близько 3 хвилин. Відповідаю з практичним продовженням протягом 24 годин.',
    cta: 'Заповнити опис проєкту',
    note: 'Прогрес зберігається автоматично — можна вийти й повернутися.',
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
          className="!mb-8"
        />

        <div className="mx-auto max-w-xl text-center">
          <Link
            href={inquiryHref}
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            {copy.cta}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <p className="mt-4 text-sm text-gray-400">{copy.note}</p>
        </div>
      </div>
    </Section>
  );
}
