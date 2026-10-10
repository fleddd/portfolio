'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Locale } from '@/constants/i18n';

export function BackToTop({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false);
  const label = locale === 'ua' ? 'Повернутися на початок сторінки' : 'Back to top';

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 900);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      }}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-surface/90 text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md transition-[border-color] duration-300 hover:border-white/60"
      aria-label={label}
      title={label}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
