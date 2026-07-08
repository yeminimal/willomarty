import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#tools", label: "Tools" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="/#hero" className="font-mono text-accent text-sm tracking-[0.25em]">
          WOM
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim hover:text-accent transition-colors border border-border hover:border-accent-dim/70 px-3 py-1.5"
          >
            Résumé
            <Download size={11} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="text-muted hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="text-muted hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Toggle navigation"
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-[1100px] px-6 py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-dim hover:text-accent border border-border hover:border-accent-dim/70 px-4 py-3"
            >
              Résumé
              <Download size={12} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
