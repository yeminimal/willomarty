import incashImg from "@/assets/work-incash.png.asset.json";
import zamackImg from "@/assets/work-zamack-consults.jpg.asset.json";
import moonRepublicImg from "@/assets/work-moon-republic.png.asset.json";
import moonRepublicProcessImg from "@/assets/work-moon-republic-process.png.asset.json";
import { FRAUWA_COVER } from "@/data/work";

const frauwaBoard = "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F97c3dd71844b4aeb82b75495c4620262?format=webp&width=800&height=1200";
const frauwaPattern = "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F51076b1c49eb4dde8525efa4204bc56a?format=webp&width=800&height=1200";
const frauwaPatch = "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2Fe1399860e24d4f3b9675891ad8092e1e?format=webp&width=800&height=1200";
const frauwaWordmark = "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2Fa396f45b57504103a325c7da3e544a87?format=webp&width=800&height=1200";
const webflowDevImg = { url: "/webflow-development.jpg" };

type SectionVisual = { src: string; alt: string; caption?: string };

export type CaseStudySection =
  | { kind: "prose"; heading: string; body: string | string[]; visuals?: SectionVisual[] }
  | { kind: "list"; heading: string; items: { label: string; body: string; visuals?: SectionVisual[] }[] }
  | { kind: "callout"; heading: string; body: string; visuals?: SectionVisual[] }
  | { kind: "placeholder"; heading: string; note: string }
  | { kind: "image"; heading?: string; src: string; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  client: string;
  role: string;
  scope: string;
  industry: string;
  year?: string;
  liveLink?: { label: string; url: string };
  image: string;
  metaTitle: string;
  metaDescription: string;
  sections: CaseStudySection[];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  incash: {
    slug: "incash",
    client: "Incash",
    role: "UI/UX Designer",
    scope: "Web app, mobile app, marketing website",
    industry: "Fintech / Employee Financial Wellness",
    year: "January – October 2022",
    liveLink: { label: "incash.africa", url: "https://incash.africa" },
    image: incashImg.url,
    metaTitle: "Incash — Case Study | Williams Olayemi Martins",
    metaDescription:
      "UI/UX for Incash, a fintech giving employees salary advances repaid in installments or in full — built from scratch across web, mobile and marketing site.",
    sections: [
      {
        kind: "prose",
        heading: "The Brief",
        body: "Incash was built from scratch to give employees access to salary advances, repaid in installments or in full, removing the wait between need and payday. Built under three constraints: a fixed delivery timeline across three surfaces at once, an already-established brand system (color and typography set before design work began), and a small team — one UI/UX designer working directly with the UX Lead.",
        visuals: [
          {
            src: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F6ba48c1a7e234bacb1059167e0f54be9?format=webp&width=800&height=1200",
            alt: "Incash About Us, Contact Us and Request Demo website pages",
            caption: "Marketing website and employer-facing pages.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Research & Context",
        body: "Usability testing happened mid-process rather than purely upfront, so the design evolved in response to real friction. Three distinct user types had to be designed for on one platform: employees requesting advances, employers managing them, and admins overseeing the system.",
      },
      {
        kind: "list",
        heading: "Design Decisions",
        items: [
          {
            label: "Typography",
            body: "DM Sans and Inter used together for consistency, legibility and mood across all three surfaces — both built for screen legibility at the range of sizes a product spanning mobile and web actually renders at.",
          },
          {
            label: "Color",
            body: "Followed Incash's established brand guidelines. The design job was applying that system intuitively across new interfaces, not originating a new one.",
          },
          {
            label: "Onboarding",
            body: "Onboarding and interface introduction were designed directly, since three different user types on one platform made a clear first-run experience critical rather than cosmetic.",
            visuals: [
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F4460192f69c24b12bc70229ef269d5f3?format=webp&width=800&height=1200",
                alt: "Incash mobile standee showing the salary advance landing screen",
                caption: "First-run marketing screen, mobile.",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F774d5e3bbad54de9a27c8796b1f2c6bb?format=webp&width=800&height=1200",
                alt: "Incash employee dashboard standee with balance, request button and recent requests",
                caption: "Employee dashboard to request and track salary advances.",
              },
            ],
          },
        ],
      },
      {
        kind: "callout",
        heading: "Process — working within a fixed base",
        body: "Ideas were proposed and redesigned to stay consistent with the existing brand and technical scope, rather than choosing between open alternatives. The creative range came from how the system was applied, not from re-opening decisions that had already been made.",
      },
      {
        kind: "prose",
        heading: "Trade-offs",
        body: "Business and technical trade-off decisions — timeline versus scope, feature sequencing — sat with the UX Lead and Product team, not the design role directly.",
      },
      {
        kind: "prose",
        heading: "Outcome",
        body: "Google Play lists Incash in the Finance category, with 50K+ downloads and an average rating of 4.0 out of 5 from 123 reviews. Beyond the numbers, Incash was delivered as a complete product across web app, mobile app and website, from scratch, under a fixed timeline and brand system, with usability testing directly shaping onboarding for a three-sided user base.",
      },
    ],
  },

  "zamack-consults": {
    slug: "zamack-consults",
    client: "Zamack Consults",
    role: "Lead Visual Designer",
    scope: "Logo, brand system, social, print, digital",
    industry: "Legal / Business Registration Consultancy",
    year: "January 2026",
    liveLink: {
      label: "@zamack.consults",
      url: "https://www.instagram.com/zamack.consults/",
    },
    image: zamackImg.url,
    metaTitle: "Zamack Consults — Case Study | Williams Olayemi Martins",
    metaDescription:
      "Complete visual overhaul for a business registration consultancy — modernizing a dated brand without sacrificing the trust a legal services company depends on.",
    sections: [
      {
        kind: "prose",
        heading: "The Brief",
        body: "A complete visual overhaul for a business registration consultancy. The challenge: modernize a dated brand while preserving the professionalism and trust critical to a legal services company. Moving too far toward 'modern' risked reading as less credible; the brief demanded both at once.",
      },
      {
        kind: "prose",
        heading: "Research & Context",
        body: "The process started with the audience, not the logo. Zamack serves two distinct groups — individuals and corporations — who don't respond to the same visual signals. A competitive landscape review followed, identifying where existing players sat and where the gaps were that Zamack could occupy instead of competing head-on for the same territory.",
      },
      {
        kind: "list",
        heading: "Design Decisions",
        items: [
          {
            label: "Logo",
            body: "A geometric sun motif, chosen because it symbolizes clarity and new beginnings — a direct conceptual link to what business legalization actually means for a client: starting something properly, in the clear.",
          },
          {
            label: "Color palette",
            body: "Deep purples, pastels and gold — chosen to hold both ends of the brief at once. Purple and gold carry authority and gravity, while the pastels soften the system so it doesn't read as cold or purely corporate.",
          },
          {
            label: "Typography",
            body: "A defined hierarchy built to work consistently from a business card to a social post, so the brand reads as the same brand regardless of format or scale.",
          },
          {
            label: "System, not just a mark",
            body: "The identity was built modular and scalable from the start — logo, color and type all function independently across social, print and digital, not just on one flagship application.",
          },
        ],
      },
      {
        kind: "callout",
        heading: "Trade-off — dropping the purple gradient",
        body: "The initial logo concept used a purple gradient. It was dropped for a black-and-white version for practical reasons: legibility and scalability at small sizes (Instagram profile photo, Twitter avatar), and reliable contrast across every background color the brand would appear on. Visual ambition gave way to functional consistency.",
      },
      {
        kind: "prose",
        heading: "Outcome",
        body: "The refreshed identity elevated perceived authority while staying warm and accessible. It became the foundation for all marketing activity across Twitter, Instagram and print, leading to increased client inquiries and stronger brand recognition (exact figures unavailable).",
      },
      {
        kind: "prose",
        heading: "Reflection",
        body: "This project reflects an adaptation-first approach — not mimicking trends, but understanding a brand's essence and expressing it through intentional, systems-based design.",
      },
    ],
  },

  "moon-republic": {
    slug: "moon-republic",
    client: "Moon Republic",
    role: "Creative Direction / Marketing Design",
    scope: "Social content, ongoing marketing assets",
    industry: "Web3 / Education",
    year: "November 2025",
    liveLink: { label: "@moonrepublic_io", url: "https://x.com/moonrepublic_" },
    image: moonRepublicImg.url,
    metaTitle: "Moon Republic — Case Study | Williams Olayemi Martins",
    metaDescription:
      "Creative direction and marketing design for a Web3 learning platform, built to deliberately avoid every visual cliché of the category through AI prompt engineering.",
    sections: [
      {
        kind: "prose",
        heading: "The Brief",
        body: "Moon Republic is a Web3 learning platform. The client gave one explicit instruction before any design work began: the visuals could not look like typical Web3 marketing — no repeating 3D-rendered models, no generic crypto iconography. That instruction became the actual brief.",
      },
      {
        kind: "list",
        heading: "Design Decisions",
        items: [
          {
            label: "Brand system",
            body: "The existing brand guide was followed for typography, color and layout, with freedom to explore within those confines rather than treating the guide as a rigid template. The constraint wasn't the visual system itself; it was avoiding category cliché within it.",
          },
          {
            label: "Imagery approach",
            body: "Since off-the-shelf Web3 visual tropes were explicitly off-limits, imagery had to be generated and art-directed rather than sourced or templated — which is what shaped the entire production process.",
          },
        ],
      },
      {
        kind: "callout",
        heading: "The real work — prompt engineering",
        body: "The difficulty wasn't the AI tools — whatever worked was used — the difficulty was getting consistent output that avoided the visual defaults of an entire category. That took iterative, deliberate prompt refinement: testing, rejecting outputs that drifted back toward generic Web3 visual language, and refining until results held a distinct identity. It's a harder problem than a normal identity brief because it isn't solved once; it has to hold up across an ongoing stream of content, not a single hero image.",
      },
      {
        kind: "image",
        heading: "Prompt Iterations",
        src: moonRepublicProcessImg.url,
        alt: "Detailed process of Moon Republic prompt engineering — from starting reference photo through refinement to the final output with money flying from a car window.",
        caption: "Start reference → refined mid-states → final output.",
      },
      {
        kind: "prose",
        heading: "Outcome",
        body: "Delivered and used across Moon Republic's ongoing social and marketing presence. No formal metrics tracked, but the core brief — avoiding the generic Web3 look entirely — was met.",
      },
    ],
  },

  frauwa: {
    slug: "frauwa",
    client: "Frauwa Roofs & Interior Decor",
    role: "Lead Visual Designer",
    scope: "Brand identity, promo reel, website",
    industry: "Construction / Interior Decor",
    liveLink: { label: "Watch promo reel", url: "https://www.instagram.com/reel/DZ0_BfwM33F/?igsh=dm01eXJhb2Y0eXM4" },
    image: FRAUWA_COVER,
    metaTitle: "Frauwa Roofs & Interior Decor — Case Study | Williams Olayemi Martins",
    metaDescription:
      "Full identity, promo reel and website for a construction-to-interiors brand. One arch that reads as both a roofline and a window sill — built to stand out in a category of sameness.",
    sections: [
      {
        kind: "prose",
        heading: "The Brief",
        body: "No fixed brief was handed down. The starting point was learning the company and its base identity well enough to independently decide the right direction for today's market, then taking the lead on that direction.",
      },
      {
        kind: "prose",
        heading: "Research & Context",
        body: "Research covered the market, the audience and the competitive landscape, and one thing was immediately obvious: repetition. The same logos, the same colors, the same visual language across nearly every roofing and construction company. That observation became the direction: build something that stood apart rather than blended in, and let that decision show up in the color palette, typography, visual direction and the logo itself.",
      },
      {
        kind: "list",
        heading: "Design Decisions",
        items: [
          {
            label: "Logo",
            body: "The core design challenge was the company's own history. Frauwa started as a roofing company and later expanded into interior decor — two services that don't obviously share a visual language. The solution was an arch: a form that reads simultaneously as a roofline (construction) and a window sill (interior decor), letting one mark represent both halves of the business instead of forcing a compromise.",
            visuals: [
              { src: frauwaBoard, alt: "Frauwa brand board with wordmark, arch icons and supporting pattern" },
              { src: frauwaPattern, alt: "Repeating Frauwa arch pattern in cream on green", caption: "Supporting pattern" },
            ],
          },
          {
            label: "Color and typography",
            body: "Chosen specifically to break from the sameness identified in the competitive research, rather than to fit inside the conventions of the construction category.",
            visuals: [{ src: frauwaWordmark, alt: "Frauwa cream serif wordmark on a deep green background" }],
          },
        ],
      },
      {
        kind: "callout",
        heading: "Holding the line against the conventional direction",
        body: "The client initially wanted the conventional route — the same generic construction-logo style every competitor uses. That request was pushed back on directly: the entire point was to stand out, not blend in, and the generic path would make it far harder to build a distinct name in a crowded category. Holding that position was as much a part of the work as the design itself.",
        visuals: [{ src: frauwaBoard, alt: "Frauwa identity system with arch marks and pattern" }],
      },
      {
        kind: "prose",
        heading: "In Application",
        body: "The identity needed to work beyond a screen, on uniforms, hard hats and site signage as well as a website.",
        visuals: [
          { src: frauwaPatch, alt: "Frauwa logo patch on deep green fabric" },
          { src: FRAUWA_COVER, alt: "Frauwa branding on green and white hard hats" },
        ],
      },
      {
        kind: "prose",
        heading: "The Promo Reel",
        body: "Built to showcase Frauwa's offerings and past work, used to run promotional ad campaigns — a moving, campaign-ready extension of the new brand system rather than a one-off.",
        visuals: [{ src: frauwaWordmark, alt: "Frauwa wordmark in cream on green", caption: "The identity behind the promo reel" }],
      },
      {
        kind: "prose",
        heading: "Outcome",
        body: "Delivered as a full package — brand identity, marketing materials, a promo reel used for ads, and a company website. No formal metrics tracked, but the deliverables represent a complete identity system, including a client conversation won on reasoning, not just execution.",
        visuals: [{ src: frauwaBoard, alt: "Frauwa's finished wordmark, arch icon and supporting pattern" }],
      },
    ],
  },

"webflow-development": {
    slug: "webflow-development",
    client: "YDPay",
    role: "Brand, Web, & Product Designer",
    scope: "Website redesign & optimization",
    industry: "Fintech · YDPay",
    liveLink: { label: "ydpay.webflow.io", url: "https://ydpay.webflow.io/" },
    image: webflowDevImg.url,
    metaTitle: "YDPay Case Study | Williams Olayemi Martins",
    metaDescription:
      "Website redesign and optimization for a fintech platform — improved visual direction, stronger typographic contrast and accessibility, and clearer navigation across key pages.",
    sections: [
      {
        kind: "prose",
        heading: "The Brief",
        body: "The brief was to improve the visual direction of an existing fintech website, refine the user experience across key pages, and strengthen accessibility and overall presentation without disrupting a live product. Client and product specifics are withheld under a confidentiality agreement.",
      },
      {
        kind: "list",
        heading: "The Work",
        items: [
          {
            label: "UI & Layout Refinements",
            body: "Rebalanced hero sections across the site for stronger visual hierarchy and responsiveness, refined the spacing and alignment of core interface components, and improved the structure of key feature and informational pages for cleaner presentation.",
            visuals: [{
              src: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F7deb340724ba48e8a636706cfda31aac?format=webp&width=800&height=1200",
              alt: "YDPay homepage hero section",
              caption: "Rebalanced hero section, homepage.",
            }],
          },
          {
            label: "Typography & Accessibility",
            body: "Raised typographic contrast across key sections to improve readability and meet accessibility standards, and resolved legibility issues within support and help-center content.",
            visuals: [{
              src: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F0f2641c5f2fe41e89dd90e01c56b41a9?format=webp&width=800&height=1200",
              alt: "YDPay support and FAQ page",
              caption: "Support and FAQ content, improved for legibility.",
            }],
          },
          {
            label: "Navigation & Component Improvements",
            body: "Reorganized footer navigation for clearer wayfinding, and corrected alignment and spacing across key product-page components.",
          },
          {
            label: "Page-Specific Enhancements",
            body: "Repositioned key visual elements for stronger hierarchy, built a new blog listing page and article template, completed several new feature and informational pages, and restructured legal and policy content for clarity.",
            visuals: [{
              src: "https://cdn.builder.io/api/v1/image/assets%2Ff029e48f71974ee389ffe944b9d634a1%2F4fe7446f91ec44ed95534bbe650e4c47?format=webp&width=800&height=1200",
              alt: "YDPay page screenshot",
              caption: "New feature page, built as part of the engagement.",
            }],
          },
        ],
      },
      {
        kind: "callout",
        heading: "Outcome",
        body: "An ongoing engagement: a visually refined, more accessible website with new visually consistent pages and improved navigation.",
      },
    ],
  },
};

export const CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES);
