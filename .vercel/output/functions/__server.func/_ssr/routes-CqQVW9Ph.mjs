import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, O as ArrowRight, S as CodeXml, a as Sparkle, c as PenTool, d as Monitor, h as Layers, i as Sparkles, w as Clapperboard } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, t as Button } from "./Footer-pXqaVCHB.mjs";
import { t as ArticleCard } from "./ArticleCard-Bi6rlrJx.mjs";
import { n as Route, r as TOOLS, t as Faq } from "./routes-rcpteAE-.mjs";
import { t as FEATURED_WORK } from "./work-Bex4Vnww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqQVW9Ph.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$7 = "/root/app/code/src/components/portfolio/Hero.tsx";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "hero",
		className: "project-hero",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex min-h-[560px] max-w-[1100px] flex-col justify-center px-6 pb-16 pt-32 md:min-h-[640px] md:px-10 md:pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-mono text-[11px] uppercase text-hero-accent",
					children: "Williams Olayemi Martins / Brand & Product Designer"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-serif hero-headline mt-8 max-w-[960px]",
					children: "I design brands & products"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-7 max-w-md text-base leading-relaxed text-hero-foreground/80",
					children: [
						"I help brands tell their story, curate their journey, and define their identity.",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 11,
							columnNumber: 168
						}, this),
						"Lagos, Nigeria."
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 11,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						className: "bg-hero-accent text-hero-background hover:bg-hero-accent/90 font-mono text-xs uppercase",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							children: ["Send Me a Message ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 13,
								columnNumber: 165
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 13,
							columnNumber: 127
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 13,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 12,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/root/app/code/src/components/portfolio/MetricStrip.tsx";
var ITEMS = [
	{
		type: "metric",
		value: "7+ Years Experience"
	},
	{
		type: "brand",
		value: "Incash"
	},
	{
		type: "metric",
		value: "20+ Projects Delivered"
	},
	{
		type: "brand",
		value: "Zamack Consults"
	},
	{
		type: "metric",
		value: "4 Micro-Tools Shipped"
	},
	{
		type: "brand",
		value: "Moon Republic"
	},
	{
		type: "metric",
		value: "8+ Brands Served"
	},
	{
		type: "brand",
		value: "Frauwa Roofs"
	},
	{
		type: "brand",
		value: "MASAI Communications"
	},
	{
		type: "brand",
		value: "Getcrib"
	},
	{
		type: "brand",
		value: "Mytherapist.ng"
	},
	{
		type: "brand",
		value: "Victorious Tech"
	}
];
function MetricStrip() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative border-y border-border overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex w-max motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:gap-4 motion-reduce:py-5",
				children: [...ITEMS, ...ITEMS].map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-8 shrink-0 px-8 py-5",
					"aria-hidden": i >= ITEMS.length ? "true" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: item.type === "metric" ? "font-mono text-[11px] uppercase tracking-[0.18em] text-accent whitespace-nowrap" : "display-serif italic text-lg md:text-xl text-foreground/60 whitespace-nowrap",
						children: item.value
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 30,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkle, {
						size: 14,
						className: "text-accent-dim/50",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 39,
						columnNumber: 13
					}, this)]
				}, i, true, {
					fileName: _jsxFileName$6,
					lineNumber: 25,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent" }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent" }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 46,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/root/app/code/src/components/portfolio/FeaturedWorkCard.tsx";
