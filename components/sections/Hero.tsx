import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28 md:px-8">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-[#7CFFCB]">Adaptive intelligence / 01</p>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.84] tracking-[-0.08em] text-white sm:text-6xl lg:text-[7rem]">
            Build What
            <span className="mt-4 block text-gradient">Comes Next.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            An immersive digital experience powered by technology, motion, and intelligent systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Explore Experience</Button>
            <Button variant="secondary">View Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
