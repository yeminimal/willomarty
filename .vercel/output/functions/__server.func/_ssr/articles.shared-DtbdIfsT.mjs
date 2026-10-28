//#region node_modules/.nitro/vite/services/ssr/assets/articles.shared-DtbdIfsT.js
var SITE_URL = "https://willomarty.net.ng";
/** lowercase, hyphenated, ascii-ish slug */
function slugify(input) {
	return input.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
/** Cover images are stored as site-relative paths; make them absolute for OG tags. */
function absoluteUrl(path) {
	if (!path) return "";
	if (/^https?:\/\//i.test(path)) return path;
	return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
function formatDate(value) {
	if (!value) return "";
	return new Date(value).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function excerptFromHtml(html, length = 160) {
	const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	return text.length > length ? `${text.slice(0, length - 1)}…` : text;
}
/** Derived from saved content so future articles need no layout changes. */
function articleReadTime(article) {
	if (article.body_html.includes("[[PLACEHOLDER:")) return "Read time pending";
	const words = article.body_html.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
	return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
function articleExcerpt(article) {
	return article.meta_description.trim() || excerptFromHtml(article.body_html);
}
//#endregion
export { formatDate as a, articleReadTime as i, absoluteUrl as n, slugify as o, articleExcerpt as r, SITE_URL as t };
