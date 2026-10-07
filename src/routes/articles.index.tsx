import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { listPublishedArticles } from "@/lib/articles.functions";
import { SITE_URL } from "@/lib/articles.shared";

const TITLE = "Articles — Williams Olayemi Martins";
const DESCRIPTION =
  "Essays and notes on brand identity, product design, web design and building small tools, by Williams Olayemi Martins.";

export const Route = createFileRoute("/articles/")({
  loader: () => listPublishedArticles(),
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
  const articles = Route.useLoaderData();
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("newest");
  const tags = [...new Set(articles.flatMap((article) => article.tags))];
  const visible = articles.filter((article) => tag === "All" || article.tags.includes(tag)).sort((a, b) => sort === "title" ? a.title.localeCompare(b.title) : sort === "oldest" ? (a.published_at ?? "").localeCompare(b.published_at ?? "") : (b.published_at ?? "").localeCompare(a.published_at ?? ""));

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

          {articles.length > 6 && <div className="mt-10 flex flex-wrap items-center gap-2">
            {["All", ...tags].map((item) => <Button key={item} size="sm" variant={tag === item ? "default" : "outline"} onClick={() => setTag(item)}>{item}</Button>)}
            <label className="ml-auto flex items-center gap-2 text-sm text-muted">Sort <select aria-label="Sort articles" value={sort} onChange={(event) => setSort(event.target.value)} className="border border-border bg-background p-2 text-foreground"><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="title">Title A–Z</option></select></label>
          </div>}
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
            <div className="mt-14 grid md:grid-cols-2 gap-5">
              {visible.map((a, i) => (
                <Reveal key={a.id} delay={Math.min(i * 0.02, 0.2)}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
