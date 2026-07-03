## Add a public Plausible Analytics page at `/analytics`

Plausible (github.com/plausible/analytics) is a privacy-first, cookieless analytics tool. It supports two things we'll wire up:

1. A tiny **tracking script** included on every page so pageviews get counted.
2. A **shared dashboard link** — a public, no-login URL you generate in Plausible Settings → Visibility → Shared links — that we embed in an iframe on `/analytics`.

Both need values you don't have yet (site domain + shared link URL), so I'll stub them behind a single config file with TODOs and clear setup steps.

### Files to add

1. **`src/config/analytics.ts`** — one place for both values:
   ```ts
   // TODO: fill in after creating the site in Plausible
   export const PLAUSIBLE_DOMAIN = ""; // e.g. "thewilliamsmartins.vercel.app"
   export const PLAUSIBLE_SHARED_LINK = ""; // e.g. "https://plausible.io/share/xxx?auth=yyy"
   export const PLAUSIBLE_HOST = "https://plausible.io"; // change if self-hosted
   ```

2. **`src/routes/analytics.tsx`** — new page. Contents:
   - Editorial header matching site style: SectionLabel "Live Metrics", H2 "Analytics, in the open."
   - Short copy explaining this is a public, privacy-first Plausible dashboard (no cookies, no PII).
   - GitHub link out to `plausible/analytics` with the site's icon treatment.
   - Embedded iframe of `PLAUSIBLE_SHARED_LINK` (full width, ~1600px tall, dark border to match cards). If the config value is empty, render a placeholder card with setup steps instead of a broken iframe.
   - `head()` sets `<meta name="robots" content="noindex, nofollow">` plus a title/description. No canonical, no og image.
   - Reuses `Nav` + `Footer` so it feels like part of the site.

3. **Tracking script in `src/routes/__root.tsx`** — add a `scripts` entry that injects `https://plausible.io/js/script.js` with `data-domain={PLAUSIBLE_DOMAIN}` **only when the domain is configured**, so nothing loads until you fill it in.

### Files to edit

- **`public/robots.txt`** — add before the AI-crawler blocks:
  ```
  User-agent: *
  Disallow: /analytics
  ```
  And append a wildcard-blocked entry per AI crawler already listed (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, CCBot, Applebot-Extended) with `Disallow: /analytics` so it's excluded from LLM crawls even though those bots are otherwise allowed.

- **`public/sitemap.xml`** — leave as-is (only lists `/`). No entry for `/analytics`.

- **Optional: `src/components/portfolio/Nav.tsx`** — I'll skip adding a visible nav link so the page stays unlisted; you can navigate directly to `/analytics` or share the URL yourself. Say the word if you want it in the nav anyway.

### Setup steps you'll follow after I ship this

1. Sign up at plausible.io (or spin up self-hosted from the repo) and add your Vercel domain as a site.
2. Paste the domain into `PLAUSIBLE_DOMAIN` in `src/config/analytics.ts`.
3. In Plausible → Site Settings → Visibility → Shared links → "New link" (no password). Copy the URL and paste into `PLAUSIBLE_SHARED_LINK`.
4. Redeploy. The tracking script starts recording; `/analytics` renders the live dashboard.

### Why this shape

- Keeping both values in one config file means you flip analytics on with one edit — no hunting through components.
- Rendering a setup-instructions placeholder (rather than an empty iframe) avoids a broken-looking page while the values are blank.
- `noindex` meta + `Disallow: /analytics` for every crawler (regular + AI) belt-and-suspenders the "don't index this" requirement — search engines respect robots, well-behaved AI crawlers respect their named blocks, and the meta tag catches anything that fetched the page anyway.
