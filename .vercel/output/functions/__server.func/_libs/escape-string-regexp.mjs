import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = (string) => {
		if (typeof string !== "string") throw new TypeError("Expected a string");
		return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
	};
}));
//#endregion
export { require_escape_string_regexp as t };
