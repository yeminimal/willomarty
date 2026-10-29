import { SKILL_GROUPS } from "@/data/skills";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl">What I work with.</h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-12">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  / {g.title}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] tracking-[0.04em] bg-tag border border-border px-3 py-1.5 text-foreground/85 hover:border-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
