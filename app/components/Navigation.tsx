'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Menu, X } from 'lucide-react';
import { Locale, getCopy } from '@/constants/i18n';
import { usePathname } from 'next/navigation';

type NavigationProps = {
  locale: Locale;
  mode: 'business' | 'technical';
};

export function Navigation({ locale, mode }: NavigationProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = getCopy(locale).nav;
  const isUa = locale === 'ua';
  const homeHref = isUa ? '/ua' : '/';
  const technicalHref = isUa ? '/ua/technical' : '/technical';
  const servicesHref = isUa ? '/ua/services' : '/services';
  const isHomePage = pathname === homeHref;
  const isTechnicalPage = pathname === technicalHref;
  const homeSectionHref = (id: string) => isHomePage ? `#${id}` : `${homeHref}#${id}`;
  const technicalSectionHref = (id: string) => isTechnicalPage ? `#${id}` : `${technicalHref}#${id}`;
  const contactHref = isHomePage || isTechnicalPage || pathname.startsWith(servicesHref)
    ? '#contact'
    : `${homeHref}#contact`;
  const navItems = mode === 'business'
    ? [
      { label: t.about, href: homeSectionHref('about') },
      { label: locale === 'ua' ? 'Досвід' : 'Experience', href: homeSectionHref('experience') },
      { label: t.solution, href: homeSectionHref('solutions') },
    ]
    : [
      { label: locale === 'ua' ? 'Навички' : 'Skills', href: technicalSectionHref('skills') },
      { label: t.solution, href: technicalSectionHref('projects') },
      { label: locale === 'ua' ? 'Досвід' : 'Experience', href: `${homeHref}#experience` },
    ];
  const modeOptions = [
    {
      label: locale === 'ua' ? 'Огляд' : 'Overview',
      href: isHomePage ? '#hero' : homeHref,
      active: mode === 'business',
    },
    {
      label: locale === 'ua' ? 'Технічне' : 'Technical',
      href: isTechnicalPage ? '#skills' : technicalHref,
      active: mode === 'technical',
    },
  ];
  const languageSwitchHref = locale === 'ua'
    ? pathname === '/ua/technical'
      ? '/technical'
      : pathname.startsWith('/ua/services')
        ? pathname.replace('/ua/services', '/services')
        : pathname.startsWith('/ua/projects')
          ? pathname.replace('/ua/projects', '/projects')
          : pathname === '/ua'
            ? '/'
            : homeHref
    : pathname === '/technical'
      ? '/ua/technical'
      : pathname.startsWith('/services')
        ? pathname.replace('/services', '/ua/services')
        : pathname.startsWith('/projects')
          ? pathname.replace('/projects', '/ua/projects')
          : pathname === '/'
            ? '/ua'
            : homeHref;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const logoHref = isHomePage ? '#hero' : homeHref;

  return (
    <nav
      aria-label={locale === 'ua' ? 'Головна навігація' : 'Primary navigation'}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${isScrolled
        ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-white/10'
        : 'bg-[#0a0a0f]/70 backdrop-blur-md border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 safe-area-x">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href={logoHref}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 rounded-lg"
            aria-label={locale === 'ua' ? 'Перейти на головну сторінку' : 'Go to homepage'}
          >
            <span className="relative" aria-hidden="true">
              <span className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-lg" />
              <Code2 className="w-8 h-8 text-cyan-400 relative" strokeWidth={2} />
            </span>
            <span className="text-xl font-bold tracking-tight text-white">OF</span>
          </motion.a>

          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={item.href === pathname ? 'page' : undefined}
                className="relative rounded-sm text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-[width] duration-300" aria-hidden="true" />
              </a>
            ))}
            <div
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#111116] p-1"
              aria-label={locale === 'ua' ? 'Версія портфоліо' : 'Portfolio view'}
            >
              {modeOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  aria-current={option.active ? 'page' : undefined}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${option.active
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {option.label}
                </a>
              ))}
            </div>
            <motion.a
              href={contactHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-[box-shadow,transform]"
            >
              {t.hireMe}
            </motion.a>
            <a
              href={languageSwitchHref}
              className="px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-cyan-400/50 transition-colors"
              aria-label={locale === 'ua' ? 'Switch to English version' : 'Перейти на українську версію'}
              hrefLang={locale === 'ua' ? 'en' : 'uk'}
            >
              {t.switchLanguage}
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="xl:hidden text-white p-3 -mr-3 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen
              ? locale === 'ua' ? 'Закрити меню' : 'Close menu'
              : locale === 'ua' ? 'Відкрити меню' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden max-h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-2 safe-area-x safe-area-bottom">
            <div
              className="mb-4 grid grid-cols-2 rounded-lg border border-white/10 bg-[#111116] p-1"
              aria-label={locale === 'ua' ? 'Версія портфоліо' : 'Portfolio view'}
            >
              {modeOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  onClick={closeMenu}
                  aria-current={option.active ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-center text-sm font-semibold transition-colors ${option.active
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {option.label}
                </a>
              ))}
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={item.href === pathname ? 'page' : undefined}
                className="block w-full rounded-lg px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={contactHref}
              onClick={closeMenu}
              className="block w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-center"
            >
              {t.hireMe}
            </a>
            <a
              href={languageSwitchHref}
              onClick={closeMenu}
              className="block w-full px-6 py-3 border border-white/10 bg-white/5 text-white font-medium rounded-lg text-center hover:bg-white/10 transition-colors"
              hrefLang={locale === 'ua' ? 'en' : 'uk'}
            >
              {locale === 'ua' ? 'English' : 'Українська'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
