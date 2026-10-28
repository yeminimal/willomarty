import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-pXqaVCHB.mjs";
import { t as Route } from "./work._slug-Bp5u52Kt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-BfRi6Eo2.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/root/app/code/src/components/case-study/CaseStudyLayout.tsx";
function SectionVisuals({ visuals }) {
	if (!visuals?.length) return null;
	const supporting = visuals.some((visual) => visual.caption);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `mt-6 ${visuals.length > 1 && !supporting ? "grid gap-4 sm:grid-cols-2" : "space-y-5"}`,
		children: visuals.map((visual) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
			className: visual.caption && visuals.length > 1 ? "max-w-xs" : "",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: visual.src,
				alt: visual.alt,
				loading: "lazy",
				className: "block w-full border border-border"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 16,
				columnNumber: 11
			}, this), visual.caption && /* @__PURE__ */ (void 0)("figcaption", {
				className: "mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
				children: visual.caption
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 13
			}, this)]
		}, visual.src, true, {
			fileName: _jsxFileName$1,
			lineNumber: 15,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
function SectionBlock({ section }) {
	if (section.kind === "prose") {
		const paras = Array.isArray(section.body) ? section.body : [section.body];
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: section.heading }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 33,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-4 text-[16px] leading-relaxed text-foreground/80 max-w-[62ch]",
				children: paras.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: p }, i, false, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionVisuals, { visuals: section.visuals }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 39,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 32,
			columnNumber: 7
		}, this);
	}
	if (section.kind === "list") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: section.heading }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 9
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
		className: "mt-5 divide-y divide-border border-y border-border",
		children: section.items.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "py-5 grid md:grid-cols-[180px_1fr] gap-3 md:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim",
				children: it.label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 51,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
				className: "text-[15px] leading-relaxed text-foreground/80 max-w-[62ch]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: it.body }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 55,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionVisuals, { visuals: it.visuals }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 56,
					columnNumber: 17
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 54,
				columnNumber: 15
			}, this)]
		}, it.label, true, {
			fileName: _jsxFileName$1,
			lineNumber: 50,
			columnNumber: 13
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 48,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 46,
		columnNumber: 7
	}, this);
	if (section.kind === "callout") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "border-l-2 border-accent pl-6 md:pl-8 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "display-serif italic text-2xl md:text-[28px] text-foreground",
				children: section.heading
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 68,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 text-[16px] leading-relaxed text-foreground/80 max-w-[62ch]",
				children: section.body
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 71,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionVisuals, { visuals: section.visuals }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 74,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 67,
		columnNumber: 7
	}, this);
	if (section.kind === "image") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [section.heading && /* @__PURE__ */ (void 0)(SectionLabel, { children: section.heading }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 82,
		columnNumber: 29
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
		className: section.heading ? "mt-5" : "",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "aspect-video w-full overflow-hidden border border-border bg-tag",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: section.src,
				alt: section.alt,
				loading: "lazy",
				className: "h-full w-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 85,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 84,
			columnNumber: 11
		}, this), section.caption && /* @__PURE__ */ (void 0)("figcaption", {
			className: "mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
			children: section.caption
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 93,
			columnNumber: 13
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 83,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 81,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: section.heading }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 105,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-5 border border-dashed border-border bg-tag/40 aspect-video flex items-center justify-center p-8",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted text-center max-w-md",
			children: section.note
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 107,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 106,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 104,
		columnNumber: 5
	}, this);
}
function CaseStudyLayout({ study }) {
	const metaParts = [
		study.role,
		study.scope,
		study.industry,
		study.year
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 120,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-24 md:pt-28",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-[1100px] px-6 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/work",
							className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
								size: 12,
								className: "group-hover:-translate-x-0.5 transition-transform"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 127,
								columnNumber: 13
							}, this), "All work"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 123,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10 aspect-video w-full overflow-hidden border border-border bg-tag",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: study.image,
								alt: `${study.client} — ${study.scope}`,
								className: `h-full w-full ${study.slug === "frauwa" ? "object-contain bg-[#eaeaea]" : "object-cover"}`,
								width: 1280,
								height: 720
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 133,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 132,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 131,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
								className: "mt-10 md:mt-14 border-b border-border pb-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Case Study" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 145,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
										className: "display-serif mt-6 text-4xl md:text-6xl leading-[1.05]",
										children: study.client
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 146,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-6 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-muted",
										children: metaParts.join("  ·  ")
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 149,
										columnNumber: 15
									}, this),
									study.liveLink && /* @__PURE__ */ (void 0)("a", {
										href: study.liveLink.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dim transition-colors border border-accent/40 hover:border-accent px-4 py-2",
										children: [study.liveLink.label, /* @__PURE__ */ (void 0)(ArrowUpRight, {
											size: 12,
											className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 160,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 153,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 144,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 143,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-14 md:mt-20 space-y-14 md:space-y-20",
							children: study.sections.map((section, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
								delay: Math.min(i * .03, .15),
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { section }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 172,
									columnNumber: 17
								}, this)
							}, i, false, {
								fileName: _jsxFileName$1,
								lineNumber: 171,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 169,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-20 md:mt-28 border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
							children: [study.liveLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: study.liveLink.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors",
								children: [study.liveLink.label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
									size: 12,
									className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 186,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 179,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 192,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/work",
								className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors",
								children: ["See all work", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
									size: 12,
									className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 199,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 194,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 177,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 122,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 121,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-24" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 207,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 208,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 119,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/root/app/code/src/routes/work.$slug.tsx?tsr-split=component";
function CaseStudyPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CaseStudyLayout, { study: Route.useLoaderData() }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { CaseStudyPage as component };
