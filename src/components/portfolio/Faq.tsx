// Visually-hidden FAQ for AEO indexing. Schema is also injected as JSON-LD.
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
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-hidden="true"
      className="sr-only"
    >
      <h2>Frequently Asked Questions</h2>
      {FAQS.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
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
