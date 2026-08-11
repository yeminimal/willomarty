import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { WORK } from "@/data/work";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
import { WorkCard } from "@/components/portfolio/WorkCard";

const SITE_URL = "https://willomarty.net.ng";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Williams Olayemi Martins" },
      {
        name: "description",
        content:
          "The full archive of client and self-initiated projects by Williams Olayemi Martins — brand identity, UI/UX, marketing design and web across fashion, fintech, real estate and Web3.",
      },
      { property: "og:title", content: "Selected Work — Williams Olayemi Martins" },
      {
        property: "og:description",
        content:
          "Full archive of brand, product and marketing work — featured case studies plus every other client project.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/work` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Selected Work — Williams Olayemi Martins" },
      {
        name: "twitter:description",
        content:
          "Full archive of brand, product and marketing work by Williams Olayemi Martins.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/work` }],
  }),
  component: WorkArchive,
});

function WorkArchive() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-24 md:pt-28 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            Back home
          </Link>

          <Reveal>
            <div className="mt-10">
              <SectionLabel>Archive</SectionLabel>
              <h1 className="display-serif mt-6 text-4xl md:text-6xl max-w-3xl leading-[1.05]">
                All work,
                <br />
                <span className="italic text-accent">in one place.</span>
              </h1>
              <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
                Featured projects link through to full case studies. The rest link out to their
                live sites or Behance for a closer look at the artefacts.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {WORK.map((w, i) => (
              <Reveal key={w.slug} delay={Math.min(i * 0.02, 0.2)}>
                <WorkCard w={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
