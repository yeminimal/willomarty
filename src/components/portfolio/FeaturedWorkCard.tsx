import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Work } from "@/data/work";
const OUTCOMES: Record<string, string> = {
  incash: "One fintech experience across web, mobile and marketing.",
  ydpay: "An ongoing engagement: a visually refined, more accessible website.",
  frauwa: "One identity connecting roofing and interior decor.",
  "zamack-consults": "A refreshed identity built on clarity and trust.",
};
export function FeaturedWorkCard({ w }: { w: Work }) {
  const slug = w.caseStudySlug;
  if (!slug) return null;
  return (
    <Link to="/work/$slug" params={{ slug }} className="group block h-full">
      <div className="aspect-square overflow-hidden border border-border bg-surface">
        <img src={w.image} alt={`${w.client} — project mockup`} width={768} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="display-serif text-2xl text-foreground transition-colors group-hover:text-accent">{w.client}</h3>
        <ArrowUpRight size={18} className="mt-1 shrink-0 text-accent" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{OUTCOMES[w.slug] ?? w.outcomeLine}</p>
    </Link>
  );
}
