import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          © 2026 Williams Olayemi Martins · Lagos, Nigeria
        </div>
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim hover:text-accent transition-colors"
        >
          Back to Top
          <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
