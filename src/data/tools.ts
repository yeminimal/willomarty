export type Tool = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  status: "Live" | "Coming Soon";
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
  },
  {
    name: "Screenshot Studio",
    tagline: "See your site on any screen.",
    description:
      "Paste a URL, pick a device, and get a pixel-perfect screenshot wrapped in a device mockup. Built for designers who need quick visual checks without a full testing suite.",
    tags: ["Puppeteer", "Node.js", "Railway", "Mockup", "React"],
    url: "https://screen-shot-studio.vercel.app/",
    status: "Live",
  },
  {
    name: "ImageSqueeze",
    tagline: "Compress images. Keep quality.",
    description:
      "A fully browser-based image compressor — nothing leaves your device. JPEG, PNG and WebP with adjustable quality controls.",
    tags: ["Client-side", "Privacy-first", "WebP", "React", "Vercel"],
    url: "https://image-squeeze-lite.vercel.app/",
    status: "Live",
  },
  {
    name: "Pocket QR",
    tagline: "Generate and scan QR codes — in your pocket.",
    description:
      "A lightweight QR toolkit: generate codes from any text or URL, and scan them with your camera. No app install, no permissions beyond camera.",
    tags: ["QR Code", "Camera API", "Mobile-first", "React", "Vercel"],
    url: "https://pocket-qr-vision.vercel.app/",
    status: "Live",
  },
];
