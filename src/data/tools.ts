import scrapelyImg from "@/assets/tool-scrapely.jpg.asset.json";
import screenshotImg from "@/assets/tool-screenshot.jpg.asset.json";
import imagesqueezeImg from "@/assets/tool-imagesqueeze.jpg.asset.json";
import seeqrImg from "@/assets/seeqr.png.asset.json";

export type Tool = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  status: "Live" | "Coming Soon";
  image: string;
};

export const TOOLS: Tool[] = [
  {
    name: "Scrapely",
    tagline: "Turn any webpage into clean JSON.",
    description:
      "Paste a URL or raw HTML, describe what you need, and Scrapely uses AI to extract structured JSON instantly. Built for developers and researchers tired of writing custom scrapers.",
    tags: ["AI", "Web Scraping", "JSON", "React", "Vercel"],
    url: "https://scrapely-ai.vercel.app/",
    status: "Live",
    image: scrapelyImg.url,
  },
  {
    name: "Screenshot Studio",
    tagline: "See your site on any screen.",
    description:
      "Paste a URL, pick a device, and get a pixel-perfect screenshot wrapped in a device mockup. Built for designers who need quick visual checks without a full testing suite.",
    tags: ["Puppeteer", "Node.js", "Railway", "Mockup", "React"],
    url: "https://screen-shot-studio.vercel.app/",
    status: "Live",
    image: screenshotImg.url,
  },
  {
    name: "ImageSqueeze",
    tagline: "Compress images. Keep quality.",
    description:
      "A fully browser-based image compressor — nothing leaves your device. JPEG, PNG and WebP with adjustable quality controls.",
    tags: ["Client-side", "Privacy-first", "WebP", "React", "Vercel"],
    url: "https://image-squeeze-lite.vercel.app/",
    status: "Live",
    image: imagesqueezeImg.url,
  },
  {
    name: "SeeQR",
    tagline: "Upload a photo and we'll read the QR for you.",
    description:
      "Upload a photo from your device media and we'll read the QR for you. Everything happens on your device — no uploads, no accounts, no tracking.",
    tags: ["QR Code", "Offline", "Camera API", "Mobile-first", "React", "Vercel"],
    url: "https://tryseeqr.vercel.app/",
    status: "Live",
    image: seeqrImg.url,
  },
];
