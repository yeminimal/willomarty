import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { D as ChevronRight, N as ArrowLeft, O as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, t as Button } from "./Footer-WEbJGU8w.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { t as PUBLISHED_ARTICLES } from "./articles-DU8fYnd3.mjs";
import { t as ArticleCard } from "./ArticleCard-UXaMcIU3.mjs";
import { t as Route } from "./articles.index-uYnxKIE_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.index-DdbqdYKm.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/routes/articles.index.tsx?tsr-split=component";
var PER_PAGE = 4;
function ArticlesArchive() {
	const articles = PUBLISHED_ARTICLES;
	const tag = Route.useSearch({ select: (s) => s.tag ?? "All" });
	const page = Route.useSearch({ select: (s) => s.page ?? 1 });
	const navigate = useNavigate({ from: Route.fullPath });
	const tags = [...new Set(articles.flatMap((article) => article.tags))];
	const grouped = tag === "All" ? articles : articles.filter((article) => article.tags.includes(tag));
	const pageCount = Math.max(1, Math.ceil(grouped.length / PER_PAGE));
	const current = Math.min(page, pageCount);
	const visible = grouped.slice((current - 1) * PER_PAGE, current * PER_PAGE);
	const goTo = (nextTag, nextPage) => navigate({ search: {
		tag: nextTag === "All" ? void 0 : nextTag,
		page: nextPage > 1 ? nextPage : void 0
	} });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
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
								lineNumber: 39,
								columnNumber: 13
							}, this), "Back home"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Writing" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "display-serif mt-6 text-4xl md:text-6xl max-w-3xl leading-[1.05]",
									children: [
										"Notes on design,",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 48,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-accent",
											children: "brand and craft."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 49,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
									children: "Longer-form thinking that doesn't fit inside a case study — process, opinion and the occasional teardown."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this),
						articles.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "mt-10 flex flex-wrap items-center gap-2",
							children: ["All", ...tags].map((item) => /* @__PURE__ */ (void 0)(Button, {
								size: "sm",
								variant: tag === item ? "default" : "outline",
								onClick: () => goTo(item, 1),
								children: item
							}, item, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 45
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 35
						}, this),
						articles.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 border border-border bg-surface p-10 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim",
								children: "Nothing published yet"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-foreground/70",
								children: "The first article is on its way. Check back soon."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 36
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 [&>div]:min-w-0",
							children: visible.map((a, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
								delay: Math.min(i * .02, .2),
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArticleCard, { article: a }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 74,
									columnNumber: 21
								}, this)
							}, a.id, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 40
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 15
						}, this), pageCount > 1 && /* @__PURE__ */ (void 0)("nav", {
							"aria-label": "Article pages",
							className: "mt-12 flex items-center justify-center gap-4",
							children: [
								/* @__PURE__ */ (void 0)(Button, {
									variant: "outline",
									size: "sm",
									disabled: current <= 1,
									onClick: () => goTo(tag, current - 1),
									children: [/* @__PURE__ */ (void 0)(ChevronLeft, { size: 14 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 80,
										columnNumber: 21
									}, this), " Prev"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", {
									className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
									children: [
										"Page ",
										current,
										" of ",
										pageCount
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									variant: "outline",
									size: "sm",
									disabled: current >= pageCount,
									onClick: () => goTo(tag, current + 1),
									children: ["Next ", /* @__PURE__ */ (void 0)(ChevronRight, { size: 14 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 86,
										columnNumber: 26
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 33
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 22
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 10
	}, this);
}
//#endregion
export { ArticlesArchive as component };
