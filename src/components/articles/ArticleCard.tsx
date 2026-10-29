import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles.shared";
import { excerptFromHtml, formatDate } from "@/lib/articles.shared";

export function ArticleCard({ article }: { article: Article }) {
  const summary = article.meta_description?.trim()
    ? article.meta_description
    : excerptFromHtml(article.body_html);

  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className="group flex flex-col border border-border bg-surface h-full border-l-2 border-l-transparent hover:border-l-accent transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-tag">
        {article.cover_image_url ? (
          <img
            src={article.cover_image_url}
            alt={article.title}
            loading="lazy"
            width={1280}
            height={720}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : null}
      </div>

      <div className="p-7 md:p-8 flex-1 flex flex-col">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
          {formatDate(article.published_at)}
        </div>
        <h3 className="display-serif mt-4 text-2xl md:text-[26px] text-foreground group-hover:text-accent transition-colors">
          {article.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{summary}</p>
        {article.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="bg-tag px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors">
          Read article
          <ArrowUpRight
            size={12}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
