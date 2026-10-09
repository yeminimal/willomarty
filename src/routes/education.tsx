import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Education } from "@/components/portfolio/Education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Williams Olayemi Martins" },
      { name: "description", content: "Academic background, design education, development training and professional certifications of Williams Olayemi Martins." },
      { property: "og:title", content: "Education & Certifications — Williams Olayemi Martins" },
      { property: "og:description", content: "Academic background, design education, development training and professional certifications of Williams Olayemi Martins." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willomarty.net.ng/education" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://willomarty.net.ng/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  return <div className="min-h-screen bg-background text-foreground antialiased"><Nav /><main className="pt-16"><Education standalone /></main><Footer /></div>;
}
