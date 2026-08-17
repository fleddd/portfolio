'use client';

import { useEffect } from 'react';

const LANGUAGE_TRANSITION_KEY = 'portfolio-language-transition';
const PROFILE_TRANSITION_KEY = 'portfolio-profile-transition';
const LANGUAGE_EXIT_DURATION = 340;
const MOBILE_LANGUAGE_EXIT_DURATION = 300;
const PROFILE_EXIT_DURATION = 360;
const MOBILE_PROFILE_EXIT_DURATION = 260;

export function SiteMotion() {
  useEffect(() => {
    let navigationTimer: number | undefined;

    const handleLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const clickedElement = event.target;
      if (!(clickedElement instanceof Element)) return;

      const link = clickedElement.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobileViewport = window.matchMedia('(max-width: 47.99rem)').matches;

      if (link.hasAttribute('data-language-switch')) {
        if (destination.href === window.location.href) return;

        event.preventDefault();
        if (reduceMotion) {
          window.location.assign(destination.href);
          return;
        }

        try {
          window.sessionStorage.removeItem(PROFILE_TRANSITION_KEY);
          window.sessionStorage.setItem(LANGUAGE_TRANSITION_KEY, '1');
        } catch {
          // The exit transition still works when storage is unavailable.
        }

        document.documentElement.dataset.languageTransitionMessage = destination.pathname.startsWith('/ua')
          ? 'Мовна магія в процесі — пікселі вже перекладають ✨'
          : 'Language magic in progress — the pixels are translating ✨';
        document.documentElement.classList.add('language-transition-leave');
        document.body.setAttribute('aria-busy', 'true');
        navigationTimer = window.setTimeout(() => {
          window.location.assign(destination.href);
        }, isMobileViewport ? MOBILE_LANGUAGE_EXIT_DURATION : LANGUAGE_EXIT_DURATION);
        return;
      }

      if (link.hasAttribute('data-profile-switch')) {
        if (destination.href === window.location.href) return;

        event.preventDefault();
        if (reduceMotion) {
          window.location.assign(destination.href);
          return;
        }

        const direction = destination.pathname.endsWith('/technical') ? 'forward' : 'backward';
        try {
          window.sessionStorage.removeItem(LANGUAGE_TRANSITION_KEY);
          window.sessionStorage.setItem(PROFILE_TRANSITION_KEY, direction);
        } catch {
          // The exit transition still works when storage is unavailable.
        }

        document.documentElement.classList.add(
          direction === 'forward'
            ? 'profile-transition-leave-left'
            : 'profile-transition-leave-right'
        );
        document.body.setAttribute('aria-busy', 'true');
        navigationTimer = window.setTimeout(() => {
          window.location.assign(destination.href);
        }, isMobileViewport ? MOBILE_PROFILE_EXIT_DURATION : PROFILE_EXIT_DURATION);
        return;
      }

      const isSameDocument =
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search;
      if (!isSameDocument || !destination.hash) return;

      const targetId = decodeURIComponent(destination.hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, '', destination.hash);

      window.requestAnimationFrame(() => {
        const navigationHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navigationHeight;
        window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => {
      document.removeEventListener('click', handleLinkClick, true);
      if (navigationTimer) window.clearTimeout(navigationTimer);
    };
  }, []);

  return null;
}
