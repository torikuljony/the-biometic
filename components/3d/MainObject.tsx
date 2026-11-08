"use client";

import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type MainObjectProps = {
  progress: number;
};

export function MainObject({ progress }: MainObjectProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;
    const x = THREE.MathUtils.lerp(-2.2, 2.2, progress);
    const y = THREE.MathUtils.lerp(0.8, -0.7, progress) + Math.sin(time * 1.2) * 0.22;

    groupRef.current.position.x = x;
    groupRef.current.position.y = y;
    groupRef.current.position.z = THREE.MathUtils.lerp(0.4, -0.5, progress);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(-0.8, 1.1, progress) + Math.sin(time * 0.7) * 0.2;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(0.2, 6.2, progress) + time * 0.26;
    groupRef.current.rotation.z = THREE.MathUtils.lerp(0.3, -0.8, progress) + Math.sin(time * 0.9) * 0.25;
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(2.5, 1.1, progress));
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.8}>
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[1.25, 0.34, 180, 28]} />
          <meshPhysicalMaterial
            color="#D9E6FF"
            emissive="#6EA8FF"
            emissiveIntensity={0.45}
            metalness={0.92}
            roughness={0.2}
            clearcoat={0.9}
            clearcoatRoughness={0.2}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[1.9, 0.065, 32, 200]} />
          <meshStandardMaterial color="#7CFFCB" emissive="#7CFFCB" emissiveIntensity={0.9} metalness={1} roughness={0.15} />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.9, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            resolution={256}
            thickness={0.8}
            roughness={0.05}
            transmission={1}
            ior={1.2}
            chromaticAberration={0.02}
            anisotropy={0.2}
            distortion={0.14}
            color="#AFCBFF"
            attenuationColor="#6EA8FF"
            attenuationDistance={0.7}
            opacity={1}
          />
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[0.8, 0.2, 0]}>
          <octahedronGeometry args={[1.16, 1]} />
          <meshStandardMaterial color="#0d1425" emissive="#7CFFCB" emissiveIntensity={0.7} metalness={0.85} roughness={0.24} />
        </mesh>

        <group rotation={[0, 0, Math.PI / 3]}>
          {[0, 1, 2, 3].map((index) => (
            <mesh key={index} position={[0, 0, 0]} rotation={[Math.PI / 2 + index * 0.8, index * 0.7, 0]}>
              <torusGeometry args={[2.15 + index * 0.18, 0.03, 20, 180]} />
              <meshStandardMaterial color={index % 2 === 0 ? "#8ea8ff" : "#7CFFCB"} emissive={index % 2 === 0 ? "#6EA8FF" : "#7CFFCB"} emissiveIntensity={0.8} metalness={1} roughness={0.18} />
            </mesh>
          ))}
        </group>

        <mesh rotation={[1.2, 0.5, 0.8]} position={[0.4, 0.9, 0.6]}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial color="#DFFBFF" emissive="#6EA8FF" emissiveIntensity={1.1} metalness={0.6} roughness={0.2} />
        </mesh>

        <mesh rotation={[0.9, 1.2, 1.2]} position={[-0.8, -0.6, 0.8]}>
          <sphereGeometry args={[0.3, 24, 24]} />
          <meshStandardMaterial color="#DFFBFF" emissive="#7CFFCB" emissiveIntensity={1.3} metalness={0.7} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}
