import { o as slugify } from "./articles.shared-DtbdIfsT.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-yTfeHp1H.mjs";
import { r as useSession$1 } from "./request-response-5koI5ADI.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.functions-Daj22oVf.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ARTICLE_COLUMNS = "id, title, slug, meta_description, cover_image_url, body_html, tags, status, published_at, created_at, updated_at";
function publicClient() {
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"];
	return createClient(process.env["SUPABASE_URL"], key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const h = new Headers(init?.headers);
			if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
			h.set("apikey", key);
			return fetch(input, {
				...init,
				headers: h
			});
		} }
	});
}
var listPublishedArticles_createServerFn_handler = createServerRpc({
	id: "a55603e3629d953e4021edfb9058a2c974a8641ddc6a2c08b7345ddd3ecbe361",
	name: "listPublishedArticles",
	filename: "src/lib/articles.functions.ts"
}, (opts) => listPublishedArticles.__executeServer(opts));
var listPublishedArticles = createServerFn({ method: "GET" }).handler(listPublishedArticles_createServerFn_handler, async () => {
	const { sanitizeArticleHtml } = await import("./articles.server-Q4MjEcVg.mjs");
	const { data, error } = await publicClient().from("articles").select(ARTICLE_COLUMNS).eq("status", "published").order("published_at", { ascending: false });
	if (error) {
		console.error("listPublishedArticles", error);
		return [];
	}
	return (data ?? []).map((a) => ({
		...a,
		body_html: sanitizeArticleHtml(a.body_html ?? "")
	}));
});
var getPublishedArticle_createServerFn_handler = createServerRpc({
	id: "fa3264673776c77f51dbb7b8cc6cf731f7a806b30a3c6a25397796dac133044d",
	name: "getPublishedArticle",
	filename: "src/lib/articles.functions.ts"
}, (opts) => getPublishedArticle.__executeServer(opts));
var getPublishedArticle = createServerFn({ method: "GET" }).validator((data) => data).handler(getPublishedArticle_createServerFn_handler, async ({ data }) => {
	const { sanitizeArticleHtml } = await import("./articles.server-Q4MjEcVg.mjs");
	const { data: row, error } = await publicClient().from("articles").select(ARTICLE_COLUMNS).eq("slug", data.slug).eq("status", "published").maybeSingle();
	if (error) console.error("getPublishedArticle", error);
	if (!row) return null;
	const article = row;
	return {
		...article,
		body_html: sanitizeArticleHtml(article.body_html ?? "")
	};
});
var getPublishGateState_createServerFn_handler = createServerRpc({
	id: "bb261312485988d6f7c6f8a4e5160aef9ed7debd22472527cf2ea218467f1ac0",
	name: "getPublishGateState",
	filename: "src/lib/articles.functions.ts"
}, (opts) => getPublishGateState.__executeServer(opts));
var getPublishGateState = createServerFn({ method: "GET" }).handler(getPublishGateState_createServerFn_handler, async () => {
	const { isPublishUnlocked } = await import("./articles.server-Q4MjEcVg.mjs");
	return { unlocked: await isPublishUnlocked() };
});
var unlockPublish_createServerFn_handler = createServerRpc({
	id: "aba0b6b7cee992f32929bb5622caa93bee2db14299a6f8fae56228f12ee915fb",
	name: "unlockPublish",
	filename: "src/lib/articles.functions.ts"
}, (opts) => unlockPublish.__executeServer(opts));
var unlockPublish = createServerFn({ method: "POST" }).validator((data) => data).handler(unlockPublish_createServerFn_handler, async ({ data }) => {
	const { getPublishSessionConfig, passphraseMatches } = await import("./articles.server-Q4MjEcVg.mjs");
	const expected = process.env["PUBLISH_ACCESS_CODE"];
	if (!expected) throw new Error("PUBLISH_ACCESS_CODE is not set");
	if (!data.passphrase || !passphraseMatches(data.passphrase, expected)) return { ok: false };
	await (await useSession$1(getPublishSessionConfig())).update({ unlocked: true });
	return { ok: true };
});
var lockPublish_createServerFn_handler = createServerRpc({
	id: "93b1a350624e9187422ba88242516f79e63810666345a986de72e61046efe552",
	name: "lockPublish",
	filename: "src/lib/articles.functions.ts"
}, (opts) => lockPublish.__executeServer(opts));
var lockPublish = createServerFn({ method: "POST" }).handler(lockPublish_createServerFn_handler, async () => {
	const { getPublishSessionConfig } = await import("./articles.server-Q4MjEcVg.mjs");
	await (await useSession$1(getPublishSessionConfig())).clear();
	return { ok: true };
});
var listAllArticles_createServerFn_handler = createServerRpc({
	id: "05724bcf57f746cb01bf50e6779f477019c70637140fc7e1c261e7a488f92ea9",
	name: "listAllArticles",
	filename: "src/lib/articles.functions.ts"
}, (opts) => listAllArticles.__executeServer(opts));
var listAllArticles = createServerFn({ method: "GET" }).handler(listAllArticles_createServerFn_handler, async () => {
	const { requirePublishUnlocked } = await import("./articles.server-Q4MjEcVg.mjs");
	await requirePublishUnlocked();
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data, error } = await supabaseAdmin.from("articles").select(ARTICLE_COLUMNS).order("updated_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var saveArticle_createServerFn_handler = createServerRpc({
	id: "974c53e9c39bdbac0e2f1c6a5f7e04b7d77cff5bebf8dbe7ff250205637e0e79",
	name: "saveArticle",
	filename: "src/lib/articles.functions.ts"
}, (opts) => saveArticle.__executeServer(opts));
var saveArticle = createServerFn({ method: "POST" }).validator((data) => data).handler(saveArticle_createServerFn_handler, async ({ data }) => {
	const { requirePublishUnlocked, sanitizeArticleHtml } = await import("./articles.server-Q4MjEcVg.mjs");
	await requirePublishUnlocked();
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const body_html = sanitizeArticleHtml(data.body_html ?? "");
	const title = data.title.trim();
	if (data.publish) {
		const missing = [];
		if (!title) missing.push("title");
		if (!data.meta_description.trim()) missing.push("meta_description");
		if (!data.cover_image_url.trim()) missing.push("cover_image_url");
		if (!body_html.replace(/<[^>]*>/g, "").trim()) missing.push("body");
		if (missing.length) return {
			ok: false,
			missing
		};
	}
	const slug = slugify(data.slug || title) || `article-${Date.now()}`;
	const payload = {
		title,
		slug,
		meta_description: data.meta_description.trim(),
		cover_image_url: data.cover_image_url.trim(),
		body_html,
		tags: data.tags.map((t) => t.trim()).filter(Boolean),
		status: data.publish ? "published" : "draft"
	};
	if (data.id) {
		const { error } = await supabaseAdmin.from("articles").update(payload).eq("id", data.id);
		if (error) return {
			ok: false,
			error: error.message
		};
		return {
			ok: true,
			slug
		};
	}
	const { error } = await supabaseAdmin.from("articles").insert(payload);
	if (error) return {
		ok: false,
		error: error.message
	};
	return {
		ok: true,
		slug
	};
});
var unpublishArticle_createServerFn_handler = createServerRpc({
	id: "52147d1357b06c79e31e4bcea8e4352a8081b5e1c52d581f9518f88d639a34ce",
	name: "unpublishArticle",
	filename: "src/lib/articles.functions.ts"
}, (opts) => unpublishArticle.__executeServer(opts));
var unpublishArticle = createServerFn({ method: "POST" }).validator((data) => data).handler(unpublishArticle_createServerFn_handler, async ({ data }) => {
	const { requirePublishUnlocked } = await import("./articles.server-Q4MjEcVg.mjs");
	await requirePublishUnlocked();
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("articles").update({ status: "draft" }).eq("id", data.id);
	if (error) return {
		ok: false,
		error: error.message
	};
	return { ok: true };
});
var deleteArticle_createServerFn_handler = createServerRpc({
	id: "dae110bd8f9f1f7b56c26f2d39ca12ede74d9fc4e3cf1eb5c8ac9f413e317195",
	name: "deleteArticle",
	filename: "src/lib/articles.functions.ts"
}, (opts) => deleteArticle.__executeServer(opts));
var deleteArticle = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteArticle_createServerFn_handler, async ({ data }) => {
	const { requirePublishUnlocked } = await import("./articles.server-Q4MjEcVg.mjs");
	await requirePublishUnlocked();
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("articles").delete().eq("id", data.id);
	if (error) return {
		ok: false,
		error: error.message
	};
	return { ok: true };
});
//#endregion
export { deleteArticle_createServerFn_handler, getPublishGateState_createServerFn_handler, getPublishedArticle_createServerFn_handler, listAllArticles_createServerFn_handler, listPublishedArticles_createServerFn_handler, lockPublish_createServerFn_handler, saveArticle_createServerFn_handler, unlockPublish_createServerFn_handler, unpublishArticle_createServerFn_handler };
