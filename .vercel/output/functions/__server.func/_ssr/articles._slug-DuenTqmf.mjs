import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-pXqaVCHB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-DuenTqmf.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/routes/articles.$slug.tsx?tsr-split=notFoundComponent";
function ArticleNotFound() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-32 pb-32 mx-auto max-w-[1100px] px-6 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "display-serif text-4xl",
						children: "Article not found"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 9,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-foreground/70",
						children: "This piece may have been moved, or it isn't published yet."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 10,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/articles",
						className: "mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 12 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 14,
							columnNumber: 11
						}, this), " All articles"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
//#endregion
export { ArticleNotFound as notFoundComponent };
