import { Suspense, lazy, useEffect, useState } from "react";
import type { SceneColors } from "./HeroUavScene";

const HeroUavScene = lazy(() => import("./HeroUavScene"));

export function HeroUav() {
  const [scene, setScene] = useState<{ still: boolean; colors: SceneColors } | null>(null);
  const [desktop, setDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    if (mobile) return;
    setDesktop(true);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = () => {
      const styles = getComputedStyle(document.documentElement);
      setScene({ still, colors: {
        metal: styles.getPropertyValue("--uav-metal").trim(),
        glass: styles.getPropertyValue("--uav-glass").trim(),
        signal: styles.getPropertyValue("--uav-signal").trim(),
        dark: styles.getPropertyValue("--uav-dark").trim(),
      }});
    };
    const idle = (window as typeof window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    if (idle) {
      const id = idle(start, { timeout: 2500 });
      return () => (window as typeof window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
    }
    const timer = window.setTimeout(start, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="uav-coordinate-grid absolute right-0 top-0 h-full w-[58%] opacity-45" />
    <div className="absolute right-[7%] top-[18%] hidden h-[54%] w-[48%] border-r border-t border-primary/10 md:block" />
    <div className="absolute right-[7%] top-[17%] hidden font-display text-[9px] text-primary/45 md:block">FLT PATH // 12.9716° N</div>
    <div className="absolute bottom-[20%] right-[8%] hidden items-center gap-2 font-display text-[9px] text-muted-foreground/50 md:flex"><span className="size-1 rounded-full bg-primary/60" /> TELEMETRY NOMINAL</div>
    {["right-[11%] top-[31%]", "right-[39%] top-[24%]", "right-[32%] top-[69%]"].map((position) => <span key={position} className={`absolute hidden size-1 rounded-full bg-primary/50 md:block ${position}`} />)}
    {desktop && !ready && <div className="uav-loader absolute right-[20%] top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
      <span className="uav-loader-ring" />
      <span className="font-display text-[9px] text-primary/55">INITIALIZING FLIGHT MODEL</span>
    </div>}
    {scene && <div className={`absolute inset-y-[7%] right-0 w-[67%] transition-opacity duration-700 ${ready ? "opacity-80" : "opacity-0"}`}>
      <Suspense fallback={null}><HeroUavScene colors={scene.colors} still={scene.still} onReady={() => setReady(true)} /></Suspense>
    </div>}
    <div className="absolute right-5 top-1/3 h-28 w-28 rounded-full border border-primary/10 md:hidden"><div className="absolute inset-5 rounded-full border border-primary/10" /></div>
  </div>;
}
