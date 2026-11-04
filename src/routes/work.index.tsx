import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WORK, workCategory, WORK_CATEGORY_ORDER } from "@/data/work";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
import { WorkCard } from "@/components/portfolio/WorkCard";

const SITE_URL = "https://willomarty.net.ng";

const PER_PAGE = 4;

export const Route = createFileRoute("/work/")({
  validateSearch: (search: Record<string, unknown>) => ({
    tag: typeof search.tag === "string" && search.tag ? search.tag : undefined,
    page: Number(search.page) || undefined,
  }),
  head: () => ({
    meta: [
      { title: "Selected Work — Williams Olayemi Martins" },
      {
        name: "description",
        content:
          "The full archive of client and self-initiated projects by Williams Olayemi Martins — brand identity, UI/UX, marketing design and web across fashion, fintech, real estate and Web3.",
      },
      { property: "og:title", content: "Selected Work — Williams Olayemi Martins" },
      {
        property: "og:description",
        content:
          "Full archive of brand, product and marketing work — featured case studies plus every other client project.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/work` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Selected Work — Williams Olayemi Martins" },
      {
        name: "twitter:description",
        content:
          "Full archive of brand, product and marketing work by Williams Olayemi Martins.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/work` }],
  }),
  component: WorkArchive,
});

function WorkArchive() {
  const tag = Route.useSearch({ select: (s) => s.tag ?? "All" });
  const page = Route.useSearch({ select: (s) => s.page ?? 1 });
  const navigate = useNavigate({ from: Route.fullPath });

  const grouped =
    tag === "All" ? WORK : WORK.filter((w) => workCategory(w) === tag);
  const pageCount = Math.max(1, Math.ceil(grouped.length / PER_PAGE));
  const current = Math.min(page, pageCount);
  const visible = grouped.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const goTo = (nextTag: string, nextPage: number) =>
    navigate({
      search: {
        tag: nextTag === "All" ? undefined : nextTag,
        page: nextPage > 1 ? nextPage : undefined,
      },
    });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-24 md:pt-28 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            Back home
          </Link>

          <Reveal>
            <div className="mt-10">
              <SectionLabel>Archive</SectionLabel>
              <h1 className="display-serif mt-6 text-4xl md:text-6xl max-w-3xl leading-[1.05]">
                All work,
                <br />
                <span className="italic text-accent">in one place.</span>
              </h1>
              <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
                Featured projects link through to full case studies. The rest link out to their
                live sites or Behance for a closer look at the artefacts.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {["All", ...WORK_CATEGORY_ORDER].map((item) => (
              <Button
                key={item}
                size="sm"
                variant={tag === item ? "default" : "outline"}
                onClick={() => goTo(item, 1)}
              >
                {item}
              </Button>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {visible.map((w, i) => (
              <Reveal key={w.slug} delay={Math.min(i * 0.02, 0.2)}>
                <WorkCard w={w} />
              </Reveal>
            ))}
          </div>

          {pageCount > 1 && (
            <nav aria-label="Work pages" className="mt-12 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                disabled={current <= 1}
                onClick={() => goTo(tag, current - 1)}
              >
                <ChevronLeft size={14} /> Prev
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Page {current} of {pageCount}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={current >= pageCount}
                onClick={() => goTo(tag, current + 1)}
              >
                Next <ChevronRight size={14} />
              </Button>
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
