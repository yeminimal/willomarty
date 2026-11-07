import designProcessCover from "@/assets/article-design-process.jpg.asset.json";
import webDesignCover from "@/assets/article-web-design.jpg.asset.json";
import brandingCover from "@/assets/article-branding.jpg.asset.json";
import webflowMobileLayoutCover from "@/assets/article-webflow-mobile-layout.jpg";
import type { Article } from "@/lib/articles.shared";

/**
 * Articles live here as static content, exactly like projects in src/data/work.ts.
 * To add an article: append an entry with status "published" (or "draft" to keep it
 * hidden). The archive, homepage, detail pages and sitemap all read from this list.
 */
export const ARTICLES: Article[] = [
  {
    id: "57f82616-2611-4df0-ba50-c3bcae68b568",
    title: "Why Your Webflow Mobile Text Layout Keeps Shifting",
    seo_title: "Webflow Mobile Layout Keeps Changing? Here's the Fix",
    heading: "Why Your Webflow Mobile Text Layout Keeps Shifting",
    slug: "when-your-webflow-mobile-text-layout-keeps-resetting-itself",
    meta_description:
      "Fix a Webflow mobile layout that keeps shifting or resetting. Learn how Block layouts, Auto sizing and fixed minimum dimensions can affect responsive text positioning.",
    cover_image_url: webflowMobileLayoutCover,
    cover_image_alt: "Illustration of text layout shifting between desktop and mobile screens",
    cover_image_width: 1536,
    cover_image_height: 1024,
    body_html: `<p>I published a site and checked it on mobile. Everything looked right: the hero text sat exactly where it should. A few hours later, I opened the same page and found it out of position again. It was already wrong when the page loaded, not after a scroll or interaction. I'd adjust it in the Designer, it would hold for a while, and then quietly reset without me touching anything.</p>
<p>When your Webflow mobile layout keeps changing like that, it can be frustrating to know where to start. I even wondered whether someone else on the team had changed it, but nobody had. In my case, switching the text container from Block to Flex stopped the problem. Understanding the sizing around it helped me think more carefully about responsive layouts.</p>
<h2>Why Your Webflow Mobile Layout Keeps Shifting</h2>
<p>There isn't one cause for every mobile layout issue. Styles set at the desktop breakpoint cascade down through tablet and mobile unless they're overridden, so an inherited width, spacing or alignment setting can have an unexpected effect on a smaller screen.</p>
<p>Fixed dimensions and minimum width or height can also keep an element larger than the available space. A parent container's size, padding or display settings affect its children, while font size, line height and text wrapping can change how much room a heading needs. Block and Flex arrange children differently, so the display setting is worth checking alongside those constraints.</p>
<h2>Understanding the Layout Problem</h2>
<p>A few details narrowed down my investigation. The issue showed up on mobile while desktop and tablet stayed in place. It happened in every mobile browser I tried, and the layout was already wrong when the page loaded. It also kept happening inside the Webflow Designer with no edits in between.</p>
<p>That made a browser-specific quirk, a later animation or a publishing issue less convincing as explanations, and pushed me toward the layout settings. Those clues don't rule out scripts, inherited styles or caching in every project, though; they're a starting point for investigation, not a universal diagnosis.</p>
<p>My hero text sat in a <strong>Block</strong> layout with width and height set to Auto and fixed pixel values for minimum width and height. Auto lets the browser calculate a dimension from the layout; a minimum still puts a floor under that calculation. On a narrow mobile viewport, a minimum width can restrict how far a container shrinks, and a minimum height can affect the space available for alignment. The parent container and its child elements all play a part.</p>
<p>Block generally follows normal document flow. Flex, on the other hand, gives a parent controls for arranging and aligning its children along an axis. I suspect the combination of layout and sizing contributed to what I saw, but I didn't isolate each setting in a controlled test, so I can't claim those minimums alone caused the reset.</p>
<h2>How I Fixed the Webflow Mobile Text Layout</h2>
<p>The change that worked for me was straightforward:</p>
<ol><li>I checked the mobile layout in the Designer and looked at the container holding the hero text.</li><li>I noted that it used Block, with Auto width and height and fixed minimum dimensions.</li><li>I changed the text container's display from Block to Flex. The issue hasn't come back since.</li></ol>
<p>That's my reported fix, not a reason to switch every Block element to Flex. Block remains useful for simple content in normal flow; Flex is helpful when you need its controls for arranging and aligning children. If you try it, check the direction, alignment and wrapping at each breakpoint, and reload the Designer to see whether the result holds.</p>
<h2>How to Prevent Webflow Mobile Layout Issues</h2>
<p>I now pay closer attention to responsive breakpoints while building, rather than treating mobile as a final adjustment. After a desktop change, I recheck tablet and both mobile views: inherited styles can affect a smaller breakpoint even when I haven't edited it directly.</p>
<p>Avoid fixed dimensions where the content needs room to adapt, and review minimum width and height against the smallest viewport you support. Inspect the parent container as well as the text element: padding, width and layout can all constrain a child. Then check font size, line height and wrapping at several viewport widths, not just one device preset.</p>
<p>Choose Block, Flex or Grid for the layout you actually need. Auto sizing and fixed minimums aren't inherently wrong, but their combination deserves testing with real content across breakpoints.</p>
<h2>Webflow Mobile Layout Troubleshooting Checklist</h2>
<ul><li>Check the affected element's display setting and how it arranges its children.</li><li>Inspect parent containers for width, padding, alignment and overflow constraints.</li><li>Review width and height values, including fixed dimensions.</li><li>Check whether minimum width or height prevents the layout from adapting.</li><li>Compare inherited and breakpoint-specific styles on desktop, tablet and mobile.</li><li>Review font size, line height and text wrapping with the actual content.</li><li>Test several mobile viewport widths and check child sizing and positioning.</li><li>Reload the Designer and verify the change holds; if the published site differs, investigate publishing and caching too.</li></ul>
<h2>Frequently Asked Questions</h2>
<h3>Why does my Webflow mobile layout keep changing?</h3>
<p>Start with inherited breakpoint styles, parent container settings and fixed or minimum dimensions. A layout may also look different as text wraps at a narrower width. If the issue appears in the Designer as well as the published site, investigate the layout there; if it appears only on the published site, check publishing, caching and scripts too.</p>
<h3>Why does my Webflow text move when I switch to mobile view?</h3>
<p>The mobile viewport gives text less room, which can change wrapping and the height of its container. Inherited spacing, alignment or positioning may also have a different effect at that width. Inspect both the text and its parent at the mobile breakpoint before changing individual offsets.</p>
<h3>Should I use Block or Flex in Webflow?</h3>
<p>Use Block when normal document flow suits the content; use Flex when you need more control over the direction, alignment or wrapping of children. Neither is automatically better for mobile. Flex helped in my particular hero layout, but the right choice depends on the structure and sizing of your own design.</p>
<h3>How do I stop text from overflowing in Webflow mobile view?</h3>
<p>Check the text element and its parents for fixed widths, minimum widths and excessive padding. Allow the container to fit the viewport, and review font size and wrapping at narrow widths. Long unbroken words or links may also need a wrapping rule; test with the actual content rather than hiding overflow without finding its cause.</p>
<h3>Why does my Webflow design look different on mobile and desktop?</h3>
<p>Different viewport widths change the space available for containers and text, while breakpoint overrides can intentionally change styling. Desktop styles also cascade down unless replaced at a smaller breakpoint. Compare the parent and child settings across views, then resize between presets to catch problems at widths you might otherwise miss.</p>
<h2>What I Took Away</h2>
<p>My fix wasn't a magic setting; it was a reminder to understand how the layout and its constraints behave together. If your Webflow text is shifting on mobile, start with the evidence and test the container rather than assuming the same fix will work everywhere.</p>
<p>For another perspective, there's a <a href="https://community.webflow.com/ask-answer/post/texts-on-my-website-returns-back-to-wrong-layout-after-a-while-M9I7JEPDg45qp4L?highlight=lvYrt80KHZtTarI">Webflow Community discussion about text returning to the wrong layout</a>. You can also explore <a href="/work/webflow-development">my Webflow website design and development work</a> or <a href="/articles">more articles on design</a>.</p>`,
    tags: ["Webflow", "Web Design", "Troubleshooting"],
    status: "published",
    published_at: "2026-11-07T14:50:00.000Z",
    created_at: "2026-11-07T14:50:00.000Z",
    updated_at: "2026-11-07T22:17:13.000Z",
  },
  {
    id: "3448cd3e-a530-458b-a42b-8cc762986b40",
    title: "Design is a process, not the result.",
    slug: "design-is-a-process-not-the-result",
    meta_description: "Design has always been about one thing for me: the process.",
    cover_image_url: designProcessCover.url,
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
<ol><li>It goes against my mantra as a designer: good design takes time, and great design takes <em>more</em> time. I'm not about to deliver a below-par result.</li><li>They don't respect or understand what it is I actually do. They treat it like an over-the-counter medicine, where they can walk in, purchase, and leave, with no time spent understanding the ailment well enough to prescribe the right solution.</li></ol>
<p>It's in the process of designing, the exploring, testing, and revisiting, that you realize there are often better ways to go about something. That's when one problem can produce several designs, in different styles and expressions, each one still working exactly as it should.</p>
<h2>What the result leaves out</h2>
<p>Good design comes from treating it as a process of problem solving, not a result. The moment you fixate on the result, you get hasty and jump to conclusions, when two or three iterations later you could have delivered something far better. A result only shows you the answer, it hides the diagnosis, the tests, and the thinking that got you there, and that's the part actually worth paying for.</p>
<p>Remember, design, like minimalism, is an <em>iterative</em> process. It's not about getting it right the first time, it's about continuously refining it until it can't get any better. Each revision makes the design more focused, more purposeful, and more effective.</p>
<hr>
<p><em>Williams Olayemi Martins is a Visual/Creative Director, brand designer, and frontend developer. See more of his process and work at <a href="https://willomarty.net.ng"><u>willomarty.net.ng</u></a>.</em></p>`,
    tags: ["Design", "Branding"],
    status: "published",
    published_at: "2026-10-07T21:01:00.000Z",
    created_at: "2026-10-07T21:03:41.221Z",
    updated_at: "2026-10-08T09:07:25.275Z",
  },
  {
    id: "2dc9582f-428d-4212-b173-dac594a1d1bd",
    title: "Web design with Framer, Webflow & WordPress",
    slug: "web-design-framer-webflow-wordpress",
    meta_description: "[[PLACEHOLDER: notes on choosing Framer, Webflow or WordPress for a website.]]",
    cover_image_url: webDesignCover.url,
    body_html: `<p>[[PLACEHOLDER: your introduction to web design with Framer, Webflow and WordPress.]]</p><h2>Framer</h2><p>[[PLACEHOLDER: your Framer workflow and a real project example.]]</p><h2>Webflow</h2><p>[[PLACEHOLDER: your Webflow workflow and how you approach structure and content.]]</p><h2>WordPress</h2><p>[[PLACEHOLDER: your WordPress workflow and recommendations based on client needs.]]</p>`,
    tags: ["Web Design", "Framer", "Webflow", "WordPress"],
    status: "draft",
    published_at: "2026-10-07T21:00:00.000Z",
    created_at: "2026-10-07T21:03:41.221Z",
    updated_at: "2026-10-09T20:42:27.165Z",
  },
  {
    id: "84cd7308-91bb-4da5-85e5-2ff3e06ed6eb",
    title: "Beyond the logo: building a brand identity",
    slug: "beyond-the-logo-building-a-brand-identity",
    meta_description: "[[PLACEHOLDER: notes on logo design and the wider visual language of a brand.]]",
    cover_image_url: brandingCover.url,
    body_html: `<p>[[PLACEHOLDER: your perspective on logo design and branding.]]</p><h2>A mark with meaning</h2><p>[[PLACEHOLDER: how your logo design decisions connect to a brand’s story.]]</p><h2>Building the system</h2><p>[[PLACEHOLDER: your approach to typography, colour and a consistent brand identity.]]</p><h2>Identity in use</h2><p>[[PLACEHOLDER: real applications and lessons from a project you can share.]]</p>`,
    tags: ["Logo Design", "Branding"],
    status: "draft",
    published_at: "2026-10-07T20:59:00.000Z",
    created_at: "2026-10-07T21:03:41.221Z",
    updated_at: "2026-10-09T20:42:27.165Z",
  },
];

/** Newest first, ready for the archive, homepage strip and sitemap. */
export const PUBLISHED_ARTICLES: Article[] = ARTICLES.filter((a) => a.status === "published");
