// Plausible Analytics configuration.
//
// Setup:
// 1. Sign up at https://plausible.io (or self-host from
//    https://github.com/plausible/analytics) and add your production
//    domain as a site.
// 2. Paste that domain below as PLAUSIBLE_DOMAIN.
// 3. In Plausible → Site Settings → Visibility → Shared links,
//    create a new (no-password) shared link and paste it as
//    PLAUSIBLE_SHARED_LINK.
// 4. Redeploy. The tracking script starts recording site-wide, and
//    /analytics renders the embedded dashboard.

// e.g. "thewilliamsmartins.vercel.app"
export const PLAUSIBLE_DOMAIN: string = "";

// e.g. "https://plausible.io/share/thewilliamsmartins.vercel.app?auth=XXXXXXXX"
export const PLAUSIBLE_SHARED_LINK: string = "";

// Change if self-hosting Plausible.
export const PLAUSIBLE_HOST = "https://plausible.io";
