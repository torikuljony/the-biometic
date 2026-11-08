"use client";

import { useRef } from "react";
import { Scene } from "@/components/3d/Scene";
import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { CTASection } from "@/components/sections/CTASection";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useLenis } from "@/hooks/useLenis";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function StudioPage() {
  const containerRef = useRef<HTMLElement | null>(null);
  const progress = useScrollAnimation(containerRef);

  useLenis();

  return (
    <main ref={containerRef} className="relative overflow-hidden bg-[#03040A] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_30%,rgba(108,168,255,0.24),transparent_25%),radial-gradient(circle_at_top,rgba(124,255,203,0.18),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="h-screen w-full">
          <Scene progress={progress} />
        </div>
      </div>

      <div className="relative z-20">
        <div className="fixed inset-x-0 top-0 z-30">
          <Navbar />
        </div>

        <Hero />
        <StorySection />
        <FeatureSection />
        <ShowcaseSection />
        <CTASection />
      </div>

      <ScrollProgress progress={progress} />
    </main>
  );
}
