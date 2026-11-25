"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "pointer" | "grab" | "grabbing";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;

    const resolveMode = (target: EventTarget | null): CursorMode => {
      const lanyardEl = document.querySelector("[data-lanyard-state]");
      const lanyardState = lanyardEl?.getAttribute("data-lanyard-state");
      if (lanyardState === "grabbing") return "grabbing";
      if (lanyardState === "grab") return "grab";
      if (!(target instanceof Element)) return "default";
      if (
        target.closest(
          'a, button, [role="button"], input, textarea, select, label'
        )
      ) {
        return "pointer";
      }
      return "default";
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      setMode(resolveMode(e.target));

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onDown = (e: MouseEvent) => {
      setPressed(true);
      setMode(resolveMode(e.target));
    };

    const onUp = (e: MouseEvent) => {
      setPressed(false);
      setMode(resolveMode(e.target));
    };

    const onLeave = () => {
      setVisible(false);
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const isGrab = mode === "grab" || mode === "grabbing";
  const isPointer = mode === "pointer";

  return (
    <>
      {/* Subtle ambient spotlight following cursor */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-30 -ml-44 -mt-44 h-88 w-88 rounded-full bg-emerald-500/[0.06] blur-3xl transition-opacity duration-300 dark:bg-emerald-400/[0.07] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Spring follower ring / DRAG pill */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[60] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-full border transition-all duration-200 ease-out ${
            isGrab
              ? "h-10 w-20 border-emerald-500/80 bg-emerald-500/15 text-[10px] font-mono font-bold tracking-wider text-emerald-700 backdrop-blur-xs dark:border-emerald-400/80 dark:bg-emerald-400/20 dark:text-emerald-200"
              : isPointer
                ? "h-10 w-10 border-emerald-500/70 bg-emerald-500/10 dark:border-emerald-400/70 dark:bg-emerald-400/15"
                : "h-7 w-7 border-zinc-400/60 bg-transparent dark:border-zinc-500/60"
          } ${pressed ? "scale-90" : "scale-100"}`}
        >
          {isGrab ? (mode === "grabbing" ? "MOVE" : "DRAG") : null}
        </div>
      </div>

      {/* Crisp inner tracking dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[61] -ml-1 -mt-1 h-2 w-2 rounded-full bg-emerald-500 transition-opacity duration-200 dark:bg-emerald-400 ${
          visible && !isGrab ? "opacity-90" : "opacity-0"
        }`}
      />
    </>
  );
}

