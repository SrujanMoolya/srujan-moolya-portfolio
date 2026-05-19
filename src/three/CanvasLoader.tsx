import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

interface CanvasLoaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CanvasLoader: React.FC<CanvasLoaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 25], fov: 75 }}
      dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#0a0e27']} />
      <Suspense fallback={null}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
