import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SITE_URL } from "./articles-Dkrj6I_s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.index-BPCjc5_f.js
var $$splitComponentImporter = () => import("./articles.index-CP9bvNM-.mjs");
var TITLE = "Articles — Williams Olayemi Martins";
var DESCRIPTION = "Essays and notes on brand identity, product design, web design and building small tools, by Williams Olayemi Martins.";
var Route = createFileRoute("/articles/")({
	validateSearch: (search) => ({
		tag: typeof search.tag === "string" && search.tag ? search.tag : void 0,
		page: Number(search.page) || void 0
	}),
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/articles`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: TITLE
			},
			{
				name: "twitter:description",
				content: DESCRIPTION
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/articles`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
