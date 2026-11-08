export function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7CFFCB]/40 bg-[#7CFFCB]/10 text-sm font-semibold text-[#7CFFCB]">
          B
        </div>
        <div className="text-[0.7rem] uppercase tracking-[0.32em] text-slate-400">BETA</div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <a href="#story" className="transition hover:text-white">Work</a>
        <a href="#technology" className="transition hover:text-white">Technology</a>
        <a href="#about" className="transition hover:text-white">About</a>
        <a href="#contact" className="transition hover:text-white">Contact</a>
      </nav>

      <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-[#7CFFCB]/50 hover:bg-white/10">
        Start Project
      </button>
    </header>
  );
}
