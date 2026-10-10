type Props = {
  title: React.ReactNode;
  accent?: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  // `display` is the bookend voice (page openers and the closing CTA): larger,
  // with the thin second voice. Every other section heading stays one voice
  // so the hierarchy reads hero → section → card without competing.
  display?: boolean;
  className?: string;
  level?: 1 | 2;
};

export function SectionHeader({
  title,
  accent,
  description,
  align = 'left',
  display = false,
  className = '',
  level = 2,
}: Props) {
  const Heading = level === 1 ? 'h1' : 'h2';
  const centered = align === 'center';

  return (
    <div className={`mb-12 md:mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      <Heading
        className={`font-light uppercase text-ink text-balance ${display
          ? 'text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] tracking-[-0.035em]'
          : 'max-w-3xl text-[clamp(2rem,3.6vw,3.25rem)] leading-none tracking-[-0.03em]'
          } ${centered ? 'mx-auto' : ''}`}
      >
        {title}
        {accent && (
          <>
            {' '}
            {display ? <DisplayAccent>{accent}</DisplayAccent> : accent}
          </>
        )}
      </Heading>
      {description && (
        <p className={`mt-5 max-w-xl text-[17px] leading-relaxed text-mute text-pretty ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function DisplayAccent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-display text-[1.12em] font-light tracking-[0.01em] ${className}`}>
      {children}
    </span>
  );
}
