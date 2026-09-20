import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { getPublishedArticle } from "@/lib/articles.functions";
import { SITE_URL, absoluteUrl, formatDate } from "@/lib/articles.shared";

export const Route = createFileRoute("/articles/$slug")({
  loader: async ({ params }) => {
    const article = await getPublishedArticle({ data: { slug: params.slug } });
    if (!article) throw notFound();
    return article;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `${SITE_URL}/articles/${params.slug}`;
    const image = absoluteUrl(loaderData.cover_image_url);
    return {
      meta: [
        { title: `${loaderData.title} — Williams Olayemi Martins` },
        { name: "description", content: loaderData.meta_description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.meta_description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(image
          ? [
              { property: "og:image", content: image },
              { name: "twitter:image", content: image },
            ]
          : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.title },
        { name: "twitter:description", content: loaderData.meta_description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.meta_description,
            image: image || undefined,
            datePublished: loaderData.published_at,
            dateModified: loaderData.updated_at,
            mainEntityOfPage: url,
            keywords: loaderData.tags.join(", ") || undefined,
            author: {
              "@type": "Person",
              name: "Williams Olayemi Martins",
              url: SITE_URL,
              sameAs: [
                "https://www.behance.net/willomarty",
                "https://github.com/yeminimal",
              ],
            },
            publisher: {
              "@type": "Person",
              name: "Williams Olayemi Martins",
              url: SITE_URL,
            },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-32 pb-32 mx-auto max-w-[1100px] px-6 md:px-10">
        <h1 className="display-serif text-4xl">Article not found</h1>
        <p className="mt-4 text-foreground/70">
          This piece may have been moved, or it isn't published yet.
        </p>
        <Link
          to="/articles"
          className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent"
        >
          <ArrowLeft size={12} /> All articles
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function ArticlePage() {
  const article = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-24 md:pt-28 pb-24 md:pb-32">
        <article className="mx-auto max-w-[760px] px-6 md:px-10">
          <Link
            to="/articles"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            All articles
          </Link>

          <h1 className="display-serif mt-10 text-4xl md:text-5xl leading-[1.05]">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
            <span>{formatDate(article.published_at)}</span>
            {article.tags.map((t) => (
              <span key={t} className="bg-tag px-2.5 py-1 text-muted">
                {t}
              </span>
            ))}
          </div>

          {article.cover_image_url && (
            <img
              src={article.cover_image_url}
              alt={article.title}
              width={1280}
              height={720}
              loading="eager"
              fetchPriority="high"
              className="mt-10 w-full border border-border object-cover"
            />
          )}

          <div
            className="prose-article mt-10"
            // Sanitized server-side on save and again on read.
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
