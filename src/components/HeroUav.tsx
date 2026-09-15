import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
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
  const trail = useMemo(() => Array.from({ length: 44 }, (_, i) => {
    const x = -10 + i * 0.36;
    return [x, Math.sin(i * 0.17) * 0.4 - 0.5, -1.7 - i * 0.025] as [number, number, number];
  }), []);

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
    <Line points={trail} color={colors.signal} transparent opacity={0.2} lineWidth={0.65} />
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

export function HeroUav() {
  const [scene, setScene] = useState<{ enabled: boolean; still: boolean; colors: SceneColors } | null>(null);
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setScene({ enabled: !mobile, still, colors: {
      metal: styles.getPropertyValue("--uav-metal").trim(),
      glass: styles.getPropertyValue("--uav-glass").trim(),
      signal: styles.getPropertyValue("--uav-signal").trim(),
      dark: styles.getPropertyValue("--uav-dark").trim(),
    }});
  }, []);

  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="uav-coordinate-grid absolute right-0 top-0 h-full w-[58%] opacity-45" />
    <div className="absolute right-[7%] top-[18%] hidden h-[54%] w-[48%] border-r border-t border-primary/10 md:block" />
    <div className="absolute right-[7%] top-[17%] hidden font-display text-[9px] text-primary/45 md:block">FLT PATH // 12.9716° N</div>
    <div className="absolute bottom-[20%] right-[8%] hidden items-center gap-2 font-display text-[9px] text-muted-foreground/50 md:flex"><span className="size-1 rounded-full bg-primary/60" /> TELEMETRY NOMINAL</div>
    {["right-[11%] top-[31%]", "right-[39%] top-[24%]", "right-[32%] top-[69%]"].map((position) => <span key={position} className={`absolute hidden size-1 rounded-full bg-primary/50 md:block ${position}`} />)}
    {scene?.enabled && <div className="absolute inset-y-[7%] right-0 w-[67%] opacity-80"><Canvas dpr={1} camera={{ position: [0, 0, 14], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}>
      <ambientLight intensity={0.65} color={scene.colors.glass} />
      <directionalLight position={[4, 7, 8]} intensity={1.25} color={scene.colors.signal} />
      <FlyingWing colors={scene.colors} still={scene.still} />
    </Canvas></div>}
    <div className="absolute right-5 top-1/3 h-28 w-28 rounded-full border border-primary/10 md:hidden"><div className="absolute inset-5 rounded-full border border-primary/10" /></div>
  </div>;
}