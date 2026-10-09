import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
// import { Experience } from "@/components/portfolio/Experience";
import { Work } from "@/components/portfolio/Work";
import { Tools } from "@/components/portfolio/Tools";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Faq, FAQ_SCHEMA } from "@/components/portfolio/Faq";
import { TOOLS } from "@/data/tools";

const SITE_URL = "https://willomarty.net.ng";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Williams Olayemi Martins",
  "alternateName": "Willomarty",
  "url": "https://willomarty.net.ng",
  "email": "willomarty01@gmail.com",
  "telephone": "+2347026787353",
  "jobTitle": "Brand Designer, Product Designer & Web Designer",
  "description": "Lagos-based brand and web designer specialising in visual identity systems, Webflow websites, UI/UX, and frontend development. Available for remote work with Nigerian and international clients.",
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
    "name": "Williams Olayemi Martins"
  },
  "inLanguage": "en"
};

const TOOLS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": TOOLS.map((t) => ({
    "@type": "SoftwareApplication",
    name: t.name,
    description: t.description,
    url: t.url,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": `${SITE_URL}/#person` },
  })),
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
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(PERSON_SCHEMA) },
        { type: "application/ld+json", children: JSON.stringify(WEBSITE_SCHEMA) },
        { type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) },
        { type: "application/ld+json", children: JSON.stringify(TOOLS_SCHEMA) },
      ],
    }),
    component: Index,
  }
);

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <Work />
        <Tools />
        <Skills />
        <Education />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
