import { o as __toESM } from "../_runtime.mjs";
import { r as useSession$1 } from "./request-response-5koI5ADI.mjs";
import { t as require_sanitize_html } from "../_libs/sanitize-html.mjs";
import { createHash, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.server-Q4MjEcVg.js
var import_sanitize_html = /* @__PURE__ */ __toESM(require_sanitize_html());
var PUBLISH_SESSION_NAME = "wom-publish";
function getPublishSessionConfig() {
	const password = process.env["PUBLISH_SESSION_SECRET"];
	if (!password) throw new Error("PUBLISH_SESSION_SECRET is not set");
	return {
		password,
		name: PUBLISH_SESSION_NAME,
		maxAge: 3600 * 8,
		cookie: {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/"
		}
	};
}
async function isPublishUnlocked() {
	return (await useSession$1(getPublishSessionConfig())).data.unlocked === true;
}
async function requirePublishUnlocked() {
	if (!await isPublishUnlocked()) throw new Error("Locked");
}
function passphraseMatches(input, expected) {
	return timingSafeEqual(createHash("sha256").update(input, "utf8").digest(), createHash("sha256").update(expected, "utf8").digest());
}
/** Defence in depth: applied both on save and on read/render. */
function sanitizeArticleHtml(html) {
	return (0, import_sanitize_html.default)(html, {
		allowedTags: [
			"p",
			"br",
			"strong",
			"b",
			"em",
			"i",
			"u",
			"s",
			"blockquote",
			"a",
			"ul",
			"ol",
			"li",
			"h2",
			"h3",
			"h4",
			"code",
			"pre",
			"hr",
			"img",
			"figure",
			"figcaption",
			"iframe"
		],
		allowedAttributes: {
			a: [
				"href",
				"title",
				"target",
				"rel"
			],
			img: [
				"src",
				"alt",
				"title",
				"width",
				"height",
				"loading"
			],
			iframe: [
				"src",
				"title",
				"allow",
				"allowfullscreen",
				"width",
				"height"
			]
		},
		allowedSchemes: [
			"http",
			"https",
			"mailto"
		],
		allowedIframeHostnames: [
			"www.youtube.com",
			"youtube.com",
			"player.vimeo.com"
		],
		transformTags: { a: import_sanitize_html.default.simpleTransform("a", { rel: "noopener noreferrer" }) }
	});
}
//#endregion
export { getPublishSessionConfig, isPublishUnlocked, passphraseMatches, requirePublishUnlocked, sanitizeArticleHtml };
