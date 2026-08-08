'use client';

import { motion } from 'motion/react';
import { ArrowRight, MousePointerClick, Rocket, Workflow } from 'lucide-react';
import { Locale } from '@/constants/i18n';
import { SERVICE_SLUGS, getServiceContent } from '@/constants/services';
import { Button, Section, SectionHeader } from '@/components/ui';
import { Contact, Footer, Navigation } from '@/components/index';
import { ServiceProjectCards } from '@/components/ServiceProjectCards';
import { ServicePattern } from '@/components/ServicePattern';
import type { ProjectSlug } from '@/constants/projects';
import { SITE_URL } from '@/constants/site';

type ServicesHubPageProps = {
  locale: Locale;
};

export function ServicesHubPage({ locale }: ServicesHubPageProps) {
  const homeHref = locale === 'ua' ? '/ua' : '/';
  const servicesBase = locale === 'ua' ? '/ua/services' : '/services';
  const pageUrl = `${SITE_URL}${servicesBase}`;
  const servicePaths = locale === 'ua'
    ? [
      { slug: 'landing-page' as const, problem: 'Сайт не приводить достатньо заявок', action: 'Побудувати лендінг під конверсію' },
      { slug: 'mvp-development' as const, problem: 'Ідею потрібно перевірити на реальних користувачах', action: 'Запустити сфокусований MVP' },
      { slug: 'api-integration' as const, problem: 'Команда переносить дані між сервісами вручну', action: 'Автоматизувати процес через API' },
    ]
    : [
      { slug: 'landing-page' as const, problem: 'The website is not generating enough qualified leads', action: 'Build a conversion-focused landing page' },
      { slug: 'mvp-development' as const, problem: 'The idea needs validation with real users', action: 'Launch a focused MVP' },
      { slug: 'api-integration' as const, problem: 'The team copies data between tools by hand', action: 'Automate the workflow through APIs' },
    ];
  const featuredProjects: { id: ProjectSlug; note: string }[] = locale === 'ua'
    ? [
      { id: 'sea-travel', note: 'Платформа бронювання з пошуком, pricing-сценаріями та SEO-сторінками напрямків.' },
      { id: 'qwiktwik', note: 'Full-stack продукт з dashboard, backend-архітектурою, Redis, PostgreSQL та AI-інтеграціями.' },
      { id: 'night-light-configurator', note: 'Інтерактивний JavaScript-конфігуратор для персоналізованого товару.' },
    ]
    : [
      { id: 'sea-travel', note: 'A booking platform with search, pricing flows, and search-focused destination pages.' },
      { id: 'qwiktwik', note: 'A full-stack product with dashboard UI, backend architecture, Redis, PostgreSQL, and AI integrations.' },
      { id: 'night-light-configurator', note: 'An interactive JavaScript configurator for a personalized physical product.' },
    ];
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}#services`,
    name: locale === 'ua' ? 'Послуги веб-розробки' : 'Web Development Services',
    itemListElement: SERVICE_SLUGS.map((slug, index) => {
      const service = getServiceContent(locale, slug);

      return {
        '@type': 'ListItem',
        position: index + 1,
        url: `${pageUrl}/${slug}`,
        name: service.title,
        description: service.summary,
      };
    }),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'ua' ? 'Головна' : 'Home',
        item: `${SITE_URL}${homeHref === '/' ? '' : homeHref}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'ua' ? 'Послуги' : 'Services',
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main className="pt-20">
        {/* Hero */}
        <Section id="services-hero" bg="gradient-down" className="min-h-[calc(100svh-5rem)] flex items-center py-12 lg:py-16 2xl:py-20">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <ServicePattern variant="orbit" className="-right-20 top-14 h-[360px] w-[360px] opacity-60" />
          <ServicePattern variant="dots" className="-bottom-16 -left-12" />
          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 2xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl space-y-5 2xl:space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {locale === 'ua' ? 'Веброзробка навколо бізнес-результату' : 'Web development built around the outcome'}
              </p>
              <h1
                className="font-bold tracking-tight leading-[1.04]"
                style={{ fontSize: 'clamp(2.75rem, min(3.7vw, 6.8svh), 4.25rem)' }}
              >
                {locale === 'ua' ? (
                  <>Більше заявок. <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Швидша перевірка ідеї.</span> Менше ручної роботи.</>
                ) : (
                  <>More qualified leads. <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Faster product validation.</span> Less manual work.</>
                )}
              </h1>
              <p className="max-w-3xl text-lg 2xl:text-xl text-gray-300 leading-relaxed">
                {locale === 'ua'
                  ? 'Створюю лендінги, MVP та інтеграції з чітким scope: кожне рішення має виконувати конкретну роботу для бізнесу.'
                  : 'I build landing pages, MVPs, and integrations with a clear scope: every solution must perform a specific job for the business.'}
              </p>
              <div className="flex flex-wrap gap-3 2xl:gap-4 pt-1">
                <Button href="#contact">
                  {locale === 'ua' ? 'Отримати план реалізації' : 'Get a Delivery Plan'}
                </Button>
                <Button href="#selected-work" variant="secondary">
                  {locale === 'ua' ? 'Переглянути реалізовані роботи' : 'See Proven Work'}
                </Button>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111119]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl 2xl:p-7"
            >
              <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/80 to-transparent" />
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative mb-4 2xl:mb-6 flex items-start justify-between gap-4 px-1">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    {locale === 'ua' ? 'Оберіть вашу ситуацію' : 'Choose your situation'}
                  </p>
                  <h2 className="text-xl font-semibold text-white 2xl:text-2xl">
                    {locale === 'ua' ? 'Що стримує ваш ріст?' : 'What is holding back growth?'}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                  3 {locale === 'ua' ? 'рішення' : 'paths'}
                </span>
              </div>

              <nav className="relative space-y-3" aria-label={locale === 'ua' ? 'Оберіть послугу за задачею' : 'Choose a service by challenge'}>
                {servicePaths.map((path, index) => {
                  const Icon = path.slug === 'landing-page'
                    ? MousePointerClick
                    : path.slug === 'mvp-development'
                      ? Rocket
                      : Workflow;

                  return (
                    <a
                      key={path.slug}
                      href={`${servicesBase}/${path.slug}`}
                      className="group relative flex items-center gap-3 2xl:gap-4 overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-3.5 2xl:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-lg hover:shadow-cyan-950/20"
                    >
                      <span className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-cyan-400/0 to-transparent transition-all duration-300 group-hover:via-cyan-400" />
                      <span className="flex h-11 w-11 2xl:h-12 2xl:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/8 text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/35 group-hover:bg-cyan-400/15">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="mb-1 block text-xs leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                          {path.problem}
                        </span>
                        <span className="block text-base font-semibold leading-snug text-white transition-colors group-hover:text-cyan-200 2xl:text-lg">
                          {path.action}
                        </span>
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400 group-hover:text-[#071014]">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                      <span className="absolute right-4 top-2 text-[10px] font-medium tracking-widest text-white/20">
                        0{index + 1}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </motion.aside>
            </div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section id="services-list" bg="solid">
          <ServicePattern variant="network" className="-left-20 top-20 h-56 w-96" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              title={locale === 'ua' ? 'Що я роблю' : 'What I Do'}
              description={
                locale === 'ua'
                  ? 'Кожна послуга вирішує конкретну бізнес-задачу'
                  : 'Each service is focused on a specific business outcome'
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICE_SLUGS.map((slug, idx) => {
                const service = getServiceContent(locale, slug);
                return (
                  <motion.a
                    key={slug}
                    href={`${servicesBase}/${slug}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/40 hover:bg-white/8 transition-colors"
                  >
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed flex-1">{service.summary}</p>
                    <span className="mt-6 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {locale === 'ua' ? 'Детальніше →' : 'Learn more →'}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Selected Work */}
        <Section id="selected-work" bg="gradient-down">
          <ServicePattern variant="dots" className="right-0 top-10" />
          <ServicePattern variant="orbit" className="-bottom-24 -left-24 h-72 w-72" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              title={locale === 'ua' ? 'Роботи, за якими можна оцінити підхід' : 'Work That Shows the Approach'}
              description={
                locale === 'ua'
                  ? 'Не абстрактні обіцянки, а реалізовані інтерфейси, продуктова логіка та full-stack рішення'
                  : 'Implemented interfaces, product logic, and full-stack systems — not abstract promises'
              }
            />
            <ServiceProjectCards locale={locale} items={featuredProjects} />
          </div>
        </Section>

        {/* CTA */}
        <Section id="services-cta" bg="gradient-down">
          <ServicePattern variant="network" className="bottom-8 right-0 h-48 w-80 opacity-70" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-12 space-y-6"
            >
              <h2 className="text-3xl font-bold">
                {locale === 'ua' ? 'Не впевнені, з чого почати?' : 'Not sure where to start?'}
              </h2>
              <p className="text-lg text-gray-300">
                {locale === 'ua'
                  ? 'Опишіть задачу — я підкажу оптимальний варіант.'
                  : 'Describe your situation and I will suggest the right fit.'}
              </p>
              <Button href="#contact" className="px-10 py-4 text-lg">
                {locale === 'ua' ? 'Написати' : 'Get in Touch'}
              </Button>
            </motion.div>
          </div>
        </Section>

        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="business" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([itemListSchema, breadcrumbSchema]),
        }}
      />
    </div>
  );
}
