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

  if (!project) return { title: 'Project not found' };

  const content = getProjectContent(project, 'en');
  const url = `${SITE_URL}/projects/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${content.title} | Oleh Fedkiv`,
    description: content.metaDescription,
    keywords: [...project.seoKeywords.en, ...project.tech, content.category, 'web development case study'],
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'uk-UA': `${SITE_URL}/ua/projects/${slug}`,
        'x-default': url,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
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

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;

  if (!PROJECT_SLUGS.includes(slug as ProjectSlug)) notFound();

  return <ProjectDetailPage locale="en" slug={slug as ProjectSlug} />;
}