var OUTCOMES = {
	incash: "One fintech experience across web, mobile and marketing.",
	"webflow-development": "An ongoing engagement: a visually refined, more accessible website.",
	frauwa: "One identity connecting roofing and interior decor.",
	"zamack-consults": "A refreshed identity built on clarity and trust."
};
function FeaturedWorkCard({ w }) {
	const slug = w.caseStudySlug;
	if (!slug) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/work/$slug",
		params: { slug },
		className: "group block h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "aspect-square overflow-hidden border border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: w.image,
					alt: w.imageAlt ?? `${w.client} — project mockup`,
					width: 768,
					height: 768,
					loading: "lazy",
					className: `h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${w.slug === "frauwa" ? "object-contain bg-[#eaeaea]" : "object-cover"}`
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 16,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "display-serif text-2xl text-foreground transition-colors group-hover:text-accent",
					children: w.client
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 19,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
					size: 18,
					className: "mt-1 shrink-0 text-accent"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 20,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: OUTCOMES[w.slug] ?? w.outcomeLine
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 22,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/root/app/code/src/components/portfolio/Work.tsx";
function Work() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "work",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Selected Work" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 13,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "display-serif mt-6 text-3xl md:text-5xl max-w-2xl",
						children: [
							"Brands, products, and stories",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 16,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "italic text-accent",
								children: "built with intent."
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 17,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 14,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
						children: "Selected identities and digital experiences, from the first idea to the final detail."
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 19,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-14 grid md:grid-cols-2 gap-8",
					children: FEATURED_WORK.map((w, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: Math.min(i * .03, .2),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedWorkCard, { w }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 27,
							columnNumber: 15
						}, this)
					}, w.slug, false, {
						fileName: _jsxFileName$4,
						lineNumber: 26,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-12 flex justify-center md:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/work",
							className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors border border-border hover:border-accent-dim/70 px-5 py-3",
							children: ["See all work", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
								size: 12,
								className: "group-hover:translate-x-0.5 transition-transform"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 39,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 34,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 33,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 32,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/root/app/code/src/components/portfolio/Tools.tsx";
function Tools() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "tools",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "What I've Built" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 11,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "display-serif mt-6 text-3xl md:text-5xl max-w-3xl",
					children: [
						"Micro-tools for",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 14,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "italic text-accent",
							children: "real friction points."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 15,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 12,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
					children: "Small, sharp, browser-based tools built to solve problems I kept bumping into. No sign-up. No bloat. Just the thing that needs doing."
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 17,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$3,
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
								fileName: _jsxFileName$3,
								lineNumber: 33,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent border border-accent/40 bg-background/80 backdrop-blur px-2 py-1 whitespace-nowrap",
								children: ["✦ ", t.status]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 41,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 32,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-7 md:p-8 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "display-serif text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors",
									children: t.name
								}, void 0, false, {
									fileName: _jsxFileName$3,
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
									fileName: _jsxFileName$3,
									lineNumber: 50,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-5 text-[15px] leading-relaxed text-foreground/70",
									children: t.description
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 51,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: t.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[10px] uppercase tracking-[0.14em] bg-tag border border-border px-2.5 py-1 text-muted group-hover:border-accent-dim/50 transition-colors",
										children: tag
									}, tag, false, {
										fileName: _jsxFileName$3,
										lineNumber: 54,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 52,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim group-hover:text-accent transition-colors",
									children: ["Visit Tool", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
										size: 12,
										className: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 64,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 62,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 46,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 26,
						columnNumber: 15
					}, this)
				}, t.name, false, {
					fileName: _jsxFileName$3,
					lineNumber: 25,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 23,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/root/app/code/src/components/portfolio/Skills.tsx";
var CAPABILITIES = [
	{
		title: "Brand identity",
		detail: "Frauwa Roofs & Interior Decor",
		icon: PenTool,
		slug: "frauwa"
	},
	{
		title: "Product & UI/UX",
		detail: "Incash",
		icon: Layers,
		slug: "incash"
	},
	{
		title: "Logo design",
		detail: "Zamack Consults",
		icon: Sparkles,
		slug: "zamack-consults"
	},
	{
		title: "Creative direction",
		detail: "Moon Republic",
		icon: Clapperboard,
		slug: "moon-republic"
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "skills",
		className: "border-t border-border py-24 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Capabilities" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 12,
					columnNumber: 4
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "display-serif mt-6 text-3xl md:text-5xl",
					children: "The craft behind the work."
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 12,
					columnNumber: 45
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3",
					children: [
						CAPABILITIES.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/work/$slug",
							params: { slug: c.slug },
							className: "group border-b border-border py-7 pr-6 sm:pr-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(c.icon, {
									size: 24,
									className: "text-accent"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 14,
									columnNumber: 150
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-5 flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "display-serif text-2xl group-hover:text-accent",
										children: c.title
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 14,
										columnNumber: 256
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
										size: 16,
										className: "text-accent"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 14,
										columnNumber: 333
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 14,
									columnNumber: 194
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm text-muted",
									children: c.detail
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 14,
									columnNumber: 389
								}, this)
							]
						}, c.title, true, {
							fileName: _jsxFileName$2,
							lineNumber: 14,
							columnNumber: 30
						}, this)),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/articles/$slug",
							params: { slug: "web-design-framer-webflow-wordpress" },
							className: "group border-b border-border py-7 pr-6 sm:pr-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Monitor, {
									size: 24,
									className: "text-accent"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 15,
									columnNumber: 146
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-5 flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "display-serif text-2xl group-hover:text-accent",
										children: "Web design"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 15,
										columnNumber: 240
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
										size: 16,
										className: "text-accent"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 15,
										columnNumber: 318
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 15,
									columnNumber: 191
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Framer, Webflow & WordPress"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 15,
									columnNumber: 374
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 15,
							columnNumber: 5
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "/#tools",
							className: "group border-b border-border py-7 pr-6 sm:pr-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeXml, {
									size: 24,
									className: "text-accent"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 16,
									columnNumber: 83
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-5 flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "display-serif text-2xl group-hover:text-accent",
										children: "Development"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 16,
										columnNumber: 175
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
										size: 16,
										className: "text-accent"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 16,
										columnNumber: 254
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 16,
									columnNumber: 126
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Four independently shipped micro-tools"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 16,
									columnNumber: 310
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 16,
							columnNumber: 5
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 4
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 11,
			columnNumber: 80
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 11,
		columnNumber: 9
	}, this);
}
var _jsxFileName$1 = "/root/app/code/src/components/articles/LatestArticles.tsx";
function LatestArticles({ articles }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "writing",
		className: "border-t border-border py-24 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Notes & Essays" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 8,
					columnNumber: 3
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "display-serif text-3xl md:text-5xl",
						children: "Latest Writing"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 8,
						columnNumber: 115
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/articles",
						className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase text-accent-dim hover:text-accent",
						children: ["See all articles ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 8,
							columnNumber: 332
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 8,
						columnNumber: 185
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 8,
					columnNumber: 46
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: articles.slice(0, 3).map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArticleCard, {
						article,
						compact: true
					}, article.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 9,
						columnNumber: 88
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 9,
					columnNumber: 3
				}, this),
				articles.length === 0 && /* @__PURE__ */ (void 0)("p", {
					className: "mt-10 text-muted",
					children: "No articles published yet."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 10,
					columnNumber: 27
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 81
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 9
	}, this);
}
var _jsxFileName = "/root/app/code/src/routes/index.tsx?tsr-split=component";
function Index() {
	const articles = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricStrip, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Work, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LatestArticles, { articles }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tools, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skills, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Faq, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
