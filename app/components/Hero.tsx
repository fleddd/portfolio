import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { Locale, getCopy } from '@/constants/i18n';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = getCopy(locale).hero;
  const inquiryHref = locale === 'ua' ? '/ua/inquiry' : '/inquiry';
  const [name, role] = t.role.split(' · ');

  return (
    <section id="hero" className="relative isolate flex w-full min-w-0 flex-col overflow-hidden bg-canvas">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#3b3b3b_0%,#1f1f1f_38%,#0d0d0d_78%)]" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-canvas" />
      </div>

      <div className="mx-auto flex w-full max-w-[90rem] flex-col safe-area-x pb-14 pt-24 md:pb-10 xl:pt-28">
        <p className="text-xs leading-snug text-ink/80">
          {name}
          <br />
          <span className="text-mute">{role}</span>
        </p>

        <div className="flex flex-col justify-center pb-4 pt-20 md:pb-0 md:pt-28 xl:pt-32">
          <h1 className="sr-only">{t.headlineMain} {t.headlineAccent}</h1>
          <p
            className="hero-rise text-center text-[clamp(2.4rem,6.6vw,6rem)] font-light uppercase leading-[0.94] tracking-[-0.04em] text-ink text-balance"
            aria-hidden="true"
          >
            {t.headlineMain}
          </p>

          <div className="mt-3 flex flex-col items-center gap-8 lg:mt-4 lg:grid lg:grid-cols-[auto_minmax(0,19rem)] lg:items-center lg:justify-center lg:gap-12">
            <p
              className="hero-rise text-center font-display text-[clamp(2.7rem,5.2vw,4.5rem)] font-light uppercase leading-[0.95] tracking-[0.01em] text-ink text-balance [animation-delay:140ms] lg:text-left"
              aria-hidden="true"
            >
              {t.headlineAccent}
            </p>
            <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
              <p className="max-w-[22rem] text-base leading-relaxed text-mute text-pretty">{t.description}</p>
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
