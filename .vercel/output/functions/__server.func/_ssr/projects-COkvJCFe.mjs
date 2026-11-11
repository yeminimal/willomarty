import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-WEbJGU8w.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { t as TOOLS } from "./tools-BAgV7oML.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-COkvJCFe.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/root/app/code/src/components/portfolio/Tools.tsx";
function Tools() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "personal-projects",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Personal projects" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 11,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-serif mt-6 text-3xl md:text-5xl max-w-3xl",
					children: [
						"Small tools for",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 14,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "italic text-accent",
							children: "real friction points."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 15,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 12,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
					children: "Small, sharp, browser-based tools built to solve problems I kept bumping into. No sign-up. No bloat. Just the thing that needs doing."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 10,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-14 grid md:grid-cols-2 gap-5",
				children: TOOLS.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: Math.min(i * .05, .2),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: t.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex flex-col border border-border bg-surface h-full border-l-2 border-l-transparent hover:border-l-accent transition-all duration-300 overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative aspect-video w-full overflow-hidden border-b border-border bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: t.image,
								alt: `${t.name} — ${t.tagline}`,
								loading: "lazy",
								width: 1280,
								height: 720,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 33,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent border border-accent/40 bg-background/80 backdrop-blur px-2 py-1 whitespace-nowrap",
								children: ["✦ ", t.status]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 41,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 32,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-7 md:p-8 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "display-serif text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors",
									children: t.name
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 47,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 italic text-accent-dim text-[15px]",
									children: [
										"\"",
										t.tagline,
										"\""
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 50,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-5 text-[15px] leading-relaxed text-foreground/70",
									children: t.description
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 51,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: t.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[10px] uppercase tracking-[0.14em] bg-tag border border-border px-2.5 py-1 text-muted group-hover:border-accent-dim/50 transition-colors",
										children: tag
									}, tag, false, {
										fileName: _jsxFileName$1,
										lineNumber: 54,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 52,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors",
									children: ["Visit Project", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
										size: 12,
										className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 64,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 62,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 46,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 15
					}, this)
				}, t.name, false, {
					fileName: _jsxFileName$1,
					lineNumber: 25,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/root/app/code/src/routes/projects.tsx?tsr-split=component";
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-16",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tools, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 8,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProjectsPage as component };
