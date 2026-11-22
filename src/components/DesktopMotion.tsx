"use client";
import type { RefObject } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function DesktopMotion({
  root,
}: {
  root: RefObject<HTMLDivElement | null>;
}) {
  const path = usePathname();
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (root.current?.querySelector(".hero-word"))
          gsap.from(".hero-word", {
            yPercent: 110,
            duration: 1.05,
            stagger: 0.12,
            ease: "power3.out",
          });
        const reveals =
          root.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
        reveals.forEach((el) =>
          gsap.from(el, {
            y: 36,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          }),
        );
        if (root.current?.querySelector(".hero-art"))
          gsap.to(".hero-art", {
            y: 90,
            rotation: 12,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        if (root.current?.querySelector(".connection-line"))
          gsap.to(".connection-line", {
            scaleX: 1,
            transformOrigin: "left",
            ease: "none",
            scrollTrigger: {
              trigger: "#thinking",
              start: "top 85%",
              end: "center center",
              scrub: true,
            },
          });
        const halo = root.current?.querySelector(".journey-orbit");
        if (halo)
          gsap.to(halo, {
            rotation: 100,
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: "#about",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
      });
      mm.add(
        "(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const lenis = new Lenis({
            anchors: true,
            autoRaf: false,
            duration: 0.95,
          });
          const tick = (time: number) => lenis.raf(time * 1000);
          lenis.on("scroll", ScrollTrigger.update);
          gsap.ticker.add(tick);
          gsap.ticker.lagSmoothing(0);
          return () => {
            gsap.ticker.remove(tick);
            lenis.off("scroll", ScrollTrigger.update);
            lenis.destroy();
          };
        },
      );
      const refresh = () => ScrollTrigger.refresh();
      const element = root.current;
      element?.addEventListener("toggle", refresh, true);
      return () => {
        element?.removeEventListener("toggle", refresh, true);
        mm.revert();
      };
    },
    { scope: root, dependencies: [path], revertOnUpdate: true },
  );
  return null;
}
