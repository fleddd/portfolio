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
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-canvas text-white">
      <h1 className="text-4xl font-light uppercase tracking-[-0.03em] sm:text-5xl">
        Щось пішло не так
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-mute">
        Сталася неочікувана помилка. Спробуйте ще раз або поверніться на головну.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center justify-center rounded-full silver px-6 py-3 font-medium text-canvas transition-[filter,opacity] hover:brightness-110"
        >
          Спробувати ще раз
        </button>
        <a
          href="/ua"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 font-medium text-ink/90 transition-colors hover:border-white/70 hover:text-white"
        >
          На головну
        </a>
      </div>
      {error.digest && (
        <p className="mt-6 font-mono text-xs text-mute/80">
          Код: {error.digest}
        </p>
      )}
    </main>
  );
}
