# Add project images to Selected Work cards

Mirror the `Tools` section layout in `Work` — each card gets a 16:9 image at the top, discipline pill, title, description, and CTA.

## Steps

1. **Capture screenshots** of each entry in `src/data/work.ts` that has a `link`, using Playwright headless Chromium at 1280×720:
   - Vana (TikTok) — TikTok often blocks headless; likely fails
   - Frauwa Roofs (TikTok) — same
   - Zamack Consults (Instagram) — Instagram login wall; likely fails
   - Moon Republic (X/Twitter) — login wall; likely fails
   - Activate Pilot (TikTok) — likely fails
   - Rebound (Behance) — usually works
   - Mytherapist.ng (X) — likely fails
   - Getcrib (X) — likely fails
   - Incash (X) — likely fails
   - Zaytrix Modeste (zaytrix.com) — should work
   - Caretaker Pro (caretakerpros.com.ng) — should work
   - Zaytrix Mgmt (zaytrix.com) — should work
   - #EndSARS (TikTok) — likely fails
   - Juliet Moses — no link, skip

2. **Upload successful screenshots** as CDN assets via `lovable-assets create`, saving `.asset.json` pointers under `src/assets/work-<slug>.jpg.asset.json`. All bundled into the Vite build → deployable on Vercel with no config changes (already deployable).

3. **Extend `src/data/work.ts`**: add optional `image?: string` field to the `Work` type; wire captured URLs into each entry.

4. **Update `src/components/portfolio/Work.tsx`**: switch grid from bordered cells to `Tools`-style cards (`md:grid-cols-2 gap-5`, `border border-border bg-surface`, image block on top, content block below). When `image` is missing, render a subtle placeholder tile (monogram of client initials on `bg-tag`) so the grid stays even until the user provides missing images.

5. **Report back**: list the sites where the screenshot failed (blocked, login wall, timeout) so the user can attach images in the next turn. Those entries render the placeholder in the meantime.

## Notes

- No Vercel config change needed — the site already deploys via `vercel.json` and images are bundled as regular assets.
- Screenshots are captured at 1280×720 (matches Tools aspect), saved as `.jpg` for size.
- Cards keep linking out to the same URLs; no routing changes.
