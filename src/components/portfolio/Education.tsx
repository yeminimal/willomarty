import { EDUCATION, CERTIFICATIONS, type Education as EducationItem } from "@/data/education";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

function Card({ e, i }: { e: EducationItem; i: number }) {
  const Icon = e.icon;
  return (
    <Reveal delay={i * 0.05}>
      <div className="border border-border bg-surface p-7 h-full border-l-2 border-l-transparent hover:border-l-accent transition-colors">
        {e.logo ? (
          <img
            src={e.logo}
            alt={`${e.institution} logo`}
            width={28}
            height={28}
            loading="lazy"
            className="h-7 w-7 object-contain"
          />
        ) : (
          <Icon size={24} className="text-accent" strokeWidth={1.5} />
        )}
        <h3 className="display-serif mt-4 text-xl md:text-2xl text-foreground">
          {e.credential}
        </h3>
        <div className="mt-2 text-foreground/70">{e.institution}</div>
        {e.period && (
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dim">
            {e.period}
          </div>
        )}
        {e.tools && e.tools.length > 0 && (
          <div className="mt-5 pt-5 border-t border-border">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dim mb-3">
              Stack
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {e.tools.map((t) => (
                <div
                  key={t.name}
                  title={t.name}
                  className="flex items-center gap-2 text-foreground/75 hover:text-accent transition-colors"
                >
                  <img
                    src={t.logo}
                    alt={`${t.name} logo`}
                    width={18}
                    height={18}
                    loading="lazy"
                    className="h-[18px] w-[18px] object-contain"
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}

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
            <Card key={e.credential} e={e} i={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex items-center gap-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim">
              Certifications
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((e, i) => (
            <Card key={e.credential} e={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
