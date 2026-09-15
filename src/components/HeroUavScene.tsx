import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type SceneColors = { metal: string; glass: string; signal: string; dark: string };

function FlyingWing({ colors, still }: { colors: SceneColors; still: boolean }) {
  const craft = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const wing = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 2.7);
    shape.lineTo(1.1, 1.5);
    shape.lineTo(5.4, -0.25);
    shape.lineTo(4.5, -1.05);
    shape.lineTo(1.25, -0.55);
    shape.lineTo(0.65, -1.65);
    shape.lineTo(0, -1.85);
    shape.lineTo(-0.65, -1.65);
    shape.lineTo(-1.25, -0.55);
    shape.lineTo(-4.5, -1.05);
    shape.lineTo(-5.4, -0.25);
    shape.lineTo(-1.1, 1.5);
    shape.closePath();
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.24, bevelEnabled: true, bevelSize: 0.12, bevelThickness: 0.1, bevelSegments: 2 });
    geometry.center();
    return geometry;
  }, []);
  const trail = useMemo(() => {
    const points = Array.from({ length: 32 }, (_, i) => {
      const x = -10 + i * 0.5;
      return new THREE.Vector3(x, Math.sin(i * 0.22) * 0.4 - 0.5, -1.7 - i * 0.035);
    });
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(({ clock }, rawDelta) => {
    const group = craft.current;
    if (!group || still) return;
    const delta = Math.min(rawDelta, 0.05);
    const t = clock.elapsedTime * 0.18;
    const targetX = 2.4 + Math.sin(t) * 1.35 + pointer.current.x * 0.32;
    const targetY = Math.sin(t * 1.4) * 0.52 - pointer.current.y * 0.22;
    const targetZ = Math.cos(t * 0.72) * 0.4;
    const damping = 1 - Math.exp(-2.4 * delta);
    group.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), damping);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -0.12 + Math.cos(t * 1.4) * 0.07 - pointer.current.x * 0.025, damping);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, -0.34 + Math.sin(t * 0.7) * 0.1 + pointer.current.x * 0.08, damping);
  });

  return <>
    <line geometry={trail}>
      <lineBasicMaterial color={colors.signal} transparent opacity={0.2} />
    </line>
    <group ref={craft} position={[2.4, 0, 0]} rotation={[1.16, -0.34, -0.12]} scale={0.78}>
      <mesh geometry={wing}>
        <meshPhysicalMaterial color={colors.metal} metalness={0.82} roughness={0.3} transparent opacity={0.42} transmission={0.16} thickness={0.25} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.1, 0.22]} scale={[0.62, 2.5, 0.42]}>
        <capsuleGeometry args={[0.42, 1.15, 5, 12]} />
        <meshPhysicalMaterial color={colors.glass} metalness={0.55} roughness={0.16} transparent opacity={0.5} transmission={0.28} />
      </mesh>
      <mesh position={[0, 0.55, 0.64]} scale={[0.45, 0.78, 0.2]}>
        <sphereGeometry args={[0.75, 16, 8]} />
        <meshPhysicalMaterial color={colors.dark} metalness={0.7} roughness={0.12} transparent opacity={0.52} />
      </mesh>
      <pointLight position={[0, -1.2, 0.7]} color={colors.signal} intensity={1.6} distance={4} />
      <mesh position={[0, -1.65, 0.35]}>
        <sphereGeometry args={[0.09, 8, 8]} />
        <meshBasicMaterial color={colors.signal} transparent opacity={0.75} />
      </mesh>
    </group>
  </>;
}

export type { SceneColors };

export default function HeroUavScene({ colors, still, onReady }: { colors: SceneColors; still: boolean; onReady: () => void }) {
  return <Canvas dpr={1} camera={{ position: [0, 0, 14], fov: 42 }} gl={{ antialias: false, alpha: true, powerPreference: "low-power" }} onCreated={onReady}>
    <ambientLight intensity={0.65} color={colors.glass} />
    <directionalLight position={[4, 7, 8]} intensity={1.25} color={colors.signal} />
    <FlyingWing colors={colors} still={still} />
  </Canvas>;
}
