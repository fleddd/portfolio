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
        "I create websites and web tools that help you get more clients and spend less time on routine — all done turnkey.",
      scroll: "Scroll to explore",
      primaryCta: "See Relevant Cases",
      secondaryCta: "Discuss Your Task",
    },
    about: {
      titleMain: "Outcome-Focused",
      titleAccent: "Development",
      p1:
        "I build websites and web tools that drive sales, bookings, and leads — delivered turnkey for companies and startups.",
      p2:
        "Clear process. Predictable timelines. Measurable outcomes.",
      keywords:
        "Next.js, SEO-ready architecture, and lead funnel optimization — when the project calls for it.",
      chips: [
        "Lead-focused landing pages",
        "MVP launch in weeks, not months",
        "CRM and API integrations",
        "Technical SEO foundation",
      ],
      features: [
        {
          title: "Define Goals",
          description: "Align on audience, outcome, and success criteria before code starts.",
        },
        {
          title: "Build & Validate",
          description: "Ship a working product through clear milestones and validated flows.",
        },
        {
          title: "Launch & Improve",
          description: "Monitor the result, then iterate as your needs evolve.",
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
      description: "Booking, lead generation, and workflow automation — shipped and live",
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
        name: "e.g., Alex Morgan…",
        email: "alex@example.com…",
        subject: "e.g., Booking platform…",
        message: "Tell me about your project…",
      },
      send: "Send Message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you soon.",
      error: "Could not send message. Please try again or email me directly.",
      validation: {
        required: "Please complete this field.",
        email: "Enter a valid email address, for example alex@example.com.",
        summary: "Check the highlighted fields and try again.",
      },
      privacyPrefix: "By sending this message, you agree to the",
      privacyLink: "Privacy Policy",
      replyTime: "I usually reply within 24 hours.",
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
        "Створюю сайти та вебінструменти під ключ, що допомагають отримувати більше клієнтів і менше часу витрачати на рутину.",
      scroll: "Гортай, щоб дізнатися більше",
      primaryCta: "Переглянути релевантні кейси",
      secondaryCta: "Обговорити проєкт",
    },
    about: {
      titleMain: "Розробка з фокусом",
      titleAccent: "на результат",
      p1:
        "Створюю сайти та вебінструменти, які приносять ліди, продажі та заявки — під ключ для компаній і стартапів.",
      p2:
        "Зрозумілий процес. Контроль термінів. Вимірюваний результат.",
      keywords:
        "Next.js, SEO-архітектура та оптимізація воронки — коли це відповідає задачі.",
      chips: [
        "Лендінги під заявки",
        "MVP запуск за тижні",
        "Інтеграції CRM та API",
        "Технічна SEO-основа",
      ],
      features: [
        {
          title: "Визначаємо цілі",
          description: "Узгоджуємо аудиторію, результат і критерії успіху до початку коду.",
        },
        {
          title: "Розробка та перевірка",
          description: "Випускаю робочий продукт через зрозумілі етапи та перевірені сценарії.",
        },
        {
          title: "Запуск і розвиток",
          description: "Моніторимо результат, потім ітеруємо під ваші потреби.",
        },
      ],
      stats: {
        years: "Років у веброзробці",
        months: "Місяців комерційної розробки",
        projects: "Опублікованих кейсів",
        clients: "Показаних live-продуктів",
        commitment: "Орієнтир для відповіді",
      },
      values: {
        projects: "4",
        clients: "2",
        commitment: "12h",
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
      description: "Ліди, бронювання та автоматизація — реалізовано і працює",
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
        name: "Наприклад, Олександр Коваль…",
        email: "oleksandr@example.com…",
        subject: "Наприклад, платформа бронювання…",
        message: "Опишіть ваш проєкт, цілі, дедлайн та очікування…",
      },
      send: "Надіслати",
      sending: "Надсилаю…",
      success: "Повідомлення надіслано! Відповім найближчим часом.",
      error: "Не вдалося надіслати. Спробуйте ще раз або напишіть напряму на email.",
      validation: {
        required: "Заповніть це поле.",
        email: "Вкажіть коректну email-адресу, наприклад oleksandr@example.com.",
        summary: "Перевірте виділені поля та спробуйте ще раз.",
      },
      privacyPrefix: "Надсилаючи повідомлення, ви погоджуєтеся з",
      privacyLink: "Політикою конфіденційності",
      replyTime: "Зазвичай відповідаю протягом 24 годин.",
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
