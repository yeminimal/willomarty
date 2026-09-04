# Performance, Hero, Typography & Gallery Refactor

Four changes to willomarty.net.ng, in one pass. Everything else on the site stays as it is.

## 1. Speed

- Every picture gets a fixed width and height so the page stops jumping around while things load.
- Pictures below the first screen load only when you scroll to them; the hero photo loads first, at top priority.
- Fonts get self-hosted instead of pulled from Google on every visit, and only the weights actually used ship.
- Text stays visible while fonts load instead of flashing blank.
- Larger screens get larger images, phones get smaller ones.

A real Lighthouse run against the live site isn't possible from here, so I'll measure the local build, report those numbers honestly, and note that you should re-run PageSpeed Insights after deploy.

## 2. New hero

The hero becomes a full-width photo with your name, role, tagline and buttons sitting on top of it, with a dark gradient behind the text so it stays readable. Copy and button links stay exactly as they are.

Since you're uploading a wider photo, I'll build the hero with your current portrait in place and a clearly marked placeholder note, then swap in the new landscape shot the moment you send it. The hero has a fixed height so nothing shifts when the image arrives, and contrast gets checked at phone, tablet and desktop widths.

## 3. Typography — Poppins Black

All large text (your name, every section heading, project titles, case-study headings) switches from the current serif to Poppins Black. Body copy, menu labels, buttons and small print keep the current font.

This is a single change in one central place, so every heading across the site, the projects page and the case studies picks it up automatically. Heading letter-spacing gets tightened slightly where the heavier weight needs it.

## 4. Gallery page

A new `/gallery` page for sketches, explorations, work-in-progress and unused directions — deliberately lighter than the case-study pages: just images in a flexible grid that handles mixed shapes.

- Tapping an image opens it full size; Esc or clicking outside closes it, arrow keys move between images.
- Optional short caption, a tag (WIP / Exploration / Sketch), and an optional "part of: [project]" link back to a case study.
- Tag filter chips appear only once there are enough items to justify them.
- "Gallery" is added to the menu, and the page is added to the sitemap once at least one real image exists.

Since you're uploading images right after, I'll ship it with the menu link live and placeholders marked, then populate it with your files.

## Technical notes

- Images: explicit dimensions + `loading="lazy"` everywhere except the hero (`eager`, `fetchpriority="high"`, plus a `rel=preload` if implemented as a CSS background).
- Fonts: `@fontsource` Poppins 900 self-hosted, `font-display: swap`, preload for the hero H1 weight; `--font-display` token in `src/styles.css` repointed to Poppins so the `display-serif` utility carries it site-wide (the utility keeps its name or gets renamed to `display-heading` in one sweep).
- Hero: rebuilt `src/components/portfolio/Hero.tsx` — absolutely-positioned `object-cover` image + gradient scrim layer + content layer, min-height in `svh`.
- Gallery: `src/data/gallery.ts` with the `GalleryItem` interface as specified, `src/routes/gallery.tsx` with head metadata + `ImageGallery` JSON-LD, and a lightbox component. Empty/all-placeholder state renders a labelled empty state and hides the nav link, with a comment explaining the rule.
- Sitemap: `/gallery` entry added only when real items exist.
- Also fixing a small existing bug: the theme toggle icon mismatches between server and browser on first paint, which throws a hydration warning.

## Needs your input

- The wider hero photo, and the gallery images plus captions.
- Confirming Poppins Black over Montserrat Black once you see it live.
- Re-running PageSpeed Insights on the live URL after deploy.
- Whether this font change should extend to print/social templates (out of scope here).

All `[[PLACEHOLDER: ...]]` strings left in the code will be listed at the end of the build.
