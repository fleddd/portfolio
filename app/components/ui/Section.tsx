'use client';

type Props = {
  id: string;
  children: React.ReactNode;
  bg?: 'solid' | 'gradient-down' | 'gradient-up';
  className?: string;
};

const bgClasses = {
  solid: 'bg-[#0a0a0f]',
  'gradient-down': 'bg-gradient-to-b from-[#0a0a0f] to-[#12121a]',
  'gradient-up': 'bg-gradient-to-b from-[#12121a] to-[#0a0a0f]',
};

export function Section({ id, children, bg = 'solid', className = '' }: Props) {
  return (
    <section id={id} className={`relative py-32 ${bgClasses[bg]} ${className}`}>
      {children}
    </section>
  );
}
