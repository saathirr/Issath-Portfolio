import { useEffect } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver that adds
 * the "revealed" class to every element with a reveal-* class
 * when it enters the viewport.
 */
export default function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
}
