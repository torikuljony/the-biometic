"use client";

import { useEffect, useState, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(containerRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.4,
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => {
      trigger.kill();
      ScrollTrigger.clearScrollMemory();
    };
  }, [containerRef]);

  return progress;
}
