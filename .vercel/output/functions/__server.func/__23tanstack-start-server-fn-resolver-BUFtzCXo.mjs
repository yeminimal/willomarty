//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BUFtzCXo.js
var manifest = {
	"05724bcf57f746cb01bf50e6779f477019c70637140fc7e1c261e7a488f92ea9": {
		functionName: "listAllArticles_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"52147d1357b06c79e31e4bcea8e4352a8081b5e1c52d581f9518f88d639a34ce": {
		functionName: "unpublishArticle_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"93b1a350624e9187422ba88242516f79e63810666345a986de72e61046efe552": {
		functionName: "lockPublish_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"974c53e9c39bdbac0e2f1c6a5f7e04b7d77cff5bebf8dbe7ff250205637e0e79": {
		functionName: "saveArticle_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"a55603e3629d953e4021edfb9058a2c974a8641ddc6a2c08b7345ddd3ecbe361": {
		functionName: "listPublishedArticles_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"aba0b6b7cee992f32929bb5622caa93bee2db14299a6f8fae56228f12ee915fb": {
		functionName: "unlockPublish_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"bb261312485988d6f7c6f8a4e5160aef9ed7debd22472527cf2ea218467f1ac0": {
		functionName: "getPublishGateState_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"dae110bd8f9f1f7b56c26f2d39ca12ede74d9fc4e3cf1eb5c8ac9f413e317195": {
		functionName: "deleteArticle_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	},
	"fa3264673776c77f51dbb7b8cc6cf731f7a806b30a3c6a25397796dac133044d": {
		functionName: "getPublishedArticle_createServerFn_handler",
		importer: () => import("./_ssr/articles.functions-D7260TzH.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
