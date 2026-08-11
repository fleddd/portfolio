'use client';

import { motion } from 'motion/react';
import { Section, AnimatedCounter } from '@/components/ui';
import { Locale, getCopy } from '@/constants/i18n';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import { getExperienceStats } from '@/constants/experience';

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const t = getCopy(locale).about;
  const icons = [Target, Zap, ShieldCheck];
  const experience = getExperienceStats();

  const localizedStats = [
    { value: `${experience.developmentYears}+`, label: t.stats.years },
    { value: `${experience.commercialMonths}+`, label: t.stats.months },
    { value: t.values.projects, label: t.stats.projects },
    { value: t.values.clients, label: t.stats.clients },
    { value: t.values.commitment, label: t.stats.commitment },
  ];

  return (
    <Section id="about">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t.titleMain}
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                {t.titleAccent}
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              {t.p1}
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              {t.p2}
            </p>

            <p className="text-base text-gray-400 leading-relaxed">
              {t.keywords}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {t.chips.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
          >
            {t.features.map((feature, index) => {
              const Icon = icons[index] || Target;

              return (
              <motion.div
                key={feature.title}
                className="group relative rounded-2xl border border-white/10 bg-[#111116] p-6 transition-colors hover:border-cyan-400/30"
              >
                <div className="relative flex items-start gap-4">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-400" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )})}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16 md:mt-24 pt-10 md:pt-12 border-t border-white/10"
        >
          {localizedStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                <AnimatedCounter text={stat.value} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
