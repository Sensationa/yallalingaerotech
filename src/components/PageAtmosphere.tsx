import { useEffect, useRef } from "react";

export function PageAtmosphere() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = layer.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reducedMotion.matches || !finePointer.matches) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--ambient-x", `${event.clientX}px`);
        node.style.setProperty("--ambient-y", `${event.clientY}px`);
      });
    };
    const updateScroll = () => {
      node.style.setProperty("--ambient-scroll", `${window.scrollY * 0.035}px`);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return <div ref={layer} aria-hidden="true" className="page-atmosphere">
    <div className="ambient-grid" />
    <div className="ambient-pointer" />
    <div className="ambient-circuit ambient-circuit-a"><i /><i /><i /></div>
    <div className="ambient-circuit ambient-circuit-b"><i /><i /><i /></div>
    <div className="ambient-flight-path"><span /><span /><span /></div>
    <div className="ambient-readout ambient-readout-a">SYS // V&amp;V READY</div>
    <div className="ambient-readout ambient-readout-b">DO-178C // TRACE 04</div>
  </div>;
}