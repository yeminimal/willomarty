import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-pXqaVCHB.mjs";
import { r as WORK } from "./work-Bex4Vnww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-CAZ6Xiq-.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/root/app/code/src/components/portfolio/WorkCard.tsx";
function initials(name) {
	return name.replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
}
function WorkCard({ w }) {
	const hasCaseStudy = Boolean(w.caseStudySlug);
	const externalHref = w.link ?? "https://www.behance.net/willomarty";
	const inner = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative aspect-video w-full overflow-hidden border-b border-border bg-background",
		children: w.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: w.image,
			alt: w.imageAlt ?? `${w.client} — ${w.discipline}`,
			loading: "lazy",
			width: 1280,
			height: 720,
			className: `h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${w.slug === "frauwa" ? "object-contain bg-[#eaeaea]" : "object-cover"}`
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 23,
			columnNumber: 11
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "h-full w-full flex items-center justify-center bg-tag",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "display-serif italic text-5xl md:text-6xl text-accent-dim/60 select-none",
				children: initials(w.client)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 33,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 32,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 21,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "p-7 md:p-8 flex-1 flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim",
				children: w.discipline
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 41,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "display-serif mt-4 text-2xl md:text-[26px] text-foreground group-hover:text-accent transition-colors",
				children: w.client
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-[15px] leading-relaxed text-foreground/70",
				children: w.description
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 47,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors",
				children: [hasCaseStudy ? "Read case study" : w.link ? "View case" : "View on Behance", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
					size: 12,
					className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 50,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 48,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 40,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 5
	}, this);
	const cls = "group flex flex-col border border-border bg-surface h-full border-l-2 border-l-transparent hover:border-l-accent transition-all duration-300 overflow-hidden";
	if (hasCaseStudy) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/work/$slug",
		params: { slug: w.caseStudySlug },
		className: cls,
		children: inner
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 64,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href: externalHref,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cls,
		children: inner
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 70,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/root/app/code/src/routes/work.index.tsx?tsr-split=component";
function WorkArchive() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
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
								lineNumber: 15,
								columnNumber: 13
							}, this), "Back home"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 14,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Archive" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 21,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "display-serif mt-6 text-4xl md:text-6xl max-w-3xl leading-[1.05]",
									children: [
										"All work,",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 24,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "italic text-accent",
											children: "in one place."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 25,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 22,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
									children: "Featured projects link through to full case studies. The rest link out to their live sites or Behance for a closer look at the artefacts."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 grid md:grid-cols-2 gap-5",
							children: WORK.map((w, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
								delay: Math.min(i * .02, .2),
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCard, { w }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 17
								}, this)
							}, w.slug, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 33
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { WorkArchive as component };
