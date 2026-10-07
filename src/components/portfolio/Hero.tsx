import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import hero from "@/assets/featured-frauwa.png.asset.json";

export function Hero() {
  return (
    <section id="hero" className="project-hero relative isolate overflow-hidden">
      <img src={hero.url} alt="Frauwa Roofs & Interior Decor — embossed brand identity on green fabric" width={768} height={768} loading="eager" fetchPriority="high" className="hero-project-image absolute inset-0 h-full w-full object-cover" />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative mx-auto flex min-h-[640px] max-w-[1100px] flex-col justify-end px-6 pb-12 pt-32 md:min-h-[720px] md:px-10 md:pb-16">
        <p className="font-mono text-[11px] uppercase text-hero-accent">Williams Olayemi Martins / Brand & Product Designer</p>
        <h1 className="display-serif hero-headline mt-5 whitespace-nowrap">i'm Williams, <span className="italic text-hero-accent">i design!</span></h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-hero-foreground/80">I help brands tell their story, curate their journey, and define their identity.<br />Lagos, Nigeria.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-hero-accent text-hero-background hover:bg-hero-accent/90 font-mono text-xs uppercase"><a href="#work">See my work <ArrowRight /></a></Button>
          <Button asChild variant="outline" className="border-hero-foreground/40 bg-transparent text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground font-mono text-xs uppercase"><a href="#contact">Get in touch</a></Button>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-hero-foreground/25 pt-5">
          <div className="flex gap-6 font-mono text-[10px] uppercase text-hero-foreground/80 md:gap-8">
            <span><strong className="text-hero-accent">7+</strong> Years</span><span><strong className="text-hero-accent">20+</strong> Projects</span><span><strong className="text-hero-accent">4</strong> Micro-Tools</span>
          </div>
          <Link to="/work/$slug" params={{ slug: "frauwa" }} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-hero-foreground/80">Frauwa / Brand identity <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
