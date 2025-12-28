import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  Sparkles,
  useTexture
} from '@react-three/drei';
import * as THREE from 'three';

// Honey Jar Glass with realistic transmission
const JarGlass = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Jar body - cylindrical shape */}
      <cylinderGeometry args={[1.8, 2, 4, 64, 1, true]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={0.95}
        roughness={0.05}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.3}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.1}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor="#d4a84c"
        color="#ffffff"
      />
    </mesh>
  );
};

// Bottom of jar
const JarBottom = () => {
  return (
    <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[2, 64]} />
      <MeshTransmissionMaterial
        transmission={0.9}
        roughness={0.1}
        thickness={0.3}
        color="#ffffff"
      />
    </mesh>
  );
};

// Honey inside the jar
const HoneyFill = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle wobble effect
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.3, 0]}>
      <cylinderGeometry args={[1.7, 1.9, 3.2, 64]} />
      <MeshDistortMaterial
        color="#d4a84c"
        emissive="#8b6914"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.1}
        distort={0.05}
        speed={2}
        transparent
        opacity={0.95}
      />
    </mesh>
  );
};

// Jar lid/cap
const JarLid = () => {
  return (
    <group position={[0, 2.4, 0]}>
      {/* Lid top */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[2.1, 2.1, 0.6, 64]} />
        <meshStandardMaterial 
          color="#2d5a3d"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      {/* Lid rim */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.3, 64]} />
        <meshStandardMaterial 
          color="#1e3d29"
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
};

// Label on the jar
const JarLabel = () => {
  return (
    <mesh position={[0, 0, 2.01]} rotation={[0, 0, 0]}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial 
        color="#fff8e7"
        roughness={0.8}
      />
    </mesh>
  );
};

// Honey drip effect
const HoneyDrip = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Slow dripping animation
      meshRef.current.position.y = initialY - (time % 4) * 0.3;
      meshRef.current.scale.y = 1 + Math.sin(time * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial
        color="#d4a84c"
        emissive="#8b6914"
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.1}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// Main jar composition
const HoneyJarScene = () => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <group scale={0.8}>
        <JarGlass />
        <JarBottom />
        <HoneyFill />
        <JarLid />
        <JarLabel />
        
        {/* Honey drips */}
        <HoneyDrip position={[1.9, 1, 0.5]} />
        <HoneyDrip position={[-1.8, 0.5, -0.3]} />
        
        {/* Sparkles for premium effect */}
        <Sparkles
          count={50}
          scale={6}
          size={2}
          speed={0.4}
          color="#d4a84c"
          opacity={0.5}
        />
      </group>
    </Float>
  );
};

// Main component with Canvas
const HoneyJar3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          color="#fff5e6"
          castShadow
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.5}
          color="#ffd699"
        />
        <pointLight
          position={[0, -5, 5]}
          intensity={0.5}
          color="#d4a84c"
        />
        
        {/* Environment for reflections */}
        <Environment preset="studio" />
        
        {/* Main scene */}
        <HoneyJarScene />
      </Canvas>
    </div>
  );
};

export default HoneyJar3D;
