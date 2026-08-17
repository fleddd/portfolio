import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = 'h-10 w-auto', priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={1310}
      height={1201}
      priority={priority}
      className={`shrink-0 object-contain ${className}`}
      aria-hidden="true"
    />
  );
}
