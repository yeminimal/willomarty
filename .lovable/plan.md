## 1. Featured projects → 4 only

In `src/data/work.ts`, keep `featured: true` on **Incash, Zamack Consults, Moon Republic, Frauwa** only. Remove the `featured` flag from Zaytrix Modeste and Caretaker Pro Inc. (they stay in `WORK`, so they appear on the `/work` archive page — no data loss).

`FEATURED_WORK` already derives from `w.featured`, so `Work.tsx` on the homepage will automatically render just the 4 case-study cards in the existing 2-col grid. The "See all work" button already links to `/work`.

The `/work` archive page (`src/routes/work.index.tsx`) already uses the simpler `WorkCard` layout (thumbnail, title, one-line description, link) and lists every entry in `WORK`, matching what you asked for.

## 2. Resume download button

Add a "Résumé" button to `src/components/portfolio/Nav.tsx`:
- Desktop: inline in the nav row, just before the theme toggle. Styled like a subtle bordered pill using existing tokens (`border border-border hover:border-accent-dim/70`, same mono uppercase micro-caps as other links, `Download` icon from lucide) — matches the "See all work" button treatment already used elsewhere.
- Mobile: appended to the open menu as the last item, full-width variant of the same style.
- `href="/resume.pdf"`, `download`, opens in a new tab as fallback. You'll drop the actual PDF into `public/resume.pdf` later.

## 3. FAQ nav link + visible FAQ section

Two coordinated changes:
- **`src/components/portfolio/Faq.tsx`** — the section is currently `sr-only` (invisible, indexing-only). Promote it to a proper visible section that reuses the existing pattern from other sections (SectionLabel, display-serif heading, Reveal, border-top, matching padding). Keep the `id="faq"`, keep the same `FAQS` array so `FAQ_SCHEMA` and JSON-LD stay identical. Render as a simple stacked Q/A list (no accordion — matches the site's editorial tone).
- **`src/components/portfolio/Nav.tsx`** — add `{ href: "/#faq", label: "FAQ" }` to `LINKS` after Education, before Contact (chronology matches how it'll read in the page).
- **`src/routes/index.tsx`** — no order change needed; `<Faq />` already renders at the bottom of `<main>`.

## 4. FAQ content expansion

Extend the `FAQS` array in `Faq.tsx` with 3 new entries, in the same tone and length as the existing four:

- **"Does Williams work with international or remote clients?"** — Yes, remote-first from Lagos; has shipped work for clients in Canada (Zaytrix), the US, and across Africa; async-friendly workflow.
- **"What industries has Williams designed for?"** — Fintech (Incash), real estate / proptech (Caretaker Pro, Getcrib), fashion / e-commerce (Zaytrix Modeste, Juliet Moses), Web3 / education (Moon Republic), legal services (Zamack Consults), construction / interiors (Frauwa), health (Mytherapist.ng), consumer packaged goods (Vana, Rebound).
- **"Does Williams offer web development alongside design?"** — Yes; builds production frontends in React + TypeScript + Tailwind, and has shipped four browser-based tools end-to-end. Design and build stay in one hand when the project calls for it.

`FAQ_SCHEMA` regenerates from the array automatically, so JSON-LD stays in sync.

## 5. New thumbnails + Moon Republic process image

Uploads mounted at `/mnt/user-uploads/`:
- `frauwa.png` → replace `src/assets/work-frauwa.jpg.asset.json` (delete old asset, re-upload via `lovable-assets create --file /mnt/user-uploads/frauwa.png --filename work-frauwa.png`).
- `moon_Republic.png` → replace `work-moon-republic.jpg.asset.json` (same swap).
- `incash.png` → replace `work-incash.jpg.asset.json`.
- `rebound.png` → replace `work-rebound.jpg.asset.json`.
- `moon_Republic_prompt_engineering_process.png` → new asset `src/assets/work-moon-republic-process.png.asset.json`.

In `src/data/case-studies.ts`, replace the Moon Republic `placeholder` section with a new `image` section kind:
- Extend `CaseStudySection` union in `case-studies.ts` with `{ kind: "image"; heading?: string; src: string; alt: string; caption?: string }`.
- Extend `CaseStudyLayout.tsx`'s `SectionBlock` to render the `image` variant (uses the same aspect-video framed container the header image uses, with optional caption in the mono/muted micro-caps style).
- Moon Republic gets `{ kind: "image", heading: "Prompt Iterations", src: processImg.url, alt: "Detailed process of the prompt engineering, from starting reference to final result", caption: "Start reference → refined mid-state → final output." }` in place of the placeholder.

## Files touched

- `src/data/work.ts` — remove `featured` from Zaytrix Modeste + Caretaker Pro.
- `src/components/portfolio/Nav.tsx` — add FAQ link, add Résumé button (desktop + mobile).
- `src/components/portfolio/Faq.tsx` — visible section styling + 3 new FAQ entries.
- `src/components/case-study/CaseStudyLayout.tsx` — render new `image` section kind.
- `src/data/case-studies.ts` — add `image` variant to union, swap Moon Republic placeholder for real image.
- Assets: replace 4 thumbnails, add 1 new process image via `lovable-assets`.

## Out of scope (intentionally untouched)

Canonical tags, LinkedIn URL, JSON-LD schemas apart from FAQ (which regenerates from the array), sitemap.xml, llms.txt, existing case study copy.
