type ScrollProgressProps = {
  progress: number;
};

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md md:flex">
      <span className="text-[0.6rem] uppercase tracking-[0.28em] text-slate-400">Scroll</span>
      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#7CFFCB] via-[#6EA8FF] to-[#9AB4FF] transition-[width] duration-150 ease-out"
          style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }}
        />
      </div>
    </div>
  );
}
