import type { Locale } from './i18n';

const descriptions: Record<string, Record<Locale, string>> = {
  'n8n': {
    en: 'Workflow automation that connects business tools and moves data without repetitive manual work.',
    ua: 'Автоматизація процесів, що з’єднує бізнес-інструменти й передає дані без повторюваної ручної роботи.',
  },
  'Metabase': {
    en: 'Business intelligence dashboards for exploring operational data and reporting.',
    ua: 'Аналітичні панелі для дослідження операційних даних і звітності.',
  },
  'Prisma ORM': {
    en: 'A type-safe data layer for reliable application-to-database access.',
    ua: 'Типобезпечний шар даних для надійної роботи застосунку з базою даних.',
  },
  'VPS': {
    en: 'A virtual private server used to deploy and operate applications with infrastructure control.',
    ua: 'Віртуальний приватний сервер для розгортання та роботи застосунків із контролем інфраструктури.',
  },
  'REST API': {
    en: 'An interface that lets applications exchange data and actions reliably.',
    ua: 'Інтерфейс для надійного обміну даними та діями між застосунками.',
  },
  'JWT': {
    en: 'A signed token format used for secure authentication and authorization.',
    ua: 'Формат підписаних токенів для безпечної автентифікації та авторизації.',
  },
  'Integration Testing': {
    en: 'Automated checks that verify multiple parts of a system work together correctly.',
    ua: 'Автоматизовані перевірки коректної спільної роботи кількох частин системи.',
  },
  'Інтеграційні тести': {
    en: 'Automated checks that verify multiple parts of a system work together correctly.',
    ua: 'Автоматизовані перевірки коректної спільної роботи кількох частин системи.',
  },
};

export function getTechnologyDescription(technology: string, locale: Locale) {
  return descriptions[technology]?.[locale];
}
