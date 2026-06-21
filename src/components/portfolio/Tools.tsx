import { TOOLS } from "@/data/tools";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>What I've Built</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl max-w-3xl">
            Micro-tools for
            <br />
            <span className="italic text-accent">real friction points.</span>
          </h2>
          <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
            Small, sharp, browser-based tools built to solve problems I kept bumping into. No sign-up.
            No bloat. Just the thing that needs doing.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {TOOLS.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.05, 0.2)}>
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-border bg-surface h-full border-l-2 border-l-transparent hover:border-l-accent transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
                  <img
                    src={t.image}
                    alt={`${t.name} — ${t.tagline}`}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent border border-accent/40 bg-background/80 backdrop-blur px-2 py-1 whitespace-nowrap">
                    ✦ {t.status}
                  </span>
                </div>

                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <h3 className="display-serif text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                    {t.name}
                  </h3>
                  <p className="mt-2 italic text-accent-dim text-[15px]">"{t.tagline}"</p>
                  <p className="mt-5 text-[15px] leading-relaxed text-foreground/70">{t.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] bg-tag border border-border px-2.5 py-1 text-muted group-hover:border-accent-dim/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors">
                    Visit Tool
                    <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
