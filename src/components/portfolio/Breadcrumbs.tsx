import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  currentPage: string;
  className?: string;
};

export function Breadcrumbs({ items, currentPage, className = "" }: BreadcrumbsProps) {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }).replace(/</g, "\\u003c");

  return (
    <>
      <nav aria-label="Breadcrumb" className={`min-w-0 ${className}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]">
          {items.map((item) => {
            const isCurrent = item.url === currentPage;

            return (
              <li key={item.url} className="flex min-w-0 items-center gap-2">
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className="max-w-[75vw] break-words text-foreground sm:max-w-xl"
                  >
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    className="break-words text-foreground/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.name}
                  </a>
                )}
                {!isCurrent && (
                  <ChevronRight aria-hidden="true" className="h-3 w-3 shrink-0 text-muted" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}
