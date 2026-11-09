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
    id: "3bc70f01-934f-4357-85bd-c84faaf99ec4",
    title: "Why Your Business Still Needs a Real Website (And Why \"One-Shotting\" One With AI Isn't the Shortcut You Think It Is)",
    slug: "why-your-business-still-needs-a-real-website",
    meta_description:
      "Why a professional website still matters for business credibility, and why AI works best when guided by experience and oversight.",
    cover_image_url: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F2edbf6bcb25d49a2b0f34356e30c62fc?format=webp&width=800&height=1200",
    cover_image_alt: "Why businesses need websites: build credibility, reach more people, and grow your business",
    body_html: `<p>There's a conversation happening right now among small business owners and founders that goes something like this: "Why pay a designer or developer when I can just prompt an AI to build me a website in twenty minutes?"</p>
<p>It's a fair question. And the honest answer is more nuanced than either side of that argument wants to admit.</p>
<h2>A website is not a URL</h2>
<p>A lot of people think of a website as a destination, a link you can share. It's not. A website is your storefront, your handshake, your first impression, your sales rep working at 2am, and your credibility signal, all running at once, for every single visitor who lands on it.</p>
<p>Stanford's research on web credibility found that people judge whether a company is trustworthy based on its site's design more than anything else on the page. Not the copy. Not even what the business actually does. The design, judged in seconds, before the visitor has processed a word of content. That judgment happens almost instantly, a rapid, largely subconscious read on layout, typography, and color, before anyone engages with what the site is actually saying.</p>
<p>That's the part people miss when they're deciding between a website and just running their business entirely off Facebook or WhatsApp. It's not really a decision about convenience. It's a decision about what kind of first impression you're willing to let a stranger form about your business in the first two seconds, with no say in the matter.</p>
<h2>AI is not the problem. Delegating without understanding is</h2>
<p>I want to be clear about something, because this isn't an anti-AI take. Integrating AI into how you work or build is not a bad thing. I use AI tools regularly. The issue was never the tool. It's the intent and the oversight behind how it's used.</p>
<p>If you know how a website works, if you understand what good information architecture looks like, what makes a layout convert instead of confuse, what technical SEO actually does behind the scenes, then using AI to move faster is a genuinely smart call. You know what to check. You know when the output is wrong. You know what "good" looks like, so you can tell when the AI has handed you something that isn't.</p>
<p>But if you have no idea how a website works, no idea what you're looking at when the AI hands you a finished page, and no way to tell whether what you just "one-shotted" is structurally sound, accessible, fast, or discoverable on Google at all, then you haven't built a website. You've generated something that looks like one. And in that specific scenario, you'd genuinely be better off just running your business from a WhatsApp Business number or a Facebook page, because at least there you're not pretending to have something you don't actually have control over.</p>
<h2>The kitchen analogy</h2>
<p>Think about a chef. You don't throw every ingredient into one pot at once and expect something good to come out of it. Good food is sequence, technique, and judgment, applied by someone who knows what they're doing, at every stage.</p>
<p>Here's the part people don't think about: someone who has never worked in a kitchen often can't tell when food hasn't been prepared properly. It still looks like food. It might even taste fine to an untrained palate. But an investor walking through that kitchen, watching how carelessly the staff handles prep, storage, and process, isn't going to invest in that franchise. Not because the food tasted bad to them personally. Because they recognized, from experience, what careless process looks like, and they know what it predicts about everything else downstream.</p>
<p>That's exactly what happens with a website built entirely by someone who doesn't know what a website needs. It might look fine to the person who built it. It might even look fine to their friends. But to a professional, a partner, an investor, or a discerning customer, the cracks are visible immediately: broken technical SEO, inaccessible navigation, slow load times, a structure that confuses rather than guides. The person who built it often can't see those cracks, because they don't know what they're looking for. The people whose trust actually matters to the business can.</p>
<h2>What's actually happening behind a professional website</h2>
<p>A website isn't just the page people see. There's technical SEO, the structural work that determines whether Google can even find and understand your site in the first place. There's performance, how fast it loads, whether it holds up on mobile, whether it breaks under real-world conditions. There's how it's presented, the actual design decisions that signal competence or carelessness in the first few seconds. And there's the ongoing operational layer: analytics, accessibility, security, maintenance, all the background work that keeps a site functioning as a business asset instead of slowly rotting into something broken, slow, and unindexed.</p>
<p>None of that is visible in a finished-looking page. All of it is the actual difference between a site that grows a business and one that quietly undermines it.</p>
<h2>Hire the professional, especially when it matters</h2>
<p>If you're running a business you want people to take seriously, a company you want to be seen as reputable, this is exactly where you need someone who actually understands how all of this fits together. Not because AI can't help build it. Because someone needs to be the one who knows what good looks like, who can direct the tools with intent, and who can catch what's wrong before a customer, a partner, or an investor does it for you.</p>
<p>A website built with real oversight, whether that oversight comes from a professional using AI deliberately or building by hand, is still fundamentally different from one generated with none. The tool isn't the variable that matters. The judgment behind it is.</p>`,
    tags: ["Web Design", "Business", "AI"],
    status: "published",
    published_at: "2026-11-09T22:40:25.000Z",
    created_at: "2026-11-09T22:40:25.000Z",
    updated_at: "2026-11-09T22:40:25.000Z",
  },
  {
    id: "0f9f67d9-a6bb-4960-8c79-4b0aab8e0fe9",
    title: "Designing with Webflow, Framer and WordPress: My Workflow, Experience and Recommendations",
    slug: "designing-with-webflow-framer-and-wordpress",
    meta_description:
      "My website design workflow, experience with Webflow, Framer and WordPress, and recommendations for choosing the right platform for a project.",
    cover_image_url: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F4e3e06c0cfb5466bb5c089c2313811a1?format=webp&width=800&height=1200",
    body_html: `<p>There isn't a single way to build a great website, and there certainly isn't one platform that gets everything right.</p>
<p>Over the years, I've worked with different website-building tools, each offering its own approach to translating ideas into functional digital experiences. Three platforms I've particularly worked with are Webflow, Framer and WordPress.</p>
<p>I've used Webflow for marketing and fintech websites, Framer for business websites, and WordPress for business-focused web projects. While they can sometimes achieve similar results, the experience of designing, building and managing websites with each platform is quite different.</p>
<p>For me, choosing between Webflow, Framer and WordPress isn't about which platform is the most popular or has the longest feature list. It's about understanding what a business needs, how its website will evolve, and which platform makes the most sense for the job.</p>
<p>Here's how I approach designing with these three platforms, what I've learned from using them, and what I'd recommend each one for.</p>
<h2>My approach to website design and development</h2>
<p>Before opening Webflow, Framer, WordPress or even Figma, I want to understand what the website is supposed to accomplish.</p>
<p>A website isn't simply a collection of attractive sections arranged vertically. It's a business tool, a communication channel and, often, the first meaningful interaction someone has with a brand.</p>
<p>My process generally starts with understanding the business, its audience, its offerings and what it wants visitors to do.</p>
<p>From there, I work through a few important stages.</p>
<h3>1. Understanding the business and its objectives</h3>
<p>I begin by understanding the business, its products or services, its target audience and the problems its website needs to solve.</p>
<p>A fintech company looking to communicate trust and simplify financial services doesn't need the same website experience as a creative agency showcasing its portfolio or a service business trying to generate enquiries.</p>
<p>These differences influence everything from the information architecture to the visual direction and eventual platform selection.</p>
<h3>2. Research and information architecture</h3>
<p>Once the objectives are clear, I establish how information should be organised.</p>
<p>This involves identifying the necessary pages, determining their relationships, prioritising important content and mapping out the visitor journey.</p>
<p>For a marketing website, this might mean structuring the homepage around the value proposition, services, credibility, benefits and conversion points.</p>
<p>For a more content-driven website, the architecture might need to accommodate categories, articles, searchable resources and frequently updated information.</p>
<h3>3. Visual direction and interface design</h3>
<p>With the structure established, I begin translating the brand's identity into a digital experience.</p>
<p>Typography, colours, imagery, spacing, layout and interaction patterns all contribute to how a website communicates.</p>
<p>I pay particular attention to visual consistency and hierarchy. Visitors should be able to understand what a business offers, where to find relevant information and what action to take without having to work too hard.</p>
<h3>4. Choosing the right platform</h3>
<p>This is where Webflow, Framer and WordPress come into consideration.</p>
<p>I evaluate the project's complexity, content requirements, desired interactions, maintenance expectations, available resources and the client's ability to manage the website after launch.</p>
<p>The platform should support the design and business objectives, not dictate unnecessary limitations.</p>
<h3>5. Responsive implementation and testing</h3>
<p>A website that looks impressive on a desktop but falls apart on a mobile device isn't finished.</p>
<p>I review layouts across different screen sizes, paying attention to typography, spacing, navigation, image behaviour, element positioning and content hierarchy.</p>
<p>I also check functionality, links, forms, accessibility, loading behaviour and essential SEO configurations before launch.</p>
<p>This is particularly important because responsive design isn't simply about making everything smaller. It's about making the experience work appropriately for each screen size.</p>
<h2>Designing with Webflow</h2>
<p>Webflow is one of the platforms I particularly enjoy working with, especially when a project requires considerable control over its visual presentation and responsive behaviour.</p>
<p>What makes Webflow interesting to me is the relationship between visual design and the underlying structure of a website.</p>
<p>It provides a visual development environment where designers can work with layout properties, CSS concepts, responsive breakpoints, interactions and CMS collections without having to write every line of code manually.</p>
<h3>What I like about Webflow</h3>
<p>Webflow offers a useful balance between visual freedom and structured website development.</p>
<p>Some of its strengths include:</p>
<ul><li><strong>Visual development:</strong> Working with layout properties, positioning, spacing, typography and other CSS concepts through a visual interface.</li><li><strong>Responsive breakpoints:</strong> Creating and refining layouts for different screen sizes.</li><li><strong>CMS:</strong> Managing dynamic content such as blog posts, projects, resources and other structured information.</li><li><strong>Interactions and animations:</strong> Creating engaging interactions without relying on a collection of unrelated animation tools.</li><li><strong>SEO controls:</strong> Managing page titles, meta descriptions, canonical URLs, image alt text and other important on-page SEO elements.</li><li><strong>Reusable components:</strong> Maintaining consistency across repeated sections and website elements.</li></ul>
<p>I particularly appreciate the level of control Webflow provides when translating a visual design into a responsive website.</p>
<p>It does, however, require an understanding of layout behaviour. Knowing how Flexbox, Grid, positioning, dimensions and breakpoint inheritance work makes a considerable difference to the quality of the final result.</p>
<p>I recently documented an issue I encountered with a Webflow mobile layout and how I resolved it by investigating the element's layout settings.</p>
<p>"<a href="https://willomarty.net.ng/articles/when-your-webflow-mobile-text-layout-keeps-resetting-itself">Read: When Your Webflow Mobile Text Layout Keeps Resetting Itself</a>".</p>
<h3>A project I worked on with Webflow: A fintech platform</h3>
<p>One of my Webflow-related projects involved a fintech platform.</p>
<p>The project involved working on the website's visual experience and implementation, with attention to its layout, content presentation, responsiveness and the communication of its financial products and services.</p>
<p>Fintech websites have a particular responsibility: they need to communicate information clearly while establishing credibility and trust.</p>
<p>The experience reinforced why I value having control over page structure, responsive behaviour and the presentation of complex information.</p>
<p>For this kind of project, Webflow is particularly useful because it provides a good balance between visual flexibility and content management.</p>
<h3>What I'd recommend Webflow for</h3>
<p>I'd consider Webflow for:</p>
<ul><li>Corporate and business websites.</li><li>SaaS and fintech marketing websites.</li><li>Professional service websites.</li><li>Marketing landing pages.</li><li>Portfolio websites.</li><li>Content-driven websites that benefit from structured CMS collections.</li><li>Websites requiring detailed responsive layouts and custom interactions.</li></ul>
<p>I'd particularly recommend it when the visual experience is important and the project requires more design control than a conventional template-based website might offer.</p>
<h2>Designing with Framer</h2>
<p>Framer approaches website design from a slightly different perspective.</p>
<p>Its design environment feels familiar to people who work with interface design tools, making it particularly attractive for designers who want to move from visual concepts to published websites without a complicated development workflow.</p>
<p>I've used Framer to design a marketing website for Hola Contracting, a Canada-based contracting and janitorial services business.</p>
<h3>What I like about Framer</h3>
<p>Framer makes it relatively straightforward to create visually expressive websites.</p>
<p>Some of its strengths include:</p>
<ul><li><strong>Design-first workflow:</strong> A familiar visual environment for arranging and styling website elements.</li><li><strong>Responsive layouts:</strong> Creating layouts that adapt across desktop, tablet and mobile devices.</li><li><strong>Interactions and animations:</strong> Adding motion and interactive elements to improve the experience.</li><li><strong>Components:</strong> Creating reusable design elements and maintaining consistency.</li><li><strong>CMS:</strong> Managing structured content for blogs, projects and other dynamic sections.</li><li><strong>Publishing workflow:</strong> Moving from design to a published website within the same platform.</li></ul>
<p>One of the things I appreciate about Framer is how quickly I can explore visual ideas and translate them into a polished marketing website.</p>
<p>This is particularly useful when a project needs a strong visual identity, engaging interactions and a relatively straightforward content structure.</p>
<h3>A project I worked on with Framer: Hola Contracting</h3>
<p>Hola Contracting is a Canada-based business offering contracting and janitorial-related services.</p>
<p>I designed its marketing website using Framer.</p>
<p>The objective was to give the business a professional digital presence where potential customers could understand its services, learn about the company and find a clear route to making enquiries.</p>
<p>For a service-based business, the website needs to communicate more than just what the company does.</p>
<p>It needs to establish confidence, explain its offerings and make it easy for potential customers to take the next step.</p>
<p>This influenced the way I approached the site's visual hierarchy, service presentation and overall marketing experience.</p>
<p>The project was a good example of where Framer's design-oriented workflow made sense.</p>
<p>Although the original project domain is no longer renewed, the design and project experience remain part of my work.</p>
<h3>What I'd recommend Framer for</h3>
<p>I'd consider Framer for:</p>
<ul><li>Designer and developer portfolios.</li><li>Creative agency websites.</li><li>Startup landing pages.</li><li>Marketing websites.</li><li>Personal brands.</li><li>Product launch websites.</li><li>Visually expressive websites with lightweight content requirements.</li></ul>
<p>I'd particularly recommend Framer when visual presentation, rapid iteration and a relatively straightforward publishing workflow are high priorities.</p>
<p>For larger content-heavy websites or projects requiring extensive custom integrations, I'd evaluate its capabilities and limitations more carefully before making a recommendation.</p>
<h2>Designing with WordPress</h2>
<p>WordPress is a different kind of website-building platform.</p>
<p>Unlike Webflow and Framer, which provide more integrated visual design and publishing environments, WordPress is an extensible content management system with a much broader ecosystem of themes, plugins and development options.</p>
<p>Its flexibility is one of its biggest strengths.</p>
<p>Depending on the project, WordPress can be used with the native block editor, custom themes, page builders and other development approaches.</p>
<h3>What I like about WordPress</h3>
<p>WordPress is particularly interesting when a website needs to accommodate different types of content, integrations and functionality.</p>
<p>Some of its strengths include:</p>
<ul><li><strong>Content management:</strong> Creating, organising and managing pages, posts and other content types.</li><li><strong>Extensibility:</strong> Expanding functionality through plugins and custom development.</li><li><strong>Themes and customisation:</strong> Using existing themes or building more tailored website experiences.</li><li><strong>SEO ecosystem:</strong> Access to various SEO plugins and tools for managing technical and on-page optimisation.</li><li><strong>Integrations:</strong> Connecting websites to external services, forms, analytics and other business tools.</li><li><strong>Ownership and hosting flexibility:</strong> Choosing hosting arrangements and managing the underlying WordPress installation.</li></ul>
<p>I also appreciate that WordPress can accommodate very different types of websites.</p>
<p>A simple business website and a complex publishing platform can both be built with WordPress, although their implementation requirements will be very different.</p>
<p>That flexibility also comes with responsibility.</p>
<p>Plugin quality, security updates, hosting, backups, performance optimisation and compatibility need to be managed properly.</p>
<p>A poorly maintained WordPress website can become difficult to manage, slow or vulnerable to security issues.</p>
<h3>A project I worked on with WordPress: Tutchonce</h3>
<p>I designed the Tutchonce website using WordPress.</p>
<p>The project gave me another opportunity to work with WordPress as the underlying platform for a business website.</p>
<p>What makes this experience relevant is the distinction between designing a website and selecting the technology that powers it.</p>
<p>A website still needs a coherent visual direction, logical information architecture, responsive layouts and a useful content experience, regardless of whether it's built with WordPress, Webflow or Framer.</p>
<p>WordPress provides the flexibility to approach these requirements through different themes, editing tools and extensions.</p>
<h3>What I'd recommend WordPress for</h3>
<p>I'd consider WordPress for:</p>
<ul><li>Blogs and online publications.</li><li>Content-heavy business websites.</li><li>Corporate websites.</li><li>Websites requiring extensive integrations.</li><li>Websites with complex content management requirements.</li><li>Membership and directory websites.</li><li>E-commerce projects, particularly those suited to WooCommerce.</li><li>Businesses requiring greater control over their hosting environment.</li></ul>
<p>I'd particularly recommend it when content management, extensibility and long-term flexibility are important considerations.</p>
<h2>Webflow vs Framer vs WordPress: What's the difference?</h2>
<p>Although these platforms can all be used to create professional websites, they approach website design and management differently.</p>
<p>Here's how I'd compare them from a practical design and project perspective.</p>
<div class="overflow-x-auto"><table><thead><tr><th>Consideration</th><th>Webflow</th><th>Framer</th><th>WordPress</th></tr></thead><tbody><tr><th>Design workflow</th><td>Visual development</td><td>Design-first</td><td>Theme, blocks and builders</td></tr><tr><th>Visual flexibility</th><td>High</td><td>High</td><td>Depends on implementation</td></tr><tr><th>Responsive design</th><td>Detailed breakpoint controls</td><td>Visual responsive controls</td><td>Depends on theme and implementation</td></tr><tr><th>CMS</th><td>Integrated CMS</td><td>Integrated CMS</td><td>Extensive content management</td></tr><tr><th>Interactions</th><td>Advanced visual interactions</td><td>Visual interactions and animations</td><td>Depends on plugins and development</td></tr><tr><th>SEO</th><td>Built-in controls</td><td>Built-in controls</td><td>Core features and plugins</td></tr><tr><th>Extensibility</th><td>Integrations and custom code</td><td>Integrations and custom code</td><td>Extensive plugin and development ecosystem</td></tr><tr><th>Maintenance</th><td>Platform-managed infrastructure</td><td>Platform-managed infrastructure</td><td>Hosting and installation maintenance</td></tr><tr><th>Ideal use</th><td>Marketing and CMS-driven websites</td><td>Visual marketing and creative websites</td><td>Content-heavy and extensible websites</td></tr></tbody></table></div>
<p>It's worth noting that none of these platforms automatically guarantees better SEO, faster performance or a better user experience.</p>
<p>Those outcomes depend on implementation, content quality, technical configuration, hosting and ongoing maintenance.</p>
<h2>Which platform would I recommend?</h2>
<p>If someone asked me which of the three platforms they should use, I wouldn't immediately give them a name.</p>
<p>I'd first ask what they're trying to achieve.</p>
<p>Here is how I'd approach some common scenarios.</p>
<h3>For a startup or SaaS company</h3>
<p>I'd lean towards Webflow or Framer.</p>
<p>Both can support polished marketing websites, landing pages and product communication.</p>
<p>I'd consider Webflow when the website needs more detailed CMS structures, responsive control or a larger marketing content system.</p>
<p>I'd consider Framer when the priority is a visually expressive website with a relatively straightforward content structure and fast design iteration.</p>
<h3>For a creative agency or personal brand</h3>
<p>I'd lean towards Framer or Webflow.</p>
<p>Framer is attractive for portfolios and creative websites where visual presentation and motion are important.</p>
<p>Webflow is equally capable, particularly when the website needs more structured content, custom interactions or detailed control over its layout.</p>
<h3>For a business with a blog or extensive content requirements</h3>
<p>I'd give WordPress serious consideration.</p>
<p>Its content management capabilities, plugin ecosystem and flexibility make it a strong option for businesses that publish frequently or require a more extensive publishing infrastructure.</p>
<p>Webflow can also work well for structured content, so I'd evaluate the actual publishing requirements before deciding.</p>
<h3>For an e-commerce business</h3>
<p>I'd assess the products, inventory, payment requirements, integrations and operational needs before selecting a platform.</p>
<p>WordPress with WooCommerce can be suitable for businesses that need extensive customisation and control.</p>
<p>For other projects, a dedicated commerce platform might be more appropriate.</p>
<p>The important thing is to select a platform that supports the business beyond the initial website launch.</p>
<h2>A few things I consider regardless of the platform</h2>
<p>There are certain principles I don't think should change simply because the underlying website builder changes.</p>
<h3>Responsive design should be intentional</h3>
<p>Mobile responsiveness isn't something I leave until the end.</p>
<p>I consider how content, navigation, typography and layouts will adapt across different devices throughout the design process.</p>
<h3>SEO should be part of the design process</h3>
<p>Search engine optimisation shouldn't be an afterthought.</p>
<p>Page structure, heading hierarchy, content organisation, descriptive URLs, metadata, image optimisation, internal linking and accessibility all contribute to a website's discoverability.</p>
<p>The platform provides tools, but the quality of their implementation still matters.</p>
<h3>Performance is part of the user experience</h3>
<p>Animations, images, fonts, third-party scripts and unnecessary plugins can affect loading behaviour.</p>
<p>I pay attention to how these elements are implemented because a visually impressive website should still feel responsive and accessible.</p>
<h3>The client should be able to manage their website</h3>
<p>A website shouldn't become a permanent dependency on its designer for every minor content update.</p>
<p>Where possible, I consider how the client will manage their pages, services, articles and other content after handover.</p>
<p>The best platform is also one the business can realistically maintain.</p>
<h2>Final thoughts: It's about choosing the right tool for the job</h2>
<p>Working with Webflow, Framer and WordPress has reinforced something I believe about website design: the technology is important, but it isn't the starting point.</p>
<p>A good website begins with understanding the business, its audience and what the experience needs to accomplish.</p>
<p>Webflow offers an excellent visual development environment with detailed layout control. Framer makes it easier to explore and publish visually expressive websites. WordPress provides an extensive content management and development ecosystem.</p>
<p>Each has its strengths, limitations and ideal applications.</p>
<p>I don't believe in choosing a platform simply because it's trending or because it's the one I'm most comfortable using.</p>
<p>I'd rather understand the problem, evaluate the requirements and recommend the technology that makes the most sense.</p>
<p>Ultimately, I'm not interested in just putting websites online. I'm interested in designing digital experiences that communicate clearly, work reliably and give businesses a better way to connect with their audiences.</p>
<p>If you're looking for someone to help with your next website, "<a href="https://willomarty.net.ng/#projects">explore my projects</a>" or "<a href="https://willomarty.net.ng">get in touch</a>".</p>`,
    tags: ["Web Design", "Webflow", "Framer", "WordPress"],
    status: "published",
    published_at: "2026-11-09T03:00:00.000Z",
    created_at: "2026-11-09T03:00:00.000Z",
    updated_at: "2026-11-09T03:00:00.000Z",
  },
  {
    id: "57f82616-2611-4df0-ba50-c3bcae68b568",
    title: "Why Your Webflow Mobile Text Layout Keeps Shifting (And How to Fix It)",
    seo_title: "Webflow Mobile Layout Keeps Changing? Here's the Fix",
    heading: "Why Your Webflow Mobile Text Layout Keeps Shifting (And How to Fix It)",
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
