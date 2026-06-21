import { EDUCATION } from "@/data/education";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Background</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl">Learning never stopped.</h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.credential} delay={i * 0.05}>
              <div className="border border-border bg-surface p-7 h-full border-l-2 border-l-transparent hover:border-l-accent transition-colors">
                <div className="text-2xl">{e.icon}</div>
                <h3 className="display-serif mt-4 text-xl md:text-2xl text-foreground">
                  {e.credential}
                </h3>
                <div className="mt-2 text-foreground/70">{e.institution}</div>
                {e.period && (
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dim">
                    {e.period}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
