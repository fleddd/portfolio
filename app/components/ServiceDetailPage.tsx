'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale } from '@/constants/i18n';
import { getServiceContent, ServiceSlug } from '@/constants/services';
import { INQUIRY_FEATURES } from '@/constants/inquiry';
import { Button, Section } from '@/components/ui';
import { Contact, Footer, Navigation } from '@/components/index';
import { ServiceProjectCards } from '@/components/ServiceProjectCards';
import { CONTACT_EMAIL, SITE_URL } from '@/constants/site';

type ServiceDetailPageProps = {
  locale: Locale;
  slug: ServiceSlug;
};

export function ServiceDetailPage({ locale, slug }: ServiceDetailPageProps) {
  const service = getServiceContent(locale, slug);
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const selectedOffer = service.offers[selectedOfferIndex];
  const availableFeatures = INQUIRY_FEATURES[locale][service.inquiryProjectType];
  const includedFeatures = selectedOffer.features.map((value) => ({
    value,
    label: availableFeatures.find((feature) => feature.value === value)?.label ?? value,
  }));
  const servicesBase = locale === 'ua' ? '/ua/services' : '/services';
  const homeHref = locale === 'ua' ? '/ua' : '/';
  const inquiryHref = locale === 'ua' ? '/ua/inquiry' : '/inquiry';
  const configuredInquiryHref = `${inquiryHref}?projectType=${service.inquiryProjectType}&features=${selectedOffer.features.join(',')}`;
  const pageUrl = `${SITE_URL}${servicesBase}/${slug}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.title,
    description: service.summary,
    url: pageUrl,
    serviceType: service.primaryKeyword,
    areaServed: ['Ukraine', 'Europe', 'Worldwide'],
    availableLanguage: locale === 'ua' ? ['Ukrainian', 'English'] : ['English', 'Ukrainian'],
    provider: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Oleh Fedkiv',
      email: CONTACT_EMAIL,
    },
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
        name: service.title,
        item: pageUrl,
      },
    ],
  };
  const faqSchema = {
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
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main id="main-content" tabIndex={-1} className="pt-16 xl:pt-20">
        {/* Hero Section */}
        <Section id="service-hero" bg="solid" className="border-b border-white/10 pb-16 pt-10 md:pb-20 md:pt-14 lg:pb-24 lg:pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <a
              href={servicesBase}
              className="inline-flex min-h-10 items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              ← {locale === 'ua' ? 'Усі послуги' : 'All services'}
            </a>

            <div className="mt-8 max-w-5xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400">
                {locale === 'ua' ? 'Розробка для бізнесу' : 'Web development for business'}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-white md:text-xl">
                {service.heroHook}
              </p>
              <p className="mt-3 max-w-3xl leading-relaxed text-gray-400 md:text-lg">{service.summary}</p>
              <div className="mt-7">
                <Button href={inquiryHref}>{service.ctaLabel}</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Interactive service configurator */}
        <Section id="solutions" bg="solid" className="border-b border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-10 max-w-3xl md:mb-14">
              <p className="mb-4 text-sm font-medium text-cyan-400">
                {locale === 'ua' ? 'Конфігуратор послуги' : 'Service configurator'}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {locale === 'ua' ? 'Оберіть потрібний формат' : 'Choose the Right Format'}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
                {locale === 'ua'
                  ? 'Перемикайте варіанти, щоб побачити, які функції входять у кожне рішення. Обраний набір можна одразу перенести у форму заявки.'
                  : 'Switch between options to see the features included in each solution. You can send the selected setup straight to the inquiry form.'}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101016] shadow-2xl shadow-black/20 lg:grid lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)]">
              <div
                className="border-b border-white/10 lg:border-b-0 lg:border-r"
                aria-label={locale === 'ua' ? 'Варіанти послуги' : 'Service options'}
              >
                {service.offers.map((offer, idx) => (
                  <button
                    key={offer.title}
                    id={`service-option-${idx}`}
                    type="button"
                    aria-pressed={selectedOfferIndex === idx}
                    onClick={() => setSelectedOfferIndex(idx)}
                    className={`relative flex w-full items-start gap-5 border-b border-white/10 px-6 py-5 text-left transition-colors last:border-b-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300 md:px-7 md:py-6 ${
                      selectedOfferIndex === idx
                        ? 'bg-cyan-400/8 text-white'
                        : 'text-gray-400 hover:bg-white/4 hover:text-white'
                    }`}
                  >
                    <span
                      className={`mt-1 font-mono text-xs transition-colors ${selectedOfferIndex === idx ? 'text-cyan-300' : 'text-gray-600'}`}
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold tracking-tight md:text-xl">{offer.title}</span>
                      <span className={`mt-2 block text-sm leading-relaxed ${selectedOfferIndex === idx ? 'text-gray-300' : 'text-gray-500'}`}>
                        {offer.description}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div
                id="service-features"
                aria-live="polite"
                className="relative flex min-h-full flex-col overflow-hidden p-6 md:p-8 lg:p-10"
              >
                <div
                  className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                    {locale === 'ua' ? 'Входить у цей варіант' : 'Included in this option'}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {selectedOffer.title}
                  </h3>

                  <div className="mt-8 grid border-t border-white/12 sm:grid-cols-2">
                    {includedFeatures.map((feature, idx) => (
                      <div
                        key={feature.value}
                        className="grid grid-cols-[1.75rem_1fr] gap-3 border-b border-white/12 py-4 sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
                      >
                        <span className="font-mono text-xs text-gray-600" aria-hidden="true">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-200 md:text-base">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-auto pt-9">
                  <Link
                    href={configuredInquiryHref}
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-[#071014] transition-colors hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101016]"
                  >
                    {locale === 'ua' ? 'Перенести у форму' : 'Continue with this setup'}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <p className="mt-3 text-sm text-gray-500">
                    {locale === 'ua'
                      ? 'У формі можна додати або прибрати будь-яку функцію.'
                      : 'You can add or remove any feature in the form.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Relevant Work Section */}
        <Section bg="solid" className="border-b border-white/10 py-16 md:py-24">
          <div id="work" className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-10 max-w-2xl md:mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {locale === 'ua' ? 'Релевантні роботи' : 'Relevant Work'}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                {locale === 'ua'
                  ? 'Реальні проєкти, де можна оцінити підхід, інтерфейси та технічну реалізацію'
                  : 'Real projects that demonstrate the delivery approach, interfaces, and technical implementation'}
              </p>
            </div>
            <ServiceProjectCards locale={locale} items={service.relatedProjects} />
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="details" bg="solid" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:px-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {locale === 'ua' ? 'Часті запитання' : 'Frequently Asked'}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-gray-400">
                {locale === 'ua' ? 'Що варто знати перед початком' : 'What to know before getting started'}
              </p>
            </div>
            <div className="border-t border-white/15">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-white/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 select-none">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <span
                      className="text-xl font-light text-gray-400 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Contact locale={locale} />
      </main>

      <Footer locale={locale} mode="business" />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />
    </div>
  );
}
