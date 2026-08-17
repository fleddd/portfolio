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
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#111116]/95 text-cyan-200 shadow-xl shadow-black/30 backdrop-blur-md transition-[background-color,border-color,color,transform] hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-[#181822] hover:text-white"
      aria-label={label}
      title={label}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
