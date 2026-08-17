'use client';

import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeader, Button } from '@/components/ui';
import { PROJECTS, CODE_SNIPPET, CONTACT_SOCIAL_LINKS, getProjectContent } from '@/constants';
import { Locale, getCopy } from '@/constants/i18n';
import { getTechnologyDescription } from '@/constants/technology';

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

export function Projects({ locale, mode = 'business' }: ProjectsProps) {
  const t = getCopy(locale).projects;

  return (
    <Section id="projects">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          index={mode === 'business' ? '03' : undefined}
          title={
            <>
              {t.titleLeft}{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                {t.titleRight}
              </span>
            </>
          }
          description={t.description}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {DISPLAYED_PROJECTS.map((project) => {
            const content = getProjectContent(project, locale);
            const detailHref = `${locale === 'ua' ? '/ua' : ''}/projects/${project.id}`;
            const screenshot = content.screenshots.find((image) => image.src);

            return (
              <article
                key={project.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111116] transition-colors hover:border-cyan-400/35"
              >
                <div className="relative aspect-2/1 overflow-hidden bg-[#08080c]">
                  {screenshot && (
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <span className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400">
                    {content.category}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {content.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-300">{content.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
                        title={getTechnologyDescription(tech, locale)}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
                    <Link href={detailHref} className="inline-flex min-h-11 items-center gap-2 rounded-md px-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
                      <span>{t.caseDetails}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {project.livePreview && (
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-md px-1 text-sm text-gray-200 transition-colors hover:text-cyan-400"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        <span>{t.liveDemo}</span>
                        <span className="sr-only"> ({locale === 'ua' ? 'відкриється в новій вкладці' : 'opens in a new tab'})</span>
                      </a>
                    )}
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-md px-1 text-sm text-gray-200 transition-colors hover:text-cyan-400"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        <span>{t.sourceCode}</span>
                        <span className="sr-only"> ({locale === 'ua' ? 'відкриється в новій вкладці' : 'opens in a new tab'})</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center md:mt-16">
          <p className="mb-6 text-gray-300">{t.more}</p>
          <Button variant="secondary" href={CONTACT_SOCIAL_LINKS[0].href}>
            <Github className="h-5 w-5" aria-hidden="true" />
            {t.github}
          </Button>
        </div>
      </div>
    </Section>
  );
}
