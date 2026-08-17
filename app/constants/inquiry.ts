import type { Locale } from './i18n';

export const PROJECT_TYPE_VALUES = ['website', 'mvp', 'system', 'unsure'] as const;
export const FEATURE_VALUES = [
  'custom-design', 'lead-form', 'cms', 'seo', 'analytics', 'performance',
  'auth', 'roles', 'database', 'dashboard', 'payments', 'notifications',
  'integrations', 'deployment', 'booking-flow', 'availability', 'admin-panel',
  'permissions', 'workflow', 'data-sync', 'reports',
] as const;
export const STAGE_VALUES = ['idea', 'requirements', 'existing', 'unsure'] as const;
export const TIMELINE_VALUES = ['asap', 'one-two-months', 'three-plus-months', 'flexible'] as const;
export const BUDGET_VALUES = ['0-1k', '1-5k', '5-10k', 'estimate'] as const;

export type ProjectType = (typeof PROJECT_TYPE_VALUES)[number];
export type ProjectFeature = (typeof FEATURE_VALUES)[number];
export type ProjectStage = (typeof STAGE_VALUES)[number];
export type ProjectTimeline = (typeof TIMELINE_VALUES)[number];
export type ProjectBudget = (typeof BUDGET_VALUES)[number];

export type InquiryDraft = {
  projectType: ProjectType | '';
  features: ProjectFeature[];
  details: string;
  stage: ProjectStage | '';
  timeline: ProjectTimeline | '';
  budget: ProjectBudget | '';
  name: string;
  email: string;
  company: string;
};

export type InquirySubmission = InquiryDraft & {
  submissionId: string;
  locale: Locale;
  website?: string;
};

export const EMPTY_INQUIRY_DRAFT: InquiryDraft = {
  projectType: '',
  features: [],
  details: '',
  stage: '',
  timeline: '',
  budget: '',
  name: '',
  email: '',
  company: '',
};

type InquiryOption<T extends string> = {
  value: T;
  label: string;
  description?: string;
};

type InquiryOptions = {
  projectTypes: InquiryOption<ProjectType>[];
  stages: InquiryOption<ProjectStage>[];
  timelines: InquiryOption<ProjectTimeline>[];
  budgets: InquiryOption<ProjectBudget>[];
};

export const INQUIRY_OPTIONS: Record<Locale, InquiryOptions> = {
  en: {
    projectTypes: [
      { value: 'website', label: 'Website or Landing Page', description: 'Explain your offer, earn trust, and turn interested visitors into inquiries.' },
      { value: 'mvp', label: 'MVP or Web Application', description: 'Turn an idea into a focused working product that real users can test.' },
      { value: 'system', label: 'Booking, Internal System or Automation', description: 'Bring customer requests, operations, and connected tools into one workflow.' },
      { value: 'unsure', label: 'Not Sure Yet', description: 'Describe the goal and I’ll recommend the right format.' },
    ],
    stages: [
      { value: 'idea', label: 'Early Idea' },
      { value: 'requirements', label: 'Requirements / Design Ready' },
      { value: 'existing', label: 'Existing Product to Improve' },
      { value: 'unsure', label: 'Not Sure Yet' },
    ],
    timelines: [
      { value: 'asap', label: 'As Soon as Possible' },
      { value: 'one-two-months', label: 'Within 1–2 Months' },
      { value: 'three-plus-months', label: 'Within 3+ Months' },
      { value: 'flexible', label: 'Flexible / Need Advice' },
    ],
    budgets: [
      { value: '0-1k', label: '$0–$1k' },
      { value: '1-5k', label: '$1k–$5k' },
      { value: '5-10k', label: '$5k–$10k' },
      { value: 'estimate', label: 'Need an Estimate' },
    ],
  },
  ua: {
    projectTypes: [
      { value: 'website', label: 'Сайт або лендінг', description: 'Пояснити пропозицію, сформувати довіру та перетворити відвідувачів на заявки.' },
      { value: 'mvp', label: 'MVP або вебзастосунок', description: 'Перетворити ідею на сфокусований робочий продукт для реальних користувачів.' },
      { value: 'system', label: 'Бронювання, внутрішня система або автоматизація', description: 'Об’єднати заявки, операції та підключені сервіси в одному процесі.' },
      { value: 'unsure', label: 'Поки не знаю', description: 'Опишіть ціль, і я запропоную відповідний формат.' },
    ],
    stages: [
      { value: 'idea', label: 'Є початкова ідея' },
      { value: 'requirements', label: 'Є вимоги / Дизайн' },
      { value: 'existing', label: 'Потрібно покращити продукт' },
      { value: 'unsure', label: 'Поки не знаю' },
    ],
    timelines: [
      { value: 'asap', label: 'Якомога швидше' },
      { value: 'one-two-months', label: 'Протягом 1–2 місяців' },
      { value: 'three-plus-months', label: 'Протягом 3+ місяців' },
      { value: 'flexible', label: 'Гнучко / Потрібна порада' },
    ],
    budgets: [
      { value: '0-1k', label: '$0–$1k' },
      { value: '1-5k', label: '$1k–$5k' },
      { value: '5-10k', label: '$5k–$10k' },
      { value: 'estimate', label: 'Потрібна оцінка' },
    ],
  },
};

