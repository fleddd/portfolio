'use client';

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Locale, getCopy } from '@/constants/i18n';
import { BrandLogo } from '@/components/BrandLogo';

type FooterProps = {
  locale: Locale;
  mode: 'business' | 'technical';
};

export function Footer({ locale, mode }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = getCopy(locale).footer;

  const isUa = locale === 'ua';
  const links = mode === 'business'
    ? [
      { label: isUa ? 'Про мене' : 'About', href: isUa ? '/ua#about' : '/#about' },
      { label: isUa ? 'Досвід' : 'Experience', href: isUa ? '/ua#experience' : '/#experience' },
      { label: isUa ? 'Рішення' : 'Solutions', href: isUa ? '/ua#solutions' : '/#solutions' },
      { label: isUa ? 'Розпочати проєкт' : 'Start a Project', href: isUa ? '/ua/inquiry' : '/inquiry' },
      { label: isUa ? 'Технічні навички' : 'Technical Skills', href: isUa ? '/ua/technical' : '/technical' },
    ]
    : [
      { label: isUa ? 'Навички' : 'Skills', href: isUa ? '/ua/technical#skills' : '/technical#skills' },
      { label: isUa ? 'Кейси' : 'Cases', href: isUa ? '/ua/technical#projects' : '/technical#projects' },
      { label: isUa ? 'Розпочати проєкт' : 'Start a Project', href: isUa ? '/ua/inquiry' : '/inquiry' },
      { label: isUa ? 'Досвід' : 'Experience', href: isUa ? '/ua#experience' : '/#experience' },
      { label: isUa ? 'Бізнес-сторінка' : 'Business Page', href: isUa ? '/ua' : '/' },
    ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <motion.div
            className="max-w-lg space-y-4"
          >
            <a
              href={isUa ? '/ua' : '/'}
              className="inline-flex min-h-11 items-center gap-3 rounded-lg"
              aria-label={isUa ? 'Перейти на головну сторінку' : 'Go to homepage'}
            >
              <BrandLogo className="h-14 w-auto drop-shadow-[0_0_12px_rgba(34,211,238,0.18)]" />
              <h2 className="text-2xl font-bold text-white">Oleh Fedkiv</h2>
            </a>
            <p className="text-gray-300 leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
          >
            <h2 className="font-semibold text-white">{t.quickLinks}</h2>
            <ul className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-sm text-gray-300 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row"
        >
          <p className="text-gray-300 text-sm flex items-center gap-2">
            {locale === 'ua' ? (
              <>
                © {currentYear} Oleh Fedkiv. Створено з <Heart className="w-4 h-4 text-red-500" aria-hidden="true" /> {t.copyrightSuffix}
              </>
            ) : (
              <>
                © {currentYear} Oleh Fedkiv. Built with <Heart className="w-4 h-4 text-red-500" aria-hidden="true" /> {t.copyrightSuffix}
              </>
            )}
          </p>
          <div className="flex gap-6">
            <a href={t.privacyHref} className="inline-flex min-h-11 items-center text-sm text-gray-300 transition-colors hover:text-cyan-300">
              {t.privacy}
            </a>
            <a href={t.termsHref} className="inline-flex min-h-11 items-center text-sm text-gray-300 transition-colors hover:text-cyan-300">
              {t.terms}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
    </footer>
  );
}
