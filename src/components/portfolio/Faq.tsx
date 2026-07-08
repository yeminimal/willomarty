import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Who is Williams Olayemi Martins?",
    a: "Williams Olayemi Martins is a Nigerian visual designer, brand designer and frontend developer based in Lagos. He works across brand identity, UI/UX, video production and frontend engineering, and has built four browser-based micro-tools.",
  },
  {
    q: "What services does Williams Olayemi Martins offer?",
    a: "Brand identity and logo design, UI/UX design, frontend development with React and Tailwind, video production and motion design, and creative direction for marketing campaigns.",
  },
  {
    q: "Where is Williams Olayemi Martins based?",
    a: "Lagos, Nigeria. He works remotely with clients globally.",
  },
  {
    q: "What tools has Williams built?",
    a: "Scrapely, Screenshot Studio, ImageSqueeze and Pocket QR — four lightweight, browser-based micro-tools available online.",
  },
  {
    q: "Does Williams work with international or remote clients?",
    a: "Yes. Williams is remote-first from Lagos and has shipped work for clients across Canada (Zaytrix Modeste, Zaytrix Mgmt. & Tech Group), the United States, and multiple African markets. The workflow is async-friendly, with clear check-ins across time zones.",
  },
  {
    q: "What industries has Williams designed for?",
    a: "Fintech (Incash), real estate and proptech (Caretaker Pro, Getcrib), fashion and e-commerce (Zaytrix Modeste, Juliet Moses), Web3 and education (Moon Republic), legal and business services (Zamack Consults), construction and interiors (Frauwa), health (Mytherapist.ng) and consumer packaged goods (Vana, Rebound).",
  },
  {
    q: "Does Williams offer web development alongside design?",
    a: "Yes. Williams builds production frontends in React, TypeScript and Tailwind, and has shipped four browser-based tools end-to-end. Design and build can stay in one hand when a project calls for it — no handoff friction between how something looks and how it ships.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="display-serif mt-6 text-3xl md:text-5xl max-w-2xl">
            Questions I get,
            <br />
            <span className="italic text-accent">answered plainly.</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 0.03, 0.15)}>
              <div className="py-8 grid md:grid-cols-[1fr_1.4fr] gap-4 md:gap-10">
                <h3 className="display-serif text-xl md:text-[22px] leading-snug text-foreground">
                  {f.q}
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/75 max-w-[62ch]">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
