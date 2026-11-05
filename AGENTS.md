<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Articles are static data in `src/data/articles.ts` (no backend); derive excerpts and reading time in shared helpers so layouts stay unchanged when content is added.
- Homepage writing, the archive, detail pages and the article sitemap all consume the same `PUBLISHED_ARTICLES` list from that data file; adding an article is a data-only change.

- About, education with certifications, and contact render their existing sections on dedicated public routes; homepage stays focused on work, and shared fonts live in the root head so direct visits retain typography.
