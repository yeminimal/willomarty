import { o as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, t as Button } from "./Footer-pXqaVCHB.mjs";
import { t as ArticleCard } from "./ArticleCard-Bi6rlrJx.mjs";
import { t as Route } from "./articles.index-7KXPjAeM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.index-CBu2ykvO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/routes/articles.index.tsx?tsr-split=component";
function ArticlesArchive() {
	const articles = Route.useLoaderData();
	const [tag, setTag] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("newest");
	const tags = [...new Set(articles.flatMap((article) => article.tags))];
	const visible = articles.filter((article) => tag === "All" || article.tags.includes(tag)).sort((a, b) => sort === "title" ? a.title.localeCompare(b.title) : sort === "oldest" ? (a.published_at ?? "").localeCompare(b.published_at ?? "") : (b.published_at ?? "").localeCompare(a.published_at ?? ""));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-24 md:pt-28 pb-24 md:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-[1100px] px-6 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
								size: 12,
								className: "group-hover:-translate-x-0.5 transition-transform"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 13
							}, this), "Back home"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Writing" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 28,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "display-serif mt-6 text-4xl md:text-6xl max-w-3xl leading-[1.05]",
									children: [
										"Notes on design,",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 31,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-accent",
											children: "brand and craft."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 32,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 29,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
									children: "Longer-form thinking that doesn't fit inside a case study — process, opinion and the occasional teardown."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 11
						}, this),
						articles.length > 6 && /* @__PURE__ */ (void 0)("div", {
							className: "mt-10 flex flex-wrap items-center gap-2",
							children: [["All", ...tags].map((item) => /* @__PURE__ */ (void 0)(Button, {
								size: "sm",
								variant: tag === item ? "default" : "outline",
								onClick: () => setTag(item),
								children: item
							}, item, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 43
							}, this)), /* @__PURE__ */ (void 0)("label", {
								className: "ml-auto flex items-center gap-2 text-sm text-muted",
								children: ["Sort ", /* @__PURE__ */ (void 0)("select", {
									"aria-label": "Sort articles",
									value: sort,
									onChange: (event) => setSort(event.target.value),
									className: "border border-border bg-background p-2 text-foreground",
									children: [
										/* @__PURE__ */ (void 0)("option", {
											value: "newest",
											children: "Newest first"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 43,
											columnNumber: 251
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "oldest",
											children: "Oldest first"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 43,
											columnNumber: 295
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "title",
											children: "Title A–Z"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 43,
											columnNumber: 339
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 88
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 35
						}, this),
						articles.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 border border-border bg-surface p-10 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim",
								children: "Nothing published yet"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-foreground/70",
								children: "The first article is on its way. Check back soon."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 36
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 [&>div]:min-w-0",
							children: visible.map((a, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
								delay: Math.min(i * .02, .2),
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArticleCard, { article: a }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 54,
									columnNumber: 19
								}, this)
							}, a.id, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 38
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 22
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 10
	}, this);
}
//#endregion
export { ArticlesArchive as component };
