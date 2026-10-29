import { t as __commonJSMin } from "../_runtime.mjs";
import { t as require_dayjs_min } from "./dayjs.mjs";
//#region node_modules/launder/index.js
var require_launder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var dayjs = require_dayjs_min();
	function cleanHref(href) {
		href = href.replace(/[\x00-\x20]+/g, "");
		while (true) {
			const firstIndex = href.indexOf("<!--");
			if (firstIndex === -1) break;
			const lastIndex = href.indexOf("-->", firstIndex + 4);
			if (lastIndex === -1) break;
			href = href.substring(0, firstIndex) + href.substring(lastIndex + 3);
		}
		return href;
	}
	function naughtyHref(href, options) {
		options = options || {};
		const allowedSchemes = options.allowedSchemes || [
			"http",
			"https",
			"ftp",
			"mailto",
			"tel",
			"sms"
		];
		const allowProtocolRelative = options.allowProtocolRelative !== false;
		if (typeof href !== "string") return false;
		href = cleanHref(href);
		const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
		if (!matches) {
			if (href.match(/^[/\\]{2}/)) return !allowProtocolRelative;
			return false;
		}
		const scheme = matches[1].toLowerCase();
		return allowedSchemes.indexOf(scheme) === -1;
	}
	module.exports = function(options) {
		const self = {};
		self.options = options || {};
		self.filterTag = self.options.filterTag || function(tag) {
			tag = tag.trim();
			return tag.toLowerCase();
		};
		self.string = function(s, def) {
			if (typeof s !== "string") if (typeof s === "number" || typeof s === "boolean") s += "";
			else s = "";
			s = s.trim();
			if (def !== void 0) {
				if (s === "") s = def;
			}
			return s;
		};
		self.strings = function(strings) {
			if (!Array.isArray(strings)) return [];
			return strings.map(function(s) {
				return self.string(s);
			});
		};
		self.integer = function(i, def, min, max) {
			if (def === void 0) def = 0;
			if (typeof i === "number") i = Math.floor(i);
			else try {
				i = parseInt(i, 10);
				if (isNaN(i)) i = def;
			} catch (e) {
				i = def;
			}
			if (typeof min === "number" && i < min) i = min;
			if (typeof max === "number" && i > max) i = max;
			return i;
		};
		self.padInteger = function(i, places) {
			let s = i + "";
			while (s.length < places) s = "0" + s;
			return s;
		};
		self.float = function(i, def, min, max) {
			if (def === void 0) def = 0;
			if (!(typeof i === "number")) try {
				i = parseFloat(i, 10);
				if (isNaN(i)) i = def;
			} catch (e) {
				i = def;
			}
			if (typeof min === "number" && i < min) i = min;
			if (typeof max === "number" && i > max) i = max;
			return i;
		};
		self.naughtyHref = naughtyHref;
		self.url = function(s, def, httpsFix) {
			s = self.string(s, def);
			if (s === def) return s;
			s = cleanHref(s);
			if (naughtyHref(s)) return def;
			s = fixUrl(s);
			if (s === null) return def;
			return s;
			function fixUrl(href) {
				if (href.match(/^(((https?|ftp):\/\/)|((mailto|tel|sms):)|#|([^/.]+)?\/|[^/.]+$)/)) return href;
				else if (href.match(/^[^/.]+\.[^/.]+/)) return (httpsFix ? "https://" : "http://") + href;
				else return null;
			}
		};
		self.select = function(s, choices, def) {
			s = self.string(s);
			if (!choices || !choices.length) return def;
			let choice;
			if (typeof choices[0] === "object") {
				choice = choices.find(function(choice) {
					if (choice.value === null || choice.value === void 0) return false;
					return choice.value.toString() === s;
				});
				if (choice != null) return choice.value;
				return def;
			}
			choice = choices.find(function(choice) {
				if (choice === null || choice === void 0) return false;
				return choice.toString() === s;
			});
			if (choice !== void 0) return choice;
			return def;
		};
		self.boolean = function(b, def) {
			if (b === true) return true;
			if (b === false) return false;
			b = self.string(b, def);
			if (b === def) {
				if (b === void 0) return false;
				return b;
			}
			b = b.toLowerCase().charAt(0);
			if (b === "" || b === "n" || b === "0" || b === "f") return false;
			if (b === "t" || b === "y" || b === "1") return true;
			return false;
		};
		self.addBooleanFilterToCriteria = function(options, name, criteria, def) {
			if (def === void 0) def = null;
			let value = typeof options === "object" && options !== null ? options[name] : options;
			value = value === void 0 ? def : value;
			value = self.booleanOrNull(value);
			if (value === null) {} else if (!value) criteria[name] = { $ne: true };
			else criteria[name] = true;
		};
		self.booleanOrNull = function(b, def) {
			if (b === true) return b;
			if (b === false) return b;
			if (b === null) return b;
			b = self.string(b, def);
			if (b === def) {
				if (def === void 0) return null;
				return b;
			}
			if (b === "null") return null;
			b = b.toLowerCase().charAt(0);
			if (b === "" || b === "n" || b === "0" || b === "f") return false;
			if (b === "t" || b === "y" || b === "1") return true;
			if (b === "a") return null;
			return def;
		};
		self.date = function(date, def, now) {
			let components;
			function returnDefault() {
				if (def === void 0) def = dayjs().format("YYYY-MM-DD");
				return def;
			}
			if (typeof date === "string") {
				if (date.match(/\//)) {
					components = date.split("/");
					if (components.length === 2) return (now || /* @__PURE__ */ new Date()).getFullYear() + "-" + self.padInteger(components[0], 2) + "-" + self.padInteger(components[1], 2);
					else if (components.length === 3) {
						if (components[2] < 100) {
							const d = now || /* @__PURE__ */ new Date();
							const nowYear = d.getFullYear() % 100;
							const nowCentury = d.getFullYear() - nowYear;
							let theirYear = parseInt(components[2]) + nowCentury;
							if (theirYear - d.getFullYear() > 50) theirYear -= 100;
							components[2] = theirYear;
						}
						return self.padInteger(components[2], 4) + "-" + self.padInteger(components[0], 2) + "-" + self.padInteger(components[1], 2);
					} else return returnDefault();
				} else if (date.match(/-/)) {
					components = date.split("-");
					if (components.length === 2) return (now || /* @__PURE__ */ new Date()).getFullYear() + "-" + self.padInteger(components[0], 2) + "-" + self.padInteger(components[1], 2);
					else if (components.length === 3) return self.padInteger(components[0], 4) + "-" + self.padInteger(components[1], 2) + "-" + self.padInteger(components[2], 2);
					else return returnDefault();
				}
			}
			try {
				if (date === null) return returnDefault();
				date = now || new Date(date);
				if (isNaN(date.getTime())) return returnDefault();
				return date.getFullYear() + "-" + self.padInteger(date.getMonth() + 1, 2) + "-" + self.padInteger(date.getDate(), 2);
			} catch (e) {
				return returnDefault();
			}
		};
		self.formatDate = function(date) {
			return dayjs(date).format("YYYY-MM-DD");
		};
		self.time = function(time, def) {
			time = self.string(time).toLowerCase();
			time = time.trim();
			const components = time.match(/^(\d+)([:|.](\d+))?([:|.](\d+))?\s*(am|pm|AM|PM|a|p|A|M)?$/);
			if (components) {
				let hours = parseInt(components[1], 10);
				const minutes = components[3] !== void 0 ? parseInt(components[3], 10) : 0;
				const seconds = components[5] !== void 0 ? parseInt(components[5], 10) : 0;
				let ampm = components[6] ? components[6].toLowerCase() : components[6];
				ampm = ampm && ampm.charAt(0);
				if (hours === 12 && ampm === "a") hours -= 12;
				else if (hours === 12 && ampm === "p") {} else if (ampm === "p") hours += 12;
				if (hours === 24 || hours === "24") hours = 0;
				return self.padInteger(hours, 2) + ":" + self.padInteger(minutes, 2) + ":" + self.padInteger(seconds, 2);
			} else {
				if (def !== void 0) return def;
				return dayjs().format("HH:mm");
			}
		};
		self.formatTime = function(date) {
			return dayjs(date).format("HH:mm:ss");
		};
		self.tags = function(tags, filter) {
			if (typeof tags === "string") tags = tags.split(/,\s*/);
			if (!Array.isArray(tags)) return [];
			return tags.map((tag) => self.string(tag)).map(filter || self.filterTag).filter((tag) => tag.length > 0);
		};
		self.idRegExp = self.options.idRegExp || /^[A-Za-z0-9_]+$/;
		self.id = function(s, def) {
			const id = self.string(s, def);
			if (id === def) return id;
			if (!id.match(self.idRegExp)) return def;
			return id;
		};
		self.ids = function(ids) {
			if (!Array.isArray(ids)) return [];
			return ids.filter(function(id) {
				return self.id(id) !== void 0;
			});
		};
		return self;
	};
	module.exports.naughtyHref = naughtyHref;
}));
//#endregion
export { require_launder as t };
