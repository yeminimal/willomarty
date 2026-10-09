import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Williams Olayemi Martins" },
      { name: "description", content: "Contact Williams Olayemi Martins for brand design, product design, web development and creative collaborations, in Nigeria and worldwide." },
      { property: "og:title", content: "Contact Williams Olayemi Martins" },
      { property: "og:description", content: "Contact Williams Olayemi Martins for brand design, product design, web development and creative collaborations, in Nigeria and worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willomarty.net.ng/contact" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://willomarty.net.ng/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <div className="min-h-screen bg-background text-foreground antialiased"><Nav /><main className="pt-16"><Contact standalone /></main><Footer /></div>;
}
