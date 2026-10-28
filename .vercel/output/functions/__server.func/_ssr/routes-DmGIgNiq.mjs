import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as listPublishedArticles } from "./articles.functions-CWdfKmly.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DmGIgNiq.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/components/portfolio/Faq.tsx";
var FAQS = [
	{
		q: "Who is Williams Olayemi Martins?",
		a: "Williams Olayemi Martins is a Nigerian brand & product designer based in Lagos. He works across brand identity, UI/UX, video production & motion design, and has built four browser-based micro-tools."
	},
	{
		q: "What services does Williams Olayemi Martins offer?",
		a: "Brand identity and logo design, web design, product design, video production and motion design, and creative direction for marketing campaigns."
	},
	{
		q: "Where is Williams Olayemi Martins based?",
		a: "Lagos, Nigeria. He works remotely with clients globally."
	},
	{
		q: "What tools has Williams built?",
		a: "Scrapely, Screenshot Studio, ImageSqueeze and Tryseeqr — four lightweight, browser-based micro-tools available online."
	},
	{
		q: "Does Williams work with international or remote clients?",
		a: "Yes. Williams is remote-first from Lagos and has shipped work for clients across Canada (Zaytrix Mgmt. & Tech Group, Zaytrix Modeste, Hola Contracting), the United States, and multiple African markets. The workflow is async-friendly, with clear check-ins across time zones."
	},
	{
		q: "What industries has Williams designed for?",
		a: "Fintech (Incash), real estate and proptech (Caretaker Pro, Getcrib), fashion and e-commerce (Zaytrix Modeste, Juliet Moses), Web3 and education (Moon Republic), legal and business services (Zamack Consults), construction and interiors (Frauwa), health (Mytherapist.ng) and consumer packaged goods (Vana, Rebound)."
	},
	{
		q: "Does Williams offer web design alongside branding?",
		a: "Yes. Williams builds tailored websites for brands using Webflow, Framer, Figma, and WordPress, and has shipped multiple websites. Design and build can stay in one hand when a project calls for it — no handoff friction between how something looks and how it ships."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "faq",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "FAQ" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "display-serif mt-6 text-3xl md:text-5xl max-w-2xl",
				children: [
					"Questions I get,",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "italic text-accent",
						children: "answered plainly."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-14 divide-y divide-border border-y border-border",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: Math.min(i * .03, .15),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "py-8 grid md:grid-cols-[1fr_1.4fr] gap-4 md:gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "display-serif text-xl md:text-[22px] leading-snug text-foreground",
							children: f.q
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[15px] leading-relaxed text-foreground/75 max-w-[62ch]",
							children: f.a
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 15
					}, this)
				}, f.q, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 5
	}, this);
}
var FAQ_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQS.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: {
			"@type": "Answer",
			text: f.a
		}
	}))
};
var TOOLS = [
	{
		name: "SeeQR",
		tagline: "Upload a photo and we'll read the QR for you.",
		description: "Upload a photo from your device media and we'll read the QR for you. Everything happens on your device — no uploads, no accounts, no tracking.",
		tags: [
			"QR Code",
			"Offline",
			"Camera API",
			"Mobile-first",
			"React",
			"Vercel"
		],
		url: "https://tryseeqr.vercel.app/",
		status: "Live",
		image: "/seeqr.png"
	},
	{
		name: "Scrapely",
		tagline: "Turn any webpage into clean JSON.",
		description: "Paste a URL or raw HTML, describe what you need, and Scrapely uses AI to extract structured JSON instantly. Built for developers and researchers tired of writing custom scrapers.",
		tags: [
			"AI",
			"Web Scraping",
			"JSON",
			"React",
			"Vercel"
		],
		url: "https://scrapely-ai.vercel.app/",
		status: "Live",
		image: {
			version: 1,
			asset_id: "7645d4d0-6d90-48b7-bfd0-b522e12e833e",
			project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
			url: "/__l5e/assets-v1/7645d4d0-6d90-48b7-bfd0-b522e12e833e/tool-scrapely.jpg",
			r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/7645d4d0-6d90-48b7-bfd0-b522e12e833e/tool-scrapely.jpg",
			original_filename: "tool-scrapely.jpg",
			size: 175883,
			content_type: "image/jpeg",
			created_at: "2026-06-21T09:24:54Z"
		}.url
	},
	{
		name: "ImageSqueeze",
		tagline: "Compress images. Keep quality.",
		description: "A fully browser-based image compressor — nothing leaves your device. JPEG, PNG and WebP with adjustable quality controls.",
		tags: [
			"Client-side",
			"Privacy-first",
			"WebP",
			"React",
			"Vercel"
		],
		url: "https://image-squeeze-lite.vercel.app/",
		status: "Live",
		image: {
			version: 1,
			asset_id: "82b27b98-67f8-45fb-97b0-25a5b199b576",
			project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
			url: "/__l5e/assets-v1/82b27b98-67f8-45fb-97b0-25a5b199b576/tool-imagesqueeze.jpg",
			r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/82b27b98-67f8-45fb-97b0-25a5b199b576/tool-imagesqueeze.jpg",
			original_filename: "tool-imagesqueeze.jpg",
			size: 195265,
			content_type: "image/jpeg",
			created_at: "2026-06-21T09:24:54Z"
		}.url
	},
	{
		name: "Screenshot Studio",
		tagline: "See your site on any screen.",
		description: "Paste a URL, pick a device, and get a pixel-perfect screenshot wrapped in a device mockup. Built for designers who need quick visual checks without a full testing suite.",
		tags: [
			"Puppeteer",
			"Node.js",
			"Railway",
			"Mockup",
			"React"
		],
		url: "https://screen-shot-studio.vercel.app/",
		status: "Live",
		image: {
			version: 1,
			asset_id: "2760ea3b-cff9-4d99-a8ab-7582fc0a8bdb",
			project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
			url: "/__l5e/assets-v1/2760ea3b-cff9-4d99-a8ab-7582fc0a8bdb/tool-screenshot.jpg",
			r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/2760ea3b-cff9-4d99-a8ab-7582fc0a8bdb/tool-screenshot.jpg",
			original_filename: "tool-screenshot.jpg",
			size: 133260,
			content_type: "image/jpeg",
			created_at: "2026-06-21T09:24:53Z"
		}.url
	}
];
var $$splitComponentImporter = () => import("./routes-DC8s6Cu5.mjs");
var SITE_URL = "https://willomarty.net.ng";
var PERSON_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Williams Olayemi Martins",
	"alternateName": "Willomarty",
	"url": "https://willomarty.net.ng",
	"email": "willomarty01@gmail.com",
	"telephone": "+2347026787353",
	"jobTitle": "Brand Designer, Product Designer & Web Designer",
	"description": "Lagos-based brand and web designer specialising in visual identity systems, Webflow websites, UI/UX, and frontend development. Available for remote work with Nigerian and international clients.",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Lagos",
		"addressCountry": "NG"
	},
	"sameAs": [
		"https://www.behance.net/willomarty",
		"https://github.com/yeminimal",
		"https://x.com/willomarty"
	],
	"knowsAbout": [
		"Brand Identity Design",
		"Logo Design",
		"Web Design",
		"Webflow",
		"Framer",
		"Figma",
		"WordPress",
		"UI/UX Design",
		"Product Design",
		"Frontend Development",
		"React",
		"TypeScript",
		"Tailwind CSS",
		"Video Production",
		"Motion Graphics",
		"Creative Direction"
	],
	"hasOccupation": {
		"@type": "Occupation",
		"name": "Brand, Product, and Web Designer",
		"occupationLocation": {
			"@type": "City",
			"name": "Lagos, Nigeria"
		},
		"skills": "Brand Identity, Webflow, Framer, Figma, WordPress, React, TypeScript, UI/UX Design, Video Production"
	}
};
var WEBSITE_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Williams Olayemi Martins — Willomarty",
	"url": "https://willomarty.net.ng",
	"description": "Portfolio of Williams Olayemi Martins — brand designer, product designer, web designer, based in Lagos, Nigeria.",
	"author": {
		"@type": "Person",
		"name": "Williams Olayemi Martins"
	},
	"inLanguage": "en"
};
var TOOLS_SCHEMA = {
	"@context": "https://schema.org",
	"@graph": TOOLS.map((t) => ({
		"@type": "SoftwareApplication",
		name: t.name,
		description: t.description,
		url: t.url,
		applicationCategory: "WebApplication",
		operatingSystem: "Web",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD"
		},
		author: { "@id": `${SITE_URL}/#person` }
	}))
};
var Route = createFileRoute("/")({
	loader: () => listPublishedArticles(),
	head: () => ({
		meta: [
			{ title: "Williams Olayemi Martins — Brand, Product & Web Designer" },
			{
				name: "description",
				content: "Williams Olayemi Martins — Lagos-based brand, product & web designer. Visual identities, Webflow sites, UI/UX, and frontend development for Nigerian and global clients."
			},
			{
				name: "keywords",
				content: "brand designer Lagos, brand designer Nigeria, product designer Nigeria, web designer Nigeria, Webflow designer Nigeria, UI UX designer Lagos, frontend developer Lagos, visual identity designer, logo designer Nigeria, creative director Lagos, Williams Olayemi Martins, Willomarty"
			},
			{
				name: "author",
				content: "Williams Olayemi Martins"
			},
			{
				property: "og:title",
				content: "Williams Olayemi Martins — Brand, Product & Web Designer"
			},
			{
				property: "og:description",
				content: "Portfolio of Williams Olayemi Martins — brand designer, product designer, web designer, based in Lagos, Nigeria."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_NG"
			},
			{
				property: "og:url",
				content: SITE_URL
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Williams Olayemi Martins — Brand, Product & Web Designer"
			},
			{
				name: "twitter:description",
				content: "Portfolio of Williams Olayemi Martins — brand designer, product designer, web designer, based in Lagos, Nigeria."
			},
			{
				name: "metadataBase",
				content: "https://willomarty.net.ng/"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(PERSON_SCHEMA)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(WEBSITE_SCHEMA)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(FAQ_SCHEMA)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(TOOLS_SCHEMA)
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as n, TOOLS as r, Faq as t };
