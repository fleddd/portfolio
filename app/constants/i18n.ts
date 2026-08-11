export type Locale = "en" | "ua";

export const SUPPORTED_LOCALES: Locale[] = ["en", "ua"];

export const DEFAULT_LOCALE: Locale = "en";

export const copy = {
  en: {
    nav: {
      about: "About",
      solution: "Solutions",
      projects: "Projects",
      contact: "Contact",
      services: "Services",
      technical: "Technical",
      hireMe: "Hire Me",
      switchLanguage: "UA",
    },
    hero: {
      available: "Available for work",
      role: "Oleh Fedkiv · Full-Stack Web Developer",
      headlineMain: "Websites & web systems",
      headlineAccent: "built for your goals",
      description:
        "I design and build fast digital products that help you attract leads, manage bookings, and automate day-to-day workflows.",
      scroll: "Scroll to explore",
      primaryCta: "See Relevant Cases",
      secondaryCta: "Discuss Your Task",
    },
    about: {
      titleMain: "Outcome-Focused",
      titleAccent: "Development",
      p1:
        "I help companies, teams, and startups launch websites and web tools that directly support sales, bookings, and lead collection.",
      p2:
        "You get a clear delivery process, predictable timelines, and a product focused on measurable outcomes.",
      keywords:
        "When appropriate for the project, I use Next.js and an SEO-ready architecture, with lead funnel optimization integrated into the overall user journey.",
      chips: [
        "Lead-focused landing pages",
        "MVP launch in weeks, not months",
        "CRM and API integrations",
        "Technical SEO foundation",
      ],
      features: [
        {
          title: "Your Goal First",
          description: "Every section is built to drive an action: message, form submit, booking, or inquiry.",
        },
        {
          title: "Fast Delivery",
          description: "From structure to launch without unnecessary complexity and with clear milestones.",
        },
        {
          title: "Long-Term Reliability",
          description: "Clean architecture and maintainable code so your site stays stable as your needs grow.",
        },
      ],
      stats: {
        years: "Years in web development",
        months: "Months in commercial development",
        projects: "Featured case studies",
        clients: "Live products shown",
        commitment: "Response target",
      },
      values: {
        projects: "4",
        clients: "2",
        commitment: "24h",
      },
    },
    skills: {
      titleLeft: "Technical",
      titleRight: "Expertise",
      description: "Stack, architecture, and engineering capabilities behind delivery",
      note: "If you need implementation details, architecture decisions, or stack fit, this page is for you",
      resume: "Download Resume",
    },
      projects: {
      titleLeft: "Featured",
      titleRight: "Case Studies",
      description: "Selected projects relevant to booking flows, lead generation, and workflow automation",
      liveDemo: "Live",
      sourceCode: "Source Code",
      caseDetails: "View Details",
      more: "Need a similar solution for your project?",
      github: "View GitHub Profile",
    },
    technicalPage: {
      title: "Technical Profile",
      description:
        "Implementation stack, engineering approach, and practical capabilities for teams that evaluate technical fit.",
    },
    contact: {
      titleLeft: "Let's Build",
      titleRight: "Together",
      description: "Have a project in mind? Let's discuss how we can bring your vision to life",
      followMe: "Follow Me",
      available: "Available for Work",
      availableDescription: "Open to new opportunities and exciting projects",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "your.email@example.com",
        subject: "What's this about?",
        message: "Tell me about your project…",
      },
      send: "Send Message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you soon.",
      error: "Could not send message. Please try again or email me directly.",
    },
    footer: {
      subtitle: "Web developer focused on useful, measurable outcomes.",
      quickLinks: "Quick Links",
      copyrightSuffix: "precision",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      privacyHref: "/privacy-policy",
      termsHref: "/terms-of-service",
    },
    seo: {
      title: "Web Development for Business | Oleh Fedkiv",
      description:
        "Web development for SMB and startups: fast websites, lead-focused landing pages, MVP delivery, and API/CRM integrations.",
    },
    seoTechnical: {
      title: "Technical Profile | Oleh Fedkiv",
      description:
        "Technical page with stack details, architecture capabilities, integrations, and engineering focus areas.",
    },
  },
  ua: {
    nav: {
      about: "Про мене",
      solution: "Рішення",
      projects: "Кейси",
      contact: "Контакти",
      services: "Послуги",
      technical: "Технічні навички",
      hireMe: "Замовити",
      switchLanguage: "EN",
    },
    hero: {
      available: "Відкритий до співпраці",
      role: "Олег Федьків · розробник веб-рішень для бізнесу",
      headlineMain: "Сайти та вебсистеми",
      headlineAccent: "під ваші задачі",
      description:
        "Проєктую та розробляю швидкі цифрові продукти, які допомагають залучати заявки, керувати бронюваннями й автоматизувати щоденні процеси.",
      scroll: "Гортай, щоб дізнатися більше",
      primaryCta: "Переглянути релевантні кейси",
      secondaryCta: "Обговорити проєкт",
    },
    about: {
      titleMain: "Розробка з фокусом",
      titleAccent: "на результат",
      p1:
        "Працюю з компаніями, командами та стартапами, яким потрібен не просто сайт, а інструмент для лідів, продажів і стабільної обробки заявок.",
      p2:
        "Ви отримуєте зрозумілий процес, контроль термінів і продукт, який вирішує конкретну задачу.",
      keywords:
        "Залежно від задачі використовую Next.js, закладаю SEO-архітектуру та оптимізую шлях користувача від першого переходу до заявки.",
      chips: [
        "Лендінги під заявки",
        "MVP запуск за тижні",
        "Інтеграції CRM та API",
        "Технічна SEO-основа",
      ],
      features: [
        {
          title: "Спочатку — ваша задача",
          description: "Кожен блок сторінки працює на дію: заявка, повідомлення, бронювання або контакт.",
        },
        {
          title: "Швидкий запуск без хаосу",
          description: "Етапи прозорі, дедлайни фіксуються, пріоритети узгоджуються до старту робіт.",
        },
        {
          title: "Надійність у довгу",
          description: "Чиста архітектура і підтримуваний код, щоб продукт спокійно масштабувався далі.",
        },
      ],
      stats: {
        years: "Років у веброзробці (з 2023)",
        months: "Місяців комерційної розробки (із серпня 2025)",
        projects: "Опублікованих кейсів",
        clients: "Показаних live-продуктів",
        commitment: "Орієнтир для відповіді",
      },
      values: {
        projects: "4",
        clients: "2",
        commitment: "24h",
      },
    },
    skills: {
      titleLeft: "Технічна",
      titleRight: "експертиза",
      description: "Стек, архітектурні підходи та інженерні можливості для складних задач",
      note: "Ця сторінка для тих, кому важливо оцінити технічну глибину та відповідність стеку",
      resume: "Завантажити резюме",
    },
    projects: {
      titleLeft: "Реалізовані",
      titleRight: "кейси",
      description: "Роботи, що релевантні для лідів, бронювань та автоматизації процесів",
      liveDemo: "Демо",
      sourceCode: "Вихідний код",
      caseDetails: "Детальніше про кейс",
      more: "Потрібне схоже рішення під вашу задачу?",
      github: "Переглянути GitHub профіль",
    },
    technicalPage: {
      title: "Технічні навички",
      description:
        "Сторінка зі стеком, підходом до архітектури, інтеграціями та практичними інженерними можливостями.",
    },
    contact: {
      titleLeft: "Давайте створимо",
      titleRight: "разом",
      description: "Опишіть задачу, і я запропоную оптимальний формат реалізації",
      followMe: "Соцмережі",
      available: "Доступний для нових проєктів",
      availableDescription: "Відповідаю швидко та можу підключитися до задач у короткі терміни",
      fields: {
        name: "Ім'я",
        email: "Email",
        subject: "Тема",
        message: "Повідомлення",
      },
      placeholders: {
        name: "Ваше ім'я",
        email: "your.email@example.com",
        subject: "Коротко про задачу",
        message: "Опишіть ваш проєкт, цілі, дедлайн та очікування…",
      },
      send: "Надіслати",
      sending: "Надсилаю…",
      success: "Повідомлення надіслано! Відповім найближчим часом.",
      error: "Не вдалося надіслати. Спробуйте ще раз або напишіть напряму на email.",
    },
    footer: {
      subtitle: "Розробляю цифрові рішення, що приносять вимірюваний результат.",
      quickLinks: "Швидкі посилання",
      copyrightSuffix: "увагою до деталей",
      privacy: "Політика конфіденційності",
      terms: "Умови користування",
      privacyHref: "/ua/privacy-policy",
      termsHref: "/ua/terms-of-service",
    },
    seo: {
      title: "Розробка сайтів і веб-рішень для бізнесу | Олег Федьків",
      description:
        "Розробка швидких сайтів, лендінгів і MVP для бізнесу: заявки, автоматизація процесів, технічне SEO та інтеграції API/CRM.",
    },
    seoTechnical: {
      title: "Технічний профіль | Олег Федьків",
      description:
        "Технічні навички: стек, архітектурні підходи, інтеграції, продуктивність та технічне SEO.",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
