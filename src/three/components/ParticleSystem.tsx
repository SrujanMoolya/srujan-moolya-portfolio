import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface ParticleSystemProps {
  count?: number;
  speed?: number;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 1000,
  speed = 0.5,
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      velocities[i * 3] = (Math.random() - 0.5) * speed;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * speed;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * speed;
    }

    return { positions, velocities };
  }, [count, speed]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      positions[i * 3] += particles.velocities[i * 3];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];

      // Wrap around
      if (Math.abs(positions[i * 3]) > 50) positions[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 50) positions[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 50) positions[i * 3 + 2] *= -1;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#00ffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
};
