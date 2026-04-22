'use client';

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Locale, getCopy } from '@/constants/i18n';

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = getCopy(locale).footer;

  const links = [
    { label: locale === 'uk' ? 'Про мене' : 'About', href: locale === 'uk' ? '/uk#about' : '#about' },
    { label: locale === 'uk' ? 'Навички' : 'Skills', href: locale === 'uk' ? '/uk#skills' : '#skills' },
    { label: locale === 'uk' ? 'Проєкти' : 'Projects', href: locale === 'uk' ? '/uk#projects' : '#projects' },
    { label: locale === 'uk' ? 'Контакти' : 'Contact', href: locale === 'uk' ? '/uk#contact' : '#contact' },
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
            © {currentYear} Oleh Fedkiv. Built with <Heart className="w-4 h-4 text-red-500" /> and
            {t.copyrightSuffix}
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
