import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingMesh {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}

const floatingObjects: FloatingMesh[] = [
  { position: [-10, 5, -20], scale: 2, speed: 0.3, color: '#00ffff' },
  { position: [15, 8, -15], scale: 1.5, speed: 0.4, color: '#ff00ff' },
  { position: [-5, -5, -25], scale: 2.5, speed: 0.25, color: '#00ff88' },
  { position: [10, 0, -20], scale: 1.8, speed: 0.35, color: '#ff0080' },
];

export const HeroEnvironment: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central rotating sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[3, 32, 32]} position={[0, 0, -15]}>
          <MeshDistortMaterial
            color="#ff6600"
            distort={0.3}
            speed={2}
            envMapIntensity={1}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Floating accent objects */}
      {floatingObjects.map((obj, idx) => (
        <Float
          key={idx}
          position={obj.position}
          speed={obj.speed}
          rotationIntensity={0.4}
          floatIntensity={0.3}
        >
          <Sphere args={[obj.scale, 24, 24]}>
            <meshPhongMaterial
              color={obj.color}
              emissive={obj.color}
              emissiveIntensity={0.5}
              wireframe={false}
            />
          </Sphere>
        </Float>
      ))}

      {/* Ambient rotating rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -15]}>
        <torusGeometry args={[8, 0.2, 16, 100]} />
        <meshPhongMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
      </mesh>

      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]} position={[0, 0, -15]}>
        <torusGeometry args={[10, 0.1, 16, 100]} />
        <meshPhongMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};
