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
                I'm Williams, a Graphic Designer passionate about helping brands communicate with clarity, consistency, and purpose.
                I specialize in crafting visual identities and design systems that not only look distinctive but also build trust,
                tell compelling stories, and leave lasting impressions.
              </p>
              <p>
                I enjoy the messy, iterative side of the creative process—exploring ideas, challenging assumptions,
                refining concepts, and discovering what truly connects with people. Every project is an opportunity
                to create work that is thoughtful, functional, and meaningful.
              </p>
              <p>
                I approach every design with a sharp understanding of both brand strategy and visual communication,
                creating identities that resonate with audiences and stand out in competitive markets.
                For me, great design goes beyond aesthetics—it's about building experiences that strengthen brands and create lasting impact.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "Behance", href: "https://www.behance.net/willomarty" },
                { label: "GitHub", href: "https://github.com/yeminimal" },
                { label: "LinkedIn", href: "#" },
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
