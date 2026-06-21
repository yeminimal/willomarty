import { WORK } from "@/data/work";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl max-w-2xl">
            Brands, products, and stories
            <br />
            <span className="italic text-accent">built with intent.</span>
          </h2>
          <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
            A cross-section of identity, marketing, product and editorial work shipped over the past few years.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border border border-border">
          {WORK.map((w, i) => (
            <Reveal key={w.client} delay={Math.min(i * 0.03, 0.2)}>
              <a
                href={w.link ?? "https://www.behance.net/willomarty"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background p-7 md:p-8 h-full border-l-2 border-l-transparent hover:border-l-accent hover:bg-surface transition-all duration-300"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
                  {w.discipline}
                </div>
                <h3 className="display-serif mt-4 text-2xl md:text-[26px] text-foreground group-hover:text-accent transition-colors">
                  {w.client}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{w.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors">
                  {w.link ? "View case" : "View on Behance"}
                  <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
