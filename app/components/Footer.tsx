import { Heart } from 'lucide-react';
import { Locale, getCopy } from '@/constants/i18n';
import { BrandLogo } from '@/components/BrandLogo';
import { ArrowNE } from '@/components/ui';
import { CONTACT_CHANNELS } from '@/constants';

type FooterProps = {
  locale: Locale;
  mode: 'business' | 'technical';
};

export function Footer({ locale, mode }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = getCopy(locale).footer;

  const isUa = locale === 'ua';
  const links = mode === 'business'
    ? [
      { label: isUa ? 'Про мене' : 'About', href: isUa ? '/ua#about' : '/#about' },
      { label: isUa ? 'Досвід' : 'Experience', href: isUa ? '/ua#experience' : '/#experience' },
      { label: isUa ? 'Рішення' : 'Solutions', href: isUa ? '/ua#solutions' : '/#solutions' },
      { label: isUa ? 'Розпочати проєкт' : 'Start a Project', href: isUa ? '/ua/inquiry' : '/inquiry' },
      { label: isUa ? 'Технічні навички' : 'Technical Skills', href: isUa ? '/ua/technical' : '/technical' },
    ]
    : [
      { label: isUa ? 'Навички' : 'Skills', href: isUa ? '/ua/technical#skills' : '/technical#skills' },
      { label: isUa ? 'Кейси' : 'Cases', href: isUa ? '/ua/technical#projects' : '/technical#projects' },
      { label: isUa ? 'Розпочати проєкт' : 'Start a Project', href: isUa ? '/ua/inquiry' : '/inquiry' },
      { label: isUa ? 'Досвід' : 'Experience', href: isUa ? '/ua#experience' : '/#experience' },
      { label: isUa ? 'Бізнес-сторінка' : 'Business Page', href: isUa ? '/ua' : '/' },
    ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-canvas">
      <div className="mx-auto max-w-[90rem] safe-area-x pt-14 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <div className="max-w-sm">
            <a
              href={isUa ? '/ua' : '/'}
              className="inline-flex min-h-11 items-center gap-3"
              aria-label={isUa ? 'Перейти на головну сторінку' : 'Go to homepage'}
            >
              <BrandLogo className="h-8 w-auto grayscale brightness-[1.7] contrast-[0.9]" />
              <span className="text-lg uppercase tracking-[0.04em] text-ink">Oleh Fedkiv</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-mute">{t.subtitle}</p>
          </div>

          <nav aria-label={t.quickLinks}>
            <h2 className="text-xs uppercase tracking-[0.08em] text-mute">{t.quickLinks}</h2>
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {links.map((link) => (
                <li key={link.label} className="border-b border-line">
                  <a
                    href={link.href}
                    className="group flex min-h-12 items-center justify-between text-sm text-ink/85 transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                    <ArrowNE className="h-3 w-3 text-mute transition-colors duration-300 group-hover:text-ink" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.08em] text-mute">{isUa ? 'Контакти' : 'Contacts'}</h2>
            <ul className="mt-4">
              {CONTACT_CHANNELS.map((channel) => (
                <li key={channel.label} className="border-b border-line">
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex min-h-12 items-center gap-3 text-sm text-ink/85 transition-colors duration-300 hover:text-ink"
                  >
                    <channel.icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span className="min-w-0 break-all">{channel.value}</span>
                    <span className="sr-only">{channel.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-line py-5 text-xs text-mute md:flex-row">
          <p className="flex items-center gap-1.5">
            © {currentYear} Oleh Fedkiv. {isUa ? 'Створено з' : 'Built with'}
            <Heart className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
            {t.copyrightSuffix}
          </p>
          <div className="flex gap-6">
            <a href={t.privacyHref} className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-ink">
              {t.privacy}
            </a>
            <a href={t.termsHref} className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-ink">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
