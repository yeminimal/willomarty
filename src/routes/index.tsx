import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import React, { lazy, Suspense } from "react";
// import { Experience } from "@/components/portfolio/Experience";
// Lazy-load below-the-fold sections to reduce initial bundle and improve FCP/LCP on mobile
const Work = lazy(() => import("@/components/portfolio/Work"));
const Tools = lazy(() => import("@/components/portfolio/Tools"));
const Skills = lazy(() => import("@/components/portfolio/Skills"));
const Education = lazy(() => import("@/components/portfolio/Education"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Faq = lazy(() => import("@/components/portfolio/Faq"));
import { Footer } from "@/components/portfolio/Footer";
import { Faq as FaqStatic, FAQ_SCHEMA } from "@/components/portfolio/Faq";
import { TOOLS } from "@/data/tools";

const SITE_URL = "https://willomarty.net.ng";

export const Route = createFileRoute("/")(
{
  head: () => ({
    meta: [
      { title: "Williams Olayemi Martins — Brand Designer & Developer" },
      {
        name: "description",
        content:
          "Williams Olayemi Martins — Lagos-based brand designer and frontend developer building visual identities, web tools and digital products for clients worldwide.",
      },
      {
        name: "keywords",
        content:
          "Nigerian designer, brand identity Nigeria, frontend developer Lagos, UI UX designer Nigeria, freelance designer Africa, web developer Nigeria, Williams Martins, Olayemi",
      },
      { name: "author", content: "Williams Olayemi Martins" },
      { property: "og:title", content: "Williams Olayemi Martins — Designer & Developer" },
      {
        property: "og:description",
        content: "Brand design, frontend development and micro-tools built from Lagos, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NG" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Williams Olayemi Martins — Designer & Developer" },
      {
        name: "twitter:description",
        content: "Brand design, frontend development and micro-tools built from Lagos, Nigeria.",
      },
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
      { type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) },
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
        {/* Lazy-load all below-the-fold sections in a single Suspense boundary to avoid blocking initial render */}
        <Suspense fallback={<div aria-hidden /> }>
          <Work />
          <Tools />
          <Skills />
          <Education />
          <Contact />
          <Faq />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
