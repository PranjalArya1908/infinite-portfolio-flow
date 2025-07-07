
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Box } from '@react-three/drei';
import * as THREE from 'three';

const Robot = () => {
  const robotRef = useRef<THREE.Group>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (robotRef.current) {
      // More responsive cursor following
      robotRef.current.rotation.y = THREE.MathUtils.lerp(
        robotRef.current.rotation.y,
        mousePosition.current.x * 0.5,
        0.1
      );
      robotRef.current.rotation.x = THREE.MathUtils.lerp(
        robotRef.current.rotation.x,
        mousePosition.current.y * 0.3,
        0.1
      );
      
      // Floating animation
      robotRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.2;
    }
  });

  return (
    <group ref={robotRef}>
      {/* Robot Head */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#4F46E5" />
      </mesh>
      
      {/* Robot Eyes */}
      <mesh position={[-0.2, 1.2, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 1.2, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Robot Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.2, 0.6]} />
        <meshStandardMaterial color="#6366F1" />
      </mesh>
      
      {/* Robot Arms */}
      <mesh position={[-0.8, 0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      <mesh position={[0.8, 0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      
      {/* Robot Legs */}
      <mesh position={[-0.3, -1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8]} />
        <meshStandardMaterial color="#7C3AED" />
      </mesh>
      <mesh position={[0.3, -1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8]} />
        <meshStandardMaterial color="#7C3AED" />
      </mesh>
    </group>
  );
};

const Robot3D = () => {
  return (
    <div className="fixed bottom-8 right-8 w-32 h-32 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#60A5FA" />
        <Robot />
      </Canvas>
    </div>
  );
};

export default Robot3D;
