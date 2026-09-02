import { useEffect } from 'react';

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Elements with [data-reveal] get class "revealed" when visible.
 * Supports stagger delays via data-reveal-delay="100" (ms).
 */
export default function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef?.current || document;
    const elements = root.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.revealDelay || '0', 10);
            setTimeout(() => el.classList.add('revealed'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootRef]);
}
