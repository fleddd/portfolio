import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeader, Button } from '@/components/ui';
import { PROJECTS, CONTACT_SOCIAL_LINKS, getProjectContent } from '@/constants';
import { Locale, getCopy } from '@/constants/i18n';

type ProjectsProps = {
  locale: Locale;
  mode?: 'business' | 'technical';
};

const PROJECT_DISPLAY_ORDER = [
  'sea-travel',
  'qwiktwik',
  'mevdev-frontend',
  'night-light-configurator',
];

const DISPLAYED_PROJECTS = [...PROJECTS].sort(
  (a, b) => PROJECT_DISPLAY_ORDER.indexOf(a.id) - PROJECT_DISPLAY_ORDER.indexOf(b.id),
);

// Wide plate, two halves, wide plate — the rhythm of the reference works gallery.
const isWide = (index: number) => index % 3 === 0;

// Screenshots whose content starts at the left edge would lose their heading to a centered crop.
const OBJECT_POSITION: Record<string, string> = {
  'mevdev-frontend': 'object-left-top',
};

export function Projects({ locale }: ProjectsProps) {
  const t = getCopy(locale).projects;

  return (
    <Section id="projects">
      <div className="mx-auto max-w-[90rem] safe-area-x">
        <SectionHeader title={t.titleLeft} accent={t.titleRight} description={t.description} />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {DISPLAYED_PROJECTS.map((project, index) => {
            const content = getProjectContent(project, locale);
            const detailHref = `${locale === 'ua' ? '/ua' : ''}/projects/${project.id}`;
            const screenshot = content.screenshots.find((image) => image.src);
            const wide = isWide(index);

            return (
              <article key={project.id} className={wide ? 'md:col-span-2' : ''}>
                <Link
                  href={detailHref}
                  className={`group relative block overflow-hidden rounded-[20px] bg-surface outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-canvas ${wide ? 'aspect-[4/3] md:aspect-[16/7.5]' : 'aspect-[4/3] md:aspect-[5/4.4]'}`}
                >
                  {screenshot && (
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes={wide ? '(min-width: 1440px) 1380px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                      className={`object-cover ${OBJECT_POSITION[project.id] ?? 'object-top'}`}
                    />
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent" aria-hidden="true" />
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-4 rounded-[14px] border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl md:inset-x-4 md:bottom-4">
                    <span className="min-w-0 line-clamp-2 text-sm leading-snug text-ink">
                      <span className="font-medium">{content.title}</span>
                      <span className="text-ink/70"> / {content.category}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink transition-transform duration-500 ease-out-expo group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  <span className="sr-only">{t.caseDetails}</span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-mute">{t.more}</p>
          <Button variant="secondary" href={CONTACT_SOCIAL_LINKS[0].href}>
            <Github className="h-4 w-4" aria-hidden="true" />
            {t.github}
          </Button>
        </div>
      </div>
    </Section>
  );
}
