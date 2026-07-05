import vanaImg from "@/assets/work-vana.jpg.asset.json";
import frauwaImg from "@/assets/work-frauwa.jpg.asset.json";
import zamackImg from "@/assets/work-zamack-consults.jpg.asset.json";
import moonRepublicImg from "@/assets/work-moon-republic.jpg.asset.json";
import activatePilotImg from "@/assets/work-activate-pilot.jpg.asset.json";
import julietMosesImg from "@/assets/work-juliet-moses.jpg.asset.json";
import reboundImg from "@/assets/work-rebound.jpg.asset.json";
import mytherapistImg from "@/assets/work-mytherapistng.jpg.asset.json";
import getcribImg from "@/assets/work-getcrib.jpg.asset.json";
import incashImg from "@/assets/work-incash.jpg.asset.json";
import zaytrixModesteImg from "@/assets/work-zaytrix-modeste.jpg.asset.json";
import caretakerImg from "@/assets/work-caretaker-pro.jpg.asset.json";
import zaytrixMgmtImg from "@/assets/work-zaytrix-management.jpg.asset.json";
import endsarsImg from "@/assets/work-endsars.jpg.asset.json";

export type Work = {
  client: string;
  discipline: string;
  description: string;
  link?: string;
  image?: string;
};

export const WORK: Work[] = [
  {
    client: "Vana",
    discipline: "Visual Identity · Packaging",
    description:
      "Iconic logo, packaging system and marketing design for an all-natural Nigerian feminine cosmetic brand.",
    link: "https://vt.tiktok.com/ZSQKPqLvx/",
    image: vanaImg.url,
  },
  {
    client: "Frauwa Roofs & Interior Decor",
    discipline: "Visual Identity · Motion",
    description:
      "Full visual identity and a promotional video reel for a Lagos roofing and interior construction company.",
    link: "https://vt.tiktok.com/ZSQKPaKbA/",
    image: frauwaImg.url,
  },
  {
    client: "Zamack Consults",
    discipline: "Brand Refresh · Logo",
    description:
      "Visual overhaul and a cleaner, minimalist logo system covering social, profile, flyer and print use cases.",
    link: "https://www.instagram.com/zamackconsults/",
    image: zamackImg.url,
  },
  {
    client: "Moon Republic",
    discipline: "Marketing Design",
    description:
      "Educational and promotional design for a Web3 learning platform — Twitter and Instagram, cohort campaigns and roadmaps.",
    link: "https://x.com/moonrepublic_",
    image: moonRepublicImg.url,
  },
  {
    client: "Activate Pilot",
    discipline: "Logo · Brand Identity",
    description:
      "Mark and expression for an AI-powered business naming service — across mockups, profile and merchandise.",
    link: "https://vt.tiktok.com/ZSQKPrw82/",
    image: activatePilotImg.url,
  },
  {
    client: "Juliet Moses",
    discipline: "Brand Identity",
    description:
      "Initials-led monogram, clothing tags, custom shopping bag and stationery for a Nigerian fashion label.",
    image: julietMosesImg.url,
  },
  {
    client: "Rebound",
    discipline: "Brand Identity (Concept)",
    description:
      "Self-initiated identity for a fictional herbal energy drink — pushing packaging, type and trend experiments.",
    link: "https://www.behance.net/gallery/178594001/REBOUND",
    image: reboundImg.url,
  },
  {
    client: "Mytherapist.ng",
    discipline: "Marketing Design · Video",
    description:
      "Editorial-feeling marketing design and educational video for a Nigerian mental health firm.",
    link: "https://x.com/mytherapistng",
    image: mytherapistImg.url,
  },
  {
    client: "Getcrib",
    discipline: "Marketing · Feature Demos",
    description:
      "Culturally fluent marketing design plus app feature demos and walkthroughs for a Nigerian rental startup.",
    link: "https://x.com/getcrib",
    image: getcribImg.url,
  },
  {
    client: "Incash",
    discipline: "UI/UX · Web App",
    description:
      "Web app, mobile app and marketing site for a fintech focused on financial freedom for employees.",
    link: "https://x.com/incashafrica",
    image: incashImg.url,
  },
  {
    client: "Zaytrix Modeste",
    discipline: "Website Design · SEO",
    description:
      "Shopify storefront for a Canadian modest-fashion retailer — AI-assisted product visualization and on-page SEO.",
    link: "https://zaytrix.com",
    image: zaytrixModesteImg.url,
  },
  {
    client: "Caretaker Pro Inc.",
    discipline: "Website · Property Tech",
    description:
      "Refined website and integrated property management software for a Nigerian real-estate facility company.",
    link: "https://caretakerpros.com.ng",
    image: caretakerImg.url,
  },
  {
    client: "Zaytrix Mgmt. & Tech Group",
    discipline: "Website Design",
    description:
      "Corporate website for a Canadian group operating across telecom, digital technology and management services.",
    link: "https://zaytrix.com",
    image: zaytrixMgmtImg.url,
  },
  {
    client: "#EndSARS Documentary",
    discipline: "Video Creation",
    description:
      "Final-year Mass Communication documentary spotlighting the #EndSARS movement, inspired by Aisha Yesufu.",
    link: "https://vt.tiktok.com/ZSQKPmSA6/",
    image: endsarsImg.url,
  },
];
