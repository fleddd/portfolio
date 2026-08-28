'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-[#0a0a0f] text-white">
      <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
        Error
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-300">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
        >
          Go to homepage
        </a>
      </div>
      {error.digest && (
        <p className="mt-6 font-mono text-xs text-gray-500">
          Reference: {error.digest}
        </p>
      )}
    </main>
  );
}
