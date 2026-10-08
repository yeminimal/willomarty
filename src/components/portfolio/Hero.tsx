import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="project-hero">
      <div className="mx-auto flex min-h-[560px] max-w-[1100px] flex-col justify-center px-6 pb-16 pt-32 md:min-h-[640px] md:px-10 md:pb-20">
        <p className="font-mono text-[11px] uppercase text-hero-accent">Williams Olayemi Martins / Brand & Product Designer</p>
        <h1 className="display-serif hero-headline mt-8 max-w-[960px]">I design brands &amp; products</h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-hero-foreground/80">I help brands tell their story, curate their journey, and define their identity.<br />Lagos, Nigeria.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-hero-accent text-hero-background hover:bg-hero-accent/90 font-mono text-xs uppercase"><Link to="/contact">Send Me a Message <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}
