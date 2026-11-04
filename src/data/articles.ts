import designProcessCover from "@/assets/article-design-process.jpg.asset.json";
import webDesignCover from "@/assets/article-web-design.jpg.asset.json";
import brandingCover from "@/assets/article-branding.jpg.asset.json";
import type { Article } from "@/lib/articles.shared";

/**
 * Articles live here as static content, exactly like projects in src/data/work.ts.
 * To add an article: append an entry with status "published" (or "draft" to keep it
 * hidden). The archive, homepage, detail pages and sitemap all read from this list.
 */
export const ARTICLES: Article[] = [
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
