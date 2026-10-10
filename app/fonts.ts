import { Cormorant, Geologica, Martian_Mono, Onest } from 'next/font/google';

// Wide geometric grotesk — the working voice: headlines (uppercase) and body.
const geologica = Geologica({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-geologica',
  display: 'swap',
});

// Working voice for the Ukrainian site — Geologica's Cyrillic is drawn wider and
// heavier than its Latin, so light uppercase headlines and body text turn clumsy.
const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-onest',
  display: 'swap',
});

// Thin high-contrast display — the second voice inside headlines.
const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Measurement voice — prices, periods, counters, stats.
const martianMono = Martian_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-martian',
  display: 'swap',
});

export const fontVariables = `${geologica.variable} ${cormorant.variable} ${martianMono.variable}`;
export const fontVariablesUk = `${onest.variable} ${cormorant.variable} ${martianMono.variable}`;
