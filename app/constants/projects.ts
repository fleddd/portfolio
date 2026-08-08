import type { LucideIcon } from 'lucide-react';
import { Code, Layers, Zap } from 'lucide-react';
import type { Locale } from './i18n';

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectLocalizedContent = {
  title: string;
  category: string;
  description: string;
  metaDescription: string;
  overview: string;
  challenge: string;
  contributions: readonly string[];
  outcome: string;
  screenshots: readonly ProjectScreenshot[];
};

export type Project = {
  id: string;
  tech: readonly string[];
  seoKeywords: Record<Locale, readonly string[]>;
  gradient: string;
  icon: LucideIcon;
  sourceCode: string;
  livePreview: string;
  content: Record<Locale, ProjectLocalizedContent>;
};

// Edit project texts and screenshot paths here. Put image files in
// public/projects/<project-slug>/ and use paths such as
// /projects/sea-travel/homepage.webp.
export const PROJECTS = [
  {
    id: 'sea-travel',
    tech: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'VPS'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: Layers,
    sourceCode: '',
    livePreview: 'https://seatravel.hr',
    seoKeywords: {
      en: ['travel booking platform development', 'multi-vendor booking system', 'online reservation software', 'Next.js booking website', 'travel technology case study'],
      ua: ['розробка платформи бронювання', 'мультивендорна система бронювання', 'сайт онлайн-бронювання', 'Next.js розробка', 'кейс travel tech'],
    },
    content: {
      en: {
        title: 'Sea Travel Booking Platform',
        category: 'Booking System',
        description: 'Multi-vendor booking platform with real-time availability, secure checkout, and scalable admin logic.',
        metaDescription: 'Sea Travel case study: a multi-vendor booking platform built with Next.js, PostgreSQL, Prisma ORM, and VPS infrastructure.',
        overview: 'Replace this text with a concise overview of the product, its audience, and the business goal behind the project.',
        challenge: 'Describe the original problem, key constraints, and why the client needed a custom booking platform.',
        contributions: [
          'Describe the parts of the product you designed or developed.',
          'Add the most important technical or product decisions you made.',
          'Mention integrations, performance work, deployment, or ongoing support.',
        ],
        outcome: 'Add measurable results, delivered functionality, client feedback, or the current status of the platform.',
        screenshots: [
          { src: '/projects/sea-travel/homepage.jpg', alt: 'Sea Travel Croatia yacht charter and boat rental homepage', caption: 'Responsive homepage with charter search, destination offers, FAQ, social content, and service navigation.' },
          { src: '/projects/sea-travel/searchbar.webp', alt: 'Sea Travel boat search results with filters for yacht rental in Croatia', caption: 'Boat search interface with dates, vessel type, price, capacity, equipment filters, and sortable results.' },
          { src: '/projects/sea-travel/booking.webp', alt: 'Sea Travel yacht booking price summary and optional extras interface', caption: 'Booking step with selected dates, security deposit, mandatory extras, and a transparent price summary.' },
          { src: '/projects/sea-travel/article.webp', alt: 'Sea Travel SEO destination page for boat rental in the Zadar region', caption: 'Search-focused destination content for regional boat rental and sailing routes in Croatia.' },
          { src: '/projects/sea-travel/footer.webp', alt: 'Sea Travel yacht charter website footer with services and useful links', caption: 'Service-led footer architecture with charter categories, regional information, and internal navigation.' },
        ],
      },
      ua: {
        title: 'Sea Travel Booking Platform',
        category: 'Система бронювання',
        description: 'Мультивендорна платформа бронювання з онлайн-доступністю, безпечними оплатами та масштабованою адмін-логікою.',
        metaDescription: 'Кейс Sea Travel: мультивендорна платформа бронювання на Next.js, PostgreSQL і Prisma ORM із розгортанням на VPS.',
        overview: 'Замініть цей текст стислим описом продукту, його аудиторії та бізнес-мети проєкту.',
        challenge: 'Опишіть початкову проблему, ключові обмеження та чому клієнту була потрібна власна система бронювання.',
        contributions: [
          'Опишіть частини продукту, які ви проєктували або розробляли.',
          'Додайте найважливіші технічні чи продуктові рішення, які ви прийняли.',
          'Згадайте інтеграції, оптимізацію, деплой або подальшу підтримку.',
        ],
        outcome: 'Додайте вимірювані результати, реалізований функціонал, відгук клієнта або поточний статус платформи.',
        screenshots: [
          { src: '/projects/sea-travel/homepage.webp', alt: 'Головна сторінка Sea Travel для оренди яхт і човнів у Хорватії', caption: 'Адаптивна головна сторінка з пошуком чартерів, пропозиціями напрямків, FAQ, соціальним контентом і навігацією послуг.' },
          { src: '/projects/sea-travel/searchbar.webp', alt: 'Результати пошуку Sea Travel з фільтрами оренди яхт у Хорватії', caption: 'Інтерфейс пошуку човнів із вибором дат, типу судна, ціни, місткості, обладнання та сортуванням результатів.' },
          { src: '/projects/sea-travel/booking.webp', alt: 'Інтерфейс бронювання яхти Sea Travel з підсумком вартості та додатковими послугами', caption: 'Етап бронювання з вибраними датами, страховим депозитом, обов’язковими доплатами та прозорим підсумком ціни.' },
          { src: '/projects/sea-travel/article.webp', alt: 'SEO-сторінка Sea Travel про оренду човнів у регіоні Задар', caption: 'Пошукова сторінка напрямку з контентом про оренду човнів і морські маршрути в Хорватії.' },
          { src: '/projects/sea-travel/footer.webp', alt: 'Footer сайту Sea Travel з послугами яхтового чартеру та корисними посиланнями', caption: 'Структурований footer із категоріями чартеру, регіональною інформацією та внутрішньою навігацією.' },
        ],
      },
    },
  },
  {
    id: 'qwiktwik',
    tech: ['Next.js', 'Nest.js', 'PostgreSQL', 'Docker', 'Redis', 'AI integrations', 'Prisma ORM'],
    seoKeywords: {
      en: ['Windows gaming optimization website', 'PC performance software website', 'gaming SaaS frontend development', 'conversion-focused product website', 'technical SEO for software products', 'responsive web development'],
      ua: ['сайт для оптимізації Windows', 'вебсайт gaming-продукту', 'frontend-розробка SaaS', 'конверсійний продуктовий сайт', 'технічне SEO для software-продукту', 'адаптивна веброзробка'],
    },
    gradient: 'from-violet-500 to-cyan-500',
    icon: Zap,
    sourceCode: '',
    livePreview: 'https://qwiktwik.com',
    content: {
      en: {
        title: 'QwikTwik — Windows Gaming Optimization Platform',
        category: 'Software Product Website',
        description: 'A conversion-focused web experience that turns complex Windows optimization into a clear path from performance problem to Free or Pro product choice.',
        metaDescription: 'QwikTwik case study: responsive product website and conversion UX for Windows gaming optimization software focused on PC performance, lower background load, and clearer Free-to-Pro journeys.',
        overview: 'QwikTwik is a Windows optimization product for gamers who want less background bloat, smoother frame times, and a faster-feeling PC. The website brings the product, Free and Pro plans, educational guides, reviews, updates, and affiliate program into one coherent customer journey.',
        challenge: 'The main web challenge was to explain a technical performance product in language gamers understand, build trust around system-level tweaks, and guide visitors toward the right action without burying them in low-level terminology.',
        contributions: [
          'Worked on a responsive product experience that communicates the value of Windows gaming optimization across desktop and mobile screens.',
          'Structured high-intent journeys around product benefits, Free and Pro options, documentation, reviews, and download actions.',
          'Strengthened discoverability with SEO-oriented content structure, clear page hierarchy, internal linking, and search-focused landing content.',
        ],
        outcome: 'The result is a product-led website where visitors can understand what QwikTwik does, compare available options, learn through practical PC optimization content, and move toward download or purchase with less friction.',
        screenshots: [
          { src: '/projects/qwiktwik/homepage.webp', alt: 'QwikTwik Windows PC gaming optimization product homepage', caption: 'Product-led homepage presenting Windows gaming tweaks, Free download, Pro optimization, and the desktop application.' },
          { src: '/projects/qwiktwik/articles.png', alt: 'QwikTwik gaming PC optimization blog with searchable Windows guides', caption: 'Searchable content hub with categories for Windows, GPU, network, OS, and RAM optimization articles.' },
          { src: '/projects/qwiktwik/dashboard.png', alt: 'QwikTwik customer dashboard with Pro plan and system overview', caption: 'Authenticated product dashboard with onboarding progress, license details, downloads, feedback, and community access.' },
          { src: '/projects/qwiktwik/settings.png', alt: 'QwikTwik account settings and connected accounts interface', caption: 'Account management interface for profile security, connected services, and email preferences.' },
        ],
      },
      ua: {
        title: 'QwikTwik — платформа оптимізації Windows для gaming',
        category: 'Сайт програмного продукту',
        description: 'Конверсійний вебдосвід, який перетворює складну оптимізацію Windows на зрозумілий шлях від проблеми з продуктивністю до вибору Free або Pro.',
        metaDescription: 'Кейс QwikTwik: адаптивний продуктовий сайт і conversion UX для програми оптимізації Windows, підвищення gaming-продуктивності та зрозумілого переходу від Free до Pro.',
        overview: 'QwikTwik — продукт для оптимізації Windows, орієнтований на геймерів, яким важливі менше фонового навантаження, стабільніший frame time і швидша реакція системи. Сайт об’єднує продукт, Free та Pro плани, практичні гайди, відгуки, оновлення й affiliate-програму в цілісний користувацький шлях.',
        challenge: 'Головною задачею було пояснити технічний продукт зрозумілою для геймерів мовою, сформувати довіру до системних оптимізацій і провести відвідувача до потрібної дії без перевантаження низькорівневими термінами.',
        contributions: [
          'Працював над адаптивним продуктовим інтерфейсом, який доносить цінність оптимізації Windows на desktop і mobile.',
          'Вибудував high-intent сценарії навколо переваг продукту, Free і Pro версій, документації, відгуків та завантаження.',
          'Посилив SEO-структуру сторінок, ієрархію контенту, внутрішню перелінковку та пошукові посадкові матеріали.',
        ],
        outcome: 'Результат — продуктовий сайт, де користувач швидко розуміє можливості QwikTwik, порівнює варіанти, знаходить практичні матеріали про PC optimization і без зайвого тертя переходить до завантаження або покупки.',
        screenshots: [
          { src: '/projects/qwiktwik/homepage.webp', alt: 'Головна сторінка QwikTwik для gaming-оптимізації Windows PC', caption: 'Продуктова головна сторінка з Windows gaming tweaks, Free-завантаженням, Pro-оптимізацією та desktop-застосунком.' },
          { src: '/projects/qwiktwik/articles.png', alt: 'Блог QwikTwik із пошуком гайдів з оптимізації Windows і gaming PC', caption: 'Пошуковий контент-хаб із категоріями матеріалів про Windows, GPU, network, OS і RAM.' },
          { src: '/projects/qwiktwik/dashboard.png', alt: 'Особистий кабінет QwikTwik із Pro-планом і системним оглядом', caption: 'Авторизований dashboard з onboarding, ліцензією, завантаженнями, відгуками та доступом до спільноти.' },
          { src: '/projects/qwiktwik/settings.png', alt: 'Налаштування акаунта QwikTwik і підключених сервісів', caption: 'Інтерфейс керування профілем, безпекою, підключеними сервісами та email-налаштуваннями.' },
        ],
      },
    },
  },
  {
    id: 'mevdev-frontend',
    tech: ['React', 'HTML', 'Tailwind CSS', 'Frontend Development', 'Responsive UI', 'Web Interfaces'],
    seoKeywords: {
      en: ['frontend development case study', 'responsive web interface', 'custom frontend development', 'reusable UI development', 'business website frontend'],
      ua: ['кейс frontend-розробки', 'адаптивний вебінтерфейс', 'розробка frontend', 'повторно використовуваний UI', 'frontend для бізнес-сайту'],
    },
    gradient: 'from-blue-500 to-indigo-500',
    icon: Code,
    sourceCode: '',
    livePreview: '',
    content: {
      en: {
        title: 'MevDev — Frontend Development',
        category: 'Commercial Frontend',
        description: 'Frontend implementation focused on turning approved designs and product requirements into a responsive, consistent, and maintainable web interface.',
        metaDescription: 'MevDev frontend development case study: responsive web interface implementation, reusable UI patterns, consistent visual states, and cross-device usability.',
        overview: 'MevDev was a commercial frontend project where my responsibility was the user-facing web interface. This case focuses specifically on frontend delivery rather than claiming ownership of backend systems or the complete product.',
        challenge: 'The task was to translate visual requirements into a stable interface, preserve consistency between pages and components, and ensure the experience remained usable across common screen sizes.',
        contributions: [
          'Implemented responsive page sections and reusable interface elements based on project requirements.',
          'Worked with the project’s frontend stack to reproduce layouts, interactions, and visual states in the browser.',
          'Improved cross-device behavior, component consistency, and maintainability of the frontend code.',
        ],
        outcome: 'The frontend work delivered a practical web interface aligned with the project’s visual direction. Add specific pages, interaction details, or team feedback here when you prepare the final case study.',
        screenshots: [
          { src: '/projects/mevdev-frontend/homepage.webp', alt: 'DexMev Solana analytics dashboard frontend developed for MevDev', caption: 'Dark responsive dashboard with Solana wallet data, epoch progress, MEV performance metrics, and bot status cards.' },
        ],
      },
      ua: {
        title: 'MevDev — frontend-розробка',
        category: 'Комерційний frontend',
        description: 'Реалізація frontend із фокусом на перетворення дизайнів і продуктових вимог на адаптивний, послідовний та підтримуваний вебінтерфейс.',
        metaDescription: 'Кейс frontend-розробки MevDev: адаптивний вебінтерфейс, повторно використовувані UI-патерни, послідовні візуальні стани та зручність на різних пристроях.',
        overview: 'MevDev — комерційний проєкт, у якому моєю зоною відповідальності був користувацький frontend. Кейс свідомо фокусується на frontend-роботі без приписування собі backend або всього продукту.',
        challenge: 'Задача полягала в перенесенні візуальних вимог у стабільний інтерфейс, збереженні послідовності між сторінками й компонентами та коректній роботі на поширених розмірах екранів.',
        contributions: [
          'Реалізував адаптивні секції сторінок і повторно використовувані елементи інтерфейсу відповідно до вимог проєкту.',
          'Працював із frontend-стеком проєкту для відтворення макетів, взаємодій та візуальних станів у браузері.',
          'Покращував поведінку на різних пристроях, послідовність компонентів і підтримуваність frontend-коду.',
        ],
        outcome: 'Frontend-робота дала практичний вебінтерфейс відповідно до візуального напряму проєкту. Тут можна додати конкретні сторінки, деталі взаємодій або відгук команди для фінальної версії кейсу.',
        screenshots: [
          { src: '/projects/mevdev-frontend/homepage.webp', alt: 'Frontend аналітичного Solana dashboard DexMev, розроблений для MevDev', caption: 'Темний адаптивний dashboard із даними Solana wallet, прогресом epoch, MEV-метриками та статусами ботів.' },
        ],
      },
    },
  },
  {
    id: 'night-light-configurator',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    seoKeywords: {
      en: ['custom night light configurator', 'interactive product configurator', 'JavaScript product builder', 'ecommerce product customization', 'HTML CSS JavaScript project'],
      ua: ['конструктор нічників', 'інтерактивний конфігуратор товару', 'конструктор продукту JavaScript', 'персоналізація товару для ecommerce', 'проєкт HTML CSS JavaScript'],
    },
    gradient: 'from-amber-400 to-fuchsia-500',
    icon: Layers,
    sourceCode: '',
    livePreview: '',
    content: {
      en: {
        title: 'Custom Night Light Configurator',
        category: 'Interactive Product Builder',
        description: 'An interactive HTML, CSS, and JavaScript configurator that helps customers personalize a night light and understand their selected product before ordering.',
        metaDescription: 'Custom night light configurator case study built with HTML, CSS, and JavaScript: interactive product customization, responsive UI, live option selection, and conversion-focused ecommerce UX.',
        overview: 'The night light configurator turns a customizable physical product into a clear digital experience. Instead of describing preferences in a message, a customer can choose available options step by step and see how those choices shape the final order.',
        challenge: 'Personalized products create uncertainty: customers need to understand available combinations, while the business needs structured order details. The interface had to keep multiple choices simple without losing context on mobile screens.',
        contributions: [
          'Built the product configuration flow with semantic HTML, responsive CSS, and client-side JavaScript.',
          'Implemented option selection, interface state updates, validation, and a clear progression toward the order action.',
          'Focused the frontend on visual clarity, mobile usability, and fewer ambiguities in custom product requests.',
        ],
        outcome: 'The configurator replaces an error-prone manual explanation with a guided product-building flow. Add the exact options, order integration, and conversion result here for the final case study.',
        screenshots: [
          { src: '/projects/night-light-configurator/main.png', alt: 'Custom photo night light configurator with live product preview', caption: 'Interactive product builder with photo upload, night light shape selection, live preview, and size options.' },
          { src: '/projects/night-light-configurator/second.png', alt: 'Four-photo personalized night light layout configurator', caption: 'Multi-photo layout with four upload zones, visual template selection, and product size controls.' },
          { src: '/projects/night-light-configurator/third.png', alt: 'Night light text date font and alignment customization controls', caption: 'Detailed personalization controls for draggable text, date, alignment, font family, and font size.' },
        ],
      },
      ua: {
        title: 'Конструктор персоналізованих нічників',
        category: 'Інтерактивний конфігуратор товару',
        description: 'Інтерактивний конструктор на HTML, CSS і JavaScript, який допомагає покупцеві персоналізувати нічник і зрозуміти обраний варіант до оформлення замовлення.',
        metaDescription: 'Кейс конструктора нічників на HTML, CSS і JavaScript: інтерактивна персоналізація товару, адаптивний UI, вибір опцій і conversion-focused ecommerce UX.',
        overview: 'Конструктор нічників перетворює персоналізований фізичний товар на зрозумілий цифровий сценарій. Замість опису побажань у повідомленнях покупець покроково обирає доступні параметри й бачить, як вони формують майбутнє замовлення.',
        challenge: 'Персоналізовані товари створюють невизначеність: клієнту потрібно розуміти доступні комбінації, а бізнесу — отримувати структуровані параметри замовлення. Інтерфейс мав спростити кілька груп опцій і не втрачати контекст на мобільних екранах.',
        contributions: [
          'Побудував сценарій конфігурації товару на семантичному HTML, адаптивному CSS і клієнтському JavaScript.',
          'Реалізував вибір опцій, оновлення стану інтерфейсу, валідацію та зрозумілий перехід до оформлення.',
          'Зосередив frontend на візуальній ясності, mobile usability і зменшенні помилок у запитах на персоналізацію.',
        ],
        outcome: 'Конфігуратор замінює неточний ручний опис керованим сценарієм створення товару. Для фінального кейсу тут можна додати точні опції, інтеграцію замовлення та результат для конверсії.',
        screenshots: [
          { src: '/projects/night-light-configurator/main.png', alt: 'Конструктор нічника з фото та живим попереднім переглядом товару', caption: 'Інтерактивний конструктор із завантаженням фото, вибором форми нічника, live preview та розміром виробу.' },
          { src: '/projects/night-light-configurator/second.png', alt: 'Конструктор персоналізованого нічника з макетом на чотири фото', caption: 'Мультифото-макет із чотирма зонами завантаження, вибором візуального шаблону та розміру товару.' },
          { src: '/projects/night-light-configurator/third.png', alt: 'Налаштування тексту дати шрифту та вирівнювання для нічника', caption: 'Детальні параметри персоналізації: перетягуваний текст, дата, вирівнювання, сімейство та розмір шрифту.' },
        ],
      },
    },
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof PROJECTS)[number]['id'];

export const PROJECT_SLUGS = PROJECTS.map((project) => project.id) as ProjectSlug[];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.id === slug);
}

export function getProjectContent(project: (typeof PROJECTS)[number], locale: Locale) {
  return project.content[locale];
}
