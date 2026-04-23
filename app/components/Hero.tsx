'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '@/components/ui';
import { CONTACT_SOCIAL_LINKS } from '../constants';
import { Locale, getCopy } from '@/constants/i18n';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const scrollTo = useScrollTo();
  const t = getCopy(locale).hero;
  const badges = locale === 'ua'
    ? ['Next.js', 'SEO-архітектура', 'Оптимізація лідів']
    : ['Next.js', 'SEO-ready architecture', 'Lead funnel optimization'];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="absolute -top-20 right-10 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Oleh Fedkiv
              </span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
              {t.role}
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-3">
              {badges.map((badge) => (
                <span key={badge} className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            {CONTACT_SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all group cursor-pointer"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-14"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className='absolute top-3'
            >
              <motion.button
                animate={{ y: [-20, -10, -20] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => scrollTo('about')}
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                type="button"
              >
                <span className="text-sm">{t.scroll}</span>
                <ArrowDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
            <Button onClick={() => scrollTo('projects')}>{t.primaryCta}</Button>

            <Button variant="secondary" onClick={() => scrollTo('contact')}>
              {t.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>


      </div>
    </section >
  );
}
