import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Tools } from "@/components/portfolio/Tools";
import { TOOLS } from "@/data/tools";

const SITE_URL = "https://willomarty.net.ng";

const TOOLS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": TOOLS.map((tool) => ({
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": `${SITE_URL}/#person` },
  })),
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Personal Projects — Williams Olayemi Martins" },
      { name: "description", content: "Browser-based tools and personal projects built by Williams Olayemi Martins to solve everyday problems." },
      { property: "og:title", content: "Personal Projects — Williams Olayemi Martins" },
      { property: "og:description", content: "Browser-based tools and personal projects built by Williams Olayemi Martins to solve everyday problems." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/projects` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(TOOLS_SCHEMA) }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-16">
        <Tools />
      </main>
      <Footer />
    </div>
  );
}
