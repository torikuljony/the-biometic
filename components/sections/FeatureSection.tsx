const featureCards = [
  {
    title: "Real-time 3D",
    text: "Realtime visual systems engineered to feel responsive, fluid, and alive from the first interaction.",
  },
  {
    title: "Interactive Motion",
    text: "Experience-driven animation that gracefully responds to the user and adapts to the rhythm of each scroll.",
  },
  {
    title: "WebGL Rendering",
    text: "Modern rendering pipelines with layered lighting, particles, and emissive depth for premium presentation.",
  },
  {
    title: "Adaptive Systems",
    text: "Flexible architecture that scales from concept to product, maintaining clarity and performance throughout.",
  },
];

export function FeatureSection() {
  return (
    <section id="technology" className="relative flex min-h-screen items-center px-6 py-24 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-xl">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#7CFFCB]">Technology</p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] text-white md:text-5xl">
            Precision engineered for motion, balance, and clarity.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7CFFCB]/30 to-[#6EA8FF]/30 ring-1 ring-white/10" />
              <h3 className="text-2xl font-medium text-white">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