export const INQUIRY_FEATURES: Record<Locale, Record<ProjectType, InquiryOption<ProjectFeature>[]>> = {
  en: {
    website: [
      { value: 'custom-design', label: 'Custom Responsive Design' },
      { value: 'lead-form', label: 'Contact / Lead Form' },
      { value: 'cms', label: 'Editable Content / CMS' },
      { value: 'seo', label: 'SEO Foundation' },
      { value: 'analytics', label: 'Analytics & Conversion Tracking' },
      { value: 'performance', label: 'Performance Optimisation' },
    ],
    mvp: [
      { value: 'auth', label: 'User Accounts & Sign-in' },
      { value: 'roles', label: 'Roles & Permissions' },
      { value: 'database', label: 'Database & Business Data' },
      { value: 'dashboard', label: 'User / Admin Dashboard' },
      { value: 'payments', label: 'Online Payments' },
      { value: 'notifications', label: 'Email / Status Notifications' },
      { value: 'integrations', label: 'Third-party Integrations' },
      { value: 'deployment', label: 'Launch & Handover' },
    ],
    system: [
      { value: 'booking-flow', label: 'Customer Booking / Request Flow' },
      { value: 'availability', label: 'Availability or Schedule Management' },
      { value: 'auth', label: 'Customer Accounts & Sign-in' },
      { value: 'admin-panel', label: 'Administration Dashboard' },
      { value: 'permissions', label: 'Staff Roles & Permissions' },
      { value: 'workflow', label: 'Statuses & Operational Workflow' },
      { value: 'payments', label: 'Online Payments' },
      { value: 'notifications', label: 'Email / Messaging Notifications' },
      { value: 'integrations', label: 'CRM / API Integration' },
      { value: 'data-sync', label: 'Data Sync & Automation' },
      { value: 'reports', label: 'Reports / Data Export' },
    ],
    unsure: [
      { value: 'lead-form', label: 'Collect Customer Inquiries' },
      { value: 'auth', label: 'User Accounts' },
      { value: 'booking-flow', label: 'Booking or Request Flow' },
      { value: 'admin-panel', label: 'Administration Area' },
      { value: 'integrations', label: 'Connect Existing Tools' },
      { value: 'workflow', label: 'Automate Internal Work' },
    ],
  },
  ua: {
    website: [
      { value: 'custom-design', label: 'Індивідуальний адаптивний дизайн' },
      { value: 'lead-form', label: 'Форма для збору заявок' },
      { value: 'cms', label: 'Самостійне редагування контенту' },
      { value: 'seo', label: 'SEO-основа' },
      { value: 'analytics', label: 'Аналітика та відстеження конверсій' },
      { value: 'performance', label: 'Оптимізація швидкодії' },
    ],
    mvp: [
      { value: 'auth', label: 'Акаунти та вхід користувачів' },
      { value: 'roles', label: 'Ролі та права доступу' },
      { value: 'database', label: 'База даних' },
      { value: 'dashboard', label: 'Кабінет користувача та адмінпанель' },
      { value: 'payments', label: 'Онлайн-оплати' },
      { value: 'notifications', label: 'Сповіщення про важливі події' },
      { value: 'integrations', label: 'Інтеграції зі сторонніми сервісами' },
      { value: 'deployment', label: 'Запуск і передача проєкту' },
    ],
    system: [
      { value: 'booking-flow', label: 'Онлайн-бронювання або заявка' },
      { value: 'availability', label: 'Керування доступністю або розкладом' },
      { value: 'auth', label: 'Акаунти та вхід клієнтів' },
      { value: 'admin-panel', label: 'Адміністративна панель' },
      { value: 'permissions', label: 'Ролі та права працівників' },
      { value: 'workflow', label: 'Статуси й операційний процес' },
      { value: 'payments', label: 'Онлайн-оплата' },
      { value: 'notifications', label: 'Сповіщення на пошту або в месенджер' },
      { value: 'integrations', label: 'Підключення CRM та інших сервісів' },
      { value: 'data-sync', label: 'Синхронізація й автоматизація даних' },
      { value: 'reports', label: 'Звіти та експорт даних' },
    ],
    unsure: [
      { value: 'lead-form', label: 'Збирати заявки клієнтів' },
      { value: 'auth', label: 'Акаунти користувачів' },
      { value: 'booking-flow', label: 'Бронювання або заявки' },
      { value: 'admin-panel', label: 'Адміністративна частина' },
      { value: 'integrations', label: 'Підключення наявних сервісів' },
      { value: 'workflow', label: 'Автоматизація внутрішньої роботи' },
    ],
  },
};

