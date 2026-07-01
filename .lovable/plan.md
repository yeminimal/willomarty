## SEO + GEO Optimization Plan

Adapting the Next.js-oriented prompt to this TanStack Start project. Skipping items that are already done (Person schema, FAQPage schema) or don't apply (Next.js Metadata API, `next/image`, `next/font`, `app/sitemap.ts`).

### 1. Structured data additions
- Add **`WebSite`** JSON-LD to `src/routes/index.tsx` alongside the existing Person + FAQPage blocks (name, url, author reference).
- Add **`SoftwareApplication`** (better fit than `CreativeWork`/`Product` for the browser tools) JSON-LD for each of the 4 micro-tools inside `src/components/portfolio/Tools.tsx` — name, url, applicationCategory, operatingSystem "Web", author reference to Person.
- Extend Person `sameAs` with GitHub (`https://github.com/yeminimal`) and LinkedIn/X where confirmed.

### 2. Canonical domain + og URL
- Once the Vercel domain is confirmed (assumption: `https://thewilliamsmartins.vercel.app`), set absolute canonical + `og:url` on index route, and use the same origin as `url` in the JSON-LD blocks. **Need confirmation of the production URL** — see question below.

### 3. Sitemap + robots + llms.txt
- Add `src/routes/api/public/sitemap[.]xml.ts` server route emitting the homepage URL with `lastmod`. (Static `public/sitemap.xml` would also work but a route lets us keep `lastmod` fresh.)
- Add `public/robots.txt` allowing all crawlers, explicitly allowing `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, pointing to the sitemap.
- Add `public/llms.txt` — plain-Markdown summary of who Williams is, services, key links (Behance, GitHub), and the 4 micro-tools with URLs.

### 4. Image alt text pass
- `Hero` portrait: keep descriptive (mention role + location).
- `Work` cards: currently no `<img>` — copy-only; no change needed there.
- `Tools` cards: swap generic alts to `"{Tool name} — {tagline}"` per tool.
- `Education` certification/school logos: use `"{Issuer} logo"` where currently generic.

### 5. Heading hierarchy audit
- Verify single `<h1>` (Hero name), all section headings `<h2>`, sub-labels `<h3>`. Fix any skips in About / Experience / Tools / Contact if found during the pass.

### 6. Metadata trim + dedupe in `__root.tsx`
- Current `__root.tsx` head() has **duplicate** `og:image`, `og:description`, `twitter:image`, and `description` meta entries (some appended later with hard newlines in the string). Consolidate into one canonical set per field.
- Trim keywords on `index.tsx` to focused phrases ("Lagos brand designer", "Nigerian frontend developer", "brand identity Nigeria").
- Add `og:url` (absolute) and keep `<link rel="canonical" href="/">` — upgrade to absolute once domain confirmed.

### 7. Core Web Vitals (framework-appropriate)
- Add explicit `width`/`height` (or `aspect-ratio` CSS) to portrait + tool images to prevent CLS.
- Add `loading="lazy"` + `decoding="async"` to below-the-fold images (tool cards, cert logos); keep hero portrait `loading="eager"` with `fetchpriority="high"`.
- Fonts already loaded via `<link>` with `display=swap`; add `rel="preload"` for the display font used above the fold (Playfair Display) via `__root.tsx` head links.

### 8. Internal linking
- Add 1–2 contextual in-body links: e.g. in About/Tools intro copy, link the phrase "four micro-tools" to `#tools`, and inline-link tool names to their live URLs where mentioned outside the Tools grid.

### Skipped from the prompt
- `next/image`, `next/font`, `app/layout.tsx` Metadata API, `generateMetadata`, `metadataBase` — Next.js-specific; TanStack Start uses route `head()` which we already use.
- FAQPage schema, Person schema — already implemented.

### Question before build
1. What's the production URL to use as canonical / `metadataBase` equivalent? The prompt guesses `https://thewilliamsmartins.vercel.app` — confirm or provide the real one (custom domain?).
