import { EXPERIENCE } from "@/data/experience";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Career Journey</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl">A decade of practice.</h2>
        </Reveal>

        <ol className="mt-16 relative">
          <div className="absolute left-0 md:left-[160px] top-2 bottom-2 w-px bg-border" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company + e.period} delay={Math.min(i * 0.04, 0.2)}>
              <li className="relative pl-8 md:pl-[200px] pb-12 group">
                <div className="absolute left-0 md:left-[160px] top-2 -translate-x-1/2 w-2 h-2 bg-accent" />
                <div className="md:absolute md:left-0 md:top-1 md:w-[140px] font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim">
                  {e.period}
                </div>
                <div className="mt-1 md:mt-0">
                  <h3 className="display-serif text-xl md:text-2xl text-foreground">
                    {e.role} <span className="text-accent">·</span>{" "}
                    {e.link ? (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 decoration-accent/40 hover:decoration-accent hover:underline transition"
                      >
                        {e.company}
                      </a>
                    ) : (
                      <span className="text-accent">{e.company}</span>
                    )}
                  </h3>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {e.location}
                  </div>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/80">
                    {e.bullets.map((b) => (
                      <li key={b} className="pl-5 relative">
                        <span className="absolute left-0 top-[0.6em] w-2 h-px bg-accent-dim" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
