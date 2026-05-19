import React from 'react';
import * as THREE from 'three';

export const CinematicLights: React.FC = () => {
  return (
    <>
      {/* Main directional light - cinematic key light */}
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />

      {/* Fill light from opposite side */}
      <directionalLight position={[-5, 4, -4]} intensity={0.6} />

      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.5} />

      {/* Rim light for cinematic edge glow */}
      <pointLight position={[0, 10, -20]} intensity={0.8} color="#ff00ff" />
      <pointLight position={[0, 10, 20]} intensity={0.8} color="#00ffff" />

      {/* Fog for atmospheric depth */}
      <fog attach="fog" args={['#0a0e27', 50, 200]} />
    </>
  );
};
