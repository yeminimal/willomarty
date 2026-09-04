import { ArrowRight, ArrowDown } from "lucide-react";
// [[PLACEHOLDER: replace with the wide landscape hero photo once uploaded —
// the portrait is a stand-in so the layout and sizing are already final.]]
import heroImage from "@/assets/portrait.webp.asset.json";
import { MetricStrip } from "./MetricStrip";

const STATS = [
  { value: "7+", label: "Years\nDesigning" },
  { value: "20+", label: "Projects\nDelivered" },
  { value: "4", label: "Micro-Tools\nShipped" },
];

export function Hero() {
  return (
    <section id="hero" className="relative">
      {/* Full-bleed image stage — fixed height so nothing shifts while it loads */}
      <div className="relative min-h-[92svh] flex items-end overflow-hidden">
        <img
          src={heroImage.url}
          alt="Williams Olayemi Martins, brand and product designer, Lagos"
          width={1600}
          height={1000}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover object-[65%_20%] md:object-[70%_25%]"
        />

        {/* Scrim: keeps the copy readable over any photo, in both themes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--background) 96%, transparent) 0%, color-mix(in oklab, var(--background) 88%, transparent) 32%, color-mix(in oklab, var(--background) 55%, transparent) 62%, color-mix(in oklab, var(--background) 30%, transparent) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 85% 10%, color-mix(in oklab, var(--accent-green) 30%, transparent), transparent 62%)",
          }}
        />

        <div className="relative w-full mx-auto max-w-[1100px] px-6 md:px-10 pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">
            Brand &amp; Product Designer
          </div>

          <h1 className="display-serif mt-6 uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[92px]">
            <span className="text-foreground">i'm Williams,</span>
            <br />
            <span className="text-accent">i design</span>
            <span className="text-foreground">!</span>
            <span className="sr-only"> — Brand &amp; Product Designer</span>
          </h1>

          <div className="mt-6 h-px w-32 bg-accent/50" />

          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
            I help brands tell their story, curate their journery, and define their identity.
            <br />
            <span className="text-foreground/60">Lagos, Nigeria.</span>
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-accent text-background px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-accent-dim transition-colors"
            >
              See My Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground/25 bg-background/40 backdrop-blur-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Stat row */}
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl border-t border-border pt-8">
          {STATS.map((s) => (
            <div key={s.value}>
              <div className="display-serif text-3xl md:text-5xl text-accent">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted whitespace-pre-line leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <MetricStrip />

      <div className="mt-20 flex justify-center">
        <a href="#about" aria-label="Scroll to about" className="text-accent-dim animate-bounce">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
