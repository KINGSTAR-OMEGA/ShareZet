import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface SceneProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
}

const Box = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, color = '#9333EA' }: SceneProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh position={new THREE.Vector3(...position)} rotation={new THREE.Euler(...rotation)} scale={scale} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position = [0, 0, 0], scale = 1, color = '#3B82F6' }: SceneProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta * 0.1;
      mesh.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <mesh position={new THREE.Vector3(...position)} scale={scale} ref={mesh}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Torus = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, color = '#0D9488' }: SceneProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.5;
      mesh.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <mesh position={new THREE.Vector3(...position)} rotation={new THREE.Euler(...rotation)} scale={scale} ref={mesh}>
      <torusGeometry args={[0.3, 0.1, 16, 40]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export const ThreeScene = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box position={[-1, 0, 0]} />
      <Sphere position={[1, 0, 0]} />
      <Torus position={[0, 1, 0]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

export default ThreeScene;
