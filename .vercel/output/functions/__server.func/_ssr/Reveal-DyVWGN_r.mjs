import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-DyVWGN_r.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/root/app/code/src/components/portfolio/Reveal.tsx";
function Reveal({ children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
//#endregion
export { Reveal as t };
