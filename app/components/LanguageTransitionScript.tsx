const transitionScript = `
  (() => {
    try {
      const languageKey = 'portfolio-language-transition';
      const profileKey = 'portfolio-profile-transition';
      const languageTransition = sessionStorage.getItem(languageKey) === '1';
      const profileDirection = sessionStorage.getItem(profileKey);
      const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion) {
        sessionStorage.removeItem(languageKey);
        sessionStorage.removeItem(profileKey);
        return;
      }

      if (languageTransition) {
        sessionStorage.removeItem(languageKey);
        sessionStorage.removeItem(profileKey);
        document.documentElement.dataset.languageTransitionMessage =
          document.documentElement.lang === 'uk'
            ? 'Мовна магія в процесі — пікселі вже перекладають ✨'
            : 'Language magic in progress — the pixels are translating ✨';
        document.documentElement.classList.add('language-transition-enter');
        addEventListener('DOMContentLoaded', () => {
          const duration = matchMedia('(max-width: 47.99rem)').matches ? 500 : 580;
          setTimeout(() => {
            document.documentElement.classList.remove('language-transition-enter');
            delete document.documentElement.dataset.languageTransitionMessage;
          }, duration);
        }, { once: true });
        return;
      }

      if (profileDirection === 'forward' || profileDirection === 'backward') {
        sessionStorage.removeItem(profileKey);
        sessionStorage.removeItem(languageKey);
        const enterClass = profileDirection === 'forward'
          ? 'profile-transition-enter-right'
          : 'profile-transition-enter-left';
        document.documentElement.classList.add(enterClass);
        addEventListener('DOMContentLoaded', () => {
          const duration = matchMedia('(max-width: 47.99rem)').matches ? 380 : 520;
          setTimeout(() => document.documentElement.classList.remove(enterClass), duration);
        }, { once: true });
      }
    } catch {}
  })();
`;

export function LanguageTransitionScript() {
  return <script dangerouslySetInnerHTML={{ __html: transitionScript }} />;
}
