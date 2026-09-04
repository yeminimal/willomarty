import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
const STORAGE_KEY = "wom-theme";

export function useTheme() {
  // Never read the DOM during render: the inline boot script may already have
  // set `.dark`, which would differ from the server HTML and break hydration.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  return {
    theme: theme ?? "light",
    ready: theme !== null,
    toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    setTheme,
  };
}
