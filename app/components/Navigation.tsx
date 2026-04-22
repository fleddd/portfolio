'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2, Menu, X } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Locale, getCopy } from '@/constants/i18n';

type NavigationProps = {
  locale: Locale;
};

export function Navigation({ locale }: NavigationProps) {
  const scrollTo = useScrollTo();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = getCopy(locale).nav;
  const navItems = [
    { label: t.about, id: 'about' },
    { label: t.skills, id: 'skills' },
    { label: t.projects, id: 'projects' },
    { label: t.contact, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-white/5'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNav('hero')}
            aria-label={locale === 'uk' ? 'Перейти на головний екран' : 'Go to hero section'}
            type="button"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-lg" />
              <Code2 className="w-8 h-8 text-cyan-400 relative" strokeWidth={2} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">OF</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNav(item.id)}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors group cursor-pointer"
                type="button"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              {t.hireMe}
            </motion.a>
            <motion.a
              href={t.switchLanguageHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-cyan-400/50 transition-all"
              aria-label={locale === 'uk' ? 'Switch to English version' : 'Перейти на українську версію'}
            >
              {t.switchLanguage}
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left text-gray-400 hover:text-white transition-colors py-2 cursor-pointer"
                type="button"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-center cursor-pointer"
            >
              {t.hireMe}
            </a>
            <a
              href={t.switchLanguageHref}
              className="block w-full px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg text-center"
            >
              {t.switchLanguage}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
