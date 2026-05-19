import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

interface ScrollCameraConfig {
  enabled?: boolean;
  sensitivity?: number;
}

export const useScrollCamera = (config: ScrollCameraConfig = {}) => {
  const { camera } = useThree();
  const scrollProgress = useRef(0);
  const { enabled = true, sensitivity = 1 } = config;

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = docHeight > 0 ? scrollTop / docHeight : 0;

      // Smooth camera movement based on scroll
      const targetZ = 25 - scrollProgress.current * 10 * sensitivity;
      const targetY = scrollProgress.current * 5 * sensitivity;

      gsap.to(camera.position, {
        z: targetZ,
        y: targetY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [camera, enabled, sensitivity]);

  return scrollProgress.current;
};
