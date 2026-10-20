import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { Locale, getCopy } from '@/constants/i18n';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = getCopy(locale).hero;
  const inquiryHref = locale === 'ua' ? '/ua/inquiry' : '/inquiry';

  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] w-full min-w-0 flex-col overflow-hidden bg-canvas md:min-h-0">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#3b3b3b_0%,#1f1f1f_38%,#0d0d0d_78%)]" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-canvas" />
      </div>

      <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col safe-area-x pb-16 pt-28 md:pb-10 md:pt-24 xl:pt-28">
        <div className="flex flex-1 flex-col justify-center md:pt-28 xl:pt-32">
          <p className="hero-rise mb-6 flex items-center gap-2.5 text-sm text-mute md:mb-8 md:justify-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {t.role}
          </p>

          <h1 className="sr-only">{t.headlineMain} — {t.headlineAccent}</h1>
          <p
            className="hero-rise text-[clamp(2.25rem,6vw,5.5rem)] font-light uppercase leading-[0.98] tracking-[-0.04em] text-ink text-balance md:text-center"
            aria-hidden="true"
          >
            {t.headlineMain}
          </p>

          <div className="mt-4 flex flex-col gap-10 md:items-center xl:mt-6 xl:grid xl:grid-cols-[auto_minmax(0,19rem)] xl:items-center xl:justify-center xl:gap-12">
            <p
              className="hero-rise font-display text-[clamp(2.1rem,4.6vw,4.25rem)] font-light uppercase leading-[1] tracking-[0.01em] text-ink/85 text-balance [animation-delay:140ms] md:text-center xl:whitespace-nowrap xl:text-left xl:text-[clamp(2.5rem,3.4vw,3.75rem)]"
              aria-hidden="true"
            >
              {t.headlineAccent}
            </p>
            <div className="flex flex-col items-start gap-6 md:items-center md:text-center xl:items-start xl:text-left">
              <p className="max-w-[20rem] text-base leading-relaxed text-mute text-pretty">{t.description}</p>
              <Button href={inquiryHref}>{t.secondaryCta}</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden justify-center md:flex xl:mt-20">
          <ScrollBadge label={t.scroll} />
        </div>
      </div>
    </section>
  );
}

function ScrollBadge({ label }: { label: string }) {
  const ring = `${label} • `.repeat(label.length < 20 ? 2 : 1).toUpperCase();

  return (
    <a
      href="#about"
      className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full text-ink"
      aria-label={label}
    >
      <svg viewBox="0 0 120 120" className="badge-spin absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="hero-badge-ring" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="#272727" />
        <text className="fill-mute font-mono" fontSize="7.4" letterSpacing="0.6">
          <textPath href="#hero-badge-ring" textLength="280" lengthAdjust="spacingAndGlyphs">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas/60" aria-hidden="true">
        <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </a>
  );
}
