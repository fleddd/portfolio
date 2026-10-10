'use client';

import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#141414',
          border: '1px solid #272727',
          borderRadius: '16px',
          color: '#ffffff',
        },
      }}
    />
  );
}
