import { Locale } from './i18n';
import type { ProjectSlug } from './projects';
import type { ProjectFeature, ProjectType } from './inquiry';

export const SERVICE_SLUGS = [
  'landing-page',
  'mvp-development',
  'booking-system',
  'api-integration',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

type FAQ = {
  question: string;
  answer: string;
};

type ServiceOffer = {
  title: string;
  description: string;
  features: ProjectFeature[];
};

type ServiceContent = {
  title: string;
  heroHook: string;
  ctaLabel: string;
  summary: string;
  inquiryProjectType: ProjectType;
  offers: ServiceOffer[];
  problems: string[];
  deliverables: string[];
  process: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  relatedProjects: { id: ProjectSlug; note: string }[];
};

const services: Record<Locale, Record<ServiceSlug, ServiceContent>> = {
  en: {
    'landing-page': {
      title: 'Lead-Focused Landing Page',
      heroHook: 'Make the next visitor understand your offer — and take the next step.',
      ctaLabel: 'Plan My Landing Page',
      summary:
        'A conversion-optimised landing page built to turn visitors into qualified leads — fast to launch, easy to measure.',
      inquiryProjectType: 'website',
      offers: [
        { title: 'Service landing page', description: 'A focused page that explains your service and turns advertising traffic into inquiries.', features: ['custom-design', 'lead-form', 'seo', 'analytics', 'performance'] },
        { title: 'Product launch page', description: 'A clear presentation for a new product, waitlist, pre-order, or early demand test.', features: ['custom-design', 'lead-form', 'cms', 'analytics', 'performance'] },
        { title: 'Campaign page', description: 'A standalone page for a promotion, event, seasonal offer, or time-sensitive campaign.', features: ['custom-design', 'lead-form', 'analytics', 'performance'] },
        { title: 'Landing page redesign', description: 'A stronger structure, clearer message, and faster implementation for an existing page.', features: ['custom-design', 'seo', 'analytics', 'performance'] },
      ],
      problems: [
        'Your existing site looks fine but generates almost no inquiries.',
        'Visitors leave without taking action because the value is unclear.',
        'Generic templates do not reflect your offer or audience.',
      ],
      deliverables: [
        'Custom single-page design aligned with your brand and offer',
        'Mobile-first, fully responsive layout',
        'Contact form with email notifications',
        'Technical SEO foundation (meta, schema, sitemap)',
        'Core Web Vitals optimised for fast load times',
        'Deployment-ready codebase or direct launch on your infrastructure',
      ],
      process: [
        'Written project brief covering goals, audience, and the primary customer action',
        'Content structure and wireframe review',
        'Development with iterative feedback rounds',
        'Launch, analytics setup, and post-launch check',
      ],
      faqs: [
        {
          question: 'How long does it take to build?',
          answer:
            'Typically 1–2 weeks from kick-off to launch, depending on content readiness and feedback speed.',
        },
        {
          question: 'Do I need to provide copy and images?',
          answer:
            'You provide the core message and any brand assets. I can structure the copy and source royalty-free images if needed.',
        },
        {
          question: 'Can I update the page myself after launch?',
          answer:
            'Yes. I deliver clean, well-structured code and can set up a simple CMS if you prefer a no-code editing experience.',
        },
        {
          question: 'Does the price include hosting?',
          answer:
            'Hosting is not included but I can recommend and help configure a suitable provider (Vercel, Netlify, or your own VPS).',
        },
        {
          question: 'What do you need from me before starting?',
          answer:
            'I need your offer, target audience, preferred customer action, brand assets if available, and any examples of pages you like or dislike.',
        },
      ],
      metaTitle: 'Lead-Focused Landing Page | Web Development Services',
      metaDescription:
        'Custom landing pages built for lead generation. Fast load times, mobile-first design, and conversion-focused structure. Launch in 1–2 weeks.',
      primaryKeyword: 'landing page development',
      relatedProjects: [
        { id: 'sea-travel', note: 'A booking-focused customer journey with search UX, regional landing content, and clear conversion paths.' },
        { id: 'qwiktwik', note: 'A product website connecting high-intent landing pages, downloads, pricing, documentation, and search content.' },
      ],
    },
    'mvp-development': {
      title: 'MVP Web Application',
      heroHook: 'Validate the product before you invest in the wrong scope.',
      ctaLabel: 'Scope My MVP',
      summary:
        'A focused, production-ready web application that validates your idea and attracts early users — without overbuilding.',
      inquiryProjectType: 'mvp',
      offers: [
        { title: 'SaaS MVP', description: 'The first usable version of a subscription product with accounts and its core customer workflow.', features: ['auth', 'roles', 'database', 'dashboard', 'payments', 'notifications', 'integrations', 'deployment'] },
        { title: 'Customer portal', description: 'A secure area where customers can manage requests, data, files, or services.', features: ['auth', 'roles', 'database', 'dashboard', 'notifications', 'deployment'] },
        { title: 'Internal business tool', description: 'A practical web application that replaces spreadsheets and repetitive administration.', features: ['roles', 'database', 'dashboard', 'integrations', 'deployment'] },
        { title: 'Product configurator', description: 'An interactive flow that helps customers configure, calculate, or order a custom product.', features: ['database', 'dashboard', 'payments', 'notifications', 'integrations', 'deployment'] },
      ],
      problems: [
        'You have a product idea but no clear path from concept to working software.',
        'Previous attempts stalled due to scope creep or unclear priorities.',
        'You need something real to show investors, partners, or first customers.',
      ],
      deliverables: [
        'Scoped feature set agreed before development starts',
        'Full-stack Next.js application with clean architecture',
        'User authentication and basic role management',
        'Database integration and API layer',
        'Deployment pipeline on Vercel or your preferred platform',
        'Documentation for handoff or continued development',
      ],
      process: [
        'Written scope definition for the minimum feature set that proves the concept',
        'Architecture decision and tech stack confirmation',
        'Iterative development with weekly progress updates',
        'Testing, deployment, and handoff',
      ],
      faqs: [
        {
          question: 'What counts as an MVP?',
          answer:
            'An MVP is the smallest working version of your product that delivers real value to your first users and lets you collect meaningful feedback.',
        },
        {
          question: 'How long does MVP development take?',
          answer:
            'Typically 4–8 weeks for a focused scope. Larger or more complex products are estimated after reviewing the requirements.',
        },
        {
          question: 'Can you work with my existing design?',
          answer:
            'Yes. I can implement provided Figma designs or produce a functional UI if no design exists.',
        },
        {
          question: 'What happens after the MVP launches?',
          answer:
            'I offer a post-launch support period and can continue as a development partner for further iterations.',
        },
        {
          question: 'Can the MVP scale after validation?',
          answer:
            'Yes. The initial architecture is kept focused but maintainable, so validated features can be extended without rebuilding the product from scratch.',
        },
      ],
      metaTitle: 'MVP Web Application Development | Fast, Focused Launch',
      metaDescription:
        'Production-ready MVP development with Next.js. From idea to working product in 4–8 weeks. Clean code, scalable architecture, deployment included.',
      primaryKeyword: 'MVP web application development',
      relatedProjects: [
        { id: 'qwiktwik', note: 'A full-stack product with account flows, dashboard UI, PostgreSQL, Redis, Prisma ORM, and AI integrations.' },
        { id: 'night-light-configurator', note: 'An interactive product configurator that turns a custom ordering idea into a testable user flow.' },
      ],
    },
    'booking-system': {
      title: 'Booking & Internal Operations System',
      heroHook: 'Turn availability, requests, and daily administration into one reliable workflow.',
      ctaLabel: 'Plan My Booking System',
      summary:
        'A tailored booking or internal operations system that reduces manual coordination and gives customers and staff a clear source of truth.',
      inquiryProjectType: 'system',
      offers: [
        { title: 'Online booking', description: 'A customer-facing flow for finding availability, choosing an option, and sending a booking request.', features: ['booking-flow', 'availability', 'notifications', 'payments'] },
        { title: 'Operations dashboard', description: 'One place for staff to manage availability, requests, statuses, and customer information.', features: ['admin-panel', 'permissions', 'workflow', 'reports'] },
        { title: 'Customer account', description: 'A secure area where customers can view, update, or cancel their bookings.', features: ['auth', 'booking-flow', 'availability', 'notifications'] },
        { title: 'Booking automation', description: 'Notifications, calendar sync, payments, and other integrations around the booking flow.', features: ['notifications', 'integrations', 'data-sync', 'payments'] },
      ],
      problems: [
        'Availability and customer requests are tracked across messages, spreadsheets, or disconnected tools.',
        'Staff repeat the same updates manually and errors reach customers.',
        'Customers cannot confidently see options, availability, or the next step.',
      ],
      deliverables: [
        'Customer-facing search, request, or booking flow',
        'Secure administration area for availability and operational data',
        'Roles, authentication, and permission-aware actions',
        'Email or messaging notifications for important status changes',
        'API and database layer designed around the operational workflow',
        'Responsive interfaces, testing, deployment, and handoff documentation',
      ],
      process: [
        'Map the current booking or operational workflow and failure points',
        'Define roles, statuses, data rules, and the minimum launch scope',
        'Build and review the customer and administration flows iteratively',
        'Test edge cases, deploy, and monitor the launch',
      ],
      faqs: [
        {
          question: 'Can this replace our spreadsheets?',
          answer: 'Yes, when the required data rules and team workflow are clear. I first map the existing process so the system removes work instead of recreating spreadsheet complexity.',
        },
        {
          question: 'Can it show live availability?',
          answer: 'Yes. Availability can be calculated from your database or synchronized with a compatible external calendar or booking provider.',
        },
        {
          question: 'Do customers need an account?',
          answer: 'Not necessarily. The right approach depends on whether customers need to return, manage bookings, make payments, or access private information.',
        },
        {
          question: 'Can staff have different permissions?',
          answer: 'Yes. Role-based access can limit who views, edits, approves, or exports operational data.',
        },
      ],
      metaTitle: 'Booking System Development | Customer & Admin Workflows',
      metaDescription:
        'Custom booking and internal operations systems with live availability, secure administration, workflow automation, and responsive customer experiences.',
      primaryKeyword: 'custom booking system development',
      relatedProjects: [
        { id: 'sea-travel', note: 'A booking platform with live availability, yacht management, search, customer flows, and a secure administration dashboard.' },
      ],
    },
    'api-integration': {
      title: 'API & CRM Integration',
      heroHook: 'Stop copying data between tools by hand.',
      ctaLabel: 'Audit My Integration',
      summary:
        'Connect your website or app to the tools your business runs on — CRMs, payment gateways, booking systems, and more.',
      inquiryProjectType: 'system',
      offers: [
        { title: 'CRM integration', description: 'Send leads, contacts, and deal updates between your website and CRM automatically.', features: ['integrations', 'data-sync', 'workflow', 'notifications'] },
        { title: 'Online payments', description: 'Connect checkout, subscriptions, payment statuses, and customer notifications.', features: ['payments', 'integrations', 'notifications', 'data-sync'] },
        { title: 'Messaging automation', description: 'Send relevant events and alerts through email, Telegram, or other messaging services.', features: ['notifications', 'integrations', 'workflow'] },
        { title: 'Custom API connection', description: 'Connect two business systems and keep their data synchronized reliably.', features: ['integrations', 'data-sync', 'workflow', 'reports'] },
      ],
      problems: [
        'Data lives in separate systems that never talk to each other.',
        'Your team wastes hours on manual data entry between platforms.',
        'Missed leads because inquiry forms are disconnected from your CRM.',
      ],
      deliverables: [
        'Analysis of existing systems and integration requirements',
        'Custom API layer connecting your web app to third-party services',
        'Webhook handlers for real-time data sync',
        'Error handling, retry logic, and monitoring setup',
        'Secure credential management and environment configuration',
        'Integration tests and documentation',
      ],
      process: [
        'Audit of current tools and data flows',
        'Integration design and API contract definition',
        'Development with end-to-end testing',
        'Deployment and monitoring configuration',
      ],
      faqs: [
        {
          question: 'Which CRMs and platforms can you integrate with?',
          answer:
            'I can connect CRMs, payment providers, messaging tools, and internal systems that expose a REST or GraphQL API. I confirm compatibility and platform limitations during the integration audit.',
        },
        {
          question: 'Will the integration break if the third-party API changes?',
          answer:
            'I implement error handling and alerts so you are notified immediately if anything breaks, and can maintain the integration as APIs evolve.',
        },
        {
          question: 'Can you build a custom internal API?',
          answer:
            'Yes. I can design and build a custom REST API to serve your frontend or expose your data to other tools.',
        },
        {
          question: 'How do you handle sensitive credentials?',
          answer:
            'All secrets are stored as environment variables, never in source code, following security best practices.',
        },
        {
          question: 'Can you monitor integration failures?',
          answer:
            'Yes. I can add error logging, retry behavior, and notifications so failed webhooks or API requests are visible quickly.',
        },
      ],
      metaTitle: 'API & CRM Integration Services | Connect Your Business Tools',
      metaDescription:
        'Custom API and CRM integrations for web applications. Connect HubSpot, Stripe, Telegram, and more. Automated data flows and webhook handling.',
      primaryKeyword: 'API CRM integration',
      relatedProjects: [
        { id: 'qwiktwik', note: 'A full-stack platform using Nest.js, PostgreSQL, Redis, Prisma ORM, and AI integrations.' },
        { id: 'sea-travel', note: 'Structured availability, search, pricing, and reservation flows inside a travel booking platform.' },
      ],
    },
  },
  ua: {
    'landing-page': {
      title: 'Розробка лендінгу під ключ',
      heroHook: 'Сайт, який зрозуміло пояснює вашу пропозицію та приводить заявки.',
      ctaLabel: 'Обговорити лендінг',
      summary:
        'Розроблю односторінковий сайт для послуги, продукту або рекламної кампанії. Продумана структура, адаптивний дизайн, швидке завантаження та готовність до запуску реклами.',
      inquiryProjectType: 'website',
      offers: [
        { title: 'Лендінг для послуги', description: 'Коротко пояснює вашу пропозицію та веде відвідувача до дзвінка, заявки або консультації.', features: ['custom-design', 'lead-form', 'seo', 'analytics', 'performance'] },
        { title: 'Сторінка продукту', description: 'Підходить для запуску нового продукту, збору попередніх замовлень або перевірки попиту.', features: ['custom-design', 'lead-form', 'cms', 'analytics', 'performance'] },
        { title: 'Промосторінка', description: 'Окрема сторінка для акції, події, сезонної пропозиції або рекламної кампанії.', features: ['custom-design', 'lead-form', 'analytics', 'performance'] },
        { title: 'Оновлення лендінгу', description: 'Перероблю структуру, подачу та технічну частину сторінки, яка вже не дає потрібного результату.', features: ['custom-design', 'seo', 'analytics', 'performance'] },
      ],
      problems: [
        'Сайт виглядає добре, але майже не генерує звернень.',
        'Відвідувачі йдуть, не зробивши жодної дії, бо цінність незрозуміла.',
        'Шаблонні рішення не відображають вашу пропозицію та аудиторію.',
      ],
      deliverables: [
        'Індивідуальний дизайн сторінки в стилі вашого бренду',
        'Адаптивна верстка для телефонів, планшетів і комп’ютерів',
        'Форма заявки зі сповіщеннями на електронну пошту',
        'Базова підготовка до SEO: метатеги, мікророзмітка та карта сайту',
        'Оптимізація швидкості завантаження сторінки',
        'Публікація сайту на вашому хостингу та перевірка після запуску',
      ],
      process: [
        'Письмовий бриф із цілями, аудиторією та ключовою дією користувача',
        'Структура контенту та погодження вайрфрейму',
        'Розробка з ітеративними раундами зворотного зв\'язку',
        'Запуск, налаштування аналітики та перевірка після старту',
      ],
      faqs: [
        {
          question: 'Скільки часу займає розробка?',
          answer:
            'Зазвичай лендінг можна запустити за 1–2 тижні. Термін залежить від готовності текстів, матеріалів і швидкості погодження.',
        },
        {
          question: 'Чи потрібно мені надавати тексти та зображення?',
          answer:
            'Від вас потрібна інформація про послугу або продукт і матеріали бренду, якщо вони є. Я допоможу скласти структуру тексту та підібрати зображення.',
        },
        {
          question: 'Чи зможу я редагувати сторінку після запуску?',
          answer:
            'Так. За потреби підключу просту систему керування, щоб ви могли самостійно змінювати тексти та зображення без роботи з кодом.',
        },
        {
          question: 'Хостинг включено у вартість?',
          answer:
            'Оплата хостингу не входить у вартість розробки. Я допоможу обрати відповідний варіант, усе налаштувати та опублікувати сайт.',
        },
        {
          question: 'Що потрібно від мене перед стартом?',
          answer:
            'Розкажіть, що ви продаєте, хто ваш клієнт і яку дію він має зробити на сторінці. Також знадобляться логотип, фірмові матеріали та приклади сайтів, які вам подобаються.',
        },
      ],
      metaTitle: 'Лендінг під заявки | Розробка веб-сайтів',
      metaDescription:
        'Розробка лендінгу під ключ для послуги, продукту або реклами. Адаптивний дизайн, швидке завантаження та запуск за 1–2 тижні.',
      primaryKeyword: 'розробка лендінгу',
      relatedProjects: [
        { id: 'sea-travel', note: 'Сайт сервісу бронювання з пошуком, окремими сторінками напрямків і зрозумілим шляхом до заявки.' },
        { id: 'qwiktwik', note: 'Сайт цифрового продукту зі сторінками можливостей, завантаженням, тарифами та документацією.' },
      ],
    },
    'mvp-development': {
      title: 'Розробка MVP вебсервісу',
      heroHook: 'Першу версію продукту можна запустити без зайвих функцій і місяців підготовки.',
      ctaLabel: 'Обговорити MVP',
      summary:
        'Створю робочу версію вебсервісу, з якою можна перевірити ідею, показати продукт інвесторам і залучити перших користувачів.',
      inquiryProjectType: 'mvp',
      offers: [
        { title: 'SaaS-сервіс', description: 'Перша версія онлайн-продукту з акаунтами користувачів і головною платною функцією.', features: ['auth', 'roles', 'database', 'dashboard', 'payments', 'notifications', 'integrations', 'deployment'] },
        { title: 'Кабінет клієнта', description: 'Захищений розділ, де клієнти працюють із заявками, файлами, даними або вашими послугами.', features: ['auth', 'roles', 'database', 'dashboard', 'notifications', 'deployment'] },
        { title: 'Внутрішня система', description: 'Вебсервіс для команди, який замінює таблиці та скорочує повторювану ручну роботу.', features: ['roles', 'database', 'dashboard', 'integrations', 'deployment'] },
        { title: 'Конфігуратор продукту', description: 'Інтерактивний інструмент, що допомагає клієнту зібрати, розрахувати або замовити товар.', features: ['database', 'dashboard', 'payments', 'notifications', 'integrations', 'deployment'] },
      ],
      problems: [
        'Є ідея продукту, але немає чіткого шляху від концепції до працюючого ПЗ.',
        'Попередні спроби зупинились через постійне додавання нових функцій і нечіткі пріоритети.',
        'Потрібно щось реальне, щоб показати інвесторам, партнерам або першим клієнтам.',
      ],
      deliverables: [
        'Погоджений перелік функцій до початку розробки',
        'Повноцінний вебдодаток на Next.js зі зрозумілою архітектурою',
        'Авторизація користувачів і базове управління ролями',
        'Підключення бази даних і серверної частини',
        'Налаштування автоматичної публікації на Vercel або іншій платформі',
        'Документація для передачі або подальшої розробки',
      ],
      process: [
        'Письмове визначення скоупу: мінімальний набір функцій для підтвердження концепції',
        'Вибір архітектури та підтвердження технічного стеку',
        'Ітеративна розробка з щотижневими оновленнями',
        'Тестування, публікація та передача проєкту',
      ],
      faqs: [
        {
          question: 'Що вважається MVP?',
          answer:
            'MVP — це перша робоча версія продукту з головними функціями. Її достатньо, щоб залучити перших користувачів, перевірити попит і зрозуміти, що розвивати далі.',
        },
        {
          question: 'Скільки часу займає розробка MVP?',
          answer:
            'Невеликий MVP зазвичай займає 4–8 тижнів. Точний термін можна назвати після того, як визначимо головні функції першої версії.',
        },
        {
          question: 'Чи можете ви працювати з моїм наявним дизайном?',
          answer:
            'Так. Можу розробити продукт за готовими макетами у Figma або самостійно підготувати практичний інтерфейс, якщо дизайну ще немає.',
        },
        {
          question: 'Що відбувається після запуску MVP?',
          answer:
            'Після запуску я перевіряю роботу продукту, виправляю знайдені помилки та за потреби продовжую розробку наступних функцій.',
        },
        {
          question: 'Чи можна розвивати MVP після перевірки ідеї?',
          answer:
            'Так. Першу версію будую так, щоб успішні функції можна було розширювати без повної переробки продукту.',
        },
      ],
      metaTitle: 'Розробка MVP веб-додатку | Швидкий, зосереджений запуск',
      metaDescription:
        'Розробка MVP вебсервісу на Next.js. Від ідеї до першої робочої версії за 4–8 тижнів. Тестування та публікація включені.',
      primaryKeyword: 'розробка MVP веб-додатку',
      relatedProjects: [
        { id: 'qwiktwik', note: 'Повноцінний вебпродукт з акаунтами, особистим кабінетом, базою даних та інтеграціями зі штучним інтелектом.' },
        { id: 'night-light-configurator', note: 'Інтерактивний конфігуратор, у якому покупець може зібрати власний варіант товару перед замовленням.' },
      ],
    },
    'booking-system': {
      title: 'Розробка системи бронювання',
      heroHook: 'Бронювання, заявки та робота менеджерів — в одній системі.',
      ctaLabel: 'Обговорити систему',
      summary:
        'Розроблю онлайн-систему під ваші правила роботи: клієнти бачать доступні варіанти й залишають заявку, а команда керує бронюваннями в зручній адмінпанелі.',
      inquiryProjectType: 'system',
      offers: [
        { title: 'Онлайн-бронювання', description: 'Клієнт обирає дату, послугу або об’єкт, бачить доступність і надсилає заявку.', features: ['booking-flow', 'availability', 'notifications', 'payments'] },
        { title: 'Адмінпанель', description: 'Менеджери працюють із заявками, статусами, розкладом і даними клієнтів в одному місці.', features: ['admin-panel', 'permissions', 'workflow', 'reports'] },
        { title: 'Кабінет клієнта', description: 'Клієнт може переглянути, змінити або скасувати бронювання без дзвінка менеджеру.', features: ['auth', 'booking-flow', 'availability', 'notifications'] },
        { title: 'Автоматизація бронювань', description: 'Оплата, сповіщення, синхронізація з календарями та іншими сервісами.', features: ['notifications', 'integrations', 'data-sync', 'payments'] },
      ],
      problems: [
        'Доступність і заявки клієнтів зберігаються в повідомленнях, таблицях або різних сервісах.',
        'Команда повторює однакові оновлення вручну, а помилки доходять до клієнтів.',
        'Клієнти не бачать актуальних варіантів, доступності або зрозумілого наступного кроку.',
      ],
      deliverables: [
        'Клієнтський сценарій пошуку, заявки або бронювання',
        'Захищена адмінпанель для доступності й операційних даних',
        'Ролі, автентифікація та дії відповідно до прав доступу',
        'Email- або месенджер-сповіщення про важливі зміни статусу',
        'Серверна частина та база даних, побудовані під ваш робочий процес',
        'Адаптивні інтерфейси, тестування, запуск і документація',
      ],
      process: [
        'Карта поточного процесу бронювання або операцій і проблемних місць',
        'Визначення ролей, статусів, правил роботи з даними та складу першої версії',
        'Ітеративна розробка й перевірка клієнтського та адміністративного сценаріїв',
        'Перевірка нестандартних ситуацій, публікація та контроль після запуску',
      ],
      faqs: [
        {
          question: 'Чи може система замінити наші таблиці?',
          answer: 'Так, якщо правила даних і процес команди чітко визначені. Спочатку я аналізую поточну роботу, щоб система справді прибрала ручні операції, а не повторила складність таблиць.',
        },
        {
          question: 'Чи можна показувати актуальну доступність?',
          answer: 'Так. Доступність може розраховуватися з вашої бази даних або синхронізуватися із сумісним календарем чи сервісом бронювання.',
        },
        {
          question: 'Чи потрібен клієнтам акаунт?',
          answer: 'Не завжди. Рішення залежить від того, чи потрібно клієнтам повертатися, керувати бронюванням, оплачувати або переглядати приватні дані.',
        },
        {
          question: 'Чи можуть працівники мати різні права?',
          answer: 'Так. Рольовий доступ може обмежувати перегляд, редагування, підтвердження або експорт операційних даних.',
        },
      ],
      metaTitle: 'Розробка системи бронювання | Клієнтські та адміністративні процеси',
      metaDescription:
        'Індивідуальні системи бронювання та внутрішніх процесів: актуальна доступність, захищена адмінпанель, автоматизація й адаптивний клієнтський інтерфейс.',
      primaryKeyword: 'розробка системи бронювання',
      relatedProjects: [
        { id: 'sea-travel', note: 'Платформа бронювання з актуальною доступністю, пошуком, керуванням яхтами та окремою адмінпанеллю для команди.' },
      ],
    },
    'api-integration': {
      title: 'Інтеграція сайту з CRM та API',
      heroHook: 'Дані із сайту мають потрапляти в потрібний сервіс автоматично.',
      ctaLabel: 'Обговорити інтеграцію',
      summary:
        'Підключу сайт або вебсервіс до CRM, онлайн-оплати, месенджерів, систем бронювання та інших інструментів, якими користується ваш бізнес.',
      inquiryProjectType: 'system',
      offers: [
        { title: 'Інтеграція з CRM', description: 'Заявки, контакти та зміни статусів автоматично передаються між сайтом і вашою CRM.', features: ['integrations', 'data-sync', 'workflow', 'notifications'] },
        { title: 'Онлайн-оплата', description: 'Підключення разових платежів, підписок, статусів оплати та повідомлень для клієнта.', features: ['payments', 'integrations', 'notifications', 'data-sync'] },
        { title: 'Сповіщення в месенджерах', description: 'Важливі події та нові заявки надходять на пошту, у Telegram або інший зручний сервіс.', features: ['notifications', 'integrations', 'workflow'] },
        { title: 'Зв’язок між системами', description: 'Два окремі сервіси обмінюються потрібними даними без ручного копіювання.', features: ['integrations', 'data-sync', 'workflow', 'reports'] },
      ],
      problems: [
        'Дані зберігаються в різних системах, які не взаємодіють між собою.',
        'Команда витрачає години на ручне перенесення даних між платформами.',
        'Втрачені ліди через те, що форми звернень не пов\'язані з CRM.',
      ],
      deliverables: [
        'Аналіз наявних систем і вимог до інтеграції',
        'Окремий програмний модуль для підключення сторонніх сервісів',
        'Обробники вебхуків для синхронізації даних у реальному часі',
        'Обробка помилок, логіка повторних спроб і налаштування моніторингу',
        'Безпечне зберігання ключів доступу та налаштування середовища',
        'Інтеграційні тести та документація',
      ],
      process: [
        'Аудит поточних інструментів і потоків даних',
        'Проектування інтеграції та визначення API-контракту',
        'Розробка з наскрізним тестуванням',
        'Деплой і налаштування моніторингу',
      ],
      faqs: [
        {
          question: 'З якими CRM та платформами ви працюєте?',
          answer:
            'Працюю з CRM, платіжними сервісами, месенджерами та внутрішніми системами, які мають API. Перед початком перевіряю документацію сервісу й одразу повідомляю про можливі обмеження.',
        },
        {
          question: 'Що буде, якщо API сторонньої служби зміниться?',
          answer:
            'Інтеграція матиме журнал помилок і сповіщення про збої. Якщо зовнішній сервіс змінить правила роботи, проблему буде видно й інтеграцію можна буде швидко оновити.',
        },
        {
          question: 'Чи можете ви побудувати власний внутрішній API?',
          answer:
            'Так. Можу створити окремий API для сайту, мобільного застосунку або обміну даними з іншими системами.',
        },
        {
          question: 'Як ви зберігаєте конфіденційні дані?',
          answer:
            'Паролі і ключі доступу не потрапляють у код. Вони зберігаються окремо в захищених налаштуваннях сервера або платформи.',
        },
        {
          question: 'Чи можна відстежувати збої інтеграції?',
          answer:
            'Так. Додам журнал помилок, автоматичні повторні спроби та сповіщення, щоб команда швидко дізнавалася про проблему.',
        },
      ],
      metaTitle: 'API та CRM-інтеграція | Підключення бізнес-інструментів',
      metaDescription:
        'Кастомні API та CRM-інтеграції для веб-додатків. Підключення HubSpot, Stripe, Telegram та інших. Автоматизовані потоки даних і обробка вебхуків.',
      primaryKeyword: 'API CRM інтеграція',
      relatedProjects: [
        { id: 'qwiktwik', note: 'Вебплатформа з базою даних, серверною частиною та інтеграціями зі штучним інтелектом.' },
        { id: 'sea-travel', note: 'Система, що поєднує дані про доступність, пошук, розрахунок вартості та бронювання.' },
      ],
    },
  },
};

export function getServiceContent(locale: Locale, slug: ServiceSlug): ServiceContent {
  return services[locale][slug];
}
