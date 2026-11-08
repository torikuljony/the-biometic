"use client";

import { useMemo } from "react";

export function Particles() {
  const positions = useMemo(() => {
    const data = new Float32Array(240 * 3);

    for (let i = 0; i < 240; i += 1) {
      const i3 = i * 3;
      const radius = 2.7 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4.5;

      data[i3] = Math.cos(angle) * radius;
      data[i3 + 1] = y;
      data[i3 + 2] = Math.sin(angle) * radius;
    }

    return data;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#C9D4FF"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}
