import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/parse-srcset/src/parse-srcset.js
var require_parse_srcset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Srcset Parser
	*
	* By Alex Bell |  MIT License
	*
	* JS Parser for the string value that appears in markup <img srcset="here">
	*
	* @returns Array [{url: _, d: _, w: _, h:_}, ...]
	*
	* Based super duper closely on the reference algorithm at:
	* https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	*
	* Most comments are copied in directly from the spec
	* (except for comments in parens).
	*/
	(function(root, factory) {
		if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof module === "object" && module.exports) module.exports = factory();
		else root.parseSrcset = factory();
	})(exports, function() {
		return function(input) {
			function isSpace(c) {
				return c === " " || c === "	" || c === "\n" || c === "\f" || c === "\r";
			}
			function collectCharacters(regEx) {
				var chars, match = regEx.exec(input.substring(pos));
				if (match) {
					chars = match[0];
					pos += chars.length;
					return chars;
				}
			}
			var inputLength = input.length, regexLeadingSpaces = /^[ \t\n\r\u000c]+/, regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/, regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/, regexTrailingCommas = /[,]+$/, regexNonNegativeInteger = /^\d+$/, regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, url, descriptors, currentDescriptor, state, c, pos = 0, candidates = [];
			while (true) {
				collectCharacters(regexLeadingCommasOrSpaces);
				if (pos >= inputLength) return candidates;
				url = collectCharacters(regexLeadingNotSpaces);
				descriptors = [];
				if (url.slice(-1) === ",") {
					url = url.replace(regexTrailingCommas, "");
					parseDescriptors();
				} else tokenize();
			}
			/**
			* Tokenizes descriptor properties prior to parsing
			* Returns undefined.
			*/
			function tokenize() {
				collectCharacters(regexLeadingSpaces);
				currentDescriptor = "";
				state = "in descriptor";
				while (true) {
					c = input.charAt(pos);
					if (state === "in descriptor") if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) descriptors.push(currentDescriptor);
						parseDescriptors();
						return;
					} else if (c === "(") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";
					} else if (c === "") {
						if (currentDescriptor) descriptors.push(currentDescriptor);
						parseDescriptors();
						return;
					} else currentDescriptor = currentDescriptor + c;
					else if (state === "in parens") if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;
					} else currentDescriptor = currentDescriptor + c;
					else if (state === "after descriptor") if (isSpace(c)) {} else if (c === "") {
						parseDescriptors();
						return;
					} else {
						state = "in descriptor";
						pos -= 1;
					}
					pos += 1;
				}
			}
			/**
			* Adds descriptor properties to a candidate, pushes to the candidates array
			* @return undefined
			*/
			function parseDescriptors() {
				var pError = false, w, d, h, i, candidate = {}, desc, lastChar, value, intVal, floatVal;
				for (i = 0; i < descriptors.length; i++) {
					desc = descriptors[i];
					lastChar = desc[desc.length - 1];
					value = desc.substring(0, desc.length - 1);
					intVal = parseInt(value, 10);
					floatVal = parseFloat(value);
					if (regexNonNegativeInteger.test(value) && lastChar === "w") {
						if (w || d) pError = true;
						if (intVal === 0) pError = true;
						else w = intVal;
					} else if (regexFloatingPoint.test(value) && lastChar === "x") {
						if (w || d || h) pError = true;
						if (floatVal < 0) pError = true;
						else d = floatVal;
					} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
						if (h || d) pError = true;
						if (intVal === 0) pError = true;
						else h = intVal;
					} else pError = true;
				}
				if (!pError) {
					candidate.url = url;
					if (w) candidate.w = w;
					if (d) candidate.d = d;
					if (h) candidate.h = h;
					candidates.push(candidate);
				} else if (console && console.log) console.log("Invalid srcset descriptor found in '" + input + "' at '" + desc + "'.");
			}
		};
	});
}));
//#endregion
export { require_parse_srcset as t };
