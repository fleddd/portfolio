'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button, Section, SectionHeader } from '@/components/ui';
import { SKILL_CATEGORIES } from '@/constants';
import { Locale, getCopy } from '@/constants/i18n';

type SkillsProps = {
  locale: Locale;
};

export function Skills({ locale }: SkillsProps) {
  const t = getCopy(locale).skills;
  const technologiesLabel = locale === 'ua' ? 'Технології' : 'Technologies';
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
    <Section id="skills" bg="gradient-down">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={
            <>
              {t.titleLeft}{' '}
              <span className="text-transparent bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text">{t.titleRight}</span>
            </>
          }
          description={t.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.color}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-linear-to-br ${category.color} bg-opacity-20`}>
                      <category.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{categoryTitleMap[category.title] || category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-400">{technologiesLabel}</p>
                    <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((technology, skillIndex) => (
                      <motion.div
                        key={`${category.title}-${skillIndex}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <Image
                          src={technology.icon}
                          alt={`${technology.name} icon`}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                        <span className="text-sm font-medium text-gray-200">{technology.name}</span>
                      </motion.div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">{t.note}</p>
          <Button href="/cv.pdf">{t.resume}</Button>
        </motion.div>
      </div>
    </Section>
  );
}
