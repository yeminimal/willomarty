import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles.shared";
import { articleExcerpt, articleReadTime, formatDate } from "@/lib/articles.shared";
export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
 return <Link to="/articles/$slug" params={{ slug: article.slug }} className="group flex h-full w-full min-w-0 max-w-full flex-col border border-border bg-surface overflow-hidden">
   <div className="aspect-[1.6] w-full min-w-0 overflow-hidden border-b border-border bg-tag">{article.cover_image_url && <img src={article.cover_image_url} alt={article.title} width={1200} height={630} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />}</div>
   <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
     <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-accent-dim"><span>{formatDate(article.published_at)}</span><span className="inline-flex items-center gap-1"><Clock3 size={11} />{articleReadTime(article)}</span></div>
     <h3 className="display-serif mt-4 break-words text-2xl leading-tight group-hover:text-accent">{article.title}</h3>
     <p className="mt-3 truncate text-sm text-muted" title={articleExcerpt(article)}>{articleExcerpt(article)}</p>
     {!compact && <div className="mt-5 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="bg-tag px-2 py-1 font-mono text-[10px] text-muted">{tag}</span>)}</div>}
     <div className="mt-auto pt-6 flex items-center gap-2 font-mono text-[10px] uppercase text-accent-dim">Read article <ArrowUpRight size={13} /></div>
   </div>
 </Link>;
}
