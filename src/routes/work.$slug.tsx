import { createFileRoute, notFound, useRouter, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CASE_STUDIES } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { reportLovableError } from "@/lib/lovable-error-reporting";

const SITE_URL = "https://willomarty.vercel.app";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES[params.slug];
    if (!study) throw notFound();
    return study;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Williams Olayemi Martins" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `${SITE_URL}/work/${params.slug}`;
    const ogImage = loaderData.image.startsWith("http")
      ? loaderData.image
      : `${SITE_URL}${loaderData.image}`;
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { name: "author", content: "Williams Olayemi Martins" },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${loaderData.client} — Case Study`,
            description: loaderData.metaDescription,
            image: ogImage,
            author: {
              "@type": "Person",
              name: "Williams Olayemi Martins",
              url: SITE_URL,
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: CaseStudyPage,
  errorComponent: CaseStudyError,
  notFoundComponent: CaseStudyNotFound,
});

function CaseStudyPage() {
  const study = Route.useLoaderData();
  return <CaseStudyLayout study={study} />;
}

function CaseStudyError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "work_slug_error" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-serif text-2xl">This case study didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong. Try again or head back to the work archive.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="font-mono text-[11px] uppercase tracking-[0.18em] border border-border px-4 py-2 hover:border-accent-dim"
          >
            Try again
          </button>
          <Link
            to="/work"
            className="font-mono text-[11px] uppercase tracking-[0.18em] border border-border px-4 py-2 hover:border-accent-dim"
          >
            All work
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseStudyNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-serif text-3xl">Case study not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          No case study exists at <span className="font-mono">/work/{slug}</span> yet.
        </p>
        <div className="mt-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-border px-4 py-2 hover:border-accent-dim"
          >
            See all work
          </Link>
        </div>
      </div>
    </div>
  );
}
