
## Overview

Restructure "Selected Work" into two tiers:
1. **Homepage** — 6 featured project cards (richer content, link to case study) + "See more" link to `/work`.
2. **`/work` page** — grid of all remaining projects using existing simple card format.
3. **`/work/$slug` pages** — dedicated case study pages rendered from a reusable template, driven by structured content. Ships with 4 studies (Incash, Zamack Consults, Moon Republic, Frauwa); scales to Getcrib + #EndSARS later without template changes.

No visual redesign — reuse existing tokens, typography, Reveal/SectionLabel/Nav/Footer components.

## Data model

Extend `src/data/work.ts`:

```ts
export type Work = {
  slug: string;               // NEW — stable id (e.g. "incash")
  client: string;
  discipline: string;
  description: string;        // short line used on /work grid & homepage summary
  link?: string;              // external live link
  image?: string;
  featured?: boolean;         // NEW — true for the 6 homepage-featured items
  role?: string;              // NEW — for featured card meta line
  outcomeLine?: string;       // NEW — one concrete outcome sentence on featured card
};
```

Mark 6 featured: Incash, Zamack Consults, Moon Republic, Frauwa, plus 2 held from existing top of list (candidates from user's prior "featured 6" — since user only supplied 4 studies today, the remaining 2 featured slots default to next-most-notable existing entries: **Zaytrix Modeste** and **Caretaker Pro Inc.** — they get featured cards linking to their existing external live sites, NOT a case study page yet). This keeps the "6 featured" layout the user asked for without inventing case-study content. Featured cards without a case study route link out to their live URL; featured cards with a case study link to `/work/$slug`.

New file `src/data/case-studies.ts`:

```ts
export type CaseStudy = {
  slug: string;
  client: string;
  role: string;
  scope: string;
  industry: string;
  year: string;
  liveLink?: { label: string; url: string };
  image: string;
  metaTitle: string;
  metaDescription: string;
  sections: CaseStudySection[];   // ordered, rendered generically
};

type CaseStudySection =
  | { kind: "prose"; heading: string; body: string | string[] }        // paragraphs
  | { kind: "list"; heading: string; items: { label: string; body: string }[] }  // design decisions bullets
  | { kind: "callout"; heading: string; body: string }                 // process angle / trade-off highlight
  | { kind: "placeholder"; heading: string; note: string };            // Moon Republic prompt-iteration slot
```

Four entries authored from the user's provided copy verbatim (Brief, Research, Design Decisions, Process angle, Trade-offs, Outcome, Reflection where given). Moon Republic gets a `placeholder` section for the future prompt iteration images.

## Routes

TanStack file-based routing:
- `src/routes/work.index.tsx` → `/work` — "All work" grid.
- `src/routes/work.$slug.tsx` → `/work/incash` etc. — case study template. Loader looks up slug in `case-studies.ts`, throws `notFound()` if missing. Sets per-page `<title>`, meta description, og:title/og:description/og:image (uses the case study hero image), canonical.
- Homepage `Work` component updated to render only `featured` entries as expanded cards + "See more" link to `/work`.

## Components

- `src/components/portfolio/FeaturedWorkCard.tsx` — expanded card (image + client + role/scope line + 2–3 sentence summary + outcome line + arrow). Reuses same border/hover styling as existing Work card.
- `src/components/portfolio/WorkCard.tsx` — extract current simple card so both homepage (non-featured spillover, if any) and `/work` page use it.
- `src/components/case-study/CaseStudyLayout.tsx` — page shell: Nav, hero image, header block (client · role · scope · industry · year · live link), sections rendered by kind, footer CTA back to `/work` + live link, Footer.
- `src/components/case-study/sections/{Prose,List,Callout,Placeholder}.tsx` — small render primitives.

## Homepage `Work` section changes

`src/components/portfolio/Work.tsx`:
- Filter `WORK.filter(w => w.featured)` → render via `FeaturedWorkCard` in a 2-col grid (same gap).
- After grid: right-aligned "See all work →" link to `/work` (mono uppercase, matches existing microcopy styling).
- Remove initials fallback path since all featured have images.

## `/work` index page

- Section label "All Work", short intro line.
- Grid of every `WORK` entry (featured + rest) using `WorkCard`. Featured cards on this page link to their case study; non-featured link to external `link` (fallback Behance, same rule as today).
- Sets its own `<title>` "Selected Work — Williams Olayemi Martins" + description + canonical.

## Case study page template

`/work/$slug` structure (mobile-first, matches site rhythm):

1. Sticky/standard `Nav`.
2. Back link "← All work".
3. Hero: full-bleed 16:9 image.
4. Header block: display-serif client name; mono meta row `Role · Scope · Industry · Year`; live link button if present.
5. Sections loop (each Reveal-wrapped): `SectionLabel` for heading, then body per `kind`.
   - `prose` → paragraphs.
   - `list` → dl-style rows (label in mono uppercase, body prose).
   - `callout` → left-accent-bordered block, italic display-serif heading.
   - `placeholder` → dashed border box with note text ("Prompt iteration images coming soon").
6. Footer CTA: live link (if any) + "See all work" link back to `/work`.
7. `Footer` component.

## Content ingestion

Author 4 case studies in `src/data/case-studies.ts` using the user's provided copy exactly. Structure per project:

- **Incash**: prose(Brief), prose(Research), list(Design Decisions: Typography / Color / Onboarding), callout(Process angle: fixed base), prose(Trade-offs), prose(Outcome).
- **Zamack Consults**: prose(Brief), prose(Research), list(Design Decisions: Logo / Color / Typography / System), callout(Process angle / Trade-off: dropped purple gradient), prose(Outcome), prose(Reflection).
- **Moon Republic**: prose(Brief), list(Design Decisions: Brand system / Imagery), callout(Process angle: prompt engineering — expanded), placeholder(Prompt iteration images), prose(Outcome).
- **Frauwa**: prose(Brief), prose(Research), list(Design Decisions: Logo unification), callout(Process angle: holding the line against conventional direction), prose(The promo reel), prose(Outcome). Year TBD → omit year from header meta row cleanly when absent.

## SEO

- Per-page head: title = `<Client> — Case Study | Williams Olayemi Martins`; description from user-provided brief opener (~150 chars). og:image = case study hero image (absolute URL built from `SITE_URL + image`). canonical `${SITE_URL}/work/${slug}`. og:type `article`.
- `/work` gets its own head as above.
- Update `public/sitemap.xml`: add `<url>` entries for `/work`, `/work/incash`, `/work/zamack-consults`, `/work/moon-republic`, `/work/frauwa`.
- Update `public/llms.txt`: add the 4 case study URLs under a "Case studies" section.

## Featured selection

User specified 4 case studies but requested 6 featured cards. Plan defaults the remaining 2 featured slots to **Zaytrix Modeste** and **Caretaker Pro Inc.** (both have live sites, existing images, and are the most substantive non-case-study entries). Those featured cards link to their live URL; when Getcrib and #EndSARS are ready they'll take those slots and gain `/work/$slug` routes. Confirm or swap in review.

## Files touched

- edit: `src/data/work.ts` (add slug/featured/role/outcomeLine fields)
- new: `src/data/case-studies.ts`
- new: `src/components/portfolio/FeaturedWorkCard.tsx`
- new: `src/components/portfolio/WorkCard.tsx` (extracted)
- edit: `src/components/portfolio/Work.tsx` (featured-only + See more link)
- new: `src/components/case-study/CaseStudyLayout.tsx`
- new: `src/components/case-study/sections/*.tsx`
- new: `src/routes/work.index.tsx`
- new: `src/routes/work.$slug.tsx`
- edit: `public/sitemap.xml`, `public/llms.txt`
