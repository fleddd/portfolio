'use client';

import { motion } from 'motion/react';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
};

const base =
  'cursor-pointer font-medium rounded-xl transition-all inline-flex items-center justify-center gap-2';

const variants = {
  primary:
    'px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-2xl hover:shadow-cyan-500/25',
  secondary:
    'px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50',
};

export function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  type = 'button',
  className = '',
}: Props) {
  const cn = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn}
    >
      {children}
    </motion.button>
  );
}
