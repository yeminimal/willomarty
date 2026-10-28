import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock3, D as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as formatDate, i as articleReadTime, r as articleExcerpt } from "./articles.shared-DtbdIfsT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ArticleCard-Bi6rlrJx.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/components/articles/ArticleCard.tsx";
function ArticleCard({ article, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/articles/$slug",
		params: { slug: article.slug },
		className: "group flex h-full w-full min-w-0 max-w-full flex-col border border-border bg-surface overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "aspect-[1.6] w-full min-w-0 overflow-hidden border-b border-border bg-tag",
			children: article.cover_image_url && /* @__PURE__ */ (void 0)("img", {
				src: article.cover_image_url,
				alt: article.title,
				width: 1200,
				height: 630,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 123
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex min-w-0 flex-1 flex-col p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-3 font-mono text-[10px] text-accent-dim",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatDate(article.published_at) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 9,
						columnNumber: 95
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock3, { size: 11 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 9,
							columnNumber: 191
						}, this), articleReadTime(article)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 9,
						columnNumber: 142
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "display-serif mt-4 break-words text-2xl leading-tight group-hover:text-accent",
					children: article.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 truncate text-sm text-muted",
					title: articleExcerpt(article),
					children: articleExcerpt(article)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 6
				}, this),
				!compact && /* @__PURE__ */ (void 0)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: article.tags.map((tag) => /* @__PURE__ */ (void 0)("span", {
						className: "bg-tag px-2 py-1 font-mono text-[10px] text-muted",
						children: tag
					}, tag, false, {
						fileName: _jsxFileName,
						lineNumber: 12,
						columnNumber: 89
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-auto pt-6 flex items-center gap-2 font-mono text-[10px] uppercase text-accent-dim",
					children: ["Read article ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { size: 13 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 121
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 6
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 9
	}, this);
}
//#endregion
export { ArticleCard as t };
