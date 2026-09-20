import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, absoluteUrl } from "@/lib/articles.shared";
import { listPublishedArticles } from "@/lib/articles.functions";

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c] ?? c,
  );
}

export const Route = createFileRoute("/articles-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const articles = await listPublishedArticles();
        const urls = articles
          .map((a) => {
            const image = absoluteUrl(a.cover_image_url);
            return `  <url>
    <loc>${SITE_URL}/articles/${escapeXml(a.slug)}</loc>
    <lastmod>${(a.updated_at ?? a.published_at ?? "").slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>${image ? `\n    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>` : ""}
  </url>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/articles</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=600",
          },
        });
      },
    },
  },
});
