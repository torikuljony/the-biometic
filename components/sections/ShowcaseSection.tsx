const labels = [
  { id: "01", title: "CORE" },
  { id: "02", title: "SYSTEM" },
  { id: "03", title: "MOTION" },
  { id: "04", title: "FUTURE" },
];

export function ShowcaseSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center px-6 py-24 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#7CFFCB]">Operational mode</p>
          <h2 className="text-3xl font-medium tracking-[-0.05em] text-white md:text-5xl">
            A responsive core that feels alive from every angle.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A101B]/80 p-6 backdrop-blur-xl">
          <div className="relative min-h-[360px]">
            {labels.map((label, index) => {
              const positions = [
                "top-4 left-4",
                "top-10 right-8",
                "bottom-8 left-10",
                "bottom-10 right-3",
              ];

              return (
                <div
                  key={label.id}
                  className={`absolute ${positions[index]} rounded-full border border-white/10 bg-[#0f1726]/80 px-3 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-slate-200 backdrop-blur-sm`}
                >
                  {label.id} / {label.title}
                </div>
              );
            })}

            <div className="mx-auto flex h-[300px] max-w-[500px] items-center justify-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(124,255,203,0.15),_rgba(124,255,203,0)_46%,_transparent_70%)] p-6">
              <div className="h-56 w-56 rounded-full border border-[#7CFFCB]/30 bg-[radial-gradient(circle,_rgba(255,255,255,0.8),_rgba(124,255,203,0.08)_35%,_rgba(15,23,38,0.4)_70%)] shadow-[0_0_60px_rgba(124,255,203,0.35)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
