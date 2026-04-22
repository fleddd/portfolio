export type Locale = "en" | "uk";

export const SUPPORTED_LOCALES: Locale[] = ["en", "uk"];

export const DEFAULT_LOCALE: Locale = "en";

export const copy = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me",
      switchLanguage: "UA",
      switchLanguageHref: "/uk",
    },
    hero: {
      available: "Available for work",
      role: "Full-Stack Developer",
      description:
        "Building robust, scalable applications with precision and technical excellence.",
      scroll: "Scroll to explore",
      primaryCta: "View My Work",
      secondaryCta: "Get In Touch",
    },
    about: {
      titleMain: "Building Digital",
      titleAccent: "Strength",
      p1:
        "I'm a Full-Stack Developer specializing in robust, scalable web applications. Transforming complex requirements into elegant, high-performance solutions.",
      p2:
        "Technical precision combined with creative problem-solving and best practices.",
      stats: {
        years: "Years in Tech",
        months: "Months of commercial experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        commitment: "Commitment",
      },
    },
    skills: {
      titleLeft: "Skills &",
      titleRight: "Expertise",
      description: "A comprehensive toolkit for building modern, scalable applications",
      note: "Always learning and staying updated with the latest technologies",
      resume: "Download Resume",
    },
    projects: {
      titleLeft: "Featured",
      titleRight: "Projects",
      description: "Production-grade applications showcasing technical excellence",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      more: "Want to see more projects and contributions?",
      github: "View GitHub Profile",
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
      subtitle: "Full-Stack Developer crafting exceptional digital experiences.",
      quickLinks: "Quick Links",
      copyrightSuffix: "precision",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      privacyHref: "/privacy-policy",
      termsHref: "/terms-of-service",
    },
    seo: {
      title: "Oleh Fedkiv | Full-Stack Developer",
      description:
        "Full-Stack Developer for high-performance websites, custom business modules, SEO-ready Next.js landing pages, and API integrations.",
    },
  },
  uk: {
    nav: {
      about: "Про мене",
      skills: "Навички",
      projects: "Проєкти",
      contact: "Контакти",
      hireMe: "Замовити",
      switchLanguage: "EN",
      switchLanguageHref: "/",
    },
    hero: {
      available: "Відкритий до співпраці",
      role: "Full-Stack Розробник",
      description:
        "Створюю швидкі, масштабовані веб-рішення, що приносять бізнесу заявки та продажі.",
      scroll: "Гортай, щоб дізнатися більше",
      primaryCta: "Переглянути роботи",
      secondaryCta: "Обговорити проєкт",
    },
    about: {
      titleMain: "Будую цифрову",
      titleAccent: "перевагу",
      p1:
        "Я Full-Stack розробник, який спеціалізується на сучасних веб-додатках, MVP та лендінгах із фокусом на продуктивність і конверсію.",
      p2:
        "Поєдную інженерну точність, бізнес-мислення та технічне SEO, щоб сайт працював як інструмент залучення клієнтів.",
      stats: {
        years: "Років у технологіях",
        months: "Місяців комерційного досвіду",
        projects: "Завершених проєктів",
        clients: "Задоволених клієнтів",
        commitment: "Віддача",
      },
    },
    skills: {
      titleLeft: "Навички та",
      titleRight: "експертиза",
      description: "Інструменти для створення сучасних, надійних і масштабованих продуктів",
      note: "Постійно оновлюю підхід і технології під реальні задачі бізнесу",
      resume: "Завантажити резюме",
    },
    projects: {
      titleLeft: "Вибрані",
      titleRight: "проєкти",
      description: "Продакшн-рішення, що демонструють технічну глибину та якість",
      liveDemo: "Демо",
      sourceCode: "Вихідний код",
      more: "Хочете побачити більше робіт та активностей?",
      github: "Перейти в GitHub",
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
      subtitle: "Full-Stack розробник, який створює результативні цифрові рішення.",
      quickLinks: "Швидкі посилання",
      copyrightSuffix: "увагою до деталей",
      privacy: "Політика конфіденційності",
      terms: "Умови користування",
      privacyHref: "/uk/privacy-policy",
      termsHref: "/uk/terms-of-service",
    },
    seo: {
      title: "Олег Федків | Full-Stack Розробник",
      description:
        "Розробка швидких сайтів і лендінгів на Next.js, MVP до 1 місяця, технічне SEO, інтеграції API/CRM та кастомні бізнес-модулі.",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
