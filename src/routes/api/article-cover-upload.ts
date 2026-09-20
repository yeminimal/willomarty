import { createFileRoute } from "@tanstack/react-router";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

export const Route = createFileRoute("/api/article-cover-upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { isPublishUnlocked } = await import("@/lib/articles.server");
        if (!(await isPublishUnlocked())) {
          return Response.json({ error: "Locked" }, { status: 401 });
        }

        const form = await request.formData();
        const file = form.get("file");
        if (!(file instanceof File)) {
          return Response.json({ error: "No file received." }, { status: 400 });
        }
        if (!ALLOWED.includes(file.type)) {
          return Response.json(
            { error: "Unsupported format. Use JPG, PNG, WebP, AVIF or GIF." },
            { status: 400 },
          );
        }
        if (file.size > MAX_BYTES) {
          return Response.json({ error: "Image is larger than 8MB." }, { status: 400 });
        }

        const ext = (file.name.split(".").pop() ?? "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
        const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.storage
          .from("article-covers")
          .upload(path, await file.arrayBuffer(), { contentType: file.type, upsert: false });

        if (error) {
          console.error("cover upload", error);
          return Response.json({ error: "Upload failed. Try again." }, { status: 500 });
        }

        return Response.json({ url: `/api/public/article-cover/${path}` });
      },
    },
  },
});
