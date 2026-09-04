import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GALLERY, type GalleryItem } from "@/data/gallery";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    GALLERY.forEach((g) => g.tag && set.add(g.tag));
    return Array.from(set);
  }, []);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter)),
    [filter]
  );

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  if (GALLERY.length === 0) {
    return (
      <div className="mt-14 border border-dashed border-border bg-surface px-8 py-20 text-center">
        <ImageOff size={28} className="mx-auto text-accent-dim" strokeWidth={1.5} />
        <h2 className="display-serif mt-6 text-2xl md:text-3xl">Nothing here yet</h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-foreground/70">
          This is where sketches, explorations and unused directions will live. It's empty on
          purpose — nothing has been added yet.
        </p>
        <Link
          to="/work"
          className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim hover:border-accent hover:text-accent transition-colors"
        >
          See finished work instead
        </Link>
      </div>
    );
  }

  const current: GalleryItem | null = active === null ? null : (items[active] ?? null);

  return (
    <>
      {tags.length > 1 && GALLERY.length >= 6 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {["All", ...tags].map((t) => (
            <button
              key={t}
              onClick={() => {
                setFilter(t);
                setActive(null);
              }}
              className={`font-mono text-[10px] uppercase tracking-[0.16em] border px-3 py-1.5 transition-colors ${
                filter === t
                  ? "border-accent text-accent"
                  : "border-border text-muted hover:text-accent hover:border-accent-dim/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Masonry columns handle mixed aspect ratios without cropping */}
      <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {items.map((g, i) => (
          <figure key={g.src} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden border border-border bg-surface"
              aria-label={`Open image: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={g.width ?? 1200}
                height={g.height ?? 900}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            {(g.caption || g.tag || g.project) && (
              <figcaption className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                {g.tag && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-dim">
                    {g.tag}
                  </span>
                )}
                {g.caption && (
                  <span className="text-[14px] text-foreground/70">{g.caption}</span>
                )}
                {g.project && (
                  <Link
                    to="/work/$slug"
                    params={{ slug: g.project }}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent hover:text-accent-dim"
                  >
                    Part of: {g.projectLabel ?? g.project}
                  </Link>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-10"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 text-muted hover:text-accent"
          >
            <X size={22} />
          </button>
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 md:left-8 text-muted hover:text-accent"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-3 md:right-8 text-muted hover:text-accent"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80svh] w-auto max-w-full border border-border object-contain"
            />
            {current.caption && (
              <figcaption className="mt-4 text-center text-[14px] text-foreground/70">
                {current.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
