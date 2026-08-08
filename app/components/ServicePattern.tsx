type ServicePatternProps = {
  variant: 'orbit' | 'network' | 'dots';
  className?: string;
};

export function ServicePattern({ variant, className = '' }: ServicePatternProps) {
  if (variant === 'dots') {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute h-64 w-64 opacity-30 ${className}`}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 1.25px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          maskImage: 'radial-gradient(circle, black 15%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle, black 15%, transparent 70%)',
        }}
      />
    );
  }

  if (variant === 'network') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 360 220"
        fill="none"
        className={`pointer-events-none absolute text-cyan-400/25 ${className}`}
      >
        <path d="M18 164H82L126 112H198L246 62H342" stroke="currentColor" strokeWidth="1" />
        <path d="M82 164L132 196H226L274 150H342" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" />
        <path d="M126 112L92 68H28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="18" cy="164" r="4" fill="currentColor" />
        <circle cx="82" cy="164" r="7" stroke="currentColor" />
        <circle cx="126" cy="112" r="4" fill="currentColor" />
        <circle cx="198" cy="112" r="7" stroke="currentColor" />
        <circle cx="246" cy="62" r="4" fill="currentColor" />
        <circle cx="274" cy="150" r="5" stroke="currentColor" />
        <circle cx="342" cy="62" r="7" stroke="currentColor" />
        <circle cx="342" cy="150" r="4" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 280"
      fill="none"
      className={`pointer-events-none absolute text-cyan-400/20 ${className}`}
    >
      <circle cx="140" cy="140" r="116" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" />
      <circle cx="140" cy="140" r="78" stroke="currentColor" strokeWidth="1" />
      <circle cx="140" cy="140" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="140" cy="24" r="5" fill="currentColor" />
      <circle cx="218" cy="140" r="7" stroke="currentColor" />
      <circle cx="102" cy="140" r="4" fill="currentColor" />
      <path d="M140 62V24M178 140H218M113 113L86 86" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
