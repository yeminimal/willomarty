import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/is-plain-object/dist/is-plain-object.js
var require_is_plain_object = /* @__PURE__ */ __commonJSMin(((exports) => {
	/*!
	* is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	*
	* Copyright (c) 2014-2017, Jon Schlinkert.
	* Released under the MIT License.
	*/
	function isObject(o) {
		return Object.prototype.toString.call(o) === "[object Object]";
	}
	function isPlainObject(o) {
		var ctor, prot;
		if (isObject(o) === false) return false;
		ctor = o.constructor;
		if (ctor === void 0) return true;
		prot = ctor.prototype;
		if (isObject(prot) === false) return false;
		if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
		return true;
	}
	exports.isPlainObject = isPlainObject;
}));
//#endregion
export { require_is_plain_object as t };
