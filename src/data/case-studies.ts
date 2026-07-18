import incashImg from "@/assets/work-incash.png.asset.json";
import zamackImg from "@/assets/work-zamack-consults.jpg.asset.json";
import moonRepublicImg from "@/assets/work-moon-republic.png.asset.json";
import moonRepublicProcessImg from "@/assets/work-moon-republic-process.png.asset.json";
import frauwaImg from "@/assets/work-frauwa.png.asset.json";
import zaytrixModesteImg from "@/assets/work-zaytrix-modeste.jpg.asset.json";
import caretakerImg from "@/assets/work-caretaker-pro.jpg.asset.json";
import vanaImg from "@/assets/work-vana.jpg.asset.json";
import getcribImg from "@/assets/work-getcrib.jpg.asset.json";
import activatePilotImg from "@/assets/work-activate-pilot.jpg.asset.json";
import julietMosesImg from "@/assets/work-juliet-moses.jpg.asset.json";
import reboundImg from "@/assets/work-rebound.png.asset.json";
import mytherapistImg from "@/assets/work-mytherapistng.jpg.asset.json";
import zaytrixMgmtImg from "@/assets/work-zaytrix-management.jpg.asset.json";
import endsarsImg from "@/assets/work-endsars.jpg.asset.json";

export type CaseStudySection =
  | { kind: "prose"; heading: string; body: string | string[] }
  | { kind: "list"; heading: string; items: { label: string; body: string }[] }
  | { kind: "callout"; heading: string; body: string }
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
  datePublished?: string;
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
    datePublished: "2022-10-01",
    sections: [
      {
        kind: "prose",
        heading: "The Brief",
        body: "Incash was built from scratch to give employees access to salary advances, repaid in installments or in full, removing the wait between need and payday. Built under three constraints: a fixed delivery timeline across three surfaces at once, an already-established brand system (color and typography set before design work began), and a small team — one UI/UX designer working directly with the UX Lead.",
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
        body: "No usage metrics available. Concretely: Incash was delivered as a complete product across web app, mobile app and website, from scratch, under a fixed timeline and brand system, with usability testing directly shaping onboarding for a three-sided user base.",
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
    datePublished: "2026-01-01",
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
    datePublished: "2025-11-01",
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
    image: frauwaImg.url,
    metaTitle: "Frauwa Roofs & Interior Decor — Case Study | Williams Olayemi Martins",
    metaDescription:
      "Full identity, promo reel and website for a construction-to-interiors brand. One arch that reads as both a roofline and a window sill — built to stand out in a category of sameness.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
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
          },
          {
            label: "Color and typography",
            body: "Chosen specifically to break from the sameness identified in the competitive research, rather than to fit inside the conventions of the construction category.",
          },
        ],
      },
      {
        kind: "callout",
        heading: "Holding the line against the conventional direction",
        body: "The client initially wanted the conventional route — the same generic construction-logo style every competitor uses. That request was pushed back on directly: the entire point was to stand out, not blend in, and the generic path would make it far harder to build a distinct name in a crowded category. Holding that position was as much a part of the work as the design itself.",
      },
      {
        kind: "prose",
        heading: "The Promo Reel",
        body: "Built to showcase Frauwa's offerings and past work, used to run promotional ad campaigns — a moving, campaign-ready extension of the new brand system rather than a one-off.",
      },
      {
        kind: "prose",
        heading: "Outcome",
        body: "Delivered as a full package — brand identity, marketing materials, a promo reel used for ads, and a company website. No formal metrics tracked, but the deliverables represent a complete identity system, including a client conversation won on reasoning, not just execution.",
      },
    ],
  },

  "zaytrix-modeste": {
    slug: "zaytrix-modeste",
    client: "Zaytrix Modeste",
    role: "Website Design & SEO Specialist",
    scope: "Shopify Storefront & SEO Audit",
    industry: "Fashion / E-commerce",
    year: "2024",
    liveLink: { label: "zaytrix.com", url: "https://zaytrix.com" },
    image: zaytrixModesteImg.url,
    metaTitle: "Zaytrix Modeste — Case Study | Williams Olayemi Martins",
    metaDescription: "Shopify storefront for a Canadian modest-fashion retailer featuring AI-assisted product visualization and on-page SEO.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Zaytrix Modeste]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Zaytrix Modeste]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Zaytrix Modeste]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Zaytrix Modeste]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Zaytrix Modeste]]",
      },
    ],
  },

  "caretaker-pro": {
    slug: "caretaker-pro",
    client: "Caretaker Pro Inc.",
    role: "Web & Product Designer",
    scope: "Marketing Website & Property Management Software",
    industry: "Real Estate / PropTech",
    year: "2024",
    liveLink: { label: "caretakerpros.com.ng", url: "https://caretakerpros.com.ng" },
    image: caretakerImg.url,
    metaTitle: "Caretaker Pro — Case Study | Williams Olayemi Martins",
    metaDescription: "Website and property management software for a Nigerian real-estate facility company operating across multiple estates.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Caretaker Pro]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Caretaker Pro]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Caretaker Pro]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Caretaker Pro]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Caretaker Pro]]",
      },
    ],
  },

  vana: {
    slug: "vana",
    client: "Vana",
    role: "Visual Designer",
    scope: "Visual Identity & Packaging Design",
    industry: "Cosmetics / Feminine Care",
    year: "2023",
    liveLink: { label: "Watch case", url: "https://vt.tiktok.com/ZSQKPqLvx/" },
    image: vanaImg.url,
    metaTitle: "Vana — Case Study | Williams Olayemi Martins",
    metaDescription: "Iconic logo, packaging system and marketing design for an all-natural Nigerian feminine cosmetic brand.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Vana]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Vana]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Vana]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Vana]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Vana]]",
      },
    ],
  },

  getcrib: {
    slug: "getcrib",
    client: "Getcrib",
    role: "Marketing & Demo Designer",
    scope: "Marketing Graphics & App Feature Walkthroughs",
    industry: "Real Estate / Rent Tech",
    year: "2023",
    liveLink: { label: "View on X", url: "https://x.com/getcrib" },
    image: getcribImg.url,
    metaTitle: "Getcrib — Case Study | Williams Olayemi Martins",
    metaDescription: "Culturally fluent marketing design plus app feature demos and walkthroughs for a Nigerian rental startup.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Getcrib]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Getcrib]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Getcrib]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Getcrib]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Getcrib]]",
      },
    ],
  },

  "activate-pilot": {
    slug: "activate-pilot",
    client: "Activate Pilot",
    role: "Brand Identity Designer",
    scope: "Logo, Brand Mark & Merchandise",
    industry: "AI Naming Service",
    year: "2023",
    liveLink: { label: "Watch case", url: "https://vt.tiktok.com/ZSQKPrw82/" },
    image: activatePilotImg.url,
    metaTitle: "Activate Pilot — Case Study | Williams Olayemi Martins",
    metaDescription: "Mark and expression for an AI-powered business naming service across mockups, profile, and merchandise.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Activate Pilot]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Activate Pilot]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Activate Pilot]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Activate Pilot]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Activate Pilot]]",
      },
    ],
  },

  "juliet-moses": {
    slug: "juliet-moses",
    client: "Juliet Moses",
    role: "Brand Designer",
    scope: "Initials Monogram, Clothing Tags, Custom Shopping Bags & Stationery",
    industry: "Fashion Label",
    year: "2023",
    liveLink: { label: "View profile", url: "https://www.behance.net/willomarty" },
    image: julietMosesImg.url,
    metaTitle: "Juliet Moses — Case Study | Williams Olayemi Martins",
    metaDescription: "Initials-led monogram, clothing tags, custom shopping bag, and stationery for a Nigerian fashion label.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Juliet Moses]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Juliet Moses]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Juliet Moses]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Juliet Moses]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Juliet Moses]]",
      },
    ],
  },

  rebound: {
    slug: "rebound",
    client: "Rebound",
    role: "Brand Identity Designer (Concept)",
    scope: "Brand Identity, Packaging Design & Typography",
    industry: "Beverages / Herbal Energy Drink",
    year: "2023",
    liveLink: { label: "View on Behance", url: "https://www.behance.net/gallery/178594001/REBOUND" },
    image: reboundImg.url,
    metaTitle: "Rebound — Case Study | Williams Olayemi Martins",
    metaDescription: "Self-initiated identity for a fictional herbal energy drink pushing packaging, type, and trend experiments.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Rebound]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Rebound]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Rebound]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Rebound]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Rebound]]",
      },
    ],
  },

  "mytherapist-ng": {
    slug: "mytherapist-ng",
    client: "Mytherapist.ng",
    role: "Marketing & Video Designer",
    scope: "Editorial Marketing Design & Educational Videos",
    industry: "Mental Health",
    year: "2023",
    liveLink: { label: "View on X", url: "https://x.com/mytherapistng" },
    image: mytherapistImg.url,
    metaTitle: "Mytherapist.ng — Case Study | Williams Olayemi Martins",
    metaDescription: "Editorial-feeling marketing design and educational video for a Nigerian mental health firm.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Mytherapist.ng]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Mytherapist.ng]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Mytherapist.ng]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Mytherapist.ng]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Mytherapist.ng]]",
      },
    ],
  },

  "zaytrix-management": {
    slug: "zaytrix-management",
    client: "Zaytrix Mgmt. & Tech Group",
    role: "Corporate Web Designer",
    scope: "Corporate Web Design",
    industry: "Telecom / Management / Tech Group",
    year: "2024",
    liveLink: { label: "zaytrix.com", url: "https://zaytrix.com" },
    image: zaytrixMgmtImg.url,
    metaTitle: "Zaytrix Management — Case Study | Williams Olayemi Martins",
    metaDescription: "Corporate website for a Canadian group operating across telecom, digital technology, and management services.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for Zaytrix Mgmt]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for Zaytrix Mgmt]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for Zaytrix Mgmt]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for Zaytrix Mgmt]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for Zaytrix Mgmt]]",
      },
    ],
  },

  "endsars-documentary": {
    slug: "endsars-documentary",
    client: "#EndSARS Documentary",
    role: "Video Creator & Editor",
    scope: "Mass Communication Video Documentary",
    industry: "Video / Advocacy",
    year: "2020",
    liveLink: { label: "Watch on TikTok", url: "https://vt.tiktok.com/ZSQKPmSA6/" },
    image: endsarsImg.url,
    metaTitle: "#EndSARS Documentary — Case Study | Williams Olayemi Martins",
    metaDescription: "Final-year Mass Communication documentary spotlighting the #EndSARS movement, inspired by Aisha Yesufu.",
    datePublished: "[[PLACEHOLDER: project completion date]]",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: "[[PLACEHOLDER: what was built and why for #EndSARS Documentary]]",
      },
      {
        kind: "prose",
        heading: "The Challenge",
        body: "[[PLACEHOLDER: the core problem or constraint for #EndSARS Documentary]]",
      },
      {
        kind: "prose",
        heading: "Approach & Process",
        body: "[[PLACEHOLDER: how the problem was solved for #EndSARS Documentary]]",
      },
      {
        kind: "prose",
        heading: "Outcome & Results",
        body: "[[PLACEHOLDER: results and metrics for #EndSARS Documentary]]",
      },
      {
        kind: "placeholder",
        heading: "Project Gallery",
        note: "[[PLACEHOLDER: additional project images for #EndSARS Documentary]]",
      },
    ],
  },
};

export const CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES);
