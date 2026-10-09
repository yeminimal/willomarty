import vanaImg from "@/assets/work-vana.jpg.asset.json";
import frauwaImg from "@/assets/work-frauwa.png.asset.json";
import zamackImg from "@/assets/work-zamack-consults.jpg.asset.json";
import moonRepublicImg from "@/assets/work-moon-republic.png.asset.json";
import activatePilotImg from "@/assets/work-activate-pilot.jpg.asset.json";
import julietMosesImg from "@/assets/work-juliet-moses.jpg.asset.json";
import reboundImg from "@/assets/work-rebound.png.asset.json";
import mytherapistImg from "@/assets/work-mytherapistng.jpg.asset.json";
import getcribImg from "@/assets/work-getcrib.jpg.asset.json";
import incashImg from "@/assets/work-incash.png.asset.json";
import zaytrixModesteImg from "@/assets/work-zaytrix-modeste.jpg.asset.json";
import caretakerImg from "@/assets/work-caretaker-pro.jpg.asset.json";
import zaytrixMgmtImg from "@/assets/work-zaytrix-management.jpg.asset.json";
import endsarsImg from "@/assets/work-endsars.jpg.asset.json";

export type Work = {
  slug: string;
  client: string;
  discipline: string;
  description: string;
  link?: string;
  image?: string;
  /** Featured on the homepage Selected Work grid (larger card). */
  featured?: boolean;
  /** Slug of a matching case study under /work/$slug. When present, the card links there. */
  caseStudySlug?: string;
  /** Extra copy shown only on the featured homepage card. */
  role?: string;
  outcomeLine?: string;
};

export const WORK: Work[] = [
  {
    slug: "incash",
    client: "Incash",
    discipline: "UI/UX · Web App",
    description:
      "Web app, mobile app and marketing site for a fintech giving employees salary advances without waiting on payday.",
    link: "https://x.com/incashafrica",
    image: incashImg.url,
    featured: true,
    caseStudySlug: "incash",
    role: "UI/UX Designer · Fintech / Employee Financial Wellness",
    outcomeLine:
      "Shipped from scratch across three surfaces under a fixed timeline, with usability testing shaping onboarding for a three-sided user base.",
  },
  {
    slug: "zamack-consults",
    client: "Zamack Consults",
    discipline: "Brand Refresh · Logo",
    description:
      "Complete visual identity overhaul for a legal services company — a modern system that preserved the professionalism and trust the industry demands.",
    link: "https://www.instagram.com/zamack.consults/",
    image: zamackImg.url,
    featured: true,
    caseStudySlug: "zamack-consults",
    role: "Lead Visual Designer · Legal / Business Registration",
    outcomeLine:
      "A modular identity that elevated perceived authority while staying warm and accessible — the foundation for all marketing across social and print.",
  },
  {
    slug: "moon-republic",
    client: "Moon Republic",
    discipline: "Creative Direction · Marketing",
    description:
      "Social content and ongoing marketing assets for a Web3 learning platform, built to deliberately avoid every visual cliché of the category.",
    link: "https://x.com/moonrepublic_",
    image: moonRepublicImg.url,
    featured: true,
    caseStudySlug: "moon-republic",
    role: "Creative Direction / Marketing Design · Web3 / Education",
    outcomeLine:
      "The real work was prompt engineering — refining AI outputs until the visuals held a distinct identity instead of drifting back to generic Web3 tropes.",
  },
  {
    slug: "frauwa",
    client: "Frauwa Roofs & Interior Decor",
    discipline: "Brand Identity · Motion · Web",
    description:
      "Full identity, promo reel and website for a company that grew from roofing into interior decor — one mark carrying both halves of the business.",
    link: "https://vt.tiktok.com/ZSQKPaKbA/",
    image: frauwaImg.url,
    featured: true,
    caseStudySlug: "frauwa",
    role: "Lead Visual Designer · Construction / Interior Decor",
    outcomeLine:
      "A logo that reads as both a roofline and a window sill, and a client conversation won on reasoning — not just execution.",
  },
  {
    slug: "zaytrix-modeste",
    client: "Zaytrix Modeste",
    discipline: "Website Design · SEO",
    description:
      "Shopify storefront for a Canadian modest-fashion retailer — AI-assisted product visualization and on-page SEO built around a lean product catalogue.",
    link: "https://zaytrix.com",
    image: zaytrixModesteImg.url,
    role: "Website Design & SEO · Fashion / E-commerce",
    outcomeLine:
      "A merchandising-first storefront and on-page SEO system tuned for a small catalogue that had to punch above its weight in search.",
  },
  {
    slug: "caretaker-pro",
    client: "Caretaker Pro Inc.",
    discipline: "Website · Property Tech",
    description:
      "Refined website and integrated property management software for a Nigerian real-estate facility company operating across multiple estates.",
    link: "https://caretakerpros.com.ng",
    image: caretakerImg.url,
    role: "Web & Product Design · Real Estate / PropTech",
    outcomeLine:
      "A public-facing site and a tenant/manager-facing product built to talk to each other — one identity across marketing and operations.",
  },
  {
    slug: "vana",
    client: "Vana",
    discipline: "Visual Identity · Packaging",
    description:
      "Iconic logo, packaging system and marketing design for an all-natural Nigerian feminine cosmetic brand.",
    link: "https://vt.tiktok.com/ZSQKPqLvx/",
    image: vanaImg.url,
  },
  {
    slug: "getcrib",
    client: "Getcrib",
    discipline: "Marketing · Feature Demos",
    description:
      "Culturally fluent marketing design plus app feature demos and walkthroughs for a Nigerian rental startup.",
    link: "https://x.com/getcrib",
    image: getcribImg.url,
  },
  {
    slug: "activate-pilot",
    client: "Activate Pilot",
    discipline: "Logo · Brand Identity",
    description:
      "Mark and expression for an AI-powered business naming service — across mockups, profile and merchandise.",
    link: "https://vt.tiktok.com/ZSQKPrw82/",
    image: activatePilotImg.url,
  },
  {
    slug: "juliet-moses",
    client: "Juliet Moses",
    discipline: "Brand Identity",
    description:
      "Initials-led monogram, clothing tags, custom shopping bag and stationery for a Nigerian fashion label.",
    image: julietMosesImg.url,
  },
  {
    slug: "rebound",
    client: "Rebound",
    discipline: "Brand Identity (Concept)",
    description:
      "Self-initiated identity for a fictional herbal energy drink — pushing packaging, type and trend experiments.",
    link: "https://www.behance.net/gallery/178594001/REBOUND",
    image: reboundImg.url,
  },
  {
    slug: "mytherapistng",
    client: "Mytherapist.ng",
    discipline: "Marketing Design · Video",
    description:
      "Editorial-feeling marketing design and educational video for a Nigerian mental health firm.",
    link: "https://x.com/mytherapistng",
    image: mytherapistImg.url,
  },
  {
    slug: "zaytrix-mgmt",
    client: "Zaytrix Mgmt. & Tech Group",
    discipline: "Website Design",
    description:
      "Corporate website for a Canadian group operating across telecom, digital technology and management services.",
    link: "https://zaytrix.com",
    image: zaytrixMgmtImg.url,
  },
  {
    slug: "endsars",
    client: "#EndSARS Documentary",
    discipline: "Video Creation",
    description:
      "Final-year Mass Communication documentary spotlighting the #EndSARS movement, inspired by Aisha Yesufu.",
    link: "https://vt.tiktok.com/ZSQKPmSA6/",
    image: endsarsImg.url,
  },
];

export const FEATURED_WORK = WORK.filter((w) => w.featured);
