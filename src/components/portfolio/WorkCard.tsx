import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Work } from "@/data/work";

function initials(name: string) {
  return name
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function WorkCard({ w }: { w: Work }) {
  const hasCaseStudy = Boolean(w.caseStudySlug);
  const externalHref = w.link ?? "https://www.behance.net/willomarty";

  const inner = (
    <>
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
        {w.image ? (
          <img
            src={w.image}
            alt={`${w.client} — ${w.discipline}`}
            loading="lazy"
            width={1280}
            height={720}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-tag">
            <span className="display-serif italic text-5xl md:text-6xl text-accent-dim/60 select-none">
              {initials(w.client)}
            </span>
          </div>
        )}
      </div>

      <div className="p-7 md:p-8 flex-1 flex flex-col">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
          {w.discipline}
        </div>
        <h3 className="display-serif mt-4 text-2xl md:text-[26px] text-foreground group-hover:text-accent transition-colors">
          {w.client}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{w.description}</p>
        <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors">
          {hasCaseStudy ? "Read case study" : w.link ? "View case" : "View on Behance"}
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
