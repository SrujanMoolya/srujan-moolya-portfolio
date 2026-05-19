import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const update = (time: number) => {
      lenis.raf(time);
    };

    const rafId = requestAnimationFrame(function raf(time) {
      update(time);
      requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};
