import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { ArrowRight, Mail, Phone, ExternalLink } from "lucide-react";

const ITEMS = [
  { icon: Mail, label: "Email", value: "willomarty01@gmail.com", href: "mailto:willomarty01@gmail.com" },
  { icon: Phone, label: "Phone", value: "+234 702 678 7353", href: "tel:+2347026787353" },
  { icon: ExternalLink, label: "Behance", value: "behance.net/willomarty", href: "https://www.behance.net/willomarty" },
  { icon: ExternalLink, label: "LinkedIn", value: "Connect with me", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Let's Work Together</SectionLabel>
          <h2 className="display-serif mt-6 text-4xl md:text-6xl leading-[1.05]">
            Got a project?
            <br />
            <span className="italic text-accent">Let's talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-foreground/70 leading-relaxed">
            Available for brand design, frontend development, creative consulting and collaborations.
            Based in Nigeria — comfortable working with clients globally.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 border border-accent/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
            Open to Work — June 2026
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border border border-border">
          {ITEMS.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-background p-6 flex items-center gap-5 border-l-2 border-l-transparent hover:border-l-accent hover:bg-surface transition-all"
            >
              <div className="border border-border p-3 text-accent group-hover:border-accent transition-colors">
                <it.icon size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
                  {it.label}
                </div>
                <div className="mt-1 text-foreground group-hover:text-accent transition-colors">
                  {it.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="mailto:willomarty01@gmail.com"
            className="group inline-flex items-center gap-2 bg-accent text-background px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent-dim transition-colors"
          >
            Send Me a Message
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
