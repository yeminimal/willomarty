import { J as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SITE_URL, r as absoluteUrl, t as PUBLISHED_ARTICLES } from "./articles-Dkrj6I_s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-D3P4vOjL.js
var portrait_webp_asset_default = {
	version: 1,
	asset_id: "e2e28b92-b762-4b20-94eb-e994c6f516b5",
	project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
	url: "/__l5e/assets-v1/e2e28b92-b762-4b20-94eb-e994c6f516b5/portrait.webp",
	r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/e2e28b92-b762-4b20-94eb-e994c6f516b5/portrait.webp",
	original_filename: "portrait.webp",
	size: 182618,
	content_type: "image/webp",
	created_at: "2026-06-21T08:05:19Z"
};
var $$splitNotFoundComponentImporter = () => import("./articles._slug-DPb1uSP1.mjs");
var $$splitComponentImporter = () => import("./articles._slug-BSXdCM7e.mjs");
var Route = createFileRoute("/articles/$slug")({
	beforeLoad: ({ params }) => {
		if (!PUBLISHED_ARTICLES.some((article) => article.slug === params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const article = PUBLISHED_ARTICLES.find((a) => a.slug === params.slug);
		if (!article) return { meta: [{ title: "Article not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const url = `${SITE_URL}/articles/${params.slug}`;
		const image = absoluteUrl(article.cover_image_url);
		return {
			meta: [
				{ title: article.seo_title ?? `${article.title} — Williams Olayemi Martins` },
				{
					name: "description",
					content: article.meta_description
				},
				{
					property: "og:title",
					content: article.seo_title ?? article.title
				},
				{
					property: "og:description",
					content: article.meta_description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: url
				},
				...image ? [{
					property: "og:image",
					content: image
				}, {
					name: "twitter:image",
					content: image
				}] : [],
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: article.seo_title ?? article.title
				},
				{
					name: "twitter:description",
					content: article.meta_description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: article.heading ?? article.title,
					description: article.meta_description,
					image: image || void 0,
					datePublished: article.published_at,
					dateModified: article.updated_at,
					mainEntityOfPage: url,
					keywords: article.tags.join(", ") || void 0,
					author: {
						"@type": "Person",
						name: "Williams Olayemi Martins",
						url: SITE_URL,
						sameAs: ["https://www.behance.net/willomarty", "https://github.com/yeminimal"]
					},
					publisher: {
						"@type": "Person",
						name: "Williams Olayemi Martins",
						url: SITE_URL
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { portrait_webp_asset_default as n, Route as t };
