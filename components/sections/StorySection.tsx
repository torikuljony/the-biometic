export function StorySection() {
  return (
    <section id="story" className="relative flex min-h-screen items-center justify-center px-6 py-24 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#7CFFCB]">Why it moves</p>
          <h2 className="mt-6 max-w-xl text-3xl font-medium leading-tight tracking-[-0.05em] text-white md:text-5xl">
            Technology, in motion.
          </h2>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-lg leading-8 text-slate-200">
            As the user continues scrolling, the 3D object changes position, intensity, and perspective to reveal a more complete story in motion.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-4">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Latency</div>
              <div className="mt-3 text-2xl font-medium text-white">12ms</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-4">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Signal</div>
              <div className="mt-3 text-2xl font-medium text-white">91%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
