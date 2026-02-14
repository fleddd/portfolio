'use client';

import { motion } from 'motion/react';

type Props = {
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({ title, description, className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-center space-y-4 mb-20 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{title}</h2>
      {description && (
        <p className="max-w-2xl mx-auto text-lg text-gray-400">{description}</p>
      )}
    </motion.div>
  );
}
