import { useEffect, useRef } from "react";

interface Ripple {
  el: HTMLDivElement;
  x: number;
  y: number;
  age: number;
  active: boolean;
}

const POOL_SIZE = 80;
const SPAWN_DISTANCE = 25;
const AGE_PER_FRAME = 0.012;

/**
 * Liquid mouse-trail effect (adapted from the YORCH reference §23).
 * An object pool of 80 divs that expand and fade as the cursor moves.
 * Pointer-events: none, so it never blocks interaction. Respects
 * prefers-reduced-motion.
 */
export function RippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const container = containerRef.current;
    if (!container) return;

    const ripples: Ripple[] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
      const el = document.createElement("div");
      el.className = "ripple-dot";
      el.style.opacity = "0";
      container.appendChild(el);
      ripples.push({ el, x: 0, y: 0, age: 0, active: false });
    }

    let last = { x: 0, y: 0 };
    let cursor = 0;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      if (Math.hypot(dx, dy) < SPAWN_DISTANCE) return;
      last = { x: e.clientX, y: e.clientY };
      const r = ripples[cursor % POOL_SIZE];
      cursor++;
      r.x = e.clientX;
      r.y = e.clientY;
      r.age = 0;
      r.active = true;
    };

    let raf = 0;
    const tick = () => {
      for (const r of ripples) {
        if (!r.active) continue;
        r.age += AGE_PER_FRAME;
        if (r.age >= 1) {
          r.active = false;
          r.el.style.opacity = "0";
          continue;
        }
        const size = 20 + r.age * (300 - 20);
        const opacity = 1 - Math.pow(r.age, 1.2);
        r.el.style.transform = `translate(${r.x - size / 2}px, ${r.y - size / 2}px)`;
        r.el.style.width = `${size}px`;
        r.el.style.height = `${size}px`;
        r.el.style.opacity = `${opacity}`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      ripples.forEach((r) => r.el.remove());
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="ripple-trail" aria-hidden="true" />
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <filter id="liquid-trail">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
}
