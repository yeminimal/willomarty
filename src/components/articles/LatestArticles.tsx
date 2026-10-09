import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles.shared";
import { ArticleCard } from "./ArticleCard";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
export function LatestArticles({articles}:{articles:Article[]}) {
 return <section id="writing" className="border-t border-border py-24 md:py-28"><div className="mx-auto max-w-[1100px] px-6 md:px-10">
  <SectionLabel>Notes & Essays</SectionLabel><div className="mt-6 flex flex-wrap items-end justify-between gap-6"><h2 className="display-serif text-3xl md:text-5xl">Latest Writing</h2><Link to="/articles" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-accent-dim hover:text-accent">See all articles <ArrowRight size={14}/></Link></div>
  <div className="mt-12 grid gap-6 md:grid-cols-3">{articles.slice(0,3).map((article)=><ArticleCard key={article.id} article={article} compact />)}</div>
  {articles.length===0 && <p className="mt-10 text-muted">No articles published yet.</p>}
 </div></section>;
}
