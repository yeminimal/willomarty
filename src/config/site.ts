/**
 * Single source of truth for site-wide identity, URLs and social links.
 *
 * To switch to a custom domain: update `url` here — all canonical tags,
 * JSON-LD, sitemap references and social links derive from this one value.
 *
 * To add your LinkedIn URL: replace the [[PLACEHOLDER]] string in `social.linkedin`.
 */
export const siteConfig = {
  /** [[PLACEHOLDER: replace with final custom domain once purchased, e.g. https://willomarty.com]] */
  url: "https://willomarty.vercel.app",
  name: "Williams Olayemi Martins",
  shortName: "Willomarty",
  email: "willomarty01@gmail.com",
  phone: "+2347026787353",
  social: {
    github: "https://github.com/yeminimal",
    behance: "https://www.behance.net/willomarty",
    /** [[PLACEHOLDER: LinkedIn profile URL — currently shown as a dead '#' link in About and Contact sections]] */
    linkedin:
      "[[PLACEHOLDER: LinkedIn profile URL — currently a dead '#' link in two places]]",
  },
};
