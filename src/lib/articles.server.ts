import sanitizeHtml from "sanitize-html";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

export const PUBLISH_SESSION_NAME = "wom-publish";

export type PublishSession = { unlocked?: boolean };

export function getPublishSessionConfig() {
  const password = process.env["PUBLISH_SESSION_SECRET"];
  if (!password) throw new Error("PUBLISH_SESSION_SECRET is not set");
  return {
    password,
    name: PUBLISH_SESSION_NAME,
    maxAge: 60 * 60 * 8, // 8 hours
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

export async function isPublishUnlocked(): Promise<boolean> {
  const session = await useSession<PublishSession>(getPublishSessionConfig());
  return session.data.unlocked === true;
}

export async function requirePublishUnlocked(): Promise<void> {
  if (!(await isPublishUnlocked())) throw new Error("Locked");
}

export function passphraseMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

/** Defence in depth: applied both on save and on read/render. */
export function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "blockquote",
      "a",
      "ul",
      "ol",
      "li",
      "h2",
      "h3",
      "h4",
      "code",
      "pre",
      "hr",
      "img",
      "figure",
      "figcaption",
      "iframe",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      iframe: ["src", "title", "allow", "allowfullscreen", "width", "height"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedIframeHostnames: ["www.youtube.com", "youtube.com", "player.vimeo.com"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
  });
}
