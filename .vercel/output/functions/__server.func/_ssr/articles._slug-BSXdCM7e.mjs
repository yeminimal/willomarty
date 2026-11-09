import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { N as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-WEbJGU8w.mjs";
import { a as articleReadTime, o as formatDate, t as PUBLISHED_ARTICLES } from "./articles-Dkrj6I_s.mjs";
import { n as portrait_webp_asset_default, t as Route } from "./articles._slug-D3P4vOjL.mjs";
import { t as ArticleCard } from "./ArticleCard-31hI3_xB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-BSXdCM7e.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/routes/articles.$slug.tsx?tsr-split=component";
function ArticlePage() {
	const { slug } = Route.useParams();
	const article = PUBLISHED_ARTICLES.find((a) => a.slug === slug);
	const related = PUBLISHED_ARTICLES.filter((item) => item.slug !== article.slug).sort((a, b) => Number(b.tags.some((tag) => article.tags.includes(tag))) - Number(a.tags.some((tag) => article.tags.includes(tag)))).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-24 md:pt-28 pb-24 md:pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "mx-auto max-w-[760px] px-6 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/articles",
							className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
								size: 12,
								className: "group-hover:-translate-x-0.5 transition-transform"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 13
							}, this), "All articles"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 11
						}, this),
						article.cover_image_url && /* @__PURE__ */ (void 0)("img", {
							src: article.cover_image_url,
							alt: article.cover_image_alt ?? article.title,
							width: article.cover_image_width ?? 1200,
							height: article.cover_image_height ?? 630,
							loading: "eager",
							fetchPriority: "high",
							className: "mt-10 aspect-[1.9] w-full border border-border object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 39
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "display-serif mt-10 text-4xl md:text-5xl leading-[1.05]",
							children: article.heading ?? article.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatDate(article.published_at) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: articleReadTime(article) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 13
								}, this),
								article.tags.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "bg-tag px-2.5 py-1 text-muted",
									children: t
								}, t, false, {
									fileName: _jsxFileName,
									lineNumber: 33,
									columnNumber: 36
								}, this))
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "prose-article mt-10",
							dangerouslySetInnerHTML: { __html: article.body_html }
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 flex items-center gap-5 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: portrait_webp_asset_default.url,
								alt: "Williams Olayemi Martins",
								width: 80,
								height: 80,
								loading: "lazy",
								className: "h-20 w-20 shrink-0 border border-border object-cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "display-serif text-xl",
									children: "Williams Olayemi Martins"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 18
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Lagos-based brand, product & web designer."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 83
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/",
									className: "mt-3 inline-block font-mono text-[10px] uppercase text-accent-dim hover:text-accent",
									children: "Back to portfolio"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 168
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this), related.length > 0 && /* @__PURE__ */ (void 0)("section", {
					className: "mx-auto mt-20 max-w-[1100px] border-t border-border px-6 pt-12 md:px-10",
					children: [/* @__PURE__ */ (void 0)("h2", {
						className: "display-serif text-3xl",
						children: "More articles"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 125
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ (void 0)(ArticleCard, {
							article: item,
							compact: true
						}, item.id, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 251
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 182
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 32
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { ArticlePage as component };
