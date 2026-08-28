import type { Locale } from './i18n';

export const PROJECT_TYPE_VALUES = [
  'online-store', 'business-card', 'corporate', 'landing',
  'promo', 'portal', 'custom', 'online-service',
] as const;
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
      { value: 'online-store', label: 'Online Store', description: 'Sell products online with a catalogue, checkout, payments, and order management.' },
      { value: 'business-card', label: 'Business Website', description: 'Introduce your business, services, and contact details on a compact website.' },
      { value: 'corporate', label: 'Corporate Website', description: 'Present a company, its services, team, expertise, and vacancies.' },
      { value: 'landing', label: 'Landing Page', description: 'Present one offer and turn advertising traffic into inquiries.' },
      { value: 'promo', label: 'Promo Website', description: 'Launch a product, event, campaign, or special offer.' },
      { value: 'portal', label: 'Information Portal', description: 'Publish and organise a large amount of searchable content.' },
      { value: 'custom', label: 'Custom Website', description: 'Not sure what fits? I’ll recommend and build the right format for your goals.' },
      { value: 'online-service', label: 'Online Service', description: 'Let users book, pay, manage an account, or complete a process online.' },
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
      { value: 'online-store', label: 'Інтернет-магазин', description: 'Продавати товари онлайн через каталог, кошик, оплату та керування замовленнями.' },
      { value: 'business-card', label: 'Сайт-візитка', description: 'Коротко представити бізнес, послуги та контактну інформацію.' },
      { value: 'corporate', label: 'Корпоративний сайт', description: 'Розповісти про компанію, послуги, команду, експертизу та вакансії.' },
      { value: 'landing', label: 'Лендінг', description: 'Презентувати одну пропозицію та перетворювати рекламний трафік на заявки.' },
      { value: 'promo', label: 'Промо-сайт', description: 'Запустити продукт, подію, рекламну кампанію або спеціальну пропозицію.' },
      { value: 'portal', label: 'Інфо-портал', description: 'Публікувати й упорядковувати велику кількість матеріалів із пошуком.' },
      { value: 'custom', label: 'Індивідуальний  сайт', description: 'Не знаєте, що обрати? Я запропоную формат під ваші цілі та задачі.' },
      { value: 'online-service', label: 'Онлайн-сервіс', description: 'Дати користувачам змогу бронювати, оплачувати або працювати в особистому кабінеті.' },
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

const WEBSITE_FEATURES: Record<Locale, InquiryOption<ProjectFeature>[]> = {
  en: [
    { value: 'custom-design', label: 'Custom Responsive Design' },
    { value: 'lead-form', label: 'Contact / Lead Form' },
    { value: 'cms', label: 'Editable Content / CMS' },
    { value: 'seo', label: 'SEO Foundation' },
    { value: 'analytics', label: 'Analytics & Conversion Tracking' },
    { value: 'performance', label: 'Performance Optimisation' },
  ],
  ua: [
    { value: 'custom-design', label: 'Індивідуальний адаптивний дизайн' },
    { value: 'lead-form', label: 'Форма для збору заявок' },
    { value: 'cms', label: 'Самостійне редагування контенту' },
    { value: 'seo', label: 'SEO-основа' },
    { value: 'analytics', label: 'Аналітика та відстеження конверсій' },
    { value: 'performance', label: 'Оптимізація швидкодії' },
  ],
};

const STORE_FEATURES: Record<Locale, InquiryOption<ProjectFeature>[]> = {
  en: [
    { value: 'custom-design', label: 'Custom Responsive Design' },
    { value: 'cms', label: 'Product Catalogue Management' },
    { value: 'payments', label: 'Online Payments & Checkout' },
    { value: 'database', label: 'Products, Customers & Orders' },
    { value: 'dashboard', label: 'Store Administration' },
    { value: 'integrations', label: 'CRM / Delivery Integrations' },
    { value: 'notifications', label: 'Order Notifications' },
    { value: 'seo', label: 'SEO Foundation' },
  ],
  ua: [
    { value: 'custom-design', label: 'Індивідуальний адаптивний дизайн' },
    { value: 'cms', label: 'Керування каталогом товарів' },
    { value: 'payments', label: 'Онлайн-оплата та оформлення замовлення' },
    { value: 'database', label: 'Товари, клієнти та замовлення' },
    { value: 'dashboard', label: 'Адміністрування магазину' },
    { value: 'integrations', label: 'Інтеграція з CRM і доставкою' },
    { value: 'notifications', label: 'Сповіщення про замовлення' },
    { value: 'seo', label: 'SEO-основа' },
  ],
};

