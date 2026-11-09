//#region node_modules/.nitro/vite/services/ssr/assets/lovable-error-reporting-4GCzfVkY.js
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
export { reportLovableError as t };
