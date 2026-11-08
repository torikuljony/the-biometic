import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section id="contact" className="relative flex min-h-[70vh] items-center justify-center px-6 pb-24 pt-12 md:px-8">
      <div className="w-full max-w-6xl rounded-[2.25rem] border border-[#7CFFCB]/20 bg-[radial-gradient(circle_at_top,_rgba(124,255,203,0.18),_transparent_35%),rgba(9,13,22,0.8)] p-8 shadow-[0_0_80px_rgba(124,255,203,0.15)] backdrop-blur-xl md:p-12">
        <p className="text-[0.68rem] uppercase tracking-[0.38em] text-[#7CFFCB]">Final CTA</p>
        <h2 className="mt-6 max-w-2xl text-3xl font-medium tracking-[-0.06em] text-white md:text-6xl">
          Ready to build the future?
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
          Experience a new generation of interactive digital products.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button>Start Building</Button>
          <Button variant="secondary">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
