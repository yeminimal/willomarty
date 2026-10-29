import { a as __toCommonJS, t as __commonJSMin } from "../_runtime.mjs";
import { n as init_dist, t as dist_exports } from "./htmlparser2.mjs";
import { t as require_escape_string_regexp } from "./escape-string-regexp.mjs";
import { t as require_is_plain_object } from "./is-plain-object.mjs";
import { t as require_cjs } from "./deepmerge.mjs";
import { t as require_parse_srcset } from "./parse-srcset.mjs";
import { t as require_postcss } from "./postcss+source-map-js.mjs";
import { t as require_launder } from "./launder.mjs";
//#region node_modules/sanitize-html/index.js
var require_sanitize_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var htmlparser = (init_dist(), __toCommonJS(dist_exports));
	var escapeStringRegexp = require_escape_string_regexp();
	var { isPlainObject } = require_is_plain_object();
	var deepmerge = require_cjs();
	var parseSrcset = require_parse_srcset();
	var { parse: postcssParse } = require_postcss();
	var { naughtyHref: launderNaughtyHref } = require_launder();
	var mediaTags = [
		"img",
		"audio",
		"video",
		"picture",
		"svg",
		"object",
		"map",
		"iframe",
		"embed"
	];
	var vulnerableTags = ["script", "style"];
	var svgAnimationTags = [
		"animate",
		"animatecolor",
		"animatemotion",
		"animatetransform",
		"set"
	];
	var alwaysUrlAttributes = ["href"];
	var severities = [
		"debug",
		"info",
		"warn",
		"error"
	];
	function loggerFor(options) {
		const source = options && options.logger || console;
		const logger = {};
		for (const severity of severities) logger[severity] = typeof source[severity] === "function" ? (...args) => source[severity](...args) : (...args) => console[severity](...args);
		return logger;
	}
	function each(obj, cb) {
		if (obj) Object.keys(obj).forEach(function(key) {
			cb(obj[key], key);
		});
	}
	function has(obj, key) {
		return {}.hasOwnProperty.call(obj, key);
	}
	function filter(a, cb) {
		const n = [];
		each(a, function(v) {
			if (cb(v)) n.push(v);
		});
		return n;
	}
	function isEmptyObject(obj) {
		for (const key in obj) if (has(obj, key)) return false;
		return true;
	}
	function stringifySrcset(parsedSrcset) {
		return parsedSrcset.map(function(part) {
			if (!part.url) throw new Error("URL missing");
			return part.url + (part.w ? ` ${part.w}w` : "") + (part.h ? ` ${part.h}h` : "") + (part.d ? ` ${part.d}x` : "");
		}).join(", ");
	}
	module.exports = sanitizeHtml;
	var VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;
	function sanitizeHtml(html, options, _recursing) {
		if (html == null) return "";
		if (typeof html === "number") html = html.toString();
		let result = "";
		let tempResult = "";
		function Frame(tag, attribs) {
			const that = this;
			this.tag = tag;
			this.attribs = attribs || {};
			this.tagPosition = result.length;
			this.text = "";
			this.openingTagLength = 0;
			this.mediaChildren = [];
			this.updateParentNodeText = function() {
				if (stack.length) {
					const parentFrame = stack[stack.length - 1];
					parentFrame.text += that.text;
				}
			};
			this.updateParentNodeMediaChildren = function() {
				if (stack.length && mediaTags.includes(this.tag)) stack[stack.length - 1].mediaChildren.push(this.tag);
			};
		}
		options = Object.assign({}, sanitizeHtml.defaults, options);
		options.parser = Object.assign({}, htmlParserDefaults, options.parser);
		const logger = loggerFor(options);
		const tagAllowed = function(name) {
			return options.allowedTags === false || (options.allowedTags || []).indexOf(name) > -1;
		};
		vulnerableTags.forEach(function(tag) {
			if (tagAllowed(tag) && !options.allowVulnerableTags) logger.warn(`Your \`allowedTags\` option includes \`${tag}\`, which is inherently vulnerable to XSS attacks. Please remove it from \`allowedTags\`, or, to disable this warning, add the \`allowVulnerableTags\` option and ensure you are accounting for this risk.`);
		});
		const nonTextTagsArray = options.nonTextTags || [
			"script",
			"style",
			"textarea",
			"option",
			"xmp"
		];
		let allowedAttributesMap;
		let allowedAttributesGlobMap;
		if (options.allowedAttributes) {
			allowedAttributesMap = {};
			allowedAttributesGlobMap = {};
			each(options.allowedAttributes, function(attributes, tag) {
				allowedAttributesMap[tag] = [];
				const globRegex = [];
				attributes.forEach(function(obj) {
					if (typeof obj === "string" && obj.indexOf("*") >= 0) globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
					else allowedAttributesMap[tag].push(obj);
				});
				if (globRegex.length) allowedAttributesGlobMap[tag] = new RegExp("^(" + globRegex.join("|") + ")$");
			});
		}
		const allowedClassesMap = {};
		const allowedClassesGlobMap = {};
		const allowedClassesRegexMap = {};
		each(options.allowedClasses, function(classes, tag) {
			if (allowedAttributesMap) {
				if (!has(allowedAttributesMap, tag)) allowedAttributesMap[tag] = [];
				allowedAttributesMap[tag].push("class");
			}
			allowedClassesMap[tag] = classes;
			if (Array.isArray(classes)) {
				const globRegex = [];
				allowedClassesMap[tag] = [];
				allowedClassesRegexMap[tag] = [];
				classes.forEach(function(obj) {
					if (typeof obj === "string" && obj.indexOf("*") >= 0) globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
					else if (obj instanceof RegExp) allowedClassesRegexMap[tag].push(obj);
					else allowedClassesMap[tag].push(obj);
				});
				if (globRegex.length) allowedClassesGlobMap[tag] = new RegExp("^(" + globRegex.join("|") + ")$");
			}
		});
		const transformTagsMap = {};
		let transformTagsAll;
		each(options.transformTags, function(transform, tag) {
			let transFun;
			if (typeof transform === "function") transFun = transform;
			else if (typeof transform === "string") transFun = sanitizeHtml.simpleTransform(transform);
			if (tag === "*") transformTagsAll = transFun;
			else transformTagsMap[tag] = transFun;
		});
		let depth;
		let stack;
		let skipMap;
		let transformMap;
		let skipText;
		let skipTextDepth;
		let rawTextEnd;
		let skipRawText;
		let addedText = false;
		initializeState();
		const parser = new htmlparser.Parser({
			onopentag: function(name, attribs) {
				if (options.onOpenTag) options.onOpenTag(name, attribs);
				updateRawTextRegion();
				if (options.enforceHtmlBoundary && name === "html") initializeState();
				if (skipRawText) return;
				if (skipText) {
					skipTextDepth++;
					return;
				}
				const frame = new Frame(name, attribs);
				stack.push(frame);
				let skip = false;
				const hasText = !!frame.text;
				let transformedTag;
				if (has(transformTagsMap, name)) {
					transformedTag = transformTagsMap[name](name, attribs);
					frame.attribs = attribs = transformedTag.attribs;
					if (transformedTag.text !== void 0) frame.innerText = transformedTag.text;
					if (name !== transformedTag.tagName) {
						frame.name = name = transformedTag.tagName;
						transformMap[depth] = transformedTag.tagName;
					}
				}
				if (transformTagsAll) {
					transformedTag = transformTagsAll(name, attribs);
					frame.attribs = attribs = transformedTag.attribs;
					if (name !== transformedTag.tagName) {
						frame.name = name = transformedTag.tagName;
						transformMap[depth] = transformedTag.tagName;
					}
				}
				if (!tagAllowed(name) || animatesUrlAttribute(name, attribs) || options.disallowedTagsMode === "recursiveEscape" && !isEmptyObject(skipMap) || options.nestingLimit != null && depth >= options.nestingLimit) {
					skip = true;
					skipMap[depth] = true;
					if (options.disallowedTagsMode === "discard" || options.disallowedTagsMode === "completelyDiscard") {
						if (nonTextTagsArray.indexOf(name) !== -1) {
							skipText = true;
							skipTextDepth = 1;
							if (frame.tag.toLowerCase() === "noscript") rawTextEnd = findRawTextEnd("noscript", parser.endIndex + 1);
						}
					}
				}
				depth++;
				if (skip) {
					if (options.disallowedTagsMode === "discard" || options.disallowedTagsMode === "completelyDiscard") {
						if (frame.innerText && !hasText) {
							const escaped = escapeHtml(frame.innerText);
							if (options.textFilter) result += options.textFilter(escaped, name);
							else result += escaped;
							addedText = true;
						}
						return;
					}
					tempResult = result;
					result = "";
				}
				result += "<" + name;
				if (name === "script") {
					if (options.allowedScriptHostnames || options.allowedScriptDomains) frame.innerText = "";
				}
				if (skip && (options.disallowedTagsMode === "escape" || options.disallowedTagsMode === "recursiveEscape") && options.preserveEscapedAttributes) each(attribs, function(value, a) {
					result += " " + a + "=\"" + escapeHtml(value || "", true) + "\"";
				});
				else if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap["*"]) each(attribs, function(value, a) {
					if (!VALID_HTML_ATTRIBUTE_NAME.test(a)) {
						delete frame.attribs[a];
						return;
					}
					if (value === "" && !options.allowedEmptyAttributes.includes(a) && (options.nonBooleanAttributes.includes(a) || options.nonBooleanAttributes.includes("*"))) {
						delete frame.attribs[a];
						return;
					}
					let passedAllowedAttributesMapCheck = false;
					if (!allowedAttributesMap || has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1 || allowedAttributesMap["*"] && allowedAttributesMap["*"].indexOf(a) !== -1 || has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a) || allowedAttributesGlobMap["*"] && allowedAttributesGlobMap["*"].test(a)) passedAllowedAttributesMapCheck = true;
					else if (allowedAttributesMap && allowedAttributesMap[name]) {
						for (const o of allowedAttributesMap[name]) if (isPlainObject(o) && o.name && o.name === a) {
							passedAllowedAttributesMapCheck = true;
							let newValue = "";
							if (o.multiple === true) {
								const splitStrArray = value.split(" ");
								for (const s of splitStrArray) if (o.values.indexOf(s) !== -1) if (newValue === "") newValue = s;
								else newValue += " " + s;
							} else if (o.values.indexOf(value) >= 0) newValue = value;
							value = newValue;
						}
					}
					if (passedAllowedAttributesMapCheck) {
						if (options.allowedSchemesAppliedToAttributes.indexOf(a) !== -1) {
							if (naughtyHref(name, value)) {
								delete frame.attribs[a];
								return;
							}
						}
						if (name === "meta" && a.toLowerCase() === "content" && isRefresh(attribs) && naughtyRefresh(value)) {
							delete frame.attribs[a];
							return;
						}
						if (name === "script" && a === "src") {
							let allowed = true;
							try {
								const parsed = parseUrl(value);
								if (options.allowedScriptHostnames || options.allowedScriptDomains) {
									const allowedHostname = (options.allowedScriptHostnames || []).find(function(hostname) {
										return hostname === parsed.url.hostname;
									});
									const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
										return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
									});
									allowed = allowedHostname || allowedDomain;
								}
							} catch (e) {
								allowed = false;
							}
							if (!allowed) {
								delete frame.attribs[a];
								return;
							}
						}
						if (name === "iframe" && a === "src") {
							let allowed = true;
							try {
								const parsed = parseUrl(value);
								if (parsed.isRelativeUrl) allowed = has(options, "allowIframeRelativeUrls") ? options.allowIframeRelativeUrls : !options.allowedIframeHostnames && !options.allowedIframeDomains;
								else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
									const allowedHostname = (options.allowedIframeHostnames || []).find(function(hostname) {
										return hostname === parsed.url.hostname;
									});
									const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
										return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
									});
									allowed = allowedHostname || allowedDomain;
								}
							} catch (e) {
								allowed = false;
							}
							if (!allowed) {
								delete frame.attribs[a];
								return;
							}
						}
						if (a === "srcset" || a === "imagesrcset") try {
							let parsed = parseSrcset(value);
							parsed.forEach(function(value) {
								if (naughtyHref(name, value.url)) value.evil = true;
							});
							parsed = filter(parsed, function(v) {
								return !v.evil;
							});
							if (!parsed.length) {
								delete frame.attribs[a];
								return;
							} else {
								value = stringifySrcset(filter(parsed, function(v) {
									return !v.evil;
								}));
								frame.attribs[a] = value;
							}
						} catch (e) {
							delete frame.attribs[a];
							return;
						}
						if (a === "class") {
							const allowedSpecificClasses = allowedClassesMap[name];
							const allowedWildcardClasses = allowedClassesMap["*"];
							const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
							const allowedSpecificClassesRegex = allowedClassesRegexMap[name];
							const allowedWildcardClassesRegex = allowedClassesRegexMap["*"];
							const allowedClassesGlobs = [allowedSpecificClassesGlob, allowedClassesGlobMap["*"]].concat(allowedSpecificClassesRegex, allowedWildcardClassesRegex).filter(function(t) {
								return t;
							});
							if (allowedSpecificClasses && allowedWildcardClasses) value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
							else value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
							if (!value.length) {
								delete frame.attribs[a];
								return;
							}
						}
						if (a === "style") {
							if (options.parseStyleAttributes) try {
								value = stringifyStyleAttributes(filterCss(postcssParse(name + " {" + value + "}", { map: false }), options.allowedStyles));
								if (value.length === 0) {
									delete frame.attribs[a];
									return;
								}
							} catch (e) {
								if (typeof window !== "undefined") logger.warn(`Failed to parse "${name} {${value}}". If you are running this in a browser, we recommend disabling style parsing with the parseStyleAttributes option, since it only works in a node environment due to a postcss dependency. More info: https://github.com/apostrophecms/sanitize-html/issues/547`);
								delete frame.attribs[a];
								return;
							}
							else if (options.allowedStyles) throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
						}
						result += " " + a;
						if (value && value.length) result += "=\"" + escapeHtml(value, true) + "\"";
						else if (options.allowedEmptyAttributes.includes(a)) result += "=\"\"";
					} else delete frame.attribs[a];
				});
				if (options.selfClosing.indexOf(name) !== -1) result += " />";
				else {
					result += ">";
					if (frame.innerText && !hasText) {
						const escaped = escapeHtml(frame.innerText);
						if (options.textFilter) result += options.textFilter(escaped, name);
						else result += escaped;
						addedText = true;
					}
				}
				if (skip) {
					result = tempResult + escapeHtml(result);
					tempResult = "";
				}
				frame.openingTagLength = result.length - frame.tagPosition;
			},
			ontext: function(text) {
				updateRawTextRegion();
				if (skipText || skipRawText) return;
				const lastFrame = stack[stack.length - 1];
				let tag;
				if (lastFrame) {
					tag = lastFrame.tag;
					text = lastFrame.innerText !== void 0 ? lastFrame.innerText : text;
				}
				if (options.disallowedTagsMode === "completelyDiscard" && !tagAllowed(tag)) text = "";
				else if (tag && tagAllowed(tag) && (options.disallowedTagsMode === "discard" || options.disallowedTagsMode === "completelyDiscard") && (tag === "script" || tag === "style")) result += text;
				else if (tag && tagAllowed(tag) && (options.disallowedTagsMode === "discard" || options.disallowedTagsMode === "completelyDiscard") && (tag === "textarea" || tag === "xmp")) if (tag === "xmp") result += text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
				else result += escapeHtml(text, false);
				else if (tag === "iframe" && !tagAllowed(tag) && options.disallowedTagsMode === "discard") result += sanitizeHtml(text, options);
				else if (!addedText) {
					const escaped = escapeHtml(text, false);
					if (options.textFilter) result += options.textFilter(escaped, tag);
					else result += escaped;
				}
				if (stack.length) {
					const frame = stack[stack.length - 1];
					frame.text += text;
				}
			},
			onclosetag: function(name, isImplied) {
				if (options.onCloseTag) options.onCloseTag(name, isImplied);
				updateRawTextRegion();
				if (skipRawText) {
					const lastFrame = stack[stack.length - 1];
					if (!lastFrame || lastFrame.tag !== name) return;
				} else if (skipText) {
					skipTextDepth--;
					if (!skipTextDepth) {
						skipText = false;
						if (rawTextEnd !== null) skipRawText = true;
					} else return;
				}
				const frame = stack.pop();
				if (!frame) return;
				if (frame.tag !== name) {
					stack.push(frame);
					return;
				}
				skipText = options.enforceHtmlBoundary ? name === "html" : false;
				depth--;
				const skip = skipMap[depth];
				if (skip) {
					delete skipMap[depth];
					if (options.disallowedTagsMode === "discard" || options.disallowedTagsMode === "completelyDiscard") {
						frame.updateParentNodeText();
						return;
					}
					tempResult = result;
					result = "";
				}
				if (transformMap[depth]) {
					name = transformMap[depth];
					delete transformMap[depth];
				}
				if (options.exclusiveFilter) {
					const filterResult = options.exclusiveFilter(frame);
					if (filterResult === "excludeTag") {
						if (skip) {
							result = tempResult;
							tempResult = "";
						}
						result = result.substring(0, frame.tagPosition) + result.substring(frame.tagPosition + frame.openingTagLength);
						return;
					} else if (filterResult) {
						result = result.substring(0, frame.tagPosition);
						return;
					}
				}
				frame.updateParentNodeMediaChildren();
				frame.updateParentNodeText();
				if (options.selfClosing.indexOf(name) !== -1 || isImplied && !tagAllowed(name) && ["escape", "recursiveEscape"].indexOf(options.disallowedTagsMode) >= 0) {
					if (skip) {
						result = tempResult;
						tempResult = "";
					}
					return;
				}
				result += "</" + name + ">";
				if (skip) {
					result = tempResult + escapeHtml(result);
					tempResult = "";
				}
				addedText = false;
			}
		}, options.parser);
		parser.write(html);
		parser.end();
		if (options.disallowedTagsMode === "escape" || options.disallowedTagsMode === "recursiveEscape") {
			const lastParsedIndex = parser.endIndex;
			if (lastParsedIndex != null && lastParsedIndex >= 0 && lastParsedIndex < html.length) {
				const unparsed = html.substring(lastParsedIndex);
				result += escapeHtml(unparsed);
			} else if ((lastParsedIndex == null || lastParsedIndex < 0) && html.length > 0 && result === "") result = escapeHtml(html);
		}
		return result;
		function initializeState() {
			result = "";
			depth = 0;
			stack = [];
			skipMap = {};
			transformMap = {};
			skipText = false;
			skipTextDepth = 0;
			rawTextEnd = null;
			skipRawText = false;
		}
		function updateRawTextRegion() {
			if (rawTextEnd !== null && parser.startIndex >= rawTextEnd) {
				rawTextEnd = null;
				skipRawText = false;
			}
		}
		function findRawTextEnd(tagName, from) {
			const re = new RegExp("</" + tagName + "[\\t\\n\\f\\r />]", "ig");
			re.lastIndex = from;
			const match = re.exec(html);
			return match ? match.index : Infinity;
		}
		function escapeHtml(s, quote) {
			if (typeof s !== "string") s = s + "";
			if (options.parser.decodeEntities) {
				s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				if (quote) s = s.replace(/"/g, "&quot;");
			}
			s = s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			if (quote) s = s.replace(/"/g, "&quot;");
			return s;
		}
		function naughtyHref(name, href) {
			return launderNaughtyHref(href, {
				allowedSchemes: has(options.allowedSchemesByTag, name) ? options.allowedSchemesByTag[name] : options.allowedSchemes || [],
				allowProtocolRelative: options.allowProtocolRelative
			});
		}
		function isRefresh(attribs) {
			return Object.keys(attribs).some(function(a) {
				return a.toLowerCase() === "http-equiv" && String(attribs[a]).trim().toLowerCase() === "refresh";
			});
		}
		function naughtyRefresh(content) {
			const input = String(content);
			const isWhitespace = function(c) {
				return c === " " || c === "	" || c === "\n" || c === "\f" || c === "\r";
			};
			let position = 0;
			const skipWhitespace = function() {
				while (position < input.length && isWhitespace(input[position])) position++;
			};
			const lowerAt = function(i) {
				return (input[i] || "").toLowerCase();
			};
			skipWhitespace();
			const timeStart = position;
			while (position < input.length && /[0-9.]/.test(input[position])) position++;
			if (position === timeStart) return true;
			if (position < input.length) {
				const c = input[position];
				if (c !== ";" && c !== "," && !isWhitespace(c)) return true;
				skipWhitespace();
				if (input[position] === ";" || input[position] === ",") position++;
				skipWhitespace();
			}
			if (position >= input.length) return false;
			let url = input.slice(position);
			let quoted = true;
			if (lowerAt(position) === "u") {
				quoted = false;
				if (lowerAt(position + 1) === "r" && lowerAt(position + 2) === "l") {
					position += 3;
					skipWhitespace();
					if (input[position] === "=") {
						position++;
						skipWhitespace();
						quoted = true;
					}
				}
			}
			if (quoted) {
				const quote = input[position];
				if (quote === "\"" || quote === "'") position++;
				url = input.slice(position);
				if (quote === "\"" || quote === "'") {
					const end = url.indexOf(quote);
					if (end !== -1) url = url.slice(0, end);
				}
			}
			return naughtyHref("meta", url);
		}
		function animatesUrlAttribute(name, attribs) {
			if (svgAnimationTags.indexOf(localPart(name)) === -1) return false;
			const schemeCheckedAttributes = options.allowedSchemesAppliedToAttributes || [];
			return Object.keys(attribs || {}).some(function(attributeName) {
				if (localPart(attributeName) !== "attributename") return false;
				const target = (attribs[attributeName] || "").trim().toLowerCase();
				const localName = target.slice(target.lastIndexOf(":") + 1);
				return alwaysUrlAttributes.indexOf(localName) !== -1 || schemeCheckedAttributes.indexOf(target) !== -1 || schemeCheckedAttributes.indexOf(localName) !== -1;
			});
		}
		function localPart(name) {
			const lower = name.toLowerCase();
			return lower.slice(lower.lastIndexOf(":") + 1);
		}
		function parseUrl(value) {
			value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//");
			if (value.startsWith("relative:")) throw new Error("relative: exploit attempt");
			let base = "relative://relative-site";
			for (let i = 0; i < 100; i++) base += `/${i}`;
			const parsed = new URL(value, base);
			return {
				isRelativeUrl: parsed && parsed.hostname === "relative-site" && parsed.protocol === "relative:",
				url: parsed
			};
		}
		/**
		* Filters user input css properties by allowlisted regex attributes.
		* Modifies the abstractSyntaxTree object.
		*
		* @param {object} abstractSyntaxTree  - Object representation of CSS attributes.
		* @property {array[Declaration]} abstractSyntaxTree.nodes[0] -
		* Each object contains prop and value key, i.e { prop: 'color', value: 'red' }.
		* @param {object} allowedStyles       - Keys are properties (i.e color),
		* value is list of permitted regex rules (i.e /green/i).
		* @return {object}                    - The modified tree.
		*/
		function filterCss(abstractSyntaxTree, allowedStyles) {
			if (!allowedStyles) return abstractSyntaxTree;
			const astRules = abstractSyntaxTree.nodes[0];
			let selectedRule;
			if (allowedStyles[astRules.selector] && allowedStyles["*"]) selectedRule = deepmerge(allowedStyles[astRules.selector], allowedStyles["*"]);
			else selectedRule = allowedStyles[astRules.selector] || allowedStyles["*"];
			if (selectedRule) abstractSyntaxTree.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
			return abstractSyntaxTree;
		}
		/**
		* Extracts the style attributes from an AbstractSyntaxTree and formats those
		* values in the inline style attribute format.
		*
		* @param  {AbstractSyntaxTree} filteredAST
		* @return {string}             - Example:
		* "color:yellow;text-align:center !important;font-family:helvetica;"
		*/
		function stringifyStyleAttributes(filteredAST) {
			return filteredAST.nodes[0].nodes.reduce(function(extractedAttributes, attrObject) {
				extractedAttributes.push(`${attrObject.prop}:${attrObject.value}${attrObject.important ? " !important" : ""}`);
				return extractedAttributes;
			}, []).join(";");
		}
		/**
		* Filters the existing attributes for the given property. Discards any attributes
		* which don't match the allowlist.
		*
		* @param  {object} selectedRule - Example: { color: red, font-family: helvetica }
		* @param  {array} allowedDeclarationsList - List of declarations
		* which pass the allowlist.
		* @param  {object} attributeObject - Object representing the current css property.
		* @property {string} attributeObject.type - Typically 'declaration'.
		* @property {string} attributeObject.prop - The CSS property, i.e 'color'.
		* @property {string} attributeObject.value - The corresponding value to
		* the css property, i.e 'red'.
		* @return {function} - When used in Array.reduce,
		* will return an array of Declaration objects
		*/
		function filterDeclarations(selectedRule) {
			return function(allowedDeclarationsList, attributeObject) {
				if (has(selectedRule, attributeObject.prop)) {
					if (selectedRule[attributeObject.prop].some(function(regularExpression) {
						return regularExpression.test(attributeObject.value);
					})) allowedDeclarationsList.push(attributeObject);
				}
				return allowedDeclarationsList;
			};
		}
		function filterClasses(classes, allowed, allowedGlobs) {
			if (!allowed) return classes;
			classes = classes.split(/\s+/);
			return classes.filter(function(clss) {
				return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
					return glob.test(clss);
				});
			}).join(" ");
		}
	}
	var htmlParserDefaults = { decodeEntities: true };
	sanitizeHtml.defaults = {
		allowedTags: [
			"address",
			"article",
			"aside",
			"footer",
			"header",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"hgroup",
			"main",
			"nav",
			"section",
			"blockquote",
			"dd",
			"div",
			"dl",
			"dt",
			"figcaption",
			"figure",
			"hr",
			"li",
			"menu",
			"ol",
			"p",
			"pre",
			"ul",
			"a",
			"abbr",
			"b",
			"bdi",
			"bdo",
			"br",
			"cite",
			"code",
			"data",
			"dfn",
			"em",
			"i",
			"kbd",
			"mark",
			"q",
			"rb",
			"rp",
			"rt",
			"rtc",
			"ruby",
			"s",
			"samp",
			"small",
			"span",
			"strong",
			"sub",
			"sup",
			"time",
			"u",
			"var",
			"wbr",
			"caption",
			"col",
			"colgroup",
			"table",
			"tbody",
			"td",
			"tfoot",
			"th",
			"thead",
			"tr"
		],
		nonBooleanAttributes: [
			"abbr",
			"accept",
			"accept-charset",
			"accesskey",
			"action",
			"allow",
			"alt",
			"as",
			"autocapitalize",
			"autocomplete",
			"blocking",
			"charset",
			"cite",
			"class",
			"color",
			"cols",
			"colspan",
			"content",
			"contenteditable",
			"coords",
			"crossorigin",
			"data",
			"datetime",
			"decoding",
			"dir",
			"dirname",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"fetchpriority",
			"for",
			"form",
			"formaction",
			"formenctype",
			"formmethod",
			"formtarget",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"http-equiv",
			"id",
			"imagesizes",
			"imagesrcset",
			"inputmode",
			"integrity",
			"is",
			"itemid",
			"itemprop",
			"itemref",
			"itemtype",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"name",
			"nonce",
			"optimum",
			"pattern",
			"ping",
			"placeholder",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"referrerpolicy",
			"rel",
			"rows",
			"rowspan",
			"sandbox",
			"scope",
			"shape",
			"size",
			"sizes",
			"slot",
			"span",
			"spellcheck",
			"src",
			"srcdoc",
			"srclang",
			"srcset",
			"start",
			"step",
			"style",
			"tabindex",
			"target",
			"title",
			"translate",
			"type",
			"usemap",
			"value",
			"width",
			"wrap",
			"onauxclick",
			"onafterprint",
			"onbeforematch",
			"onbeforeprint",
			"onbeforeunload",
			"onbeforetoggle",
			"onblur",
			"oncancel",
			"oncanplay",
			"oncanplaythrough",
			"onchange",
			"onclick",
			"onclose",
			"oncontextlost",
			"oncontextmenu",
			"oncontextrestored",
			"oncopy",
			"oncuechange",
			"oncut",
			"ondblclick",
			"ondrag",
			"ondragend",
			"ondragenter",
			"ondragleave",
			"ondragover",
			"ondragstart",
			"ondrop",
			"ondurationchange",
			"onemptied",
			"onended",
			"onerror",
			"onfocus",
			"onformdata",
			"onhashchange",
			"oninput",
			"oninvalid",
			"onkeydown",
			"onkeypress",
			"onkeyup",
			"onlanguagechange",
			"onload",
			"onloadeddata",
			"onloadedmetadata",
			"onloadstart",
			"onmessage",
			"onmessageerror",
			"onmousedown",
			"onmouseenter",
			"onmouseleave",
			"onmousemove",
			"onmouseout",
			"onmouseover",
			"onmouseup",
			"onoffline",
			"ononline",
			"onpagehide",
			"onpageshow",
			"onpaste",
			"onpause",
			"onplay",
			"onplaying",
			"onpopstate",
			"onprogress",
			"onratechange",
			"onreset",
			"onresize",
			"onrejectionhandled",
			"onscroll",
			"onscrollend",
			"onsecuritypolicyviolation",
			"onseeked",
			"onseeking",
			"onselect",
			"onslotchange",
			"onstalled",
			"onstorage",
			"onsubmit",
			"onsuspend",
			"ontimeupdate",
			"ontoggle",
			"onunhandledrejection",
			"onunload",
			"onvolumechange",
			"onwaiting",
			"onwheel"
		],
		disallowedTagsMode: "discard",
		allowedAttributes: {
			a: [
				"href",
				"name",
				"target"
			],
			img: [
				"src",
				"srcset",
				"alt",
				"title",
				"width",
				"height",
				"loading"
			]
		},
		allowedEmptyAttributes: ["alt"],
		selfClosing: [
			"img",
			"br",
			"hr",
			"area",
			"base",
			"basefont",
			"input",
			"link",
			"meta",
			"col"
		],
		allowedSchemes: [
			"http",
			"https",
			"ftp",
			"mailto",
			"tel"
		],
		allowedSchemesByTag: {},
		allowedSchemesAppliedToAttributes: [
			"href",
			"src",
			"cite",
			"action",
			"formaction",
			"data",
			"xlink:href",
			"poster",
			"background",
			"ping",
			"longdesc",
			"usemap",
			"codebase",
			"classid",
			"archive",
			"profile",
			"manifest",
			"itemid",
			"dynsrc",
			"lowsrc"
		],
		allowProtocolRelative: true,
		enforceHtmlBoundary: false,
		parseStyleAttributes: true,
		preserveEscapedAttributes: false
	};
	sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
		merge = merge === void 0 ? true : merge;
		newAttribs = newAttribs || {};
		return function(tagName, attribs) {
			let attrib;
			if (merge) for (attrib in newAttribs) attribs[attrib] = newAttribs[attrib];
			else attribs = newAttribs;
			return {
				tagName: newTagName,
				attribs
			};
		};
	};
}));
//#endregion
export { require_sanitize_html as t };
