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
  "@id": `${SITE_URL}/#person`,
  name: "Williams Olayemi Martins",
  alternateName: ["Yẹmí", "Williams Martins"],
  jobTitle: "Brand & Product Designer",
  description:
    "Nigerian brand & product designer building brand identities, digital products, and web tools from Lagos.",
  url: SITE_URL,
  email: "mailto:willomarty01@gmail.com",
  telephone: "+2347026787353",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  knowsAbout: [
    "Brand Identity Design",
    "Product Design",
    "Frontend Development",
    "UI/UX Design",
    "Product Packaging Design",
    "React",
    "Copywriting",
    "TypeScript",
    "Motion Graphics",
    "Video Editing",
  ],
  sameAs: [
    "https://www.behance.net/willomarty",
    "https://github.com/yeminimal",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Williams Olayemi Martins — Portfolio",
  inLanguage: "en",
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
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
      { title: "Williams Olayemi Martins — Brand & Product Designer" },
      {
        name: "description",
        content:
          "Williams Olayemi Martins — Lagos-based brand & product designer building visual identities, digital products and web tools for the global market.",
      },
      {
        name: "keywords",
        content:
          "Nigerian designer, brand identity Nigeria, product designer Lagos, product designer Nigeria, brand designer Africa, product designer Nigeria, Williams Martins, Olayemi",
      },
      { name: "author", content: "Williams Olayemi Martins" },
      { property: "og:title", content: "Williams Olayemi Martins — Brand & Product Designer" },
      {
        property: "og:description",
        content: "Brand & product designer from Lagos, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NG" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Williams Olayemi Martins — Designer & Developer" },
      {
        name: "twitter:description",
        content: "Brand & product designer from Lagos, Nigeria.",
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
