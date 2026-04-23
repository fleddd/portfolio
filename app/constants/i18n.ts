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
      role: "Web Solutions Developer",
      description:
        "I build fast websites and digital systems that turn traffic into qualified leads.",
      scroll: "Scroll to explore",
      primaryCta: "See Relevant Cases",
      secondaryCta: "Discuss Your Task",
    },
    about: {
      titleMain: "Business-Driven",
      titleAccent: "Development",
      p1:
        "I help small and medium businesses launch websites and web tools that directly support sales, bookings, and lead collection.",
      p2:
        "You get a clear delivery process, predictable timelines, and a product focused on measurable outcomes.",
      chips: [
        "Lead-focused landing pages",
        "MVP launch in weeks, not months",
        "CRM and API integrations",
        "Technical SEO foundation",
      ],
      features: [
        {
          title: "Business First",
          description: "Every section is built to drive an action: call, form submit, booking, or inquiry.",
        },
        {
          title: "Fast Delivery",
          description: "From structure to launch without unnecessary complexity and with clear milestones.",
        },
        {
          title: "Long-Term Reliability",
          description: "Clean architecture and maintainable code so your site stays stable as your business grows.",
        },
      ],
      stats: {
        years: "Years of hands-on development",
        months: "Months of direct commercial delivery",
        projects: "Completed client and product projects",
        clients: "Satisfied clients",
        commitment: "Response and ownership",
      },
      values: {
        years: "3+",
        months: "12+",
        projects: "15+",
        clients: "5+",
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
      titleRight: "Business Cases",
      description: "Selected projects relevant to booking flows, lead generation, and business automation",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      more: "Need a similar solution for your business?",
      github: "View GitHub Profile",
      items: [
        {
          title: "Sea Travel Booking Platform",
          category: "Booking System",
          description:
            "Multi-vendor booking platform with real-time availability, secure checkout, and scalable admin logic.",
        },
        {
          title: "AI-Powered Copywriting Tool",
          category: "SaaS MVP",
          description:
            "Content optimization product with custom style settings for teams that need faster marketing production.",
        },
        {
          title: "Telegram Bot with Web API",
          category: "Lead Automation",
          description:
            "Automation flow with API integration and notifications to reduce missed requests and speed up response time.",
        },
      ],
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
        message: "Tell me about your project...",
      },
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Could not send message. Please try again or email me directly.",
    },
    footer: {
      subtitle: "Web developer focused on measurable business outcomes.",
      quickLinks: "Quick Links",
      copyrightSuffix: "precision",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      privacyHref: "/privacy-policy",
      termsHref: "/terms-of-service",
    },
    seo: {
      title: "Oleh Fedkiv | Web Development for Business",
      description:
        "Web development for SMB and startups: fast websites, lead-focused landing pages, MVP delivery, and API/CRM integrations.",
    },
    seoTechnical: {
      title: "Oleh Fedkiv | Technical Profile",
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
      role: "Розробник веб-рішень для бізнесу",
      description:
        "Створюю швидкі сайти та веб-системи, які генерують заявки, автоматизують процеси й не гальмують ріст бізнесу.",
      scroll: "Гортай, щоб дізнатися більше",
      primaryCta: "Переглянути релевантні кейси",
      secondaryCta: "Обговорити проєкт",
    },
    about: {
      titleMain: "Розробка з фокусом",
      titleAccent: "на результат",
      p1:
        "Працюю з бізнесами та стартапами, яким потрібен не просто сайт, а інструмент для лідів, продажів і стабільної обробки заявок.",
      p2:
        "Ви отримуєте зрозумілий процес, контроль термінів і продукт, який вирішує конкретну бізнес-задачу.",
      chips: [
        "Лендінги під заявки",
        "MVP запуск за тижні",
        "Інтеграції CRM та API",
        "Технічна SEO-основа",
      ],
      features: [
        {
          title: "Бізнес-логіка на першому місці",
          description: "Кожен блок сторінки працює на дію: заявка, дзвінок, бронювання або контакт.",
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
        years: "Років практичного досвіду розробки",
        months: "Місяців прямої комерційної роботи",
        projects: "Завершених проєктів",
        clients: "Задоволених клієнтів",
        commitment: "Швидкість зворотного зв'язку",
      },
      values: {
        years: "3+",
        months: "12+",
        projects: "15+",
        clients: "5+",
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
      titleRight: "бізнес-кейси",
      description: "Лише ті роботи, що релевантні для лідів, бронювань та бізнес-автоматизації",
      liveDemo: "Демо",
      sourceCode: "Вихідний код",
      more: "Потрібне схоже рішення під ваш бізнес?",
      github: "Переглянути GitHub профіль",
      items: [
        {
          title: "Sea Travel Booking Platform",
          category: "Система бронювання",
          description:
            "Мультивендорна платформа бронювання з онлайн-доступністю, безпечними оплатами та масштабованою адмін-логікою.",
        },
        {
          title: "AI-Powered Copywriting Tool",
          category: "SaaS MVP",
          description:
            "Продукт для оптимізації контенту з налаштуванням власного стилю та пришвидшенням маркетингового продакшну.",
        },
        {
          title: "Telegram Bot with Web API",
          category: "Автоматизація заявок",
          description:
            "Автоматизований потік із API-інтеграціями та сповіщеннями, щоб не втрачати звернення й швидше відповідати клієнтам.",
        },
      ],
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
        message: "Опишіть ваш проєкт, цілі, дедлайн та очікування...",
      },
      send: "Надіслати",
      sending: "Надсилаю...",
      success: "Повідомлення надіслано! Відповім найближчим часом.",
      error: "Не вдалося надіслати. Спробуйте ще раз або напишіть напряму на email.",
    },
    footer: {
      subtitle: "Розробляю цифрові рішення, що працюють на бізнес-результат.",
      quickLinks: "Швидкі посилання",
      copyrightSuffix: "увагою до деталей",
      privacy: "Політика конфіденційності",
      terms: "Умови користування",
      privacyHref: "/ua/privacy-policy",
      termsHref: "/ua/terms-of-service",
    },
    seo: {
      title: "Олег Федьків | Розробка сайтів і веб-рішень для бізнесу",
      description:
        "Розробка швидких сайтів, лендінгів і MVP для бізнесу: заявки, автоматизація процесів, технічне SEO та інтеграції API/CRM.",
    },
    seoTechnical: {
      title: "Олег Федьків | Технічний профіль",
      description:
        "Технічні навички: стек, архітектурні підходи, інтеграції, продуктивність та технічне SEO.",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
