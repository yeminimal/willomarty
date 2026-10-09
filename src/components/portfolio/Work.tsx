import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FEATURED_WORK } from "@/data/work";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { FeaturedWorkCard } from "./FeaturedWorkCard";

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
            A tight cross-section of identity, product and marketing work — each with its own case
            study. The full client list lives on the archive page.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {FEATURED_WORK.map((w, i) => (
            <Reveal key={w.slug} delay={Math.min(i * 0.03, 0.2)}>
              <FeaturedWorkCard w={w} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center md:justify-end">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors border border-border hover:border-accent-dim/70 px-5 py-3"
            >
              See all work
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
