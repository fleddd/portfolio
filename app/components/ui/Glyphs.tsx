import type { LucideIcon } from 'lucide-react';

// The heavy north-east arrow that signs the visual world.
export function ArrowNE({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 4.5h15.5V20" stroke="currentColor" strokeWidth="3.4" strokeLinecap="square" />
      <path d="M19 5 4.5 19.5" stroke="currentColor" strokeWidth="3.4" strokeLinecap="square" />
    </svg>
  );
}

// Small round charcoal badge holding a red line icon.
export function IconBadge({ icon: Icon, className = '' }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-line text-accent ${className}`}
      aria-hidden="true"
    >
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </span>
  );
}
