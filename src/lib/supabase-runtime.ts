/**
 * Runtime fallbacks for the public Supabase connection settings.
 *
 * Both values are public by design — the same URL and publishable key already
 * ship in the browser bundle via VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY —
 * so embedding them here is safe. They exist because hosts like Vercel do not
 * inject the project .env into the runtime environment of deployed functions;
 * the real environment variables always win when they are present.
 */
const FALLBACK_SUPABASE_URL = "https://ilqacstdiokavcpkdffs.supabase.co";
const FALLBACK_PUBLISHABLE_KEY = "sb_publishable_Ag0Lf69kjfkBEEY8xsgykw_rQDAmxcQ";

export function supabaseRuntimeUrl(): string {
  return process.env["SUPABASE_URL"] || FALLBACK_SUPABASE_URL;
}

export function supabaseRuntimePublishableKey(): string {
  return (
    process.env["SUPABASE_PUBLISHABLE_KEY"] ||
    process.env["SUPABASE_ANON_KEY"] ||
    FALLBACK_PUBLISHABLE_KEY
  );
}
