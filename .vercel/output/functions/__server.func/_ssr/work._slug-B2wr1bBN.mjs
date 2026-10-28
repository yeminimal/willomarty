import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./work._slug-Dn301Z7d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-B2wr1bBN.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/routes/work.$slug.tsx?tsr-split=notFoundComponent";
function CaseStudyNotFound() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-serif text-3xl",
					children: "Case study not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: [
						"No case study exists at ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-mono",
							children: ["/work/", slug]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 11,
							columnNumber: 35
						}, this),
						" yet."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/work",
						className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-border px-4 py-2 hover:border-accent-dim",
						children: "See all work"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { CaseStudyNotFound as notFoundComponent };
