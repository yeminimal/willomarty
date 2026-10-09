export const SITE_URL = "https://willomarty.net.ng";

export type ArticleStatus = "draft" | "published";

export interface Article {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  cover_image_url: string;
  body_html: string;
  tags: string[];
  status: ArticleStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

/** lowercase, hyphenated, ascii-ish slug */
export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Cover images are stored as site-relative paths; make them absolute for OG tags. */
export function absoluteUrl(path: string): string {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function formatDate(value: string | null): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function excerptFromHtml(html: string, length = 160): string {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length - 1)}…` : text;
}

/** Derived from saved content so future articles need no layout changes. */
export function articleReadTime(article: Article): string {
  if (article.body_html.includes("[[PLACEHOLDER:")) return "Read time pending";
  const words = article.body_html.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function articleExcerpt(article: Article): string {
  return article.meta_description.trim() || excerptFromHtml(article.body_html);
}
