import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as absoluteUrl, t as SITE_URL } from "./articles.shared-DtbdIfsT.mjs";
import { n as getPublishedArticle, r as listPublishedArticles } from "./articles.functions-CWdfKmly.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-CqdPziNa.js
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
var $$splitNotFoundComponentImporter = () => import("./articles._slug-DuenTqmf.mjs");
var $$splitComponentImporter = () => import("./articles._slug-D3JkAiSi.mjs");
var Route = createFileRoute("/articles/$slug")({
	loader: async ({ params }) => {
		const article = await getPublishedArticle({ data: { slug: params.slug } });
		if (!article) throw notFound();
		const articles = await listPublishedArticles();
		return {
			...article,
			related: articles.filter((item) => item.id !== article.id).sort((a, b) => Number(b.tags.some((tag) => article.tags.includes(tag))) - Number(a.tags.some((tag) => article.tags.includes(tag)))).slice(0, 3)
		};
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const url = `${SITE_URL}/articles/${params.slug}`;
		const image = absoluteUrl(loaderData.cover_image_url);
		return {
			meta: [
				{ title: `${loaderData.title} — Williams Olayemi Martins` },
				{
					name: "description",
					content: loaderData.meta_description
				},
				{
					property: "og:title",
					content: loaderData.title
				},
				{
					property: "og:description",
					content: loaderData.meta_description
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
					content: loaderData.title
				},
				{
					name: "twitter:description",
					content: loaderData.meta_description
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
					headline: loaderData.title,
					description: loaderData.meta_description,
					image: image || void 0,
					datePublished: loaderData.published_at,
					dateModified: loaderData.updated_at,
					mainEntityOfPage: url,
					keywords: loaderData.tags.join(", ") || void 0,
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
