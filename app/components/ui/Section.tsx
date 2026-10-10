type Props = {
  id?: string;
  children: React.ReactNode;
  bg?: 'solid' | 'surface';
  className?: string;
};

const bgClasses = {
  solid: 'bg-canvas',
  surface: 'bg-surface',
};

export function Section({ id, children, bg = 'solid', className = '' }: Props) {
  return (
    <section id={id} className={`relative py-20 md:py-28 lg:py-32 ${bgClasses[bg]} ${className}`}>
      {children}
    </section>
  );
}
