# Project screenshots

Create one folder per project slug and place screenshots inside it:

- `sea-travel/`
- `qwiktwik/`
- `mevdev-frontend/`
- `night-light-configurator/`

Then update each screenshot `src` in `app/constants/projects.ts`, for example:

```ts
src: '/projects/sea-travel/homepage.webp'
```

Add as many screenshot objects as you need. Every object requires:

```ts
{
  src: '/projects/sea-travel/booking.webp',
  alt: 'Sea Travel booking interface',
  caption: 'Booking flow with date and destination selection.',
}
```

WebP or AVIF is recommended for portfolio screenshots. Keep each image below
roughly 500 KB when possible. Images with a non-empty `src` automatically open
in the full-screen gallery and can be browsed with arrows, keyboard, or swipe.