export const INQUIRY_COPY = {
  en: {
    title: 'Start a Project',
    description: 'Answer four quick questions so I can review the scope and suggest the next step.',
    steps: ['Project', 'Features', 'Scope', 'Contact'],
    stepLabel: 'Step',
    of: 'of',
    questions: {
      projectType: 'Choose a Starting Point',
      projectTypeHint: 'Select the option closest to what your business needs.',
      features: 'Features',
      featurePlaceholder: 'Choose a feature',
      addFeature: 'Add feature',
      removeFeature: 'Remove',
      featuresHint: 'Add the capabilities you already know you need. You can refine them later.',
      details: 'Add the Essential Context',
      detailsHint: 'What should users be able to do, and what problem should the product solve?',
      detailsPlaceholder: 'For example: customers should find available yachts, send a booking request, and our team should manage availability in an admin panel…',
      stage: 'Current Project Stage',
      stagePlaceholder: 'Select the current stage',
      timeline: 'Preferred Launch Timing',
      timelinePlaceholder: 'Select a launch window',
      budget: 'Planned Investment',
      contact: 'Your Contact Details',
      contactHint: 'I use these details only to reply about this project.',
      name: 'Your name',
      email: 'Email',
      company: 'Company or website (optional)',
    },
    placeholders: {
      name: 'e.g., Alex Morgan…',
      email: 'alex@example.com…',
      company: 'e.g., Acme or acme.com…',
    },
    back: 'Back',
    continue: 'Continue',
    submit: 'Send Project Brief',
    sending: 'Sending…',
    privacy: 'By submitting, you agree to the Privacy Policy.',
    errors: {
      choose: 'Choose one option to continue.',
      features: 'Add at least one feature to continue.',
      details: 'Add at least 20 characters so I can understand the project.',
      name: 'Enter your name.',
      email: 'Enter a valid email address.',
      submit: 'The inquiry could not be sent. Please try again or email me directly.',
    },
    success: {
      eyebrow: 'Project brief received',
      title: 'Thank You — I’ll Review It Shortly',
      description: 'Your answers are safely submitted. I’ll review the scope and contact you with a practical next step, usually within 24 hours.',
      reference: 'Reference',
      home: 'Return to Portfolio',
      another: 'Submit Another Project',
      confirmTitle: 'Start Another Project?',
      confirmAction: 'Start New Project',
      cancel: 'Cancel',
      confirmAnother: 'Your previous submission will stay in email, but this browser confirmation will be cleared. Start another project?',
    },
    backHome: 'Back to portfolio',
    switchLanguage: 'Українська',
  },
  ua: {
    title: 'Розпочати проєкт',
    description: 'Дайте відповіді на чотири короткі питання, щоб я оцінив обсяг і запропонував наступний крок.',
    steps: ['Проєкт', 'Функції', 'Обсяг', 'Контакти'],
    stepLabel: 'Крок',
    of: 'з',
    questions: {
      projectType: 'Оберіть формат проєкту',
      projectTypeHint: 'Оберіть варіант, найближчий до потреб вашого бізнесу.',
      features: 'Функції',
      featurePlaceholder: 'Оберіть функцію',
      addFeature: 'Додати функцію',
      removeFeature: 'Видалити',
      featuresHint: 'Додайте можливості, які вже вважаєте потрібними. Деталі можна уточнити пізніше.',
      details: 'Додайте основний контекст',
      detailsHint: 'Що має вміти користувач і яку проблему повинен вирішити продукт?',
      detailsPlaceholder: 'Наприклад: клієнти мають знаходити доступні яхти й надсилати запит на бронювання, а команда — керувати доступністю в адмінпанелі…',
      stage: 'Поточний етап проєкту',
      stagePlaceholder: 'Оберіть поточний етап',
      timeline: 'Бажаний термін запуску',
      timelinePlaceholder: 'Оберіть термін запуску',
      budget: 'Запланований бюджет',
      contact: 'Ваші контактні дані',
      contactHint: 'Використовую ці дані лише для відповіді щодо цього проєкту.',
      name: 'Ваше ім’я',
      email: 'Email',
      company: 'Компанія або сайт (необов’язково)',
    },
    placeholders: {
      name: 'Наприклад, Олександр Коваль…',
      email: 'oleksandr@example.com…',
      company: 'Наприклад, Acme або acme.com…',
    },
    back: 'Назад',
    continue: 'Продовжити',
    submit: 'Надіслати опис проєкту',
    sending: 'Надсилаю…',
    privacy: 'Надсилаючи форму, ви погоджуєтеся з Політикою конфіденційності.',
    errors: {
      choose: 'Оберіть один варіант, щоб продовжити.',
      features: 'Додайте хоча б одну функцію, щоб продовжити.',
      details: 'Додайте щонайменше 20 символів, щоб я зрозумів задачу.',
      name: 'Вкажіть ваше ім’я.',
      email: 'Вкажіть коректну email-адресу.',
      submit: 'Не вдалося надіслати запит. Спробуйте ще раз або напишіть напряму на email.',
    },
    success: {
      eyebrow: 'Опис проєкту отримано',
      title: 'Дякую — перегляну найближчим часом',
      description: 'Ваші відповіді успішно надіслані. Я перегляну опис проєкту та запропоную наступний крок, зазвичай протягом 24 годин.',
      reference: 'Номер запиту',
      home: 'Повернутися до портфоліо',
      another: 'Надіслати інший проєкт',
      confirmTitle: 'Почати інший проєкт?',
      confirmAction: 'Почати новий проєкт',
      cancel: 'Скасувати',
      confirmAnother: 'Попередній запит залишиться в email, але підтвердження в цьому браузері буде очищено. Почати інший проєкт?',
    },
    backHome: 'Назад до портфоліо',
    switchLanguage: 'English',
  },
} as const;

export function getInquiryOptionLabel(
  locale: Locale,
  group: keyof InquiryOptions,
  value: string
) {
  return INQUIRY_OPTIONS[locale][group].find(option => option.value === value)?.label ?? value;
}

export function getInquiryFeatureLabel(locale: Locale, value: string) {
  for (const projectType of PROJECT_TYPE_VALUES) {
    const feature = INQUIRY_FEATURES[locale][projectType].find(option => option.value === value);
    if (feature) return feature.label;
  }
  return value;
}

export function isFeatureAvailableForProject(projectType: ProjectType, value: string) {
  return INQUIRY_FEATURES.en[projectType].some(option => option.value === value);
}
