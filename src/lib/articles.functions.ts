import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { Article } from "./articles.shared";
import { slugify } from "./articles.shared";

const ARTICLE_COLUMNS =
  "id, title, slug, meta_description, cover_image_url, body_html, tags, status, published_at, created_at, updated_at";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

/* ----------------------------- public reads ----------------------------- */

export const listPublishedArticles = createServerFn({ method: "GET" }).handler(async () => {
  const { sanitizeArticleHtml } = await import("./articles.server");
  const { data, error } = await publicClient()
    .from("articles")
    .select(ARTICLE_COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("listPublishedArticles", error);
    return [] as Article[];
  }
  return (data ?? []).map((a) => ({
    ...(a as Article),
    body_html: sanitizeArticleHtml((a as Article).body_html ?? ""),
  }));
});

export const getPublishedArticle = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const { sanitizeArticleHtml } = await import("./articles.server");
    const { data: row, error } = await publicClient()
      .from("articles")
      .select(ARTICLE_COLUMNS)
      .eq("slug", data.slug)
      .eq("status", "published")
      .maybeSingle();

    if (error) console.error("getPublishedArticle", error);
    if (!row) return null;
    const article = row as Article;
    return { ...article, body_html: sanitizeArticleHtml(article.body_html ?? "") };
  });

/* -------------------------------- the gate ------------------------------- */

export const getPublishGateState = createServerFn({ method: "GET" }).handler(async () => {
  const { isPublishUnlocked } = await import("./articles.server");
  return { unlocked: await isPublishUnlocked() };
});

export const unlockPublish = createServerFn({ method: "POST" })
  .inputValidator((data: { passphrase: string }) => data)
  .handler(async ({ data }) => {
    const { getPublishSessionConfig, passphraseMatches } = await import("./articles.server");
    const expected = process.env["PUBLISH_ACCESS_CODE"];
    if (!expected) throw new Error("PUBLISH_ACCESS_CODE is not set");
    if (!data.passphrase || !passphraseMatches(data.passphrase, expected)) {
      return { ok: false as const };
    }
    const session = await useSession<{ unlocked?: boolean }>(getPublishSessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const lockPublish = createServerFn({ method: "POST" }).handler(async () => {
  const { getPublishSessionConfig } = await import("./articles.server");
  const session = await useSession<{ unlocked?: boolean }>(getPublishSessionConfig());
  await session.clear();
  return { ok: true as const };
});

/* ------------------------------ authoring -------------------------------- */

export const listAllArticles = createServerFn({ method: "GET" }).handler(async () => {
  const { requirePublishUnlocked } = await import("./articles.server");
  await requirePublishUnlocked();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("articles")
    .select(ARTICLE_COLUMNS)
    .order("updated_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as Article[];
});

export interface ArticleInput {
  id?: string;
  title: string;
  slug: string;
  meta_description: string;
  cover_image_url: string;
  body_html: string;
  tags: string[];
  publish: boolean;
}

export const saveArticle = createServerFn({ method: "POST" })
  .inputValidator((data: ArticleInput) => data)
  .handler(async ({ data }) => {
    const { requirePublishUnlocked, sanitizeArticleHtml } = await import("./articles.server");
    await requirePublishUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const body_html = sanitizeArticleHtml(data.body_html ?? "");
    const title = data.title.trim();

    if (data.publish) {
      const missing: string[] = [];
      if (!title) missing.push("title");
      if (!data.meta_description.trim()) missing.push("meta_description");
      if (!data.cover_image_url.trim()) missing.push("cover_image_url");
      if (!body_html.replace(/<[^>]*>/g, "").trim()) missing.push("body");
      if (missing.length) return { ok: false as const, missing };
    }

    const slug = slugify(data.slug || title) || `article-${Date.now()}`;

    const payload = {
      title,
      slug,
      meta_description: data.meta_description.trim(),
      cover_image_url: data.cover_image_url.trim(),
      body_html,
      tags: data.tags.map((t) => t.trim()).filter(Boolean),
      status: (data.publish ? "published" : "draft") as "published" | "draft",
    };

    if (data.id) {
      const { error } = await supabaseAdmin.from("articles").update(payload).eq("id", data.id);
      if (error) return { ok: false as const, error: error.message };
      return { ok: true as const, slug };
    }

    const { error } = await supabaseAdmin.from("articles").insert(payload);
    if (error) return { ok: false as const, error: error.message };
    return { ok: true as const, slug };
  });

export const unpublishArticle = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const { requirePublishUnlocked } = await import("./articles.server");
    await requirePublishUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("articles")
      .update({ status: "draft" })
      .eq("id", data.id);
    if (error) return { ok: false as const, error: error.message };
    return { ok: true as const };
  });

export const deleteArticle = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const { requirePublishUnlocked } = await import("./articles.server");
    await requirePublishUnlocked();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("articles").delete().eq("id", data.id);
    if (error) return { ok: false as const, error: error.message };
    return { ok: true as const };
  });
