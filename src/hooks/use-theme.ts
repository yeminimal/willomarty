import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
const STORAGE_KEY = "wom-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let initial: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") initial = stored;
    } catch {
      initial = document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    setTheme(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      return;
    }
  }, [theme, ready]);

  return {
    theme,
    toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    setTheme,
  };
}
