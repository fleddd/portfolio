import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetailPage } from '@/components/ProjectDetailPage';
import { PROJECT_SLUGS, getProject, getProjectContent, type ProjectSlug } from '@/constants/projects';
import { SITE_URL } from '@/constants/site';

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: 'Проєкт не знайдено' };

  const content = getProjectContent(project, 'ua');
  const url = `${SITE_URL}/ua/projects/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${content.title} | Олег Федьків`,
    description: content.metaDescription,
    keywords: [...project.seoKeywords.ua, ...project.tech, content.category, 'кейс веброзробки'],
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${SITE_URL}/projects/${slug}`,
        'uk-UA': url,
        'x-default': `${SITE_URL}/projects/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'uk_UA',
      url,
      title: content.title,
      description: content.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function ProjectUaPage({ params }: { params: Params }) {
  const { slug } = await params;

  if (!PROJECT_SLUGS.includes(slug as ProjectSlug)) notFound();

  return <ProjectDetailPage locale="ua" slug={slug as ProjectSlug} />;
}
