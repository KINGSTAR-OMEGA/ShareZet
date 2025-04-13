import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  colors?: string[];
  size?: number;
}

const Particles: React.FC<ParticlesProps> = ({ 
  count = 100, 
  colors = ['#9333EA', '#3B82F6', '#0D9488'], 
  size = 0.05 
}) => {
  const points = useRef<THREE.Points>(null!);
  const particlesGeometry = useRef<THREE.BufferGeometry>(null!);
  
  useEffect(() => {
    if (!particlesGeometry.current) return;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#9333EA'),
      new THREE.Color('#3B82F6'),
      new THREE.Color('#0D9488')
    ];
    
    for (let i = 0; i < count; i++) {
      // Position
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Color
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    particlesGeometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.current.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }, [count]);
  
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.05;
      points.current.rotation.y += delta * 0.075;
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry ref={particlesGeometry} />
      <pointsMaterial 
        size={size} 
        vertexColors 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const ParticleField = () => {
  return (
    <Particles count={200} size={0.05} />
  );
};

export default ParticleField;
