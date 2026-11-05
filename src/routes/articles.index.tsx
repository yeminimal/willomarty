import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { PUBLISHED_ARTICLES } from "@/data/articles";
import { SITE_URL } from "@/lib/articles.shared";

const TITLE = "Articles — Williams Olayemi Martins";
const DESCRIPTION =
  "Essays and notes on brand identity, product design, web design and building small tools, by Williams Olayemi Martins.";

const PER_PAGE = 4;

export const Route = createFileRoute("/articles/")({
  validateSearch: (search: Record<string, unknown>): { tag?: string; page?: number } => ({
    tag: typeof search.tag === "string" && search.tag ? search.tag : undefined,
    page: Number(search.page) || undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/articles` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/articles` }],
  }),
  component: ArticlesArchive,
});

function ArticlesArchive() {
  const articles = PUBLISHED_ARTICLES;
  const tag = Route.useSearch({ select: (s) => s.tag ?? "All" });
  const page = Route.useSearch({ select: (s) => s.page ?? 1 });
  const navigate = useNavigate({ from: Route.fullPath });

  const tags = [...new Set(articles.flatMap((article) => article.tags))];
  const grouped = tag === "All" ? articles : articles.filter((article) => article.tags.includes(tag));
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
              <SectionLabel>Writing</SectionLabel>
              <h1 className="display-serif mt-6 text-4xl md:text-6xl max-w-3xl leading-[1.05]">
                Notes on design,
                <br />
                <span className="text-accent">brand and craft.</span>
              </h1>
              <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
                Longer-form thinking that doesn't fit inside a case study — process, opinion and
                the occasional teardown.
              </p>
            </div>
          </Reveal>

          {articles.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {["All", ...tags].map((item) => (
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
          )}

          {articles.length === 0 ? (
            <div className="mt-14 border border-border bg-surface p-10 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim">
                Nothing published yet
              </p>
              <p className="mt-4 text-foreground/70">
                The first article is on its way. Check back soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 [&>div]:min-w-0">
                {visible.map((a, i) => (
                  <Reveal key={a.id} delay={Math.min(i * 0.02, 0.2)}>
                    <ArticleCard article={a} />
                  </Reveal>
                ))}
              </div>

              {pageCount > 1 && (
                <nav
                  aria-label="Article pages"
                  className="mt-12 flex items-center justify-center gap-4"
                >
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
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
