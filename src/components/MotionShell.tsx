"use client";
import { useRef, useSyncExternalStore, type ReactNode } from "react";
import dynamic from "next/dynamic";

const DesktopMotion = dynamic(() => import("./DesktopMotion"), { ssr: false });
const motionQuery =
  "(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
function subscribe(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function getSnapshot() {
  return window.matchMedia(motionQuery).matches;
}
function getServerSnapshot() {
  return false;
}

export function MotionShell({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const enhanced = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return (
    <div ref={root}>
      {children}
      {enhanced && <DesktopMotion root={root} />}
    </div>
  );
}