const SERVICE_FEATURES: Record<Locale, InquiryOption<ProjectFeature>[]> = {
  en: [
    { value: 'booking-flow', label: 'Booking / Customer Flow' },
    { value: 'availability', label: 'Availability or Schedule' },
    { value: 'auth', label: 'User Accounts & Sign-in' },
    { value: 'roles', label: 'Roles & Permissions' },
    { value: 'database', label: 'Database & Business Data' },
    { value: 'dashboard', label: 'User Dashboard' },
    { value: 'admin-panel', label: 'Administration Dashboard' },
    { value: 'permissions', label: 'Staff Roles & Permissions' },
    { value: 'workflow', label: 'Statuses & Workflow' },
    { value: 'payments', label: 'Online Payments' },
    { value: 'notifications', label: 'Email / Messaging Notifications' },
    { value: 'integrations', label: 'CRM / API Integrations' },
    { value: 'data-sync', label: 'Data Sync & Automation' },
    { value: 'reports', label: 'Reports / Data Export' },
    { value: 'deployment', label: 'Launch & Handover' },
  ],
  ua: [
    { value: 'booking-flow', label: 'Бронювання або клієнтський сценарій' },
    { value: 'availability', label: 'Доступність або розклад' },
    { value: 'auth', label: 'Акаунти та вхід користувачів' },
    { value: 'roles', label: 'Ролі та права доступу' },
    { value: 'database', label: 'База даних' },
    { value: 'dashboard', label: 'Кабінет користувача' },
    { value: 'admin-panel', label: 'Адміністративна панель' },
    { value: 'permissions', label: 'Ролі та права працівників' },
    { value: 'workflow', label: 'Статуси й робочий процес' },
    { value: 'payments', label: 'Онлайн-оплата' },
    { value: 'notifications', label: 'Сповіщення на пошту або в месенджер' },
    { value: 'integrations', label: 'Інтеграція з CRM та API' },
    { value: 'data-sync', label: 'Синхронізація й автоматизація даних' },
    { value: 'reports', label: 'Звіти та експорт даних' },
    { value: 'deployment', label: 'Запуск і передача проєкту' },
  ],
};

const PORTAL_FEATURES: Record<Locale, InquiryOption<ProjectFeature>[]> = {
  en: [...WEBSITE_FEATURES.en, { value: 'database', label: 'Content Database' }, { value: 'roles', label: 'Editors & Roles' }],
  ua: [...WEBSITE_FEATURES.ua, { value: 'database', label: 'База матеріалів' }, { value: 'roles', label: 'Редактори та ролі' }],
};

const CUSTOM_FEATURES: Record<Locale, InquiryOption<ProjectFeature>[]> = {
  en: [...WEBSITE_FEATURES.en, { value: 'auth', label: 'User Accounts' }, { value: 'payments', label: 'Online Payments' }, { value: 'integrations', label: 'Third-party Integrations' }, { value: 'admin-panel', label: 'Administration Area' }],
  ua: [...WEBSITE_FEATURES.ua, { value: 'auth', label: 'Акаунти користувачів' }, { value: 'payments', label: 'Онлайн-оплата' }, { value: 'integrations', label: 'Інтеграції зі сторонніми сервісами' }, { value: 'admin-panel', label: 'Адміністративна частина' }],
};

export const INQUIRY_FEATURES: Record<Locale, Record<ProjectType, InquiryOption<ProjectFeature>[]>> = {
  en: {
    'online-store': STORE_FEATURES.en,
    'business-card': WEBSITE_FEATURES.en,
    corporate: WEBSITE_FEATURES.en,
    landing: WEBSITE_FEATURES.en,
    promo: WEBSITE_FEATURES.en,
    portal: PORTAL_FEATURES.en,
    custom: CUSTOM_FEATURES.en,
    'online-service': SERVICE_FEATURES.en,
  },
  ua: {
    'online-store': STORE_FEATURES.ua,
    'business-card': WEBSITE_FEATURES.ua,
    corporate: WEBSITE_FEATURES.ua,
    landing: WEBSITE_FEATURES.ua,
    promo: WEBSITE_FEATURES.ua,
    portal: PORTAL_FEATURES.ua,
    custom: CUSTOM_FEATURES.ua,
    'online-service': SERVICE_FEATURES.ua,
  },
};

