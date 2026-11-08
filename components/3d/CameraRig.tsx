"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type CameraRigProps = {
  progress: number;
};

export function CameraRig({ progress }: CameraRigProps) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    const t = progress;
    const drift = Math.sin(state.clock.elapsedTime * 0.7) * 0.18;

    target.current.set(
      THREE.MathUtils.lerp(-1.7, 1.7, t),
      THREE.MathUtils.lerp(0.7, -0.35, t) + drift,
      THREE.MathUtils.lerp(6.4, 5.2, t),
    );

    camera.position.lerp(target.current, 0.06);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
