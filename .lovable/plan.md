# Articles System + Publish Page

Adds a writing/publishing system to the site: a public Articles section anyone can read and share, and a private page where you write and publish, protected by a passphrase. Visual style stays exactly as it is today.

## What you'll get

**Articles list (`/articles`)**
- All published pieces, newest first, using the same card style as Work/Gallery.
- Cover image, title, short description, date, tags.
- New "Articles" link in the main menu.

**Article page (`/articles/your-title`)**
- Cover image at the top, title, date, tags, formatted body.
- Its own page title, description, and social preview image (the cover image doubles as the share image).
- Search-friendly markup so Google can index each piece as its own page.
- Unknown or unpublished addresses show the site's normal "not found" page.

**Publish page (`/publish`, private)**
- Asks for a passphrase first; the check happens on the server, so it can't be bypassed. Stays unlocked for a while, then asks again.
- Lists every article, drafts included, with status badges, plus New / Edit / Delete (delete asks for confirmation).
- Editing opens a dialog with: Title (address auto-fills as you type, editable until first publish then locked with an explanation), Meta description with a live character counter, Tags, and a drag-and-drop cover image upload with preview and a note that it's also the social preview image.
- Body editor with Bold, Italic, Underline, Quote, and Link buttons, styled to match the site.
- Two buttons: "Save Draft" (never blocks) and "Publish" (requires title, description, cover image and body, with inline messages for anything missing).

**Search engines**
- `/articles` and every published article are added to the sitemap; drafts never are.
- `/publish` is blocked in robots.txt and kept out of the sitemap.

## Technical notes

- Enable Lovable Cloud (no backend exists yet) and create an `articles` table with the exact columns specified (id, title, slug unique, meta_description, cover_image_url, body_html, tags, status draft/published, published_at, created_at, updated_at) plus grants, RLS and an `updated_at` trigger. Public read policy limited to `status = 'published'` for anon; all writes go through server functions only.
- Public storage bucket `article-covers` for cover images; only the public URL is stored on the row.
- Editor: Tiptap (StarterKit + Underline + Link), output sanitized with DOMPurify (isomorphic build) both on save and on render.
- Gate: `PUBLISH_ACCESS_CODE` secret, verified in a `createServerFn` that sets a short-lived signed HttpOnly session cookie; the publish page's data functions re-verify that cookie on every call. Nothing secret ships to the browser.
- Reads: route loader + `ensureQueryData`/`useSuspenseQuery`, matching the existing pattern. Article `head()` supplies title, description, canonical, OG/Twitter tags with `cover_image_url`, and Article JSON-LD (author/publisher reuse the existing Person data).
- Sitemap: `public/sitemap.xml` is static today, so `/articles` goes in statically and per-article entries are served from a dynamic `/sitemap-articles.xml` route referenced by a sitemap index — no rebuild needed when you publish.
- Placeholders: `[[PLACEHOLDER: ...]]` for article content and cover images; embed auto-detection (pasting a YouTube link) is left as a marked placeholder — link insertion works fully now.

## Needs from you

- The passphrase you want for `/publish` (I'll store it as a secret, not in code).
