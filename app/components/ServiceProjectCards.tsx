'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
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
      {items.map((item, index) => {
        const project = getProject(item.id);
        if (!project) return null;

        const content = getProjectContent(project, locale);
        const screenshot = content.screenshots.find((image) => image.src);

        return (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition-colors"
          >
            <Link href={`${baseHref}/${project.id}`} className="flex h-full flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#08080c]">
                {screenshot ? (
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes={items.length > 2 ? '(min-width: 1024px) 33vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-400">
                  {content.category}
                </p>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {content.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-gray-400">
                  {item.note || content.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
                  {locale === 'ua' ? `Переглянути кейс ${content.title}` : `View the ${content.title} case study`}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
