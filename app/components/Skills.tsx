import Image from 'next/image';
import { Button, IconBadge, Section, SectionHeader } from '@/components/ui';
import { SKILL_CATEGORIES } from '@/constants';
import { Locale, getCopy } from '@/constants/i18n';

type SkillsProps = {
  locale: Locale;
};

export function Skills({ locale }: SkillsProps) {
  const t = getCopy(locale).skills;
  const categoryTitleMap: Record<string, string> = locale === 'ua'
    ? {
      Frontend: 'Фронтенд',
      Backend: 'Бекенд',
      Database: 'Бази даних',
      DevOps: 'DevOps',
      Tools: 'Інструменти',
    }
    : {};

  return (
    <Section id="skills" className="!pt-16 md:!pt-24">
      <div className="mx-auto max-w-[90rem] safe-area-x">
        <SectionHeader display level={1} title={t.titleLeft} accent={t.titleRight} description={t.description} />

        <div className="grid gap-1.5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <article key={category.title} className="flex flex-col rounded-[18px] bg-surface p-6 md:p-7">
              <div className="flex items-center gap-4">
                <IconBadge icon={category.icon} />
                <h2 className="text-xl font-normal tracking-[-0.02em] text-ink">
                  {categoryTitleMap[category.title] || category.title}
                </h2>
              </div>

              <ul className="mt-8 border-t border-line">
                {category.technologies.map((technology) => (
                  <li key={technology.name} className="flex min-h-14 items-center gap-3 border-b border-line text-sm text-ink/90">
                    {/* Brand marks are drawn for light grounds; a light tile keeps dark ones legible. */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f2f2f2]" aria-hidden="true">
                      <Image
                        src={technology.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                    {technology.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="flex flex-col justify-between gap-8 rounded-[18px] border border-line p-6 md:p-7">
            <p className="max-w-xs text-sm leading-relaxed text-mute">{t.note}</p>
            <Button href="/cv.pdf" className="self-start">{t.resume}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
