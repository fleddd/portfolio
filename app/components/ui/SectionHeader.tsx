type Props = {
  title: React.ReactNode;
  description?: string;
  className?: string;
  level?: 1 | 2;
  index?: string;
};

export function SectionHeader({ title, description, className = '', level = 2, index }: Props) {
  const Heading = level === 1 ? 'h1' : 'h2';

  return (
    <div className={`mb-12 space-y-4 text-center md:mb-16 lg:mb-20 ${className}`}>
      {index && (
        <div className="flex items-center justify-center gap-3 font-mono text-xs font-semibold tracking-[0.16em] text-cyan-400" aria-hidden="true">
          <span>{index}</span>
          <span className="h-px w-8 bg-cyan-400/40" />
        </div>
      )}
      <Heading className="text-3xl font-bold text-white text-balance md:text-5xl lg:text-6xl">{title}</Heading>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 text-pretty md:text-lg">{description}</p>
      )}
    </div>
  );
}
