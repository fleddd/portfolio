'use client';

import { motion } from 'motion/react';
import { Locale, getCopy } from '@/constants/i18n';
import { getServiceContent, ServiceSlug } from '@/constants/services';
import { Button, Section, SectionHeader } from '@/components/ui';
import { Contact, Footer, Navigation } from '@/components/index';

type ServiceDetailPageProps = {
  locale: Locale;
  slug: ServiceSlug;
};

export function ServiceDetailPage({ locale, slug }: ServiceDetailPageProps) {
  const service = getServiceContent(locale, slug);
  const baseHref = locale === 'ua' ? '/ua/services' : '/services';
  const homeHref = locale === 'ua' ? '/ua' : '/';
  const t = getCopy(locale);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main className="pt-20">
        {/* Hero Section */}
        <Section id="service-hero" bg="gradient-down" className="pt-40">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <a href={baseHref} className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                ← {locale === 'ua' ? 'Усі послуги' : 'All services'}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{service.title}</h1>
              <p className="text-xl text-gray-300">{service.summary}</p>
              <div className="flex gap-4 pt-4">
                <Button href="#details">{locale === 'ua' ? 'Детальніше' : 'View Details'}</Button>
                <Button href={`${homeHref}#contact`} variant="secondary">
                  {locale === 'ua' ? 'Обговорити' : 'Discuss'}
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Problems Section */}
        <Section id="problems" bg="solid">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              title={locale === 'ua' ? 'Проблеми, що ми вирішуємо' : 'Problems We Solve'}
              description={locale === 'ua' ? 'Звичайні хибні кроки, які гальмують ріст' : 'Common obstacles that slow your growth'}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
                >
                  <p className="text-gray-300">{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Deliverables Section */}
        <Section id="deliverables" bg="gradient-down">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              title={locale === 'ua' ? 'Що входить у послугу' : 'What You Get'}
              description={locale === 'ua' ? 'Конкретні результати, які ви отримаєте' : 'Concrete deliverables and outcomes'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((deliverable, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex gap-4 p-6 rounded-xl border border-cyan-400/20 bg-cyan-500/10"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <p className="text-gray-200">{deliverable}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section id="process" bg="solid">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              title={locale === 'ua' ? 'Як ми працюємо' : 'Our Process'}
              description={locale === 'ua' ? 'Чіткі етапи від ідеї до запуску' : 'Clear phases from discovery to launch'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 h-full">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 mb-4">
                      <span className="font-bold text-white text-lg">{idx + 1}</span>
                    </div>
                    <p className="text-gray-200">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="details" bg="gradient-down">
          <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
            <SectionHeader
              title={locale === 'ua' ? 'Часті запитання' : 'Frequently Asked'}
              description={locale === 'ua' ? 'Все, що потрібно знати перед початком' : 'Everything you should know before starting'}
            />
            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <motion.details
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 cursor-pointer hover:border-cyan-400/30 transition-colors"
                >
                  <summary className="flex items-center justify-between select-none">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <span className="text-cyan-400 group-open:rotate-180 transition-transform">▶</span>
                  </summary>
                  <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section id="cta" bg="solid">
          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-12 space-y-6"
            >
              <h2 className="text-3xl font-bold">
                {locale === 'ua'
                  ? 'Готові розпочати?'
                  : 'Ready to get started?'}
              </h2>
              <p className="text-lg text-gray-300">
                {locale === 'ua'
                  ? 'Обговоримо деталі вашого проєкту та знайдемо оптимальний варіант реалізації.'
                  : 'Let\'s discuss your specific needs and find the best approach for your stage.'}
              </p>
              <Button href={`${homeHref}#contact`} className="px-10 py-4 text-lg">
                {locale === 'ua' ? 'Запитати про послугу' : 'Inquiry Now'}
              </Button>
            </motion.div>
          </div>
        </Section>

        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="business" />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
