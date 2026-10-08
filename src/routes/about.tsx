import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { About } from "@/components/portfolio/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Williams Olayemi Martins" },
      { name: "description", content: "Meet Williams Olayemi Martins, a Lagos-based brand and product designer. Discover his background, design philosophy and creative approach." },
      { property: "og:title", content: "About Williams Olayemi Martins" },
      { property: "og:description", content: "Meet Williams Olayemi Martins, a Lagos-based brand and product designer. Discover his background, design philosophy and creative approach." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willomarty.net.ng/about" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://willomarty.net.ng/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <div className="min-h-screen bg-background text-foreground antialiased"><Nav /><main className="pt-16"><About standalone /></main><Footer /></div>;
}
