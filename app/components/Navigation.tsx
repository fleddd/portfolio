'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Locale, getCopy } from '@/constants/i18n';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/BrandLogo';

type NavigationProps = {
  locale: Locale;
  mode: 'business' | 'technical';
};

const mobileMenuItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0 },
};

export function Navigation({ locale, mode }: NavigationProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const t = getCopy(locale).nav;
  const isUa = locale === 'ua';
  const homeHref = isUa ? '/ua' : '/';
  const technicalHref = isUa ? '/ua/technical' : '/technical';
  const isHomePage = pathname === homeHref;
  const isTechnicalPage = pathname === technicalHref;
  const homeSectionHref = (id: string) => isHomePage ? `#${id}` : `${homeHref}#${id}`;
  const technicalSectionHref = (id: string) => isTechnicalPage ? `#${id}` : `${technicalHref}#${id}`;
  const contactHref = isUa ? '/ua/inquiry' : '/inquiry';
  const navItems = mode === 'business'
    ? [
      { label: t.about, href: homeSectionHref('about') },
      { label: t.solution, href: homeSectionHref('solutions') },
      { label: locale === 'ua' ? 'Досвід' : 'Experience', href: homeSectionHref('experience') },
      { label: t.projects, href: homeSectionHref('projects') },
    ]
    : [
      { label: locale === 'ua' ? 'Навички' : 'Skills', href: technicalSectionHref('skills') },
      { label: t.solution, href: technicalSectionHref('projects') },
      { label: locale === 'ua' ? 'Досвід' : 'Experience', href: `${homeHref}#experience` },
    ];
  const modeSwitch = mode === 'business'
    ? {
      label: locale === 'ua' ? 'Технічний профіль' : 'Technical Profile',
      href: technicalHref,
    }
    : {
      label: locale === 'ua' ? 'Бізнес-огляд' : 'Business Overview',
      href: homeHref,
    };
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
    const localSectionIds = mode === 'business' && isHomePage
      ? ['about', 'solutions', 'experience', 'projects']
      : mode === 'technical' && isTechnicalPage
        ? ['skills', 'projects']
        : [];

    if (localSectionIds.length === 0) {
      return;
    }

    const sections = localSectionIds
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let animationFrame = 0;
    const updateActiveSection = () => {
      animationFrame = 0;
      const navigationHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 0;
      const activationLine = navigationHeight + window.innerHeight * 0.22;
      let currentSection: string | null = null;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(previous => previous === currentSection ? previous : currentSection);
    };
    const scheduleUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [isHomePage, isTechnicalPage, mode]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    requestAnimationFrame(() => {
      mobileMenuRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) return;
      const focusable = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
      document.body.style.overflow = previousOverflow;
      previousActive?.focus();
    };
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
        <div className="flex h-16 items-center justify-between xl:h-20">
          <motion.a
            href={logoHref}
            whileHover={{ scale: 1.03 }}
            className="flex min-h-11 items-center rounded-lg"
            aria-label={locale === 'ua' ? 'Перейти на головну сторінку' : 'Go to homepage'}
          >
            <BrandLogo className="h-7 w-auto drop-shadow-[0_0_8px_rgba(34,211,238,0.22)] xl:h-8" priority />
          </motion.a>

          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={item.href === `#${activeSection}` ? 'location' : undefined}
                className={`group relative rounded-sm text-sm font-medium transition-colors ${item.href === `#${activeSection}`
                  ? 'text-cyan-300'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 transition-[width] duration-300 ${item.href === `#${activeSection}` ? 'w-full' : 'w-0 group-hover:w-full'}`} aria-hidden="true" />
              </a>
            ))}
            <a
              href={modeSwitch.href}
              data-profile-switch
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200 transition-colors hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
            >
              {modeSwitch.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
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
              data-language-switch
              className="px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-cyan-400/50 transition-colors"
              aria-label={locale === 'ua' ? 'Switch to English language' : 'Switch to Ukrainian language'}
              hrefLang={locale === 'ua' ? 'en' : 'uk'}
            >
              {t.switchLanguage}
            </a>
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="-mr-3 rounded-lg p-3 text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label={isMobileMenuOpen
              ? locale === 'ua' ? 'Закрити меню' : 'Close menu'
              : locale === 'ua' ? 'Відкрити меню' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span className="relative block h-6 w-6" aria-hidden="true">
              <motion.span
                className="absolute left-0 top-1 h-0.5 w-6 rounded-full bg-current"
                animate={{ y: isMobileMenuOpen ? 7 : 0, rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="absolute left-0 top-[11px] h-0.5 w-6 rounded-full bg-current"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1, scaleX: isMobileMenuOpen ? 0.4 : 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute left-0 top-[18px] h-0.5 w-6 rounded-full bg-current"
                animate={{ y: isMobileMenuOpen ? -7 : 0, rotate: isMobileMenuOpen ? -45 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.4, 0, 0.2, 1] }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#0a0a0f]/98 backdrop-blur-xl xl:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: shouldReduceMotion
                    ? { duration: 0 }
                    : { delayChildren: 0.05, staggerChildren: 0.04 },
                },
                closed: {
                  transition: shouldReduceMotion
                    ? { duration: 0 }
                    : { staggerChildren: 0.025, staggerDirection: -1 },
                },
              }}
              className="max-h-[calc(100svh-4rem)] space-y-2 overflow-y-auto overscroll-contain px-6 py-6 safe-area-x safe-area-bottom"
            >
              <motion.a
                variants={mobileMenuItemVariants}
                href={modeSwitch.href}
                data-profile-switch
                className="mb-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-gray-100 transition-colors hover:border-cyan-400/40 hover:bg-white/10"
              >
                {modeSwitch.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              {navItems.map((item) => (
                <motion.a
                  variants={mobileMenuItemVariants}
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={item.href === `#${activeSection}` ? 'location' : undefined}
                  className={`block min-h-11 w-full rounded-lg px-3 py-3 transition-colors ${item.href === `#${activeSection}`
                    ? 'bg-cyan-400/10 text-cyan-200'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                variants={mobileMenuItemVariants}
                href={contactHref}
                onClick={closeMenu}
                className="block w-full rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 text-center font-medium text-white"
              >
                {t.hireMe}
              </motion.a>
              <motion.a
                variants={mobileMenuItemVariants}
                href={languageSwitchHref}
                data-language-switch
                className="block w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-white/10"
                hrefLang={locale === 'ua' ? 'en' : 'uk'}
              >
                {locale === 'ua' ? 'English' : 'Українська'}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
