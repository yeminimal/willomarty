
## Fixes

### 1. Name order (Hero)
`src/components/portfolio/Hero.tsx` — change the two-line byline to `Williams` / `Olayemi Martins`, keeping the gold italic accent on `Olayemi` (now in the middle). Update the mobile order accordingly. Other surfaces already say "Williams Olayemi Martins" — no change.

### 2. Square portrait
Hero.tsx — remove `rounded-full` on both desktop and mobile portrait wrappers. Keep border + gold shadow ring; corners stay sharp like the rest of the system.

### 3. About role line
`src/components/portfolio/About.tsx` — replace the sentence "a visual, brand and web designer, video creator and copywriter" with **"a Visual (Creative) Director"**. Yes — Visual/Creative Director is broad enough to span brand, design, video, copy, and the frontend/tooling work, since it's about owning the creative output across mediums. Surrounding paragraph wording updated minimally to flow.

### 4. Replace all emojis with lucide-react icons
Unified icon set: **lucide-react** (already used in Contact). All icons rendered in gold (`text-accent`); when placed on a gold-filled component, switch to green (`text-accent-green`).

- `src/data/education.ts` — drop `icon: string` emoji field; add `iconName` keyed to a lucide component, or just inline the component in `Education.tsx`. Map: 🎓→`GraduationCap`, 📐→`Compass`, 💻→`Code2`, 🤖→`ShieldCheck` (Cybersecurity), plus `BadgeCheck` for the new certifications.
- `src/components/portfolio/About.tsx` — replace the 4 feature emojis with `Palette`, `Code2`, `Clapperboard`, `Wrench`. Render at `size={20}` in `text-accent`.
- `Education.tsx` — render lucide component instead of `{e.icon}`.
- Audit Tools.tsx, Skills.tsx, Contact.tsx, Footer.tsx, Faq.tsx for any other emoji glyphs and swap.

### 5. Career-journey company links
`src/data/experience.ts` — add optional `link?: string` to the `Experience` type, populate where available, and render the company name as an anchor in `Experience.tsx` (gold underline on hover, `target="_blank" rel="noopener"`).

| Company | Link |
|---|---|
| MASAI Communications | `https://www.instagram.com/euphoriquepr/` (Euphorique PR, the division he worked under) |
| Getcrib | `https://getcrib.co` |
| Mytherapist.ng | `https://mytherapist.ng` |
| Incash | `https://incash.africa` |
| Jobhut, Victorious Tech, Comtech Systems, Mercab Prints | no link (per user) |

### 6. Selected Work links
`src/data/work.ts` — update/add `link` for each project:

- Frauwa → `https://vt.tiktok.com/ZSQKPaKbA/` (replace existing IG link)
- Vana → `https://vt.tiktok.com/ZSQKPqLvx/`
- Activate Pilot → `https://vt.tiktok.com/ZSQKPrw82/`
- #EndSARS Documentary → `https://vt.tiktok.com/ZSQKPmSA6/` (replace existing)
- Rebound → `https://www.behance.net/gallery/178594001/REBOUND`
- Caretaker Pro Inc. → `https://caretakerpros.com.ng`
- Mytherapist.ng, Getcrib, Moon Republic Academy, Incash → respective Twitter/X accounts
- Zamack Consults → Instagram link
- Zaytrix Modeste, Zaytrix Mgmt. & Tech Group → `https://zaytrix.com`

For the Twitter/Instagram handles I don't have explicit URLs for (Mytherapist, Getcrib, Moon Republic, Incash Twitter; Zamack IG), I'll use best-guess handles based on the brand names (e.g. `https://x.com/mytherapistng`, `https://x.com/getcrib`, `https://x.com/moonrepublic_`, `https://x.com/incashafrica`, `https://www.instagram.com/zamackconsults/`). **Open question below** — confirm or supply exact handles.

Render link as a small "Visit ↗" affordance per card (already supported by `link?` field).

### 7. Background / certifications
`src/data/education.ts` — append three entries to a new `CERTIFICATIONS` array (or extend existing list with a `kind: "education" | "certification"` discriminator) and group them under a "Certifications" subheading inside `Education.tsx`:
- Google Ads Display Certification — Google Ads — 2021
- Jobberman Soft Skills Course — Jobberman Youth Engagement and Learning — 2021
- Cybersecurity — University of the People — Ongoing

Each gets a lucide icon (`BadgeCheck`, `GraduationCap`, `ShieldCheck`).

### 8. GitHub
`src/components/portfolio/Contact.tsx` and `Footer.tsx` — wire GitHub to `https://github.com/yeminimal`. Add a GitHub row to Contact (lucide `Github` icon) alongside Behance and LinkedIn. LinkedIn stays placeholder until provided.

## Files touched
- `src/components/portfolio/Hero.tsx` (name order, square portrait)
- `src/components/portfolio/About.tsx` (role line, lucide features)
- `src/components/portfolio/Experience.tsx` (clickable company)
- `src/components/portfolio/Education.tsx` (lucide icons + certifications group)
- `src/components/portfolio/Contact.tsx` (GitHub row)
- `src/data/experience.ts` (links)
- `src/data/work.ts` (links)
- `src/data/education.ts` (lucide icon refs + new certifications)

No business-logic, no new dependencies (lucide-react already installed).

## Open question
Confirm the Twitter/X handles for **Mytherapist.ng, Getcrib, Moon Republic, Incash** and the Instagram handle for **Zamack Consults** — or I'll use the best-guess handles listed above and you can correct any after preview.
