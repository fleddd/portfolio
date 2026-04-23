'use client';

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Locale, getCopy } from '@/constants/i18n';

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
      { label: isUa ? 'Про мене' : 'About', href: isUa ? '/ua#about' : '#about' },
      { label: isUa ? 'Послуги' : 'Services', href: isUa ? '/ua/services' : '/services' },
      { label: isUa ? 'Рішення' : 'Solutions', href: isUa ? '/ua#projects' : '#projects' },
      { label: isUa ? 'Контакти' : 'Contact', href: isUa ? '/ua#contact' : '#contact' },
      { label: isUa ? 'Технічні навички' : 'Technical Skills', href: isUa ? '/ua/technical' : '/technical' },
    ]
    : [
      { label: isUa ? 'Навички' : 'Skills', href: isUa ? '/ua/technical#skills' : '/technical#skills' },
      { label: isUa ? 'Кейси' : 'Cases', href: isUa ? '/ua/technical#projects' : '/technical#projects' },
      { label: isUa ? 'Контакти' : 'Contact', href: isUa ? '/ua/technical#contact' : '/technical#contact' },
      { label: isUa ? 'Послуги' : 'Services', href: isUa ? '/ua/services' : '/services' },
      { label: isUa ? 'Бізнес-сторінка' : 'Business Page', href: isUa ? '/ua' : '/' },
    ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Oleh Fedkiv</h3>
            <p className="text-gray-400 leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-block cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            {locale === 'ua' ? (
              <>
                © {currentYear} Oleh Fedkiv. Створено з <Heart className="w-4 h-4 text-red-500" /> {t.copyrightSuffix}
              </>
            ) : (
              <>
                © {currentYear} Oleh Fedkiv. Built with <Heart className="w-4 h-4 text-red-500" /> {t.copyrightSuffix}
              </>
            )}
          </p>
          <div className="flex gap-6">
            <a href={t.privacyHref} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
              {t.privacy}
            </a>
            <a href={t.termsHref} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
              {t.terms}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
    </footer>
  );
}
