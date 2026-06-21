import { ArrowRight, ArrowDown } from "lucide-react";
import portrait from "@/assets/portrait.webp.asset.json";

const STATS = [
  { value: "7+", label: "Years\nDesigning" },
  { value: "20+", label: "Projects\nDelivered" },
  { value: "4", label: "Micro-Tools\nShipped" },
];

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle radial green glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, color-mix(in oklab, var(--accent-green) 25%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent-dim">
          Designer · Developer · Creator
        </div>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <h1 className="display-serif leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
              <span className="italic text-accent">Olayemi</span>
              <br />
              <span className="text-foreground">Williams Martins</span>
            </h1>
            <div className="mt-6 h-px w-32 bg-accent/40" />
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted leading-relaxed">
              Brand Design · Frontend Development · Media Production
              <br />
              <span className="text-foreground/70">Lagos, Nigeria.</span>
            </p>
          </div>

          <div className="hidden md:block">
            <div className="relative w-[260px] h-[260px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden border border-accent/30 shadow-[0_0_0_8px_color-mix(in_oklab,var(--accent)_8%,transparent)]">
              <img
                src={portrait.url}
                alt="Portrait of Williams Olayemi Martins"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl border-t border-border pt-8">
          {STATS.map((s) => (
            <div key={s.value}>
              <div className="display-serif text-3xl md:text-5xl text-accent">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted whitespace-pre-line leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-accent text-background px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-accent-dim transition-colors"
          >
            See My Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile portrait below */}
        <div className="md:hidden mt-14 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border border-accent/30">
            <img src={portrait.url} alt="Portrait of Williams Olayemi Martins" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <a href="#about" aria-label="Scroll to about" className="text-accent-dim animate-bounce">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
