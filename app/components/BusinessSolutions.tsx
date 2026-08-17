import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/constants/i18n';
import { Section, SectionHeader } from '@/components/ui';

type BusinessSolutionsProps = {
  locale: Locale;
};

const solutionCopy = {
  en: {
    title: 'What I Can Build for You',
    description: 'Start with the problem—not a technology choice. Each solution is scoped around the action you need customers or your team to take.',
    linkLabel: 'Explore',
    items: [
      {
        title: 'Website or Landing Page',
        description: 'Explain your offer clearly, earn trust, and turn interested visitors into inquiries across desktop and mobile.',
        fit: 'Best for launching a service, campaign, or new market offer.',
        href: '/services/landing-page',
      },
      {
        title: 'MVP or Web Application',
        description: 'Turn a product idea into a focused working application that real users can test without overbuilding the first release.',
        fit: 'Best for validating a startup idea or digitizing a new service.',
        href: '/services/mvp-development',
      },
      {
        title: 'Booking or Internal System',
        description: 'Bring availability, customer requests, orders, and administrative work into one practical workflow.',
        fit: 'Best for service teams managing schedules or operational data.',
        href: '/services/booking-system',
      },
      {
        title: 'API, CRM & Workflow Automation',
        description: 'Connect forms, payments, CRMs, and third-party tools so information moves automatically and reliably.',
        fit: 'Best for reducing repetitive manual work and disconnected data.',
        href: '/services/api-integration',
      },
    ],
  },
  ua: {
    title: 'Що можу створити для вас',
    description: 'Починаємо із задачі, а не з вибору технології. Кожне рішення проєктується навколо потрібної дії клієнта або вашої команди.',
    linkLabel: 'Детальніше',
    items: [
      {
        title: 'Сайт або лендінг',
        description: 'Зрозуміло пояснити пропозицію, сформувати довіру та перетворити зацікавлених відвідувачів на заявки з будь-якого пристрою.',
        fit: 'Для запуску послуги, рекламної кампанії або нової пропозиції.',
        href: '/ua/services/landing-page',
      },
      {
        title: 'MVP або вебзастосунок',
        description: 'Перетворити продуктову ідею на сфокусований робочий застосунок, який можна перевірити на реальних користувачах без зайвої складності.',
        fit: 'Для перевірки стартап-ідеї або запуску цифрової послуги.',
        href: '/ua/services/mvp-development',
      },
      {
        title: 'Система бронювання або внутрішній сервіс',
        description: 'Об’єднати доступність, заявки клієнтів, замовлення та адміністративну роботу в одному зрозумілому процесі.',
        fit: 'Для сервісних команд, які працюють із розкладом або операційними даними.',
        href: '/ua/services/booking-system',
      },
      {
        title: 'API, CRM та автоматизація',
        description: 'З’єднати форми, оплати, CRM і сторонні сервіси, щоб дані передавалися автоматично та надійно.',
        fit: 'Для скорочення ручної роботи й об’єднання розрізнених даних.',
        href: '/ua/services/api-integration',
      },
    ],
  },
} as const;

export function BusinessSolutions({ locale }: BusinessSolutionsProps) {
  const copy = solutionCopy[locale];

  return (
    <Section id="solutions" bg="gradient-down" className="!py-16 md:!py-20 lg:!py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader index="01" title={copy.title} description={copy.description} className="!mb-10 md:!mb-12 lg:!mb-14" />

        <div className="grid gap-5 md:grid-cols-2">
          {copy.items.map((item, index) => {
            return (
              <Link
                key={item.title}
                href={item.href}
                aria-label={`${item.title}: ${copy.linkLabel}`}
                className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
              >
                <article className="solution-card flex h-full flex-col rounded-2xl border border-white/10 bg-[#111116] p-5 transition-[border-color,background-color,transform] md:p-6">
                  <span className="mb-5 text-xs font-semibold tracking-[0.2em] text-cyan-400" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-300">{item.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.fit}</p>
                  <span className="solution-card__label mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-md px-1 text-sm font-semibold text-cyan-400 transition-colors">
                    {copy.linkLabel}
                    <ArrowRight className="solution-card__arrow h-4 w-4 transition-transform" aria-hidden="true" />
                  </span>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
