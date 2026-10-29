import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SITE_URL } from "./articles.shared-DtbdIfsT.mjs";
import { r as listPublishedArticles } from "./articles.functions-CWdfKmly.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.index-Bia0hCnF.js
var $$splitComponentImporter = () => import("./articles.index-CbChwLHm.mjs");
var TITLE = "Articles — Williams Olayemi Martins";
var DESCRIPTION = "Essays and notes on brand identity, product design, web design and building small tools, by Williams Olayemi Martins.";
var Route = createFileRoute("/articles/")({
	loader: () => listPublishedArticles(),
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
