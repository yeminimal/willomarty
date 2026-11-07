import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { SKILL_GROUPS } from "@/data/skills";
import { SectionLabel } from "@/components/portfolio/SectionLabel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Williams Olayemi Martins" },
      { name: "description", content: "Meet Williams Olayemi Martins, a Lagos-based brand, web and product designer. Explore his capabilities, skills, education and certifications." },
      { property: "og:title", content: "About Williams Olayemi Martins" },
      { property: "og:description", content: "Meet Williams Olayemi Martins, a Lagos-based brand, web and product designer. Explore his capabilities, skills, education and certifications." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willomarty.net.ng/about" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://willomarty.net.ng/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <div className="min-h-screen bg-background text-foreground antialiased"><Nav /><main className="pt-16"><About standalone /><Skills /><section id="skills" className="border-t border-border py-24 md:py-28"><div className="mx-auto max-w-[1100px] px-6 md:px-10"><SectionLabel>Skills</SectionLabel><h2 className="display-serif mt-6 text-3xl md:text-5xl">Tools of the craft.</h2><div className="mt-12 grid gap-10 md:grid-cols-3">{SKILL_GROUPS.map((group) => <div key={group.title}><h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-dim">{group.title}</h3><ul className="mt-5 flex flex-wrap gap-2">{group.tags.map((tag) => <li key={tag} className="border border-border bg-surface px-3 py-2 text-sm text-muted">{tag}</li>)}</ul></div>)}</div></div></section><Education /></main><Footer /></div>;
}
