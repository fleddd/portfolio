'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, ImageIcon, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '@/constants/i18n';
import type { ProjectScreenshot } from '@/constants/projects';

type ProjectGalleryProps = {
  screenshots: readonly ProjectScreenshot[];
  locale: Locale;
  placeholderLabel: string;
};

const labels = {
  en: {
    open: 'Open image',
    close: 'Close gallery',
    previous: 'Previous image',
    next: 'Next image',
    hint: 'Use the arrows, keyboard, or swipe to browse',
  },
  ua: {
    open: 'Відкрити зображення',
    close: 'Закрити галерею',
    previous: 'Попереднє зображення',
    next: 'Наступне зображення',
    hint: 'Гортайте стрілками, клавішами або свайпом',
  },
} as const;

const slideTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function ProjectGallery({ screenshots, locale, placeholderLabel }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<-1 | 1>(1);
  const touchStartX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const t = labels[locale];
  const availableScreenshots = useMemo(
    () => screenshots.filter((screenshot) => screenshot.src.trim().length > 0),
    [screenshots],
  );
  const activeScreenshot = activeIndex === null ? null : availableScreenshots[activeIndex];

  const closeGallery = useCallback(() => {
    setActiveIndex(null);
    requestAnimationFrame(() => previouslyFocusedRef.current?.focus());
  }, []);
  const move = useCallback((nextDirection: -1 | 1) => {
    setDirection(nextDirection);
    setActiveIndex((current) => {
      if (current === null || availableScreenshots.length < 2) return current;
      return (current + nextDirection + availableScreenshots.length) % availableScreenshots.length;
    });
  }, [availableScreenshots.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) {
          event.preventDefault();
          dialogRef.current.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    dialogRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeGallery, move]);

  const openScreenshot = (screenshot: ProjectScreenshot, trigger: HTMLElement) => {
    const index = availableScreenshots.findIndex(
      (available) => available.src === screenshot.src && available.alt === screenshot.alt,
    );

    if (index >= 0) {
      previouslyFocusedRef.current = trigger;
      setDirection(1);
      setActiveIndex(index);
    }
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;
    move(distance > 0 ? -1 : 1);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {screenshots.map((screenshot, index) => {
          const galleryIndex = screenshot.src
            ? availableScreenshots.findIndex((available) => available.src === screenshot.src)
            : -1;

          return (
            <motion.figure
              key={`${screenshot.alt}-${index}`}
              className={index === 0 ? 'lg:col-span-2' : ''}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#08080c] shadow-xl shadow-black/10">
                {screenshot.src ? (
                  <button
                    type="button"
                    onClick={(event) => openScreenshot(screenshot, event.currentTarget)}
                    className="group absolute inset-0 w-full overflow-hidden text-left"
                    aria-label={`${t.open}: ${screenshot.alt}`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes={index === 0 ? '(min-width: 1280px) 1152px, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                      <span className="p-3 rounded-full bg-black/65 border border-white/15 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform] duration-300">
                        <Expand className="w-6 h-6 text-white" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-sm font-medium text-white">
                      {galleryIndex + 1} / {availableScreenshots.length}
                    </span>
                  </button>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-white/10 text-gray-400">
                    <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {placeholderLabel} {index + 1}
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="mt-4 text-sm text-gray-400">{screenshot.caption}</figcaption>
            </motion.figure>
          );
        })}
      </div>

      <AnimatePresence>
        {activeScreenshot && activeIndex !== null && (
          <motion.div
            ref={dialogRef}
            className="fixed inset-0 z-[100] flex flex-col overflow-hidden overscroll-contain bg-black/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={activeScreenshot.alt}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="absolute inset-0 z-0 cursor-default"
              onClick={closeGallery}
              aria-label={t.close}
              tabIndex={-1}
            />
            <div className="relative z-30 flex items-center justify-between gap-4 px-4 md:px-8 py-4">
              <div className="min-w-0">
                <AnimatePresence initial={false} mode="wait">
                  <motion.p
                    key={activeScreenshot.alt}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="truncate text-sm text-gray-300"
                  >
                    {activeScreenshot.alt}
                  </motion.p>
                </AnimatePresence>
                <p className="text-xs text-gray-400">
                  {activeIndex + 1} / {availableScreenshots.length} · {t.hint}
                </p>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                className="shrink-0 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={t.close}
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="relative z-10 flex-1 min-h-0 px-4 md:px-20 pb-20">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={activeScreenshot.src}
                  initial={{ opacity: 0, x: direction * 70, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -70, scale: 0.98 }}
                  transition={slideTransition}
                  className="absolute inset-x-4 md:inset-x-20 top-0 bottom-20"
                >
                  <Image
                    src={activeScreenshot.src}
                    alt={activeScreenshot.alt}
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {availableScreenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    className="absolute z-20 left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 border border-white/15 hover:bg-cyan-500 transition-colors duration-300"
                    aria-label={t.previous}
                  >
                    <ChevronLeft className="w-7 h-7" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    className="absolute z-20 right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 border border-white/15 hover:bg-cyan-500 transition-colors duration-300"
                    aria-label={t.next}
                  >
                    <ChevronRight className="w-7 h-7" aria-hidden="true" />
                  </button>
                </>
              )}

              <AnimatePresence initial={false} mode="wait">
                <motion.p
                  key={activeScreenshot.caption}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute bottom-5 left-4 right-4 text-center text-sm text-gray-400"
                >
                  {activeScreenshot.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
