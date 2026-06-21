## Problem

Vercel build succeeds at `vite build` but fails with:

> Error: No Output Directory named "output" found after the Build completed.

Root cause is in the build log:

> [@lovable.dev/vite-tanstack-config] No Lovable context detected — skipping nitro deploy plugin. Pass `nitro: true` (or `nitro: { ... }`) to force-enable.

On Vercel there's no Lovable context, so the Lovable wrapper skips Nitro entirely. Without Nitro, nothing emits the `.vercel/output` folder Vercel expects, so deploy fails. Setting `NITRO_PRESET=vercel` in `vercel.json` is a no-op when Nitro never runs.

## Fix

Force Nitro on with the Vercel preset in `vite.config.ts`, and simplify `vercel.json` so Vercel auto-detects the Nitro output.

### 1. `vite.config.ts`

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
```

### 2. `vercel.json`

Strip the manual env + outputDirectory; Nitro's `vercel` preset writes to `.vercel/output` and Vercel auto-detects it.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "bun run build",
  "installCommand": "bun install",
  "framework": null
}
```

(If the Nitro preset still needs `outputDirectory: ".vercel/output"` explicitly on this Vercel CLI version, we keep that line — but drop the `NITRO_PRESET` env from `buildCommand` since the preset is now in code.)

## Verification

After redeploy, the log should:
1. No longer print "skipping nitro deploy plugin".
2. Show a Nitro build step after the SSR build that emits `.vercel/output/`.
3. Deploy succeeds; SSR runs as a Vercel function.

## Note on the `light-mode` branch

This Vercel deploy is from `main` (commit 5e39c36), which is before the light-mode work. The fix above lands on `main`. Once it's working, you (or I, after you create the branch on GitHub) can cherry-pick or merge the light-mode commits onto a `light-mode` branch and add it as a separate Vercel preview deployment.