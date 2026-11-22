"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Group } from "three";
function Knot({ angle }: { angle: number }) {
  const ref = useRef<Group>(null);
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    invalidate();
  }, [angle, invalidate]);
  useFrame(({ pointer }) => {
    if (!ref.current) return;
    const x = pointer.y * 0.3 + 0.45,
      y = angle + pointer.x * 0.5;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current.rotation.set(0.45, angle, 0);
      return;
    }
    ref.current.rotation.x += (x - ref.current.rotation.x) * 0.14;
    ref.current.rotation.y += (y - ref.current.rotation.y) * 0.14;
    if (
      Math.abs(x - ref.current.rotation.x) +
        Math.abs(y - ref.current.rotation.y) >
      0.001
    )
      invalidate();
  });
  return (
    <group ref={ref} onPointerMove={() => invalidate()}>
      <mesh>
        <torusKnotGeometry args={[1.28, 0.35, 100, 16, 2, 3]} />
        <meshStandardMaterial
          color="#d4ff51"
          roughness={0.28}
          metalness={0.3}
        />
      </mesh>
      <mesh rotation={[1.5, 0.5, 0.2]}>
        <torusGeometry args={[2, 0.018, 8, 90]} />
        <meshStandardMaterial color="#72796b" />
      </mesh>
    </group>
  );
}
export default function ConnectionScene({ angle }: { angle: number }) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      fallback={
        <p>
          3D is unavailable in this browser. Close 3D to see the illustration.
        </p>
      }
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 5, 4]} intensity={4} />
      <directionalLight position={[-4, -1, 2]} intensity={1} color="#eaf4ff" />
      <Knot angle={angle} />
    </Canvas>
  );
}