export const INQUIRY_COPY = {
  en: {
    title: 'Start a Project',
    description: 'Four short questions — I review the scope and reply with a next step.',
    steps: ['Type', 'Details', 'Scope', 'Contact'],
    stepLabel: 'Step',
    of: 'of',
    questions: {
      projectType: 'What Are You Building?',
      projectTypeHint: 'Pick the format closest to your goal.',
      features: 'Key Features',
      featurePlaceholder: 'Select a feature…',
      addFeature: 'Add',
      removeFeature: 'Remove',
      featuresHint: 'Pick what you already know you need — you can refine later.',
      details: 'Describe the Project',
      detailsHint: 'What should your users be able to do?',
      detailsPlaceholder: 'e.g., Customers find available yachts, send a booking request, and our team manages availability in an admin panel…',
      stage: 'Project Stage',
      stagePlaceholder: 'Where are you now?',
      timeline: 'When Do You Need It?',
      timelinePlaceholder: 'Pick a timeframe',
      budget: 'Budget Range',
      contact: 'How Do I Reach You?',
      contactHint: 'Used only to reply about this project.',
      name: 'Your name',
      email: 'Email',
      company: 'Company or website (optional)',
    },
    placeholders: {
      name: 'e.g., Alex Morgan',
      email: 'alex@example.com',
      company: 'e.g., Acme or acme.com',
    },
    back: 'Back',
    continue: 'Continue',
    submit: 'Send Brief',
    sending: 'Sending…',
    privacy: 'By submitting, you agree to the Privacy Policy.',
    errors: {
      choose: 'Pick one option to continue.',
      features: 'Add at least one feature.',
      details: 'Describe the project in a sentence or two (20+ characters).',
      name: 'Enter your name.',
      email: 'Enter a valid email, e.g. alex@example.com.',
      submit: 'Could not send — please try again or email me directly.',
    },
    success: {
      eyebrow: 'Brief received',
      title: 'Thank You — I’ll Review This Shortly',
      description: 'I’ll check the scope and reply with a practical next step, usually within 24 hours.',
      reference: 'Reference',
      home: 'Back to Portfolio',
      another: 'Start Another Brief',
      confirmTitle: 'Start a New Brief?',
      confirmAction: 'Start New Brief',
      cancel: 'Cancel',
      confirmAnother: 'Your previous submission is saved on my end. This will clear the confirmation screen so you can describe a new project.',
    },
    backHome: 'Back to portfolio',
    switchLanguage: 'Українська',
  },
  ua: {
    title: 'Розпочати проєкт',
    description: 'Чотири короткі питання — я переглядаю scope і відповідаю з наступним кроком.',
    steps: ['Тип', 'Деталі', 'Обсяг', 'Контакти'],
    stepLabel: 'Крок',
    of: 'з',
    questions: {
      projectType: 'Що ви створюєте?',
      projectTypeHint: 'Оберіть формат, найближчий до вашої мети.',
      features: 'Ключові функції',
      featurePlaceholder: 'Оберіть функцію…',
      addFeature: 'Додати',
      removeFeature: 'Видалити',
      featuresHint: 'Додайте те, що вже точно потрібно — уточнити можна пізніше.',
      details: 'Опишіть проєкт',
      detailsHint: 'Що має вміти ваш користувач?',
      detailsPlaceholder: 'Наприклад: клієнти знаходять доступні яхти, надсилають запит на бронювання, а команда керує доступністю в адмінпанелі…',
      stage: 'Етап проєкту',
      stagePlaceholder: 'На якому ви етапі?',
      timeline: 'Коли потрібно запустити?',
      timelinePlaceholder: 'Оберіть термін',
      budget: 'Діапазон бюджету',
      contact: 'Як з вами зв’язатися?',
      contactHint: 'Використовую лише для відповіді щодо цього проєкту.',
      name: 'Ваше ім’я',
      email: 'Email',
      company: 'Компанія або сайт (необов’язково)',
    },
    placeholders: {
      name: 'Наприклад, Олександр Коваль',
      email: 'oleksandr@example.com',
      company: 'Наприклад, Acme або acme.com',
    },
    back: 'Назад',
    continue: 'Продовжити',
    submit: 'Надіслати',
    sending: 'Надсилаю…',
    privacy: 'Надсилаючи форму, ви погоджуєтеся з Політикою конфіденційності.',
    errors: {
      choose: 'Оберіть один варіант, щоб продовжити.',
      features: 'Додайте хоча б одну функцію.',
      details: 'Опишіть проєкт одним-двома реченнями (від 20 символів).',
      name: 'Вкажіть ваше ім’я.',
      email: 'Вкажіть коректну email-адресу, наприклад oleksandr@example.com.',
      submit: 'Не вдалося надіслати — спробуйте ще раз або напишіть мені напряму.',
    },
    success: {
      eyebrow: 'Бриф отримано',
      title: 'Дякую — перегляну найближчим часом',
      description: 'Я перевірю scope і відповім із практичним наступним кроком, зазвичай протягом 24 годин.',
      reference: 'Номер',
      home: 'Назад до портфоліо',
      another: 'Почати новий бриф',
      confirmTitle: 'Почати новий бриф?',
      confirmAction: 'Так, новий бриф',
      cancel: 'Скасувати',
      confirmAnother: 'Попередній запит збережено на моєму боці. Це очистить екран підтвердження, щоб ви могли описати новий проєкт.',
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
