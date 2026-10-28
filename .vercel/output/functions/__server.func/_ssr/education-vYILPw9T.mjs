import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionLabel } from "./SectionLabel-D9JpdkKt.mjs";
import { t as Reveal } from "./Reveal-DyVWGN_r.mjs";
import { S as CodeXml, T as BadgeCheck, g as GraduationCap, i as Sparkles, o as ShieldCheck, x as Compass } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Footer-pXqaVCHB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/education-vYILPw9T.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var chatgpt_logo_png_asset_default = {
	version: 1,
	asset_id: "62e71a9f-05f5-4c11-9d52-4f197b2ac4ce",
	project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
	url: "/__l5e/assets-v1/62e71a9f-05f5-4c11-9d52-4f197b2ac4ce/chatgpt-logo.png",
	r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/62e71a9f-05f5-4c11-9d52-4f197b2ac4ce/chatgpt-logo.png",
	original_filename: "chatgpt-logo.png",
	size: 92897,
	content_type: "image/png",
	created_at: "2026-06-21T09:37:02Z"
};
var orchids_icon_svg_asset_default = {
	version: 1,
	asset_id: "4b5e9389-a585-47fb-8716-0650cd4e7376",
	project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
	url: "/__l5e/assets-v1/4b5e9389-a585-47fb-8716-0650cd4e7376/orchids-icon.svg",
	r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/4b5e9389-a585-47fb-8716-0650cd4e7376/orchids-icon.svg",
	original_filename: "orchids-icon.svg",
	size: 1463,
	content_type: "image/svg+xml",
	created_at: "2026-06-21T09:40:07Z"
};
var gold = "C8A96E";
var EDUCATION = [
	{
		icon: GraduationCap,
		credential: "B.Sc. Mass Communication",
		institution: "University of Benin (UNIBEN)",
		period: "Aug 2021 — Feb 2025"
	},
	{
		icon: Compass,
		credential: "Diploma, Graphic Design",
		institution: "Enikin Design Academy",
		period: "Feb 2017 — Dec 2017"
	},
	{
		icon: CodeXml,
		credential: "Frontend Development",
		institution: "Self-directed · freeCodeCamp · Scrimba · shipped production code"
	},
	{
		icon: Sparkles,
		credential: "AI-Assisted Product Development",
		institution: "Self-directed",
		tools: [
			{
				name: "Lovable",
				logo: "https://lovable.dev/favicon.ico"
			},
			{
				name: "Orchids (Buds)",
				logo: orchids_icon_svg_asset_default.url
			},
			{
				name: "Claude",
				logo: `https://cdn.simpleicons.org/claude/${gold}`
			},
			{
				name: "ChatGPT",
				logo: chatgpt_logo_png_asset_default.url
			},
			{
				name: "GitHub Copilot",
				logo: `https://cdn.simpleicons.org/githubcopilot/${gold}`
			},
			{
				name: "Gemini",
				logo: `https://cdn.simpleicons.org/googlegemini/${gold}`
			}
		]
	}
];
var CERTIFICATIONS = [
	{
		icon: BadgeCheck,
		logo: `https://cdn.simpleicons.org/googleads/${gold}`,
		credential: "Google Ads Display Certification",
		institution: "Google Ads",
		period: "2021"
	},
	{
		icon: BadgeCheck,
		credential: "Jobberman Soft Skills Course",
		institution: "Jobberman Youth Engagement and Learning",
		period: "2021"
	},
	{
		icon: ShieldCheck,
		credential: "Cybersecurity",
		institution: "University of the People",
		period: "Ongoing"
	}
];
var _jsxFileName$1 = "/root/app/code/src/components/portfolio/Education.tsx";
function Card({ e, i }) {
	const Icon = e.icon;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
		delay: i * .05,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border border-border bg-surface p-7 h-full border-l-2 border-l-transparent hover:border-l-accent transition-colors",
			children: [
				e.logo ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: e.logo,
					alt: `${e.institution} — ${e.credential}`,
					width: 28,
					height: 28,
					loading: "lazy",
					className: "h-7 w-7 object-contain"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 11,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					size: 24,
					className: "text-accent",
					strokeWidth: 1.5
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "display-serif mt-4 text-xl md:text-2xl text-foreground",
					children: e.credential
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-2 text-foreground/70",
					children: e.institution
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				e.period && /* @__PURE__ */ (void 0)("div", {
					className: "mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dim",
					children: e.period
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 27,
					columnNumber: 11
				}, this),
				e.tools && e.tools.length > 0 && /* @__PURE__ */ (void 0)("div", {
					className: "mt-5 pt-5 border-t border-border",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dim mb-3",
						children: "Stack"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 33,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap items-center gap-x-5 gap-y-3",
						children: e.tools.map((t) => /* @__PURE__ */ (void 0)("div", {
							title: t.name,
							className: "flex items-center gap-2 text-foreground/75 hover:text-accent transition-colors",
							children: [/* @__PURE__ */ (void 0)("img", {
								src: t.logo,
								alt: `${t.name} — AI tool in stack`,
								width: 18,
								height: 18,
								loading: "lazy",
								className: "h-[18px] w-[18px] object-contain"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 43,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-mono text-[11px] uppercase tracking-[0.14em]",
								children: t.name
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 51,
								columnNumber: 19
							}, this)]
						}, t.name, true, {
							fileName: _jsxFileName$1,
							lineNumber: 38,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 36,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 32,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function Education({ standalone = false }) {
	const Heading = standalone ? "h1" : "h2";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "education",
		className: "py-24 md:py-32 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: "Background" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 70,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
					className: "display-serif mt-6 text-3xl md:text-5xl",
					children: "Learning never stopped."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 71,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 69,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-14 grid md:grid-cols-2 gap-5",
					children: EDUCATION.map((e, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						e,
						i
					}, e.credential, false, {
						fileName: _jsxFileName$1,
						lineNumber: 76,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 74,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-20 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim",
						children: "Certifications"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 82,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 h-px bg-border" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 85,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 81,
					columnNumber: 11
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 80,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid md:grid-cols-2 gap-5",
					children: CERTIFICATIONS.map((e, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						e,
						i
					}, e.credential, false, {
						fileName: _jsxFileName$1,
						lineNumber: 91,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 68,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 67,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/root/app/code/src/routes/education.tsx?tsr-split=component";
function EducationPage() {
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
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Education, { standalone: true }, void 0, false, {
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
				columnNumber: 144
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { EducationPage as component };
