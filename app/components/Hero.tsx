'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui';
import { CONTACT_SOCIAL_LINKS } from '../constants';
import { Locale, getCopy } from '@/constants/i18n';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = getCopy(locale).hero;
  const inquiryHref = locale === 'ua' ? '/ua/inquiry' : '/inquiry';

  return (
    <section id="hero" className="relative flex min-h-[100svh] w-full min-w-0 items-center justify-center overflow-hidden pb-6 pt-16 md:pb-8 xl:pt-20">
      <div className="absolute inset-0 bg-[#0a0a0f]" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 left-0 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-5xl px-6 text-center lg:px-12">
        <h1 className="break-words text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl">
          <span className="block text-white">{t.headlineMain} </span>
          <span className="mt-1 block pb-[0.12em] bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {t.headlineAccent}
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl break-words text-lg leading-relaxed text-gray-300 text-pretty md:text-xl">
          {t.description}
        </p>

        <div className="mt-5 flex justify-center">
          <Button href={inquiryHref} className="!px-6 !py-3.5">{t.secondaryCta}</Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3" aria-label={locale === 'ua' ? 'Профілі та контакти' : 'Profiles and contact links'}>
          {CONTACT_SOCIAL_LINKS.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-white/10 transition-colors"
              aria-label={`${social.label} (${locale === 'ua' ? 'відкриється в новій вкладці' : 'opens in a new tab'})`}
              title={social.label}
            >
              <social.icon className="h-5 w-5 text-gray-300" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
