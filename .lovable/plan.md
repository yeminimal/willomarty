# Improvements Plan

## 1. Dynamic "Open to Work" month/year (`Contact.tsx`)
Replace hard-coded `"Open to Work — June 2026"` with a runtime-formatted date so it always shows the current month/year:
```ts
const now = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });
// → "Open to Work — {now}"
```

## 2. Logos for certifications & schools (`Education.tsx` + `education.ts`)
Add an optional `logo: string` field to the `Education` type and render it as a small monochrome `<img>` in the upper-left of each card (replacing the lucide icon when a logo is present; lucide stays as fallback).

Logo source: `https://cdn.simpleicons.org/{slug}/C8A96E` (Simple Icons CDN, gold-tinted, no install). Mapping:
- B.Sc. Mass Communication → University of Benin → custom inline SVG/text mark (no Simple Icons entry) → keep `GraduationCap` icon, add small "UNIBEN" wordmark below institution
- Enikin Design Academy → keep `Compass` icon (no public brand mark)
- Frontend Development → keep `Code2`
- AI-Assisted Product Development → see section 3 (this card becomes a logo grid)
- Google Ads Display Certification → `googleads`
- Jobberman Soft Skills → keep `BadgeCheck` (no Simple Icons entry; Jobberman has no public brand mark on the CDN)
- Cybersecurity at University of the People → keep `ShieldCheck` (no Simple Icons entry)

For the Google Ads card, render the Simple Icons logo at 28px in place of the lucide icon. Other cards keep the existing lucide icons since reliable brand marks aren't available.

## 3. AI-Assisted Product Development tool stack (`education.ts` + `Education.tsx`)
Drop the `"Self-directed · Lovable ecosystem"` institution line. Replace it with a horizontal logo strip rendered inside that card showing six tools:

| Tool | Logo source |
|---|---|
| Lovable | inline SVG (heart-mark, brand color) |
| Orchids (Buds) | text wordmark "Orchids" in serif italic |
| Claude | `https://cdn.simpleicons.org/claude/C8A96E` |
| ChatGPT | `https://cdn.simpleicons.org/openai/C8A96E` |
| GitHub Copilot | `https://cdn.simpleicons.org/githubcopilot/C8A96E` |
| Gemini | `https://cdn.simpleicons.org/googlegemini/C8A96E` |

Implementation: add `tools?: { name: string; logo: string }[]` to the `Education` type. In `Education.tsx`, when `tools` exists, render the array as a wrapping flex row of small monochrome logos with tooltips (`title={name}`) below the credential title.

## 4. Mockup images for the four micro-tools
Generate one 16:9 mockup per tool using `imagegen--generate_image` (premium tier, since these contain UI/text):

- **Scrapely** — browser window with URL bar + JSON output panel
- **Screenshot Studio** — phone + laptop device frames showing the same site
- **ImageSqueeze** — before/after image with file-size labels
- **Pocket QR** — phone scanning a QR code, generated QR alongside

Save as Lovable assets under `src/assets/tool-{slug}.jpg.asset.json` (uploaded via the assets CLI; the binaries are removed after upload).

Update `Tool` type to include `image: string` (CDN URL). Restructure `Tools.tsx` cards to a vertical layout: image on top half (aspect-video, full bleed), text/tags/CTA on bottom half. Keep existing border + hover treatment.

## 5. Portrait as favicon (`__root.tsx`)
Add a `link` entry to the root route head pointing to the portrait CDN URL:
```ts
links: [
  { rel: "icon", type: "image/webp", href: portraitAsset.url },
  { rel: "stylesheet", href: appCss },
]
```
While editing the head, also fix the stale "Lovable App" / "Lovable Generated Project" / `@Lovable` defaults to portfolio-appropriate values (title: "Williams Olayemi Martins — Visual Director & Frontend Developer", matching description and OG/Twitter tags).

## 6. Vercel deployability
The project currently builds with the Cloudflare nitro preset (default in `@lovable.dev/vite-tanstack-config`). To deploy on Vercel without breaking the existing Lovable preview:

- Add `vercel.json` at project root selecting the Vercel preset only at build time on Vercel:
  ```json
  {
    "buildCommand": "NITRO_PRESET=vercel bun run build",
    "outputDirectory": ".vercel/output",
    "installCommand": "bun install",
    "framework": null
  }
  ```
  Nitro reads `NITRO_PRESET` and emits a Vercel-compatible build under `.vercel/output` without code changes. The Lovable preview keeps using the default Cloudflare preset because the env var is only set in Vercel's build environment.

- Verify no Cloudflare-only APIs are used (server functions in this project are presentational only — confirmed: nothing imports `cloudflare:*` or uses Workers KV/D1).

- Add `.vercel` to `.gitignore` if absent.

User action after merge: import the repo in the Vercel dashboard, accept defaults — `vercel.json` handles the rest.

## Files touched
- `src/components/portfolio/Contact.tsx` — dynamic date
- `src/components/portfolio/Education.tsx` — logo rendering + tools strip
- `src/data/education.ts` — `logo`/`tools` fields
- `src/data/tools.ts` — `image` field
- `src/components/portfolio/Tools.tsx` — image-on-top card layout
- `src/routes/__root.tsx` — favicon link + real metadata
- `src/assets/tool-*.jpg.asset.json` — 4 new mockup images
- `vercel.json` — new
- `.gitignore` — add `.vercel`

No new npm dependencies; Simple Icons used via CDN, all logos via `<img>`.

## Open questions
1. For the 4 Lovable / Orchids logos that aren't on Simple Icons — confirm: inline SVG/wordmark fallback is acceptable, or do you want to upload official logo SVGs (drop them in chat and I'll wire them up)?
2. Mockup image style — should they match the dark green/gold portfolio theme (deep green backgrounds, gold accents in the UI shown), or look like neutral product screenshots?
