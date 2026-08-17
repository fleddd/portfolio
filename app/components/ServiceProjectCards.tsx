'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/constants/i18n';
import { getProject, getProjectContent, type ProjectSlug } from '@/constants/projects';

type RelatedProject = {
  id: ProjectSlug;
  note?: string;
};

type ServiceProjectCardsProps = {
  locale: Locale;
  items: readonly RelatedProject[];
};

export function ServiceProjectCards({ locale, items }: ServiceProjectCardsProps) {
  const baseHref = locale === 'ua' ? '/ua/projects' : '/projects';

  return (
    <div className={`grid grid-cols-1 gap-8 ${items.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
      {items.map((item) => {
        const project = getProject(item.id);
        if (!project) return null;

        const content = getProjectContent(project, locale);
        const screenshot = content.screenshots.find((image) => image.src);

        return (
          <article
            key={project.id}
            className="group"
          >
            <Link href={`${baseHref}/${project.id}`} className="flex h-full flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#08080c]">
                {screenshot ? (
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes={items.length > 2 ? '(min-width: 1024px) 33vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5" />
                )}
              </div>

              <div className="flex flex-1 flex-col pt-5">
                <p className="mb-2 text-sm text-gray-500">
                  {content.category}
                </p>
                <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                  {content.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-400">
                  {item.note || content.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
                  {locale === 'ua' ? `Переглянути кейс ${content.title}` : `View the ${content.title} case study`}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
