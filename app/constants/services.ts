import { Locale } from './i18n';

export const SERVICE_SLUGS = [
  'landing-page',
  'mvp-development',
  'api-integration',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

type FAQ = {
  question: string;
  answer: string;
};

type ServiceContent = {
  title: string;
  summary: string;
  problems: string[];
  deliverables: string[];
  process: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
};

const services: Record<Locale, Record<ServiceSlug, ServiceContent>> = {
  en: {
    'landing-page': {
      title: 'Lead-Focused Landing Page',
      summary:
        'A conversion-optimised landing page built to turn visitors into qualified leads — fast to launch, easy to measure.',
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
        'Discovery call to align on goals, audience, and key conversion action',
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
      ],
      metaTitle: 'Lead-Focused Landing Page | Web Development Services',
      metaDescription:
        'Custom landing pages built for lead generation. Fast load times, mobile-first design, and conversion-focused structure. Launch in 1–2 weeks.',
      primaryKeyword: 'landing page development',
    },
    'mvp-development': {
      title: 'MVP Web Application',
      summary:
        'A focused, production-ready web application that validates your idea and attracts early users — without overbuilding.',
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
        'Scope workshop to define the minimum feature set that proves the concept',
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
            'Typically 4–8 weeks for a focused scope. Larger or more complex products are estimated after the discovery session.',
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
      ],
      metaTitle: 'MVP Web Application Development | Fast, Focused Launch',
      metaDescription:
        'Production-ready MVP development with Next.js. From idea to working product in 4–8 weeks. Clean code, scalable architecture, deployment included.',
      primaryKeyword: 'MVP web application development',
    },
    'api-integration': {
      title: 'API & CRM Integration',
      summary:
        'Connect your website or app to the tools your business runs on — CRMs, payment gateways, booking systems, and more.',
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
            'I have experience with HubSpot, Pipedrive, Notion, Airtable, Stripe, Telegram, and any service that exposes a REST or GraphQL API.',
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
      ],
      metaTitle: 'API & CRM Integration Services | Connect Your Business Tools',
      metaDescription:
        'Custom API and CRM integrations for web applications. Connect HubSpot, Stripe, Telegram, and more. Automated data flows and webhook handling.',
      primaryKeyword: 'API CRM integration',
    },
  },
  ua: {
    'landing-page': {
      title: 'Лендінг під заявки',
      summary:
        'Лендінг, оптимізований під конверсію: перетворює відвідувачів на потенційних клієнтів — швидкий запуск, прозора аналітика.',
      problems: [
        'Сайт виглядає добре, але майже не генерує звернень.',
        'Відвідувачі йдуть, не зробивши жодної дії, бо цінність незрозуміла.',
        'Шаблонні рішення не відображають вашу пропозицію та аудиторію.',
      ],
      deliverables: [
        'Індивідуальний дизайн сторінки в стилі вашого бренду',
        'Mobile-first, повністю адаптивна верстка',
        'Форма зворотного зв\'язку з email-сповіщеннями',
        'Технічна SEO-основа (мета-теги, schema, sitemap)',
        'Оптимізація Core Web Vitals для швидкого завантаження',
        'Готовий до деплою код або пряме розгортання на вашій інфраструктурі',
      ],
      process: [
        'Ознайомлювальна зустріч: цілі, аудиторія, ключова дія',
        'Структура контенту та погодження вайрфрейму',
        'Розробка з ітеративними раундами зворотного зв\'язку',
        'Запуск, налаштування аналітики та перевірка після старту',
      ],
      faqs: [
        {
          question: 'Скільки часу займає розробка?',
          answer:
            'Зазвичай 1–2 тижні від старту до запуску, залежно від готовності контенту та швидкості зворотного зв\'язку.',
        },
        {
          question: 'Чи потрібно мені надавати тексти та зображення?',
          answer:
            'Ви надаєте основне повідомлення та брендові матеріали. Я можу структурувати текст і підібрати безкоштовні зображення за потреби.',
        },
        {
          question: 'Чи зможу я редагувати сторінку після запуску?',
          answer:
            'Так. Я передаю чистий, добре структурований код і можу налаштувати CMS, якщо вам зручніше редагувати без коду.',
        },
        {
          question: 'Хостинг включено у вартість?',
          answer:
            'Хостинг не входить у вартість, але я можу порекомендувати та допомогти налаштувати відповідний провайдер (Vercel, Netlify або ваш VPS).',
        },
      ],
      metaTitle: 'Лендінг під заявки | Розробка веб-сайтів',
      metaDescription:
        'Індивідуальні лендінги для генерації лідів. Швидке завантаження, mobile-first дизайн і структура під конверсію. Запуск за 1–2 тижні.',
      primaryKeyword: 'розробка лендінгу',
    },
    'mvp-development': {
      title: 'MVP веб-додаток',
      summary:
        'Зосереджений, готовий до виробництва веб-додаток, який валідує вашу ідею та залучає перших користувачів — без зайвої розробки.',
      problems: [
        'Є ідея продукту, але немає чіткого шляху від концепції до працюючого ПЗ.',
        'Попередні спроби зупинились через розростання скоупу або нечіткі пріоритети.',
        'Потрібно щось реальне, щоб показати інвесторам, партнерам або першим клієнтам.',
      ],
      deliverables: [
        'Погоджений перелік функцій до початку розробки',
        'Full-stack Next.js додаток із чистою архітектурою',
        'Авторизація користувачів і базове управління ролями',
        'Інтеграція з базою даних і API-шаром',
        'Пайплайн деплою на Vercel або обраній вами платформі',
        'Документація для передачі або подальшої розробки',
      ],
      process: [
        'Воркшоп по скоупу: мінімальний набір функцій для підтвердження концепції',
        'Вибір архітектури та підтвердження технічного стеку',
        'Ітеративна розробка з щотижневими оновленнями',
        'Тестування, деплой і передача',
      ],
      faqs: [
        {
          question: 'Що вважається MVP?',
          answer:
            'MVP — це мінімальна робоча версія вашого продукту, що приносить реальну цінність першим користувачам і дозволяє збирати значущий зворотний зв\'язок.',
        },
        {
          question: 'Скільки часу займає розробка MVP?',
          answer:
            'Зазвичай 4–8 тижнів для зосередженого скоупу. Більші або складніші продукти оцінюються після сесії discovery.',
        },
        {
          question: 'Чи можете ви працювати з моїм наявним дизайном?',
          answer:
            'Так. Я можу впровадити надані Figma-макети або створити функціональний UI, якщо дизайну ще немає.',
        },
        {
          question: 'Що відбувається після запуску MVP?',
          answer:
            'Я пропоную період підтримки після запуску та можу продовжити як партнер з розробки для подальших ітерацій.',
        },
      ],
      metaTitle: 'Розробка MVP веб-додатку | Швидкий, зосереджений запуск',
      metaDescription:
        'Розробка готового до виробництва MVP на Next.js. Від ідеї до працюючого продукту за 4–8 тижнів. Чистий код, масштабована архітектура, деплой включено.',
      primaryKeyword: 'розробка MVP веб-додатку',
    },
    'api-integration': {
      title: 'API та CRM-інтеграція',
      summary:
        'Підключіть ваш сайт або додаток до інструментів, на яких працює бізнес — CRM, платіжні шлюзи, системи бронювання та інше.',
      problems: [
        'Дані зберігаються в різних системах, які не взаємодіють між собою.',
        'Команда витрачає години на ручне перенесення даних між платформами.',
        'Втрачені ліди через те, що форми звернень не пов\'язані з CRM.',
      ],
      deliverables: [
        'Аналіз наявних систем і вимог до інтеграції',
        'Кастомний API-шар для підключення до сторонніх сервісів',
        'Обробники вебхуків для синхронізації даних у реальному часі',
        'Обробка помилок, логіка повторних спроб і налаштування моніторингу',
        'Безпечне управління ключами та конфігурація середовища',
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
            'Маю досвід з HubSpot, Pipedrive, Notion, Airtable, Stripe, Telegram та будь-яким сервісом з REST або GraphQL API.',
        },
        {
          question: 'Що буде, якщо API сторонньої служби зміниться?',
          answer:
            'Я впроваджую обробку помилок та сповіщення, щоб ви отримали негайне повідомлення про будь-яку проблему, і можу підтримувати інтеграцію в міру розвитку API.',
        },
        {
          question: 'Чи можете ви побудувати власний внутрішній API?',
          answer:
            'Так. Я можу спроектувати та побудувати кастомний REST API для вашого фронтенду або для передачі даних іншим інструментам.',
        },
        {
          question: 'Як ви зберігаєте конфіденційні дані?',
          answer:
            'Усі секрети зберігаються як змінні середовища, ніколи в коді — відповідно до найкращих практик безпеки.',
        },
      ],
      metaTitle: 'API та CRM-інтеграція | Підключення бізнес-інструментів',
      metaDescription:
        'Кастомні API та CRM-інтеграції для веб-додатків. Підключення HubSpot, Stripe, Telegram та інших. Автоматизовані потоки даних і обробка вебхуків.',
      primaryKeyword: 'API CRM інтеграція',
    },
  },
};

export function getServiceContent(locale: Locale, slug: ServiceSlug): ServiceContent {
  return services[locale][slug];
}
