## Portfolio Site — Williams Olayemi Martins

A single-page editorial portfolio. Dark mode first (we can flip to light later if needed). Palette swapped from the original prompt's gold-on-black to **deep green canvas with warm gold accents**, matching the teal-green tone in your portrait. Content is sourced from your resume + Portfolio 2026 PDF, not the placeholder copy in the original brief.

### Design system

Palette (dark):
- `--bg` deep forest near-black `#0A1410`
- `--surface` `#0F1C17`
- `--border` `#1F302A`
- `--accent` warm gold `#C8A96E`
- `--accent-dim` `#8A6F3F`
- `--accent-green` muted emerald `#3F6B58` (for secondary highlights / hovers)
- `--text` warm white `#F0EDE6`
- `--muted` `#7A8A82`
- `--tag` `#15211C`

Typography: Playfair Display (display, used sparingly), Inter (body), JetBrains Mono (labels/tags). Loaded via `<link>` in `__root.tsx` head.

Layout: max-width 1100px, single column, generous whitespace, no rounded corners on cards, gold left-border-on-hover reveal, ALL-CAPS tracked mono section labels.

Signature hero: name as a two-line byline — **"Olayemi"** in warm-gold italic Playfair, **"Williams Martins"** in regular weight warm-white. Thin 1px gold rule (40% opacity) below. Portrait (your uploaded photo) sits top-right in a 280px circle with a subtle gold ring.

Tokens go in `src/styles.css` as semantic CSS variables wired through `@theme inline`. No hardcoded colors in components.

### Sections (single page, anchor nav)

Sticky top nav: **WOM** logo (mono gold) left; About · Experience · Tools · Skills · Education · Contact right. Transparent on hero, solid-with-blur on scroll. Mobile hamburger drawer.

1. **Hero** — eyebrow "DESIGNER · DEVELOPER · CREATOR", byline name, tagline "Brand Design · Frontend Development · Media Production · Lagos, Nigeria", stat row (7+ Years Designing / 20+ Projects Delivered / 4 Micro-Tools Shipped), CTAs ([See My Work →] [Get In Touch]), animated scroll indicator, portrait top-right.
2. **About** — headline "Design that communicates. Code that ships. Work that matters." Three short paragraphs adapted from your Portfolio 2026 voice (process-obsessed, brand-first, multidisciplinary) plus the frontend/AI-tooling angle from the brief. 2×2 mini-card grid: Brand Identity, Frontend Dev, Video Production, Micro-Tool Builder. Link row: Behance, LinkedIn, GitHub.
3. **Experience** — vertical timeline, year on left, role on right. Entries from your resume (most recent first):
   - MASAI Communications — Visual Designer (Apr 2025 – Sep 2025, Remote)
   - Getcrib — Marketing Designer (Nov 2024 – Mar 2025, Remote)
   - Mytherapist.ng — Visual Graphic Designer (Oct 2023 – Apr 2024, Remote)
   - Incash — UI/UX Designer (Jan 2022 – Oct 2022, Remote)
   - Jobhut — UI Designer (Jul 2021 – Nov 2021, Lagos)
   - Victorious Tech — Lead Graphic Designer (Oct 2018 – Feb 2019, Lagos)
   - Comtech Systems — Visual/Print Designer (May – Sep 2018, Lagos)
   - Mercab Prints — Visual/Print Designer (Jan – Apr 2018, Lagos)
4. **Selected Work** — editorial 2-col card grid pulling from Portfolio 2026: Vana, Frauwa Roofs & Interior Decor, Zamack Consults, Juliet Moses, Rebound, Activate Pilot, Moon Republic, Mytherapist.ng, Getcrib, Incash, Zaytrix Modeste, Caretaker Pro, #EndSARS Documentary. Each card: client, discipline tag, one-line description, "View on Behance ↗" link. (Project images can be added later — cards work as text-first editorial entries with a gold rule, matching the disciplined aesthetic.)
5. **Tools** — the 4 micro-tools from the brief: Scrapely, Screenshot Studio, ImageSqueeze, Pocket QR. 2-col cards, gold left-border hover, live links, tech tags.
6. **Skills** — three grouped tag clouds (Design / Development / Tools & Workflow) — no fake percentage bars.
7. **Education** — University of Benin, B.Sc. Mass Communication (Aug 2021 – Feb 2025); Enikin Design Academy, Diploma in Graphic Design (Feb – Dec 2017); plus self-directed Frontend Development and AI-Assisted Product Development entries.
8. **Contact** — headline "Got a project? Let's talk." Email `willomarty01@gmail.com`, phone `+234 702 678 7353`, Behance `behance.net/willomarty`, LinkedIn/GitHub placeholders. "Open to Work — June 2026" gold pill. Mailto CTA.
9. **Footer** — © 2026 Williams Olayemi Martins · Lagos, Nigeria · Back to Top.

### Data layer

All list content lives in `src/data/`:
- `experience.ts`, `work.ts` (selected projects), `tools.ts`, `skills.ts`, `education.ts`

So future updates are one-line data edits.

### SEO / structured data

`src/routes/index.tsx` `head()`:
- title: "Williams Olayemi Martins — Brand Designer & Frontend Developer, Nigeria"
- description, keywords, author, canonical
- OG + Twitter cards (image placeholder `/og-image.jpg`)
- JSON-LD `Person` schema injected via `scripts` field with name "Williams Olayemi Martins", alternateName "Yẹmí", jobTitle, knowsAbout, sameAs, address (Lagos, NG)
- Hidden FAQ section with `FAQPage` schema for AEO

### Technical notes (for the curious)

- TanStack Start single route at `/` (`src/routes/index.tsx`), components under `src/components/portfolio/`.
- `framer-motion` for subtle fade-up reveals (respects `prefers-reduced-motion`).
- Smooth scroll via native `scroll-behavior: smooth`; active section highlight via IntersectionObserver hook.
- Your portrait uploaded as a Lovable Asset (no binary copied into the repo).
- Theme structured so flipping to light mode later is a single tokens change, not a rewrite.

### Open questions before I build

1. **LinkedIn / GitHub / Behance handles** — I have `behance.net/willomarty`. Do you have LinkedIn and GitHub URLs to wire up, or should I leave them as `#` placeholders for now?
2. **Selected Work cards** — text-only editorial cards now (clean and fast), or do you want me to extract project images from your Portfolio PDF and host them as assets too? (Image extraction adds weight but adds visual proof.)

If you say "build it," I'll proceed with `#` placeholders for missing socials and text-only work cards, and we iterate from there.