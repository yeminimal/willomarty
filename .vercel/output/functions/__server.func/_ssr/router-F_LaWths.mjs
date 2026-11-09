import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { G as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as SITE_URL$3, r as absoluteUrl, t as PUBLISHED_ARTICLES } from "./articles-Dkrj6I_s.mjs";
import { n as portrait_webp_asset_default, t as Route$8 } from "./articles._slug-D3P4vOjL.mjs";
import { t as Route$9 } from "./articles.index-BPCjc5_f.mjs";
import { t as TOOLS } from "./tools-BAgV7oML.mjs";
import { t as reportLovableError } from "./lovable-error-reporting-4GCzfVkY.mjs";
import { t as Route$10 } from "./work.index-BNt06I44.mjs";
import { t as Route$11 } from "./work._slug-5AYeUYlB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-F_LaWths.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-DvxOjD3Z.css";
var _jsxFileName = "/root/app/code/src/routes/__root.tsx";
var SITE_URL$2 = "https://willomarty.net.ng";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Williams Olayemi Martins — Brand, Product & Web Designer" },
			{
				name: "description",
				content: "Portfolio of Williams Olayemi Martins — Nigerian brand, product & web designer shipping identities, digital products and web tools."
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
				content: "Brand design, product design, web design, video, motion design, and frontend development."
			},
			{
				property: "og:type",
				content: "website"
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
				content: "Brand design, product design, web design, video, motion design, and frontend development."
			},
			{
				property: "og:site_name",
				content: "Williams Olayemi Martins"
			},
			{
				name: "metadataBase",
				content: SITE_URL$2
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				type: "image/webp",
				href: portrait_webp_asset_default.url
			},
			{
				rel: "apple-touch-icon",
				href: portrait_webp_asset_default.url
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		],
		scripts: [
			{
				async: true,
				src: "https://www.googletagmanager.com/gtag/js?id=G-XXLVQ61EJ9"
			},
			{ children: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-XXLVQ61EJ9');" },
			...[]
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
var themeInitScript = `(()=>{try{var t=localStorage.getItem('wom-theme');if(!t){t='light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { dangerouslySetInnerHTML: { __html: themeInitScript } }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 154,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 152,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
			id: "top",
			children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 158,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 151,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Analytics, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 169,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 171,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 168,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$4 = () => import("./routes-DDvFjuo1.mjs");
var SITE_URL$1 = "https://willomarty.net.ng";
var PERSON_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": `${SITE_URL$1}/#person`,
	"name": "Williams Olayemi Martins",
	"alternateName": "Willomarty",
	"url": SITE_URL$1,
	"image": `${SITE_URL$1}${portrait_webp_asset_default.url}`,
	"email": "willomarty01@gmail.com",
	"telephone": "+2347026787353",
	"jobTitle": "Brand, Product & Web Designer",
	"description": "Lagos-based brand, product and web designer with over seven years of experience creating visual identities, digital products and tailored web experiences.",
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
		"@id": `${SITE_URL$1}/#person`
	},
	"inLanguage": "en"
};
var Route$6 = createFileRoute("/")({
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
				content: SITE_URL$1
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
			href: SITE_URL$1
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(PERSON_SCHEMA)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(WEBSITE_SCHEMA)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-CO4JPch_.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Williams Olayemi Martins" },
			{
				name: "description",
				content: "Meet Williams Olayemi Martins, a Lagos-based brand, web and product designer. Explore his capabilities, skills, education and certifications."
			},
			{
				property: "og:title",
				content: "About Williams Olayemi Martins"
			},
			{
				property: "og:description",
				content: "Meet Williams Olayemi Martins, a Lagos-based brand, web and product designer. Explore his capabilities, skills, education and certifications."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://willomarty.net.ng/about"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://willomarty.net.ng/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./analytics-Cor79ahC.mjs");
var Route$4 = createFileRoute("/analytics")({
	head: () => ({ meta: [
		{ title: "Analytics — Williams Olayemi Martins" },
		{
			name: "description",
			content: "Public, privacy-first Plausible analytics dashboard for this portfolio. Cookieless, no personal data collected."
		},
		{
			property: "og:title",
			content: "Analytics — Williams Olayemi Martins"
		},
		{
			property: "og:description",
			content: "Privacy-first portfolio traffic analytics."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
function escapeXml(value) {
	return value.replace(/[<>&'"]/g, (c) => ({
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"'": "&apos;",
		"\"": "&quot;"
	})[c] ?? c);
}
var Route$3 = createFileRoute("/articles-sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL$3}/articles</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${PUBLISHED_ARTICLES.map((a) => {
		const image = absoluteUrl(a.cover_image_url);
		return `  <url>
    <loc>${SITE_URL$3}/articles/${escapeXml(a.slug)}</loc>
    <lastmod>${(a.updated_at ?? a.published_at ?? "").slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>${image ? `\n    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>` : ""}
  </url>`;
	}).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"content-type": "application/xml; charset=utf-8",
		"cache-control": "public, max-age=600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./contact-CwCFerhy.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Williams Olayemi Martins" },
			{
				name: "description",
				content: "Contact Williams Olayemi Martins for brand design, product design, web development and creative collaborations, in Nigeria and worldwide."
			},
			{
				property: "og:title",
				content: "Contact Williams Olayemi Martins"
			},
			{
				property: "og:description",
				content: "Contact Williams Olayemi Martins for brand design, product design, web development and creative collaborations, in Nigeria and worldwide."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://willomarty.net.ng/contact"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://willomarty.net.ng/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$1 = createFileRoute("/education")({ beforeLoad: () => {
	throw redirect({ href: "/about#education" });
} });
var $$splitComponentImporter = () => import("./projects-COkvJCFe.mjs");
var SITE_URL = "https://willomarty.net.ng";
var TOOLS_SCHEMA = {
	"@context": "https://schema.org",
	"@graph": TOOLS.map((tool) => ({
		"@type": "SoftwareApplication",
		name: tool.name,
		description: tool.description,
		url: tool.url,
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
var Route = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Personal Projects — Williams Olayemi Martins" },
			{
				name: "description",
				content: "Browser-based tools and personal projects built by Williams Olayemi Martins to solve everyday problems."
			},
			{
				property: "og:title",
				content: "Personal Projects — Williams Olayemi Martins"
			},
			{
				property: "og:description",
				content: "Browser-based tools and personal projects built by Williams Olayemi Martins to solve everyday problems."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/projects`
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/projects`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(TOOLS_SCHEMA)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var AnalyticsRoute = Route$4.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$7
});
var ArticlesSitemapDotxmlRoute = Route$3.update({
	id: "/articles-sitemap.xml",
	path: "/articles-sitemap.xml",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var EducationRoute = Route$1.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => Route$7
});
var ProjectsRoute = Route.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$7
});
var ArticlesIndexRoute = Route$9.update({
	id: "/articles/",
	path: "/articles/",
	getParentRoute: () => Route$7
});
var ArticlesSlugRoute = Route$8.update({
	id: "/articles/$slug",
	path: "/articles/$slug",
	getParentRoute: () => Route$7
});
var WorkIndexRoute = Route$10.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AnalyticsRoute,
	ArticlesSitemapDotxmlRoute,
	ContactRoute,
	EducationRoute,
	ProjectsRoute,
	ArticlesSlugRoute,
	WorkSlugRoute: Route$11.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$7
	}),
	ArticlesIndexRoute,
	WorkIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
