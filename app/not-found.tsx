import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Oleh Fedkiv',
  robots: { index: false, follow: false },
};

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden bg-[#0a0a0f] text-white">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-300">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Go to homepage
            </Link>
            <Link
              href="/inquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              Start a project
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
