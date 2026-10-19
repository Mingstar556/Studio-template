"use client";

import React, { Suspense, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function LensModel() {
  const groupRef = useRef<THREE.Group>(null);
  const innerApertureRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth continuous auto-rotation
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.4) * 0.08;
    }
    if (innerApertureRef.current) {
      innerApertureRef.current.rotation.z -= delta * 0.2;
    }
  });

  // Metallic studio materials
  const darkMetal = {
    color: "#18181b",
    metalness: 0.92,
    roughness: 0.18,
    clearcoat: 0.3,
    clearcoatRoughness: 0.2,
  };

  const accentRing = {
    color: "#27272a",
    metalness: 0.85,
    roughness: 0.3,
  };

  const chromeAccent = {
    color: "#e4e4e7",
    metalness: 0.98,
    roughness: 0.1,
  };

  const lensGlass = {
    color: "#0a0a0f",
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.7,
    thickness: 1.2,
    transparent: true,
    opacity: 0.85,
    ior: 1.52,
  };

  const coatingGlass = {
    color: "#3b82f6",
    metalness: 0.4,
    roughness: 0.1,
    transparent: true,
    opacity: 0.35,
  };

  return (
    <group ref={groupRef} scale={1.15}>
      {/* Main Outer Lens Barrel */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 1.8, 64, 1, true]} />
        <meshStandardMaterial {...darkMetal} side={THREE.DoubleSide} />
      </mesh>

      {/* Outer Grip Ridges */}
      <mesh position={[0, 0, -0.4]}>
        <cylinderGeometry args={[2.26, 2.26, 0.6, 48]} />
        <meshStandardMaterial {...accentRing} />
      </mesh>

      {/* Front Outer Bezel Ring */}
      <mesh position={[0, 0, 0.9]}>
        <torusGeometry args={[2.2, 0.14, 24, 64]} />
        <meshStandardMaterial {...darkMetal} />
      </mesh>

      {/* Chrome Indicator Ring */}
      <mesh position={[0, 0, 0.15]}>
        <torusGeometry args={[2.23, 0.04, 16, 64]} />
        <meshStandardMaterial {...chromeAccent} />
      </mesh>

      {/* Inner Stepped Barrels */}
      <mesh position={[0, 0, 0.4]}>
        <cylinderGeometry args={[1.95, 1.95, 1.0, 48, 1, true]} />
        <meshStandardMaterial {...darkMetal} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 0, 0.6]}>
        <torusGeometry args={[1.95, 0.08, 16, 48]} />
        <meshStandardMaterial {...chromeAccent} />
      </mesh>

      {/* Front Convex Glass Element */}
      <mesh position={[0, 0, 0.75]}>
        <sphereGeometry args={[1.9, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.28]} />
        <meshPhysicalMaterial {...lensGlass} />
      </mesh>

      {/* Optical Anti-Reflective Coating Sheen */}
      <mesh position={[0, 0, 0.76]}>
        <sphereGeometry args={[1.88, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.27]} />
        <meshStandardMaterial {...coatingGlass} />
      </mesh>

      {/* Rotating Aperture Blades Ring */}
      <group ref={innerApertureRef} position={[0, 0, -0.1]}>
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 9;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.9, Math.sin(angle) * 0.9, 0]}
              rotation={[0, 0, angle + 0.35]}
            >
              <boxGeometry args={[1.1, 0.35, 0.02]} />
              <meshStandardMaterial color="#111113" metalness={0.7} roughness={0.4} />
            </mesh>
          );
        })}
      </group>

      {/* Deep Center Aperture Iris */}
      <mesh position={[0, 0, -0.15]}>
        <ringGeometry args={[0.55, 1.6, 32]} />
        <meshStandardMaterial color="#09090b" metalness={0.8} roughness={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* Rear Lens Element */}
      <mesh position={[0, 0, -0.8]}>
        <cylinderGeometry args={[1.6, 1.6, 0.3, 32]} />
        <meshStandardMaterial {...darkMetal} />
      </mesh>
      <mesh position={[0, 0, -0.92]}>
        <torusGeometry args={[1.6, 0.09, 16, 48]} />
        <meshStandardMaterial {...chromeAccent} />
      </mesh>
    </group>
  );
}

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
        <div className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-white/30 flex items-center justify-center bg-white/[0.02] backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

const emptySubscribe = () => () => {};

export default function CameraScene() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return <SceneFallback />;
  }

  return (
    <div className="w-full h-full min-h-[360px] md:min-h-[480px] lg:min-h-[580px] flex items-center justify-center relative">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full"
        >
          {/* Studio Lighting Setup */}
          <ambientLight intensity={0.6} />

          {/* Key Studio Spotlight */}
          <spotLight
            position={[8, 10, 8]}
            angle={0.4}
            penumbra={0.8}
            intensity={2.8}
            color="#ffffff"
          />

          {/* Cool Rim Light */}
          <directionalLight
            position={[-8, 6, -6]}
            intensity={2.2}
            color="#94a3b8"
          />

          {/* Warm Bottom Reflector Light */}
          <pointLight
            position={[0, -6, 4]}
            intensity={1.2}
            color="#cbd5e1"
          />

          {/* Front Glow Highlight */}
          <pointLight
            position={[0, 0, 4.5]}
            intensity={1.0}
            color="#e2e8f0"
          />

          <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.4}>
            <LensModel />
          </Float>
        </Canvas>
      </Suspense>
    </div>
  );
}
