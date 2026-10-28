import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BVlmz9jK.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-yTfeHp1H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.functions-BBI7SurF.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listPublishedArticles = createServerFn({ method: "GET" }).handler(createSsrRpc("a55603e3629d953e4021edfb9058a2c974a8641ddc6a2c08b7345ddd3ecbe361"));
var getPublishedArticle = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("fa3264673776c77f51dbb7b8cc6cf731f7a806b30a3c6a25397796dac133044d"));
createServerFn({ method: "GET" }).handler(createSsrRpc("bb261312485988d6f7c6f8a4e5160aef9ed7debd22472527cf2ea218467f1ac0"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("aba0b6b7cee992f32929bb5622caa93bee2db14299a6f8fae56228f12ee915fb"));
createServerFn({ method: "POST" }).handler(createSsrRpc("93b1a350624e9187422ba88242516f79e63810666345a986de72e61046efe552"));
createServerFn({ method: "GET" }).handler(createSsrRpc("05724bcf57f746cb01bf50e6779f477019c70637140fc7e1c261e7a488f92ea9"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("974c53e9c39bdbac0e2f1c6a5f7e04b7d77cff5bebf8dbe7ff250205637e0e79"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("52147d1357b06c79e31e4bcea8e4352a8081b5e1c52d581f9518f88d639a34ce"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("dae110bd8f9f1f7b56c26f2d39ca12ede74d9fc4e3cf1eb5c8ac9f413e317195"));
//#endregion
export { listPublishedArticles as n, getPublishedArticle as t };
