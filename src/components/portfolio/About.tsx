import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { ExternalLink, Palette, Code2, Clapperboard, Wrench, type LucideIcon } from "lucide-react";

const FACTS: { icon: LucideIcon; label: string }[] = [
  { icon: Palette, label: "Brand Identity & Logo Design" },
  { icon: Code2, label: "Frontend Dev (React, Tailwind, Vite)" },
  { icon: Clapperboard, label: "Video Production & Motion" },
  { icon: Wrench, label: "Micro-Tool Builder (4 Live Tools)" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl leading-[1.1] max-w-3xl">
            Design that communicates.
            <br />
            Code that ships.
            <br />
            <span className="italic text-accent">Work that matters.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-[1.4fr_1fr] gap-14">
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base md:text-[17px] leading-[1.7] text-foreground/85">
              <p>
                I'm Williams — a Visual (Creative) Director. I've spent the better part of a decade
                refining a quiet blend of creativity and precision; meticulousness has become the
                bigger part of my signature.
              </p>
              <p>
                Though I'm obsessed with brand design, my expertise spans user interfaces, packaging, video
                creation and frontend development — all underpinned by a solid grasp of digital landscapes.
                I use AI-assisted tooling to move fast without cutting corners, and ship production work
                with React, Tailwind, GitHub and Vercel.
              </p>
              <p>
                I work from Nigeria with a sharp eye for what the market here needs — interfaces that load on
                mid-range devices, brands that earn trust in a skeptical market, and digital tools that solve
                friction people have learned to live with. With me, it's not just about the design. It's
                about the journey we take together to create lasting impact.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "Behance", href: "https://www.behance.net/willomarty" },
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                  <ExternalLink size={12} className="text-accent-dim group-hover:text-accent" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {FACTS.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="border border-border bg-surface p-5 hover:border-accent/60 transition-colors"
                  >
                    <Icon size={22} className="text-accent" strokeWidth={1.5} />
                    <div className="mt-3 text-sm leading-snug text-foreground/85">{f.label}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
