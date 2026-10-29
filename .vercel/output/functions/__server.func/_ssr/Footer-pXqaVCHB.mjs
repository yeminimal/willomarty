import { o as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowUp, b as Download, f as Menu, r as Sun, t as X, u as Moon } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-pXqaVCHB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$2 = "/root/app/code/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 43,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var STORAGE_KEY = "wom-theme";
function getInitial() {
	if (typeof document === "undefined") return "light";
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)(getInitial);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {}
	}, [theme]);
	return {
		theme,
		toggle: () => setTheme((t) => t === "dark" ? "light" : "dark"),
		setTheme
	};
}
var _jsxFileName$1 = "/root/app/code/src/components/portfolio/Nav.tsx";
var PAGE_LINKS = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/education",
		label: "Education"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var LINKS = [
	{
		href: "/#work",
		label: "Work"
	},
	{
		href: "/#tools",
		label: "Tools"
	},
	{
		href: "/#skills",
		label: "Skills"
	},
	{
		href: "/#faq",
		label: "FAQ"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { theme, toggle } = useTheme();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10 min-h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: "/#hero",
					className: "font-mono text-accent text-sm tracking-[0.25em]",
					children: "WOM"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden lg:flex items-center gap-4",
					children: [
						PAGE_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: link.to,
							className: "font-mono text-[11px] uppercase text-muted hover:text-accent",
							children: link.label
						}, link.to, false, {
							fileName: _jsxFileName$1,
							lineNumber: 46,
							columnNumber: 37
						}, this)),
						LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: l.href,
							className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-accent transition-colors",
							children: l.label
						}, l.href, false, {
							fileName: _jsxFileName$1,
							lineNumber: 48,
							columnNumber: 13
						}, this)),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/articles",
							className: "font-mono text-[11px] uppercase text-muted hover:text-accent",
							children: "Articles"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 56,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "/resume.pdf",
							download: true,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim hover:text-accent transition-colors border border-border hover:border-accent-dim/70 px-3 py-1.5",
							children: ["Résumé", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, {
								size: 11,
								className: "group-hover:translate-y-0.5 transition-transform"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 65,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Toggle theme",
							onClick: toggle,
							className: "text-muted hover:text-accent transition-colors",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { size: 16 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 72,
								columnNumber: 33
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { size: 16 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 72,
								columnNumber: 53
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 67,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:hidden flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Toggle theme",
						onClick: toggle,
						className: "text-muted hover:text-accent transition-colors",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { size: 18 }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 81,
							columnNumber: 33
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { size: 18 }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 81,
							columnNumber: 53
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 76,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Toggle navigation",
						className: "text-foreground",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { size: 20 }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 88,
							columnNumber: 21
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { size: 20 }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 88,
							columnNumber: 39
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 83,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 75,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 41,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ (void 0)("div", {
			className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-md",
			children: /* @__PURE__ */ (void 0)("nav", {
				className: "mx-auto max-w-[1100px] px-6 py-6 flex flex-col gap-4",
				children: [
					PAGE_LINKS.map((link) => /* @__PURE__ */ (void 0)(Link, {
						to: link.to,
						onClick: () => setOpen(false),
						className: "font-mono text-xs uppercase text-muted hover:text-accent",
						children: link.label
					}, link.to, false, {
						fileName: _jsxFileName$1,
						lineNumber: 95,
						columnNumber: 39
					}, this)),
					LINKS.map((l) => /* @__PURE__ */ (void 0)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-accent",
						children: l.label
					}, l.href, false, {
						fileName: _jsxFileName$1,
						lineNumber: 97,
						columnNumber: 15
					}, this)),
					/* @__PURE__ */ (void 0)(Link, {
						to: "/articles",
						onClick: () => setOpen(false),
						className: "font-mono text-xs uppercase text-muted hover:text-accent",
						children: "Articles"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 106,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("a", {
						href: "/resume.pdf",
						download: true,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setOpen(false),
						className: "mt-2 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-dim hover:text-accent border border-border hover:border-accent-dim/70 px-4 py-3",
						children: ["Résumé", /* @__PURE__ */ (void 0)(Download, { size: 12 }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 116,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 107,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 94,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 93,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 34,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/root/app/code/src/components/portfolio/Footer.tsx";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-[1100px] px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
				children: "© 2026 Williams Olayemi Martins · Lagos, Nigeria"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "#top",
				className: "group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim hover:text-accent transition-colors",
				children: ["Back to Top", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUp, {
					size: 12,
					className: "group-hover:-translate-y-0.5 transition-transform"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
//#endregion
export { Footer as n, Nav as r, Button as t };
