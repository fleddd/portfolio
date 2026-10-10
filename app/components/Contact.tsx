import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ArrowNE, Section, SectionHeader, buttonVariants } from '@/components/ui';
import { CONTACT_CHANNELS } from '@/constants';
import type { Locale } from '@/constants/i18n';

type ContactProps = {
  locale: Locale;
};

const content = {
  en: {
    titleLeft: 'Ready to plan',
    titleRight: 'your project?',
    description: 'Four short steps, about 3 minutes. I reply with a practical next step within 24 hours.',
    cta: 'Start your project brief',
    note: 'Progress saves automatically — leave and return anytime.',
    marquee: 'Let’s build it',
    direct: 'Prefer to write directly?',
    newTab: 'opens in a new tab',
  },
  ua: {
    titleLeft: 'Готові спланувати',
    titleRight: 'ваш проєкт?',
    description: 'Чотири короткі кроки, близько 3 хвилин. Відповідаю з практичним продовженням протягом 24 годин.',
    cta: 'Заповнити опис проєкту',
    note: 'Прогрес зберігається автоматично — можна вийти й повернутися.',
    marquee: 'Створимо разом',
    direct: 'Зручніше написати напряму?',
    newTab: 'відкриється в новій вкладці',
  },
} as const;

export function Contact({ locale }: ContactProps) {
  const copy = content[locale];
  const inquiryHref = locale === 'ua' ? '/ua/inquiry' : '/inquiry';
  const phrases = Array.from({ length: 4 }, () => copy.marquee);

  return (
    <Section id="contact" className="overflow-hidden !pt-10 md:!pt-14">
      <div className="relative mb-20 select-none overflow-hidden md:mb-28" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center">
              {phrases.map((phrase, index) => (
                <span key={index} className="flex items-center">
                  <span className="text-silver whitespace-nowrap px-6 text-[clamp(3.5rem,11vw,10rem)] font-light uppercase leading-none tracking-[-0.045em] opacity-25">
                    {phrase}
                  </span>
                  <span className="h-[0.12em] w-[clamp(3rem,8vw,7rem)] bg-mute/20 text-[clamp(3.5rem,11vw,10rem)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[90rem] safe-area-x">
        <SectionHeader display align="center" title={copy.titleLeft} accent={copy.titleRight} description={copy.description} className="!mb-10" />

        <div className="flex flex-col items-center text-center">
          <Link
            href={inquiryHref}
            className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-9 text-[15px] font-medium transition-[filter] duration-300 ease-out-expo ${buttonVariants.primary}`}
          >
            {copy.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="mt-5 text-xs text-mute">{copy.note}</p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl md:mt-20">
          <h3 className="text-center text-sm text-mute">{copy.direct}</h3>
          <ul className="mt-5 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((channel) => (
              <li key={channel.label} className="border-b border-r border-line">
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex min-h-24 flex-col justify-between gap-4 p-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-mute">
                      <channel.icon className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
                      {channel.label}
                    </span>
                    <ArrowNE className="h-3 w-3 text-mute transition-colors duration-300 group-hover:text-ink" />
                  </span>
                  <span className="break-all text-[15px] text-ink">{channel.value}</span>
                  {channel.external && <span className="sr-only"> ({copy.newTab})</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
