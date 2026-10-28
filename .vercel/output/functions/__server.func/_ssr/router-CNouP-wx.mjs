import { o as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as absoluteUrl, t as SITE_URL$2 } from "./articles.shared-DtbdIfsT.mjs";
import { n as listPublishedArticles } from "./articles.functions-BBI7SurF.mjs";
import { n as portrait_webp_asset_default, t as Route$9 } from "./articles._slug-DNFdiH84.mjs";
import { t as Route$10 } from "./articles.index-7KXPjAeM.mjs";
import { t as reportLovableError } from "./lovable-error-reporting-4GCzfVkY.mjs";
import { n as Route$11 } from "./routes-rcpteAE-.mjs";
import { t as Route$12 } from "./work._slug-Bp5u52Kt.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CNouP-wx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-CyYZd3Ye.css";
var _jsxFileName = "/root/app/code/src/routes/__root.tsx";
var SITE_URL$1 = "https://willomarty.net.ng";
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
var Route$8 = createRootRouteWithContext()({
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
				content: SITE_URL$1
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
	const { queryClient } = Route$8.useRouteContext();
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
var $$splitComponentImporter$4 = () => import("./about-CzKM3wQ8.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Williams Olayemi Martins" },
			{
				name: "description",
				content: "Meet Williams Olayemi Martins, a Lagos-based brand and product designer. Discover his background, design philosophy and creative approach."
			},
			{
				property: "og:title",
				content: "About Williams Olayemi Martins"
			},
			{
				property: "og:description",
				content: "Meet Williams Olayemi Martins, a Lagos-based brand and product designer. Discover his background, design philosophy and creative approach."
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./analytics-BLmnRHv4.mjs");
var Route$6 = createFileRoute("/analytics")({
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
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
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
var Route$5 = createFileRoute("/articles-sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL$2}/articles</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${(await listPublishedArticles()).map((a) => {
		const image = absoluteUrl(a.cover_image_url);
		return `  <url>
    <loc>${SITE_URL$2}/articles/${escapeXml(a.slug)}</loc>
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
var $$splitComponentImporter$2 = () => import("./contact-Egu8_sBx.mjs");
var Route$4 = createFileRoute("/contact")({
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
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./education-vYILPw9T.mjs");
var Route$3 = createFileRoute("/education")({
	head: () => ({
		meta: [
			{ title: "Education & Certifications — Williams Olayemi Martins" },
			{
				name: "description",
				content: "Academic background, design education, development training and professional certifications of Williams Olayemi Martins."
			},
			{
				property: "og:title",
				content: "Education & Certifications — Williams Olayemi Martins"
			},
			{
				property: "og:description",
				content: "Academic background, design education, development training and professional certifications of Williams Olayemi Martins."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://willomarty.net.ng/education"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://willomarty.net.ng/education"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var MAX_BYTES = 8 * 1024 * 1024;
var ALLOWED = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/avif",
	"image/gif"
];
var Route$2 = createFileRoute("/api/article-cover-upload")({ server: { handlers: { POST: async ({ request }) => {
	const { isPublishUnlocked } = await import("./articles.server-Q4MjEcVg.mjs");
	if (!await isPublishUnlocked()) return Response.json({ error: "Locked" }, { status: 401 });
	const file = (await request.formData()).get("file");
	if (!(file instanceof File)) return Response.json({ error: "No file received." }, { status: 400 });
	if (!ALLOWED.includes(file.type)) return Response.json({ error: "Unsupported format. Use JPG, PNG, WebP, AVIF or GIF." }, { status: 400 });
	if (file.size > MAX_BYTES) return Response.json({ error: "Image is larger than 8MB." }, { status: 400 });
	const ext = (file.name.split(".").pop() ?? "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
	const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.storage.from("article-covers").upload(path, await file.arrayBuffer(), {
		contentType: file.type,
		upsert: false
	});
	if (error) {
		console.error("cover upload", error);
		return Response.json({ error: "Upload failed. Try again." }, { status: 500 });
	}
	return Response.json({ url: `/api/public/article-cover/${path}` });
} } } });
var $$splitComponentImporter = () => import("./work.index-CAZ6Xiq-.mjs");
var SITE_URL = "https://willomarty.net.ng";
var Route$1 = createFileRoute("/work/")({
	head: () => ({
		meta: [
			{ title: "Selected Work — Williams Olayemi Martins" },
			{
				name: "description",
				content: "The full archive of client and self-initiated projects by Williams Olayemi Martins — brand identity, UI/UX, marketing design and web across fashion, fintech, real estate and Web3."
			},
			{
				property: "og:title",
				content: "Selected Work — Williams Olayemi Martins"
			},
			{
				property: "og:description",
				content: "Full archive of brand, product and marketing work — featured case studies plus every other client project."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/work`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Selected Work — Williams Olayemi Martins"
			},
			{
				name: "twitter:description",
				content: "Full archive of brand, product and marketing work by Williams Olayemi Martins."
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/work`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/** Serves article cover images from private storage at a stable, shareable URL. */
var Route = createFileRoute("/api/public/article-cover/$")({ server: { handlers: { GET: async ({ params }) => {
	const path = params._splat ?? "";
	if (!path || path.includes("..")) return new Response("Not found", { status: 404 });
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data, error } = await supabaseAdmin.storage.from("article-covers").download(path);
	if (error || !data) return new Response("Not found", { status: 404 });
	return new Response(await data.arrayBuffer(), { headers: {
		"content-type": data.type || "image/jpeg",
		"cache-control": "public, max-age=31536000, immutable"
	} });
} } } });
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var AnalyticsRoute = Route$6.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$8
});
var ArticlesSitemapDotxmlRoute = Route$5.update({
	id: "/articles-sitemap.xml",
	path: "/articles-sitemap.xml",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var EducationRoute = Route$3.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => Route$8
});
var ApiArticleCoverUploadRoute = Route$2.update({
	id: "/api/article-cover-upload",
	path: "/api/article-cover-upload",
	getParentRoute: () => Route$8
});
var ArticlesIndexRoute = Route$10.update({
	id: "/articles/",
	path: "/articles/",
	getParentRoute: () => Route$8
});
var ArticlesSlugRoute = Route$9.update({
	id: "/articles/$slug",
	path: "/articles/$slug",
	getParentRoute: () => Route$8
});
var WorkIndexRoute = Route$1.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AnalyticsRoute,
	ArticlesSitemapDotxmlRoute,
	ContactRoute,
	EducationRoute,
	ApiArticleCoverUploadRoute,
	ArticlesSlugRoute,
	WorkSlugRoute: Route$12.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$8
	}),
	ArticlesIndexRoute,
	WorkIndexRoute,
	ApiPublicArticleCoverSplatRoute: Route.update({
		id: "/api/public/article-cover/$",
		path: "/api/public/article-cover/$",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
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
