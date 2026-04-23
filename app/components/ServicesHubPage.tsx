'use client';

import { motion } from 'motion/react';
import { Locale } from '@/constants/i18n';
import { SERVICE_SLUGS, getServiceContent, ServiceSlug } from '@/constants/services';
import { Button, Section, SectionHeader } from '@/components/ui';
import { Contact, Footer, Navigation } from '@/components/index';

type ServicesHubPageProps = {
  locale: Locale;
};

export function ServicesHubPage({ locale }: ServicesHubPageProps) {
  const homeHref = locale === 'ua' ? '/ua' : '/';
  const servicesBase = locale === 'ua' ? '/ua/services' : '/services';

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main className="pt-20">
        {/* Hero */}
        <Section id="services-hero" bg="gradient-down" className="pt-40">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                {locale === 'ua' ? 'Послуги' : 'Services'}
              </h1>
              <p className="text-xl text-gray-300">
                {locale === 'ua'
                  ? 'Обирайте послугу, яка відповідає вашому етапу і завданням.'
                  : 'Pick the service that matches your current stage and goals.'}
              </p>
              <Button href={`${homeHref}#contact`} variant="secondary">
                {locale === 'ua' ? 'Обговорити задачу' : 'Discuss Your Task'}
              </Button>
            </motion.div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section id="services-list" bg="solid">
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
              {SERVICE_SLUGS.map((slug: ServiceSlug, idx) => {
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

        {/* CTA */}
        <Section id="services-cta" bg="gradient-down">
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
              <Button href={`${homeHref}#contact`} className="px-10 py-4 text-lg">
                {locale === 'ua' ? 'Написати' : 'Get in Touch'}
              </Button>
            </motion.div>
          </div>
        </Section>

        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="business" />
    </div>
  );
}
