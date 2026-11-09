import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-BNt06I44.js
var $$splitComponentImporter = () => import("./work.index-DZqqG2F5.mjs");
var SITE_URL = "https://willomarty.net.ng";
var Route = createFileRoute("/work/")({
	validateSearch: (search) => ({
		tag: typeof search.tag === "string" && search.tag ? search.tag : void 0,
		page: Number(search.page) || void 0
	}),
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
//#endregion
export { Route as t };
