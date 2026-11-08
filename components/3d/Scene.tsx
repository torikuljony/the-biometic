"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraRig } from "./CameraRig";
import { Lighting } from "./Lighting";
import { MainObject } from "./MainObject";
import { Particles } from "./Particles";

type SceneProps = {
  progress: number;
};

export function Scene({ progress }: SceneProps) {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 32 }} dpr={[1, 2]} shadows>
        <Suspense fallback={null}>
          <color attach="background" args={["#03040A"]} />
          <fog attach="fog" args={["#03040A", 7, 18]} />
          <Lighting />
          <CameraRig progress={progress} />
          <group position={[0, 0.2, 0]}>
            <MainObject progress={progress} />
            <Particles />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
