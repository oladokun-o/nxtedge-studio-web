/*
  Svelte action for a simple fade/rise-in-on-scroll effect, per decisions.md
  Decision 3 and component-architecture.md §2.6 (replaces the jQuery/WOW.js/
  SplitText reveal system).

  Originally implemented on GSAP ScrollTrigger, but that had a real bug: trigger
  positions get computed as soon as the action mounts, before web fonts finish
  loading and shift layout, and under fast/programmatic scrolling the element
  could end up permanently stuck at opacity:0 — content present in the DOM but
  invisible. IntersectionObserver doesn't have that failure mode (it evaluates
  actual viewport intersection whenever it changes, not a precomputed pixel
  position), so it's what this uses instead. GSAP + ScrollTrigger stay loaded
  (app.html) for real scroll-triggered work later — this effect just never
  needed them.

  Respects prefers-reduced-motion (design-system-audit.md §9/§12) and tears
  itself down on destroy.
*/

interface ScrollRevealOptions {
  y?: number;
  delay?: number;
  enabled?: boolean;
}

export function scrollReveal(node: HTMLElement, options: ScrollRevealOptions = {}) {
  if (typeof window === 'undefined') return {};

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || options.enabled === false) {
    return {};
  }

  const { y = 24, delay = 0 } = options;

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;

  const reveal = () => {
    node.style.opacity = '1';
    node.style.transform = 'translateY(0)';
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        reveal();
        observer.unobserve(node);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
