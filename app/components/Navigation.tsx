'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
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
  const [isHidden, setIsHidden] = useState(false);
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
      { label: t.projects, href: homeSectionHref('projects') },
      { label: locale === 'ua' ? 'Досвід' : 'Experience', href: homeSectionHref('experience') },
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
    // Hide while scrolling down, reveal on any upward scroll. A small threshold
    // ignores trackpad jitter; the bar always shows near the top of the page.
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      if (y < 120) {
        setIsHidden(false);
      } else if (Math.abs(y - lastY) > 6) {
        setIsHidden(y > lastY);
      } else {
        return;
      }
      lastY = y;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const localSectionIds = mode === 'business' && isHomePage
      ? ['about', 'solutions', 'projects', 'experience']
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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[translate,background-color,border-color,backdrop-filter] duration-500 ease-out-expo focus-within:translate-y-0 ${isHidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${isScrolled || isMobileMenuOpen
        ? 'bg-canvas/85 backdrop-blur-xl border-line'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-[90rem] mx-auto safe-area-x">
        <div className="grid h-16 grid-cols-[1fr_auto] items-center xl:h-20 xl:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={item.href === `#${activeSection}` ? 'location' : undefined}
                className={`relative inline-flex min-h-11 items-center gap-2 text-[13px] transition-colors duration-300 ${item.href === `#${activeSection}`
                  ? 'text-ink'
                  : 'text-mute hover:text-ink'
                  }`}
              >
                <span
                  className={`h-1 w-1 rounded-full bg-accent transition-opacity duration-300 ${item.href === `#${activeSection}` ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={logoHref}
            className="flex min-h-11 items-center gap-3 justify-self-start xl:justify-self-center"
            aria-label={locale === 'ua' ? 'Перейти на головну сторінку' : 'Go to homepage'}
          >
            <BrandLogo className="h-6 w-auto grayscale brightness-[1.7] contrast-[0.9]" priority />
            <span className="text-[15px] font-light uppercase tracking-[0.04em] text-ink">Oleh Fedkiv</span>
          </a>

          <div className="hidden items-center justify-end gap-6 xl:flex">
            <a
              href={modeSwitch.href}
              data-profile-switch
              className="inline-flex min-h-11 items-center gap-1.5 text-[13px] text-mute transition-colors duration-300 hover:text-ink"
            >
              {modeSwitch.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={languageSwitchHref}
              data-language-switch
              className="inline-flex min-h-11 items-center text-[13px] text-mute transition-colors duration-300 hover:text-ink"
              aria-label={locale === 'ua' ? 'Switch to English language' : 'Switch to Ukrainian language'}
              hrefLang={locale === 'ua' ? 'en' : 'uk'}
            >
              {t.switchLanguage}
            </a>
            <a
              href={contactHref}
              className="inline-flex min-h-10 items-center rounded-full border border-white/25 px-5 text-[13px] text-ink transition-colors duration-300 hover:border-white/70"
            >
              {t.hireMe}
            </a>
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="-mr-3 flex min-h-11 items-center gap-3 rounded-full px-3 text-[13px] uppercase tracking-[0.06em] text-ink xl:hidden"
            aria-label={isMobileMenuOpen
              ? locale === 'ua' ? 'Закрити меню' : 'Close menu'
              : locale === 'ua' ? 'Відкрити меню' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span aria-hidden="true">{isMobileMenuOpen ? (locale === 'ua' ? 'Закрити' : 'Close') : (locale === 'ua' ? 'Меню' : 'Menu')}</span>
            <span className="relative block h-3 w-5" aria-hidden="true">
              <motion.span
                className="absolute left-0 top-0 h-px w-5 bg-current"
                animate={{ y: isMobileMenuOpen ? 6 : 0, rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="absolute left-0 top-3 h-px w-5 bg-current"
                animate={{ y: isMobileMenuOpen ? -6 : 0, rotate: isMobileMenuOpen ? -45 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-canvas xl:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: shouldReduceMotion
                    ? { duration: 0 }
                    : { delayChildren: 0.06, staggerChildren: 0.04 },
                },
                closed: {
                  transition: shouldReduceMotion
                    ? { duration: 0 }
                    : { staggerChildren: 0.025, staggerDirection: -1 },
                },
              }}
              className="max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain pb-8 pt-4 safe-area-x safe-area-bottom"
            >
              {navItems.map((item) => (
                <motion.a
                  variants={mobileMenuItemVariants}
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={item.href === `#${activeSection}` ? 'location' : undefined}
                  className={`flex min-h-14 w-full items-center justify-between border-b border-line text-2xl uppercase tracking-[-0.02em] transition-colors ${item.href === `#${activeSection}`
                    ? 'text-ink'
                    : 'text-mute hover:text-ink'
                    }`}
                >
                  {item.label}
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </motion.a>
              ))}
              <motion.a
                variants={mobileMenuItemVariants}
                href={modeSwitch.href}
                data-profile-switch
                className="flex min-h-14 w-full items-center justify-between border-b border-line text-2xl uppercase tracking-[-0.02em] text-mute transition-colors hover:text-ink"
              >
                {modeSwitch.label}
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.div variants={mobileMenuItemVariants} className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href={languageSwitchHref}
                  data-language-switch
                  className="flex min-h-12 items-center justify-center rounded-full border border-white/25 text-sm text-ink"
                  hrefLang={locale === 'ua' ? 'en' : 'uk'}
                >
                  {locale === 'ua' ? 'English' : 'Українська'}
                </a>
                <a
                  href={contactHref}
                  onClick={closeMenu}
                  className="silver flex min-h-12 items-center justify-center rounded-full text-sm font-medium text-canvas"
                >
                  {t.hireMe}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
