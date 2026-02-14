'use client';

import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#12121a',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#e2e8f0',
        },
      }}
    />
  );
}
