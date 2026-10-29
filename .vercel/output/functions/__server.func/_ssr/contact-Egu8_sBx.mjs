import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { O as ArrowRight, _ as Github, m as Linkedin, p as Mail, s as Phone, y as Dribbble } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-pXqaVCHB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Egu8_sBx.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/root/app/code/src/components/portfolio/Contact.tsx";
var ITEMS = [
	{
		icon: Mail,
		label: "Email",
		value: "willomarty01@gmail.com",
		href: "mailto:willomarty01@gmail.com"
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+234 702 678 7353",
		href: "tel:+2347026787353"
	},
	{
		icon: Dribbble,
		label: "Behance",
		value: "behance.net/willomarty",
		href: "https://www.behance.net/willomarty"
	},
	{
		icon: Github,
		label: "GitHub",
		value: "github.com/yeminimal",
		href: "https://github.com/yeminimal"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "Connect with me",
		href: "#"
	}
];
function Contact({ standalone = false }) {
	const Heading = standalone ? "h1" : "h2";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "contact",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Let's Work Together" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 19,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
						className: "display-serif mt-6 text-4xl md:text-6xl leading-[1.05]",
						children: [
							"Got a project?",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 22,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "italic text-accent",
								children: "Let's talk."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 23,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 20,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 max-w-xl text-foreground/70 leading-relaxed",
						children: "Available for brand design, frontend development, creative consulting and collaborations. Based in Nigeria — comfortable working with clients globally."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 inline-flex items-center gap-2 border border-accent/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-1.5 bg-accent animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 31,
								columnNumber: 13
							}, this),
							"Open to Work — ",
							(/* @__PURE__ */ new Date()).toLocaleString("en-US", {
								month: "long",
								year: "numeric"
							})
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-14 grid md:grid-cols-2 gap-px bg-border border border-border",
					children: ITEMS.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: it.href,
						target: it.href.startsWith("http") ? "_blank" : void 0,
						rel: "noopener noreferrer",
						className: "group bg-background p-6 flex items-center gap-5 border-l-2 border-l-transparent hover:border-l-accent hover:bg-surface transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "border border-border p-3 text-accent group-hover:border-accent transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.icon, { size: 18 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 46,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim",
							children: it.label
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 49,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-1 text-foreground group-hover:text-accent transition-colors",
							children: it.value
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 52,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 48,
							columnNumber: 15
						}, this)]
					}, it.label, true, {
						fileName: _jsxFileName$1,
						lineNumber: 38,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "mailto:willomarty01@gmail.com",
						className: "group inline-flex items-center gap-2 bg-accent text-background px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent-dim transition-colors",
						children: ["Send Me a Message", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
							size: 14,
							className: "group-hover:translate-x-1 transition-transform"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 66,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 60,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/root/app/code/src/routes/contact.tsx?tsr-split=component";
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 82
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-16",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, { standalone: true }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 5,
					columnNumber: 113
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 89
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 142
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContactPage as component };
