import Link from 'next/link';
import type { Metadata } from 'next';
import { fontVariables } from '../fonts';

export const metadata: Metadata = {
  title: 'Page Not Found | Oleh Fedkiv',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased overflow-x-hidden bg-canvas text-white">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-light uppercase tracking-[-0.03em] sm:text-5xl">
            <span className="mb-3 block font-display text-[clamp(4.5rem,14vw,6rem)] leading-none tracking-[0.01em]">404</span>
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-mute">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full silver px-6 py-3 font-medium text-canvas transition-[filter,opacity] hover:brightness-110"
            >
              Go to homepage
            </Link>
            <Link
              href="/inquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 font-medium text-ink/90 transition-colors hover:border-white/70 hover:text-white"
            >
              Start a project
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
