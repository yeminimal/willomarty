import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
import { Gallery } from "@/components/portfolio/Gallery";
import { GALLERY } from "@/data/gallery";

const SITE_URL = "https://willomarty.net.ng";
const TITLE = "Gallery — Sketches & Explorations | Williams Olayemi Martins";
const DESCRIPTION =
  "Process work from Williams Olayemi Martins: sketches, explorations, works in progress and unused directions from brand and product design projects.";

// Structured data is only emitted when there is real content to describe.
const GALLERY_SCHEMA =
  GALLERY.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: "Gallery — Williams Olayemi Martins",
        url: `${SITE_URL}/gallery`,
        description: DESCRIPTION,
        image: GALLERY.map((g) => ({
          "@type": "ImageObject",
          contentUrl: g.src,
          caption: g.caption ?? g.alt,
        })),
      }
    : null;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      // Keep the page out of the index until it holds real work.
      ...(GALLERY.length === 0 ? [{ name: "robots", content: "noindex,follow" }] : []),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
    scripts: GALLERY_SCHEMA
      ? [{ type: "application/ld+json", children: JSON.stringify(GALLERY_SCHEMA) }]
      : [],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <SectionLabel>Process</SectionLabel>
          <h1 className="display-serif mt-6 text-4xl md:text-6xl uppercase">Gallery</h1>
          <p className="mt-6 max-w-xl text-[15px] md:text-base leading-relaxed text-foreground/70">
            Sketches, explorations, works in progress and directions that never shipped. Rougher
            than the case studies — that's the point.
          </p>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
