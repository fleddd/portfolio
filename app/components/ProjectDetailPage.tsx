import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { ProjectGallery } from '@/components/ProjectGallery';
import type { Locale } from '@/constants/i18n';
import { getProject, getProjectContent, type ProjectSlug } from '@/constants/projects';
import { SITE_URL } from '@/constants/site';

type ProjectDetailPageProps = {
  locale: Locale;
  slug: ProjectSlug;
};

const labels = {
  en: {
    back: 'All projects',
    overview: 'Project overview',
    challenge: 'The challenge',
    contribution: 'What I worked on',
    outcome: 'Outcome',
    stack: 'Technology stack',
    gallery: 'Project screenshots',
    galleryDescription: 'Open any screenshot in full screen, then use the arrows or swipe to browse the gallery.',
    screenshot: 'Screenshot placeholder',
    live: 'Open live project',
    source: 'View source code',
    ctaTitle: 'Have a similar project in mind?',
    ctaText: 'Tell me about the task and I will suggest a practical implementation approach.',
    cta: 'Discuss the project',
    home: 'Home',
    projects: 'Projects',
  },
  ua: {
    back: 'Усі проєкти',
    overview: 'Огляд проєкту',
    challenge: 'Задача',
    contribution: 'Що я робив',
    outcome: 'Результат',
    stack: 'Технологічний стек',
    gallery: 'Скріншоти проєкту',
    galleryDescription: 'Відкрийте будь-який скріншот на весь екран, а потім гортайте стрілками або свайпом.',
    screenshot: 'Місце для скріншота',
    live: 'Відкрити проєкт',
    source: 'Переглянути код',
    ctaTitle: 'Плануєте схожий проєкт?',
    ctaText: 'Опишіть задачу, і я запропоную практичний варіант реалізації.',
    cta: 'Обговорити проєкт',
    home: 'Головна',
    projects: 'Проєкти',
  },
} as const;

export function ProjectDetailPage({ locale, slug }: ProjectDetailPageProps) {
  const project = getProject(slug);

  if (!project) return null;

  const content = getProjectContent(project, locale);
  const t = labels[locale];
  const isUa = locale === 'ua';
  const homeHref = isUa ? '/ua' : '/';
  const projectsHref = `${homeHref}#projects`;
  const pagePath = `${isUa ? '/ua' : ''}/projects/${project.id}`;
  const pageUrl = `${SITE_URL}${pagePath}`;
  const Icon = project.icon;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: content.title,
    description: content.description,
    url: pageUrl,
    creator: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Oleh Fedkiv',
    },
    keywords: [...project.tech, ...project.seoKeywords[locale]].join(', '),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.home,
        item: `${SITE_URL}${isUa ? '/ua' : ''}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.projects,
        item: `${SITE_URL}${isUa ? '/ua' : ''}#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: content.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
      <Navigation locale={locale} mode="business" />

      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden pt-36 pb-24 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <Link
              href={projectsHref}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Link>

            <div className="max-w-4xl">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} mb-7`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400 mb-4">
                {content.category}
              </p>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white text-balance mb-7">
                {content.title}
              </h1>
              <p className="max-w-3xl text-xl md:text-2xl text-gray-300 leading-relaxed">
                {content.description}
              </p>

              {(project.livePreview || project.sourceCode) && (
                <div className="flex flex-wrap gap-4 mt-10">
                  {project.livePreview && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-[box-shadow,transform]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.live}
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-medium hover:border-cyan-400/50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t.source}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="relative py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-16">
            <div className="space-y-16">
              <article>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.overview}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">{content.overview}</p>
              </article>

              <article>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.challenge}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">{content.challenge}</p>
              </article>

              <article>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contribution}</h2>
                <ul className="space-y-4">
                  {content.contributions.map((item) => (
                    <li key={item} className="flex gap-4 text-lg text-gray-400 leading-relaxed">
                      <span className="mt-3 w-2 h-2 shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.outcome}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">{content.outcome}</p>
              </article>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit p-7 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold mb-5">{t.stack}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="relative py-28 bg-[#12121a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">{t.gallery}</h2>
              <p className="text-lg text-gray-400">{t.galleryDescription}</p>
            </div>

            <ProjectGallery
              screenshots={content.screenshots}
              locale={locale}
              placeholderLabel={t.screenshot}
            />
          </div>
        </section>

        <section className="py-28 bg-[#0a0a0f]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">{t.ctaTitle}</h2>
            <p className="text-lg text-gray-400 mb-9">{t.ctaText}</p>
            <Link
              href={`${homeHref}#contact`}
              className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-medium hover:shadow-xl hover:shadow-cyan-500/20 transition-[box-shadow,transform]"
            >
              {t.cta}
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} mode="business" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
