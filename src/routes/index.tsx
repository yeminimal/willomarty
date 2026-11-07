import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { MetricStrip } from "@/components/portfolio/MetricStrip";
// import { Experience } from "@/components/portfolio/Experience";
import { Work } from "@/components/portfolio/Work";
import { Footer } from "@/components/portfolio/Footer";
import { Faq } from "@/components/portfolio/Faq";
import portrait from "@/assets/portrait.webp.asset.json";
import { LatestArticles } from "@/components/articles/LatestArticles";
import { PUBLISHED_ARTICLES } from "@/data/articles";

const SITE_URL = "https://willomarty.net.ng";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "Williams Olayemi Martins",
  "alternateName": "Willomarty",
  "url": SITE_URL,
  "image": `${SITE_URL}${portrait.url}`,
  "email": "willomarty01@gmail.com",
  "telephone": "+2347026787353",
  "jobTitle": "Brand, Product & Web Designer",
  "description": "Lagos-based brand, product and web designer with over seven years of experience creating visual identities, digital products and tailored web experiences.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "sameAs": [
    "https://www.behance.net/willomarty",
    "https://github.com/yeminimal",
    "https://x.com/willomarty"
  ],
  "knowsAbout": [
    "Brand Identity Design",
    "Logo Design",
    "Web Design",
    "Webflow",
    "Framer",
    "Figma",
    "WordPress",
    "UI/UX Design",
    "Product Design",
    "Frontend Development",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Video Production",
    "Motion Graphics",
    "Creative Direction"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Brand, Product, and Web Designer",
    "occupationLocation": {
      "@type": "City",
      "name": "Lagos, Nigeria"
    },
    "skills": "Brand Identity, Webflow, Framer, Figma, WordPress, React, TypeScript, UI/UX Design, Video Production"
  }
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Williams Olayemi Martins — Willomarty",
  "url": "https://willomarty.net.ng",
  "description": "Portfolio of Williams Olayemi Martins — brand designer, product designer, web designer, based in Lagos, Nigeria.",
  "author": {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`
  },
  "inLanguage": "en"
};

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Williams Olayemi Martins — Brand, Product & Web Designer" },
        {
          name: "description",
          content:
            "Williams Olayemi Martins — Lagos-based brand, product & web designer. Visual identities, Webflow sites, UI/UX, and frontend development for Nigerian and global clients.",
        },
        {
          name: "keywords",
          content:
            "brand designer Lagos, brand designer Nigeria, product designer Nigeria, web designer Nigeria, Webflow designer Nigeria, UI UX designer Lagos, frontend developer Lagos, visual identity designer, logo designer Nigeria, creative director Lagos, Williams Olayemi Martins, Willomarty",
        },
        { name: "author", content: "Williams Olayemi Martins" },
        { property: "og:title", content: "Williams Olayemi Martins — Brand, Product & Web Designer" },
        {
          property: "og:description",
          content: "Portfolio of Williams Olayemi Martins — brand designer, product designer, web designer, based in Lagos, Nigeria.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_NG" },
        { property: "og:url", content: SITE_URL },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Williams Olayemi Martins — Brand, Product & Web Designer" },
        {
          name: "twitter:description",
          content: "Portfolio of Williams Olayemi Martins — brand designer, product designer, web designer, based in Lagos, Nigeria.",
        },
        { name: "metadataBase", content: "https://willomarty.net.ng/" },
      ],
      links: [
        { rel: "canonical", href: SITE_URL },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(PERSON_SCHEMA) },
        { type: "application/ld+json", children: JSON.stringify(WEBSITE_SCHEMA) },
      ],
    }),
    component: Index,
  }
);

function Index() {
  const articles = PUBLISHED_ARTICLES;
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <MetricStrip />
        <Work />
        <LatestArticles articles={articles} />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
