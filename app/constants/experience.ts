import type { Locale } from './i18n';

const DEVELOPMENT_START_DATE = new Date(Date.UTC(2023, 0, 1));
const COMMERCIAL_START_DATE = new Date(Date.UTC(2025, 7, 1));

function getFullYearsBetween(start: Date, end: Date) {
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  const anniversaryHasPassed =
    end.getUTCMonth() > start.getUTCMonth() ||
    (end.getUTCMonth() === start.getUTCMonth() && end.getUTCDate() >= start.getUTCDate());

  if (!anniversaryHasPassed) years -= 1;

  return Math.max(0, years);
}

function getFullMonthsBetween(start: Date, end: Date) {
  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    end.getUTCMonth() -
    start.getUTCMonth();

  if (end.getUTCDate() < start.getUTCDate()) months -= 1;

  return Math.max(0, months);
}

export function getExperienceStats(now = new Date()) {
  return {
    developmentYears: getFullYearsBetween(DEVELOPMENT_START_DATE, now),
    commercialMonths: getFullMonthsBetween(COMMERCIAL_START_DATE, now),
  };
}

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  highlights: readonly string[];
  technologies: readonly string[];
};

export const EXPERIENCE_TIMELINE: Record<Locale, readonly ExperienceItem[]> = {
  en: [
    {
      period: 'March 2026 — Present',
      company: 'Freshcode',
      role: 'Full-Stack Developer',
      highlights: [
        'Stabilized a large production codebase by resolving dozens of legacy SQL, React, and Node.js issues while preserving critical product behavior.',
        'Improved code reliability by adding integration test coverage for implemented changes.',
        'Built n8n workflows to automate data exchange between Metabase and Google Sheets.',
      ],
      technologies: ['React', 'Node.js', 'SQL', 'Integration Testing', 'n8n', 'Metabase'],
    },
    {
      period: 'August 2025 — February 2026',
      company: 'Cortana.dev',
      role: 'Full-Stack Developer',
      highlights: [
        'Built a full-stack booking platform with a secure admin dashboard, live availability calendar, yacht management, and multilingual landing page.',
        'Delivered responsive landing pages and web applications optimized for desktop and mobile devices.',
        'Integrated frontend applications with REST APIs for authentication, data submission, and retrieval.',
        'Implemented JWT-based authentication and authorization flows.',
        'Collaborated in weekly sprints using Jira for task management and GitHub for version control.',
      ],
      technologies: ['Full-Stack', 'REST API', 'JWT', 'Responsive UI', 'Jira', 'GitHub'],
    },
  ],
  ua: [
    {
      period: 'Березень 2026 — дотепер',
      company: 'Freshcode',
      role: 'Full-Stack Developer',
      highlights: [
        'Стабілізував великий production-код, усунувши десятки legacy-проблем у SQL, React і Node.js без порушення критичної логіки продукту.',
        'Підвищив надійність змін завдяки покриттю реалізованого функціоналу інтеграційними тестами.',
        'Створив n8n-процеси для автоматизації обміну даними між Metabase і Google Sheets.',
      ],
      technologies: ['React', 'Node.js', 'SQL', 'Інтеграційні тести', 'n8n', 'Metabase'],
    },
    {
      period: 'Серпень 2025 — лютий 2026',
      company: 'Cortana.dev',
      role: 'Full-Stack Developer',
      highlights: [
        'Розробив full-stack платформу для бронювання із захищеною адмінпанеллю, календарем актуальної доступності, керуванням яхтами та мультимовним лендингом.',
        'Створював адаптивні лендинги й вебзастосунки, оптимізовані для desktop і mobile пристроїв.',
        'Інтегрував frontend із REST API для автентифікації, надсилання та отримання даних.',
        'Реалізував процеси автентифікації й авторизації на основі JWT.',
        'Працював у щотижневих спринтах із Jira для керування задачами та GitHub для контролю версій.',
      ],
      technologies: ['Full-Stack', 'REST API', 'JWT', 'Адаптивний UI', 'Jira', 'GitHub'],
    },
  ],
};
