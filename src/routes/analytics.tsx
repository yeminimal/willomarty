import { createFileRoute } from "@tanstack/react-router";
import { Github, ShieldCheck, ExternalLink } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { SectionLabel } from "@/components/portfolio/SectionLabel";
import {
  PLAUSIBLE_DOMAIN,
  PLAUSIBLE_SHARED_LINK,
} from "@/config/analytics";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Williams Olayemi Martins" },
      {
        name: "description",
        content:
          "Public, privacy-first Plausible analytics dashboard for this portfolio. Cookieless, no personal data collected.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const configured = Boolean(PLAUSIBLE_DOMAIN && PLAUSIBLE_SHARED_LINK);
  const embedSrc = PLAUSIBLE_SHARED_LINK
    ? `${PLAUSIBLE_SHARED_LINK}${PLAUSIBLE_SHARED_LINK.includes("?") ? "&" : "?"}embed=true&theme=system&background=transparent`
    : "";

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <SectionLabel>Live Metrics</SectionLabel>
            <h1 className="display-serif mt-6 text-4xl md:text-6xl max-w-3xl">
              Analytics,{" "}
              <span className="italic text-accent">in the open.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed">
              Traffic on this portfolio is measured with{" "}
              <a
                href="https://github.com/plausible/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                Plausible
              </a>
              , an open-source, privacy-first analytics tool. No cookies, no
              personal data, no cross-site tracking — and the dashboard is
              public, so what I see is what you see.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/plausible/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={13} />
                plausible/analytics
              </a>
              <span className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim">
                <ShieldCheck size={13} className="text-accent" />
                Cookieless · GDPR-friendly
              </span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            {configured ? (
              <div className="border border-border bg-surface overflow-hidden">
                <iframe
                  title="Plausible analytics dashboard"
                  src={embedSrc}
                  loading="lazy"
                  scrolling="no"
                  className="w-full block"
                  style={{ height: 1600, border: 0 }}
                />
              </div>
            ) : (
              <div className="border border-border bg-surface p-8 md:p-12">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim">
                  Setup pending
                </div>
                <h2 className="display-serif mt-4 text-2xl md:text-3xl text-foreground">
                  Dashboard not connected yet.
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed max-w-2xl">
                  To go live, add the site in Plausible, create a public
                  shared link, then paste both values into{" "}
                  <code className="font-mono text-[13px] text-accent">
                    src/config/analytics.ts
                  </code>
                  .
                </p>
                <ol className="mt-6 space-y-3 text-foreground/80 max-w-2xl">
                  <li className="flex gap-3">
                    <span className="font-mono text-accent text-sm">01</span>
                    <span>
                      Sign up at{" "}
                      <a
                        href="https://plausible.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-4 inline-flex items-center gap-1"
                      >
                        plausible.io
                        <ExternalLink size={12} />
                      </a>{" "}
                      (or self-host from the GitHub repo) and add your
                      production domain as a site.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-accent text-sm">02</span>
                    <span>
                      Set{" "}
                      <code className="font-mono text-[13px] text-accent">
                        PLAUSIBLE_DOMAIN
                      </code>{" "}
                      to that exact hostname.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-accent text-sm">03</span>
                    <span>
                      In Plausible → Site Settings → Visibility → Shared
                      links, create a link with no password and paste the URL
                      into{" "}
                      <code className="font-mono text-[13px] text-accent">
                        PLAUSIBLE_SHARED_LINK
                      </code>
                      .
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-accent text-sm">04</span>
                    <span>
                      Redeploy. Tracking starts automatically and this page
                      swaps in the live dashboard.
                    </span>
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
