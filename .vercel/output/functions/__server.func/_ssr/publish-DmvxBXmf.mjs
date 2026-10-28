import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getPublishGateState } from "./articles.functions-CWdfKmly.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publish-DmvxBXmf.js
var $$splitComponentImporter = () => import("./publish-Bao6YJ3X.mjs");
var Route = createFileRoute("/publish")({
	loader: () => getPublishGateState(),
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}, { title: "Publish article" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
