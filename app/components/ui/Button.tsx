type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
};

const base =
  'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-[-0.01em] transition-[filter,background-color,border-color,color] duration-300 ease-out-expo';

// Primary is the brushed-silver pill; secondary is the hairline outline pill.
export const buttonVariants = {
  primary: 'silver text-canvas hover:brightness-110 active:brightness-95',
  secondary: 'border border-white/25 text-ink hover:border-white/70 active:bg-white/5',
};

export function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  type = 'button',
  className = '',
}: Props) {
  const cn = `${base} ${buttonVariants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cn}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn}>
      {children}
    </button>
  );
}
