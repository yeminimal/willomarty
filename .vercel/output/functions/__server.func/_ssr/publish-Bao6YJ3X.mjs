import { o as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as unlockPublish, i as saveArticle, t as getPublishGateState } from "./articles.functions-CWdfKmly.mjs";
import { t as Route } from "./publish-DmvxBXmf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publish-Bao6YJ3X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var article_design_process_jpg_asset_default = {
	version: 1,
	asset_id: "2b0dc75e-d140-43e4-bca1-cb78bdbd3a72",
	project_id: "f1851375-a6e9-4675-b255-2aa4c603bacf",
	url: "/__l5e/assets-v1/2b0dc75e-d140-43e4-bca1-cb78bdbd3a72/article-design-process.jpg",
	r2_key: "a/v1/f1851375-a6e9-4675-b255-2aa4c603bacf/2b0dc75e-d140-43e4-bca1-cb78bdbd3a72/article-design-process.jpg",
	original_filename: "article-design-process.jpg",
	size: 102532,
	content_type: "image/jpeg",
	created_at: "2026-10-07T21:03:03Z"
};
var _jsxFileName = "/root/app/code/src/routes/publish.tsx?tsr-split=component";
var ARTICLE = {
	title: "Design is a process, not the result.",
	slug: "design-is-a-process-not-the-result",
	meta_description: "Why the process of exploration, testing and iteration matters more than a polished result, and how design works as a system for solving problems.",
	cover_image_url: article_design_process_jpg_asset_default.url,
	tags: [
		"Design",
		"Process",
		"Creative Practice"
	],
	publish: true,
	body_html: `<h2>Introduction</h2>
<p>Design has always been about one thing for me: the process. Growing up as an artistic kid, I was never content just admiring something beautiful, I wanted to know <em>how</em> it was made. I turned my school notebooks (even my Bible, at some point) into comic books, sketching and re-sketching until I got it just right. A close friend and I used to tear down old electronics trying to build miniature robots, sometimes to walk, sometimes to hop. Each of those two very different pursuits taught me the same thing, that the journey of creating was far more fascinating than the destination, because:</p>
<blockquote><p><em>The process of creating is where we learn what works, what doesn't, and <strong>how</strong> to make what works even better.</em></p></blockquote>
<p>That realization has stayed with me. I was never just captivated by banners, posters, or flyers, I was curious about the steps behind them. That "how" is what shaped me into the designer I am today. I take pride in the process. Yes, it's messy, it's unpredictable, but it's where the real magic happens.</p>
<p>It's not just a means to an end, it's the heartbeat of my work, and it's what keeps me inspired every single day.</p>
<p>Now, let's get into why this is even an article.</p>
<h2>Understanding the problem</h2>
<p>I see a lot of people, designers included, treat design like a magic spell: say the word, and boom, it's done. But design has never been a result, it's a process, a system for solving problems.</p>
<p>Design is how you <em>effectively</em> execute a given task. It's not a magic button.</p>
<p>You see, problems don't just appear with their own solutions in hand, just like doctors don't just hand out prescriptions to every patient that walks into the hospital. Patients have to go through a series of tests to figure out whatever ailments they might have and the best way to go about treating them.</p>
<p>There, those tests, is why I design.</p>
<p>Design doesn't just mean pushing pixels, drawing rectangles, or adding gradients and soft shadows to components. Design shows up in almost every part of our day to day lives, from our architecture to our banking systems. None of that happened with the push of a button. It took time to work, to not work, and then to get better.</p>
<p>The sooner we as designers start seeing design as a process for solving problems, the sooner the industry starts getting the respect it deserves.</p>
<h2>Exploration before execution</h2>
<p>I've had clients reach out asking for something complex done in a few hours, and I humbly decline, because:</p>
<ol>
<li>It goes against my mantra as a designer: good design takes time, and great design takes <em>more</em> time. I'm not about to deliver a below-par result.</li>
<li>They don't respect or understand what it is I actually do. They treat it like an over-the-counter medicine, where they can walk in, purchase, and leave, with no time spent understanding the ailment well enough to prescribe the right solution.</li>
</ol>
<p>It's in the process of designing, the exploring, testing, and revisiting, that you realize there are often better ways to go about something. That's when one problem can produce several designs, in different styles and expressions, each one still working exactly as it should.</p>
<h2>What the result leaves out</h2>
<p>Good design comes from treating it as a process of problem solving, not a result. The moment you fixate on the result, you get hasty and jump to conclusions, when two or three iterations later you could have delivered something far better. A result only shows you the answer, it hides the diagnosis, the tests, and the thinking that got you there, and that's the part actually worth paying for.</p>
<p>Remember, design, like minimalism, is an <em>iterative</em> process. It's not about getting it right the first time, it's about continuously refining it until it can't get any better. Each revision makes the design more focused, more purposeful, and more effective.</p>
<hr>
<p><em>Williams Olayemi Martins is a Visual/Creative Director, brand designer, and frontend developer. See more of his process and work at <a href="https://willomarty.net.ng">willomarty.net.ng</a>.</em></p>`
};
function PublishPage() {
	const [unlocked, setUnlocked] = (0, import_react.useState)(Route.useLoaderData().unlocked);
	const [passphrase, setPassphrase] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [publishedSlug, setPublishedSlug] = (0, import_react.useState)("");
	async function handleUnlock(event) {
		event.preventDefault();
		setPending(true);
		setMessage("");
		try {
			const result = await unlockPublish({ data: { passphrase } });
			if (result.ok) if ((await getPublishGateState()).unlocked) setUnlocked(true);
			else setMessage("Your browser did not retain the publishing session. Open /publish in a new tab and unlock again.");
			else setMessage("reason" in result ? "Set a unique PUBLISH_ACCESS_CODE that is different from every Supabase key." : "That passphrase did not match.");
		} catch {
			setMessage("Could not confirm the publishing session. Open /publish in a new tab and unlock again.");
		} finally {
			setPending(false);
		}
	}
	async function handlePublish() {
		setPending(true);
		setMessage("");
		try {
			const result = await saveArticle({ data: ARTICLE });
			if (result.ok) setPublishedSlug(result.slug);
			else setMessage("error" in result ? result.error ?? "Unable to save article." : `Required article fields are missing: ${result.missing.join(", ")}.`);
		} catch {
			setMessage("The article could not be published. Check the publishing session and Supabase connection.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen bg-background px-6 py-16 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim",
					children: "Private publishing"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-serif mt-4 text-4xl",
					children: "Publish article"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this),
				!unlocked ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleUnlock,
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-sm",
							htmlFor: "publish-passphrase",
							children: "Passphrase"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "publish-passphrase",
							type: "password",
							autoComplete: "current-password",
							required: true,
							value: passphrase,
							onChange: (event) => setPassphrase(event.target.value),
							className: "w-full border border-border bg-surface px-4 py-3 text-foreground"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: pending,
							className: "border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-wider text-background disabled:opacity-50",
							children: pending ? "Checking" : "Unlock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 13
						}, this),
						message && /* @__PURE__ */ (void 0)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 25
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 22
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-8 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: article_design_process_jpg_asset_default.url,
							alt: "Design process artwork with drafting tools and geometric studies",
							className: "w-full border border-border"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "display-serif text-2xl",
								children: ARTICLE.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm text-muted",
								children: ARTICLE.meta_description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 font-mono text-[11px] uppercase tracking-wider text-accent-dim",
								children: ARTICLE.tags.join(" · ")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 13
						}, this),
						publishedSlug ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm",
							children: ["Published successfully. ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/articles/$slug",
								params: { slug: publishedSlug },
								className: "text-accent underline",
								children: "View article"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 77
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 30
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handlePublish,
							disabled: pending,
							className: "border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-wider text-background disabled:opacity-50",
							children: pending ? "Publishing" : "Publish article"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 74
						}, this),
						message && /* @__PURE__ */ (void 0)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 25
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 21
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 10
	}, this);
}
//#endregion
export { PublishPage as component };
