import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { M as ArrowRight, a as Sparkle, j as ArrowUpRight, p as Minus, s as Plus } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, t as Button } from "./Footer-WEbJGU8w.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { t as PUBLISHED_ARTICLES } from "./articles-B_vr8T92.mjs";
import { t as ArticleCard } from "./ArticleCard-CqdCyWn9.mjs";
import { t as FEATURED_WORK } from "./work-cQvcswij.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DG_4XUiF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$6 = "/root/app/code/src/components/portfolio/Hero.tsx";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "hero",
		className: "project-hero",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex min-h-[560px] max-w-[1100px] flex-col justify-center px-6 pb-16 pt-32 md:min-h-[640px] md:px-10 md:pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-mono text-[11px] uppercase text-hero-accent",
					children: "Williams Olayemi Martins / Brand, Web & Product Designer"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-serif hero-headline mt-8 max-w-[960px]",
					children: "I design brands & products"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-7 max-w-md text-base leading-relaxed text-hero-foreground/80",
					children: [
						"I help brands tell their story, curate their journey, and define their identity.",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 11,
							columnNumber: 168
						}, this),
						"Lagos, Nigeria."
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
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
								fileName: _jsxFileName$6,
								lineNumber: 13,
								columnNumber: 165
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 13,
							columnNumber: 127
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 13,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 12,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/root/app/code/src/components/portfolio/MetricStrip.tsx";
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
						fileName: _jsxFileName$5,
						lineNumber: 30,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkle, {
						size: 14,
						className: "text-accent-dim/50",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 39,
						columnNumber: 13
					}, this)]
				}, i, true, {
					fileName: _jsxFileName$5,
					lineNumber: 25,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent" }, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent" }, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 46,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/root/app/code/src/components/portfolio/FeaturedWorkCard.tsx";
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
					fileName: _jsxFileName$4,
					lineNumber: 16,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "display-serif text-2xl text-foreground transition-colors group-hover:text-accent",
					children: w.client
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 19,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
					size: 18,
					className: "mt-1 shrink-0 text-accent"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 20,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: OUTCOMES[w.slug] ?? w.outcomeLine
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 22,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/root/app/code/src/components/portfolio/Work.tsx";
function Work() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "work",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Selected Work" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 13,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "display-serif mt-6 text-3xl md:text-5xl max-w-2xl",
						children: ["Brands, products, and stories ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "italic text-accent",
							children: "built with intent."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 15,
							columnNumber: 43
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 14,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
						children: "Selected identities and digital experiences, from the first idea to the final detail."
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 17,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-14 grid md:grid-cols-2 gap-8",
					children: FEATURED_WORK.map((w, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: Math.min(i * .03, .2),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedWorkCard, { w }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 25,
							columnNumber: 15
						}, this)
					}, w.slug, false, {
						fileName: _jsxFileName$3,
						lineNumber: 24,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 22,
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
								fileName: _jsxFileName$3,
								lineNumber: 37,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 32,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 31,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 30,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/root/app/code/src/components/portfolio/Faq.tsx";
var FAQ_LINK_CLASS = "text-accent-dim underline decoration-border underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
var FAQS = [
	{
		q: "Who is Williams Olayemi Martins?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Williams Olayemi Martins is a Lagos-based brand, product, and web designer with over seven years of experience creating visual identities, digital products, and tailored web experiences." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 14,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"His work combines visual design, user experience, and technology to help businesses communicate clearly, build stronger brands, and create meaningful digital experiences. Learn more ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/about",
				className: FAQ_LINK_CLASS,
				children: "about Williams"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 193
			}, void 0),
			" and his approach."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 17,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 13,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "What design services does Williams offer?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Williams offers brand identity design, web design and development, product design (UI/UX), motion design, video production, and creative direction." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 27,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"His primary disciplines are brand identity, web, and product design. Explore his ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work/$slug",
				params: { slug: "frauwa" },
				className: FAQ_LINK_CLASS,
				children: "brand identity project for Frauwa"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 31,
				columnNumber: 92
			}, void 0),
			" and ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work/$slug",
				params: { slug: "zamack-consults" },
				className: FAQ_LINK_CLASS,
				children: "work for Zamack Consults"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 31,
				columnNumber: 215
			}, void 0),
			"."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 30,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 26,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "Does Williams design and develop websites?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Yes. Williams designs and develops landing pages, corporate websites, portfolios, and marketing websites for startups, businesses, and established brands." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 40,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"He works with Webflow, Framer, and WordPress, combining responsive design, usability, performance, and SEO considerations. ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work/$slug",
				params: { slug: "webflow-development" },
				className: FAQ_LINK_CLASS,
				children: "View a selected website project"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 134
			}, void 0),
			"."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 43,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 39,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "Does Williams work on digital products and applications?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Yes. Williams works on digital product experiences, including websites, web applications, and mobile interfaces." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 53,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"His product design process involves understanding user needs, mapping user journeys, creating wireframes, designing interfaces, and developing interactive prototypes. His portfolio includes fintech and real-estate product experiences, including ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work/$slug",
				params: { slug: "incash" },
				className: FAQ_LINK_CLASS,
				children: "product design for Incash"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 57,
				columnNumber: 256
			}, void 0),
			"."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 56,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 52,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "What industries and businesses does Williams work with?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Williams has worked across fintech, technology, real estate, healthcare, education, fashion, construction, professional services, and e-commerce." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 66,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"Selected projects include ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work/$slug",
				params: { slug: "incash" },
				className: FAQ_LINK_CLASS,
				children: "Incash"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 70,
				columnNumber: 37
			}, void 0),
			", ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work/$slug",
				params: { slug: "webflow-development" },
				className: FAQ_LINK_CLASS,
				children: "YDPay"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 70,
				columnNumber: 130
			}, void 0),
			", Moon Republic, Zamack Consults, Getcrib, MyTherapist.ng, and Zaytrix. Explore the ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work",
				className: FAQ_LINK_CLASS,
				children: "selected work archive"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 70,
				columnNumber: 317
			}, void 0),
			" for more. Each project is shaped around its audience, business goals, and specific challenges."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 69,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 65,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "Does Williams work with international clients?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Based in Lagos, Nigeria, Williams is available for remote collaborations with businesses, startups, and creative teams." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 79,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"His portfolio includes work for businesses in Nigeria and Canada. Explore the ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/work",
				className: FAQ_LINK_CLASS,
				children: "selected work archive"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 83,
				columnNumber: 89
			}, void 0),
			" to see examples. Contact him to discuss your project, location, and preferred communication workflow."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 82,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 78,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "What is it like working with Williams?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Every project begins with understanding the problem, the people it is intended for, and what the business hopes to achieve." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 92,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "From discovery and planning to design, feedback, and delivery, Williams keeps clients involved through a collaborative process without making the work unnecessarily complicated. The goal is to create thoughtful, functional solutions for both the business and its audience." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 95,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 91,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "How can I start a project with Williams?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"Reach out through the ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/contact",
				className: FAQ_LINK_CLASS,
				children: "contact page"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 106,
				columnNumber: 33
			}, void 0),
			" with a brief description of your project, what you hope to achieve, and any useful references or requirements."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 105,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Williams will review your enquiry and discuss the project scope, expectations, and next steps. Whether you are building a brand, redesigning a website, or developing a digital product, the first step is a conversation." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 108,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 104,
			columnNumber: 7
		}, void 0)
	},
	{
		q: "What digital tools has Williams built?",
		a: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Williams also develops independent browser-based tools designed to solve practical problems." }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 118,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"His projects include SeeQR, an offline QR code scanner; ImageSqueeze, a browser-based image compressor; Scrapely, an AI-powered web data extraction tool; and Screenshot Studio, a website screenshot and device mockup tool. ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/projects",
				className: FAQ_LINK_CLASS,
				children: "Discover Williams' independent digital tools"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 122,
				columnNumber: 233
			}, void 0),
			"."
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 121,
			columnNumber: 9
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 117,
			columnNumber: 7
		}, void 0)
	}
];
function Faq() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "faq",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "FAQ" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 136,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "display-serif mt-6 text-3xl md:text-5xl max-w-2xl",
					children: [
						"Questions I get,",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 139,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "italic text-accent",
							children: "answered plainly."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 140,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 137,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 135,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-14 border-y border-border",
					children: FAQS.map((faq, index) => {
						const isOpen = openIndex === index;
						const answerId = `faq-answer-${index + 1}`;
						const questionId = `faq-question-${index + 1}`;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
							delay: Math.min(index * .03, .15),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "border-b border-border last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									id: questionId,
									type: "button",
									"aria-expanded": isOpen,
									"aria-controls": answerId,
									onClick: () => setOpenIndex(isOpen ? null : index),
									className: "group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:py-7",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "display-serif text-xl leading-snug text-foreground md:text-[22px]",
										children: faq.q
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 161,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										"aria-hidden": "true",
										className: "shrink-0 text-accent-dim transition-colors group-hover:text-accent",
										children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {
											size: 17,
											strokeWidth: 1.5
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 165,
											columnNumber: 35
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {
											size: 17,
											strokeWidth: 1.5
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 165,
											columnNumber: 75
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 164,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 153,
									columnNumber: 21
								}, this) }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 152,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									id: answerId,
									role: "region",
									"aria-labelledby": questionId,
									"aria-hidden": !isOpen,
									inert: !isOpen,
									className: `grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-h-0 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "max-w-[68ch] space-y-4 pb-7 text-[15px] leading-[1.8] text-foreground/75",
											children: faq.a
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 178,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 177,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 169,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 151,
								columnNumber: 17
							}, this)
						}, faq.q, false, {
							fileName: _jsxFileName$2,
							lineNumber: 150,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 144,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-20 border-t border-border pt-10 md:mt-24 md:pt-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Start a project" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 191,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "display-serif mt-5 text-3xl md:text-4xl",
							children: "Have something in mind?"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 192,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-lg text-foreground/85",
							children: "Let's turn your next idea into something meaningful."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 193,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 max-w-[62ch] text-[15px] leading-relaxed text-foreground/70",
							children: "Whether it's a brand, website, or digital product, I'd love to hear what you're working on."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 194,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "group mt-7 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim transition-colors hover:border-accent-dim/70 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
							children: ["Start a conversation ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
								size: 13,
								className: "transition-transform group-hover:translate-x-1"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 201,
								columnNumber: 36
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 197,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 190,
					columnNumber: 11
				}, this) }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 189,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 134,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 133,
		columnNumber: 5
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
	const articles = PUBLISHED_ARTICLES;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricStrip, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Work, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LatestArticles, { articles }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Faq, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
