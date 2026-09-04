import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { CaseStudy, CaseStudySection } from "@/data/case-studies";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionLabel } from "@/components/portfolio/SectionLabel";

function SectionBlock({ section }: { section: CaseStudySection }) {
  if (section.kind === "prose") {
    const paras = Array.isArray(section.body) ? section.body : [section.body];
    return (
      <div>
        <SectionLabel>{section.heading}</SectionLabel>
        <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-foreground/80 max-w-[62ch]">
          {paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    );
  }

  if (section.kind === "list") {
    return (
      <div>
        <SectionLabel>{section.heading}</SectionLabel>
        <dl className="mt-5 divide-y divide-border border-y border-border">
          {section.items.map((it) => (
            <div key={it.label} className="py-5 grid md:grid-cols-[180px_1fr] gap-3 md:gap-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim">
                {it.label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch]">
                {it.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  if (section.kind === "callout") {
    return (
      <div className="border-l-2 border-accent pl-6 md:pl-8 py-2">
        <h3 className="display-serif italic text-2xl md:text-[28px] text-foreground">
          {section.heading}
        </h3>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/80 max-w-[62ch]">
          {section.body}
        </p>
      </div>
    );
  }

  if (section.kind === "image") {
    return (
      <div>
        {section.heading && <SectionLabel>{section.heading}</SectionLabel>}
        <figure className={section.heading ? "mt-5" : ""}>
          <div className="aspect-video w-full overflow-hidden border border-border bg-tag">
            <img
              src={section.src}
              alt={section.alt}
              loading="lazy"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {section.caption}
            </figcaption>
          )}
        </figure>
      </div>
    );
  }

  // placeholder
  return (
    <div>
      <SectionLabel>{section.heading}</SectionLabel>
      <div className="mt-5 border border-dashed border-border bg-tag/40 aspect-video flex items-center justify-center p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted text-center max-w-md">
          {section.note}
        </p>
      </div>
    </div>
  );
}

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  const metaParts = [study.role, study.scope, study.industry, study.year].filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-24 md:pt-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            All work
          </Link>

          <Reveal>
            <div className="mt-10 aspect-video w-full overflow-hidden border border-border bg-tag">
              <img
                src={study.image}
                alt={`${study.client} — ${study.scope}`}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                width={1280}
                height={720}
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <header className="mt-10 md:mt-14 border-b border-border pb-10">
              <SectionLabel>Case Study</SectionLabel>
              <h1 className="display-serif mt-6 text-4xl md:text-6xl leading-[1.05]">
                {study.client}
              </h1>
              <p className="mt-6 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-muted">
                {metaParts.join("  ·  ")}
              </p>
              {study.liveLink && (
                <a
                  href={study.liveLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dim transition-colors border border-accent/40 hover:border-accent px-4 py-2"
                >
                  {study.liveLink.label}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              )}
            </header>
          </Reveal>

          <div className="mt-14 md:mt-20 space-y-14 md:space-y-20">
            {study.sections.map((section, i) => (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.15)}>
                <SectionBlock section={section} />
              </Reveal>
            ))}
          </div>

          <div className="mt-20 md:mt-28 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {study.liveLink ? (
              <a
                href={study.liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors"
              >
                {study.liveLink.label}
                <ArrowUpRight
                  size={12}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            ) : (
              <span />
            )}
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors"
            >
              See all work
              <ArrowUpRight
                size={12}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-24" />
      <Footer />
    </div>
  );
}
