import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Work } from "@/data/work";

export function FeaturedWorkCard({ w }: { w: Work }) {
  const slug = w.caseStudySlug;
  if (!slug) return null;
  return (
    <Link to="/work/$slug" params={{ slug }} className="group block h-full">
      <div className="aspect-square overflow-hidden border border-border bg-surface">
        <img src={w.image} alt={w.imageAlt ?? `${w.client} — project mockup`} width={768} height={768} loading="lazy" className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${w.slug === "frauwa" ? "object-contain bg-[#eaeaea]" : "object-cover"}`} />
      </div>

      <div className="p-7 md:p-9 flex-1 flex flex-col">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
          {w.discipline}
        </div>
        <h3 className="display-serif mt-4 text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
          {w.client}
        </h3>
        {w.role && (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {w.role}
          </p>
        )}
        <p className="mt-5 text-[15px] leading-relaxed text-foreground/75">{w.description}</p>
        {w.outcomeLine && (
          <p className="mt-4 pl-4 border-l border-accent/40 italic text-[14px] leading-relaxed text-foreground/65">
            {w.outcomeLine}
          </p>
        )}
        <div className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors">
          {hasCaseStudy ? "Read case study" : "View live"}
          <ArrowUpRight
            size={12}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>
    </>
  );

  const cls =
    "group flex flex-col border border-border bg-surface h-full border-l-2 border-l-transparent hover:border-l-accent transition-all duration-300 overflow-hidden";

  if (hasCaseStudy) {
    return (
      <Link to="/work/$slug" params={{ slug: w.caseStudySlug! }} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={externalHref} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}
