import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { LeadIntakeForm } from '@/components/LeadIntakeForm';
import { BrandLogo } from '@/components/BrandLogo';
import { INQUIRY_COPY } from '@/constants/inquiry';
import type { Locale } from '@/constants/i18n';

export function LeadIntakePage({ locale }: { locale: Locale }) {
  const copy = INQUIRY_COPY[locale];
  const homeHref = locale === 'ua' ? '/ua' : '/';
  const servicesHref = locale === 'ua' ? '/ua/services' : '/services';
  const languageHref = locale === 'ua' ? '/inquiry' : '/ua/inquiry';

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#0a0a0f]/90 backdrop-blur-xl">
        <div className="safe-area-x mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-20 lg:px-12">
          <Link href={homeHref} className="inline-flex min-h-11 items-center rounded-lg" aria-label={copy.backHome}>
            <BrandLogo className="h-7 w-auto drop-shadow-[0_0_8px_rgba(34,211,238,0.22)] md:h-8" priority />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href={servicesHref} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white sm:hidden">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {locale === 'ua' ? 'Послуги' : 'Services'}
            </Link>
            <Link href={homeHref} className="hidden min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white sm:inline-flex">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {copy.backHome}
            </Link>
            <Link href={languageHref} hrefLang={locale === 'ua' ? 'en' : 'uk'} data-language-switch className="inline-flex min-h-11 items-center rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10">
              {copy.switchLanguage}
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem-1px)] max-w-5xl flex-col px-5 py-8 md:h-[calc(100dvh-5rem-1px)] md:min-h-0 md:px-8 md:py-6 md:[@media(max-height:800px)]:py-3">
        <div className="mb-7 md:mb-5 md:[@media(max-height:800px)]:mb-3">
          <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl md:[@media(max-height:800px)]:text-xl">{copy.title}</h1>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-300 text-pretty md:text-base md:[@media(max-height:800px)]:text-sm">{copy.description}</p>
        </div>
        <LeadIntakeForm locale={locale} />
      </main>
    </div>
  );
}
