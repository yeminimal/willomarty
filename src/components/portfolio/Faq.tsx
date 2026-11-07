import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const FAQ_LINK_CLASS = "text-accent-dim underline decoration-border underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Who is Williams Olayemi Martins?",
    a: (
      <>
        <p>
          Williams Olayemi Martins is a Lagos-based brand, product, and web designer with over seven years of experience creating visual identities, digital products, and tailored web experiences.
        </p>
        <p>
          His work combines visual design, user experience, and technology to help businesses communicate clearly, build stronger brands, and create meaningful digital experiences. Learn more <Link to="/about" className={FAQ_LINK_CLASS}>about Williams</Link> and his approach.
        </p>
      </>
    ),
  },
  {
    q: "What design services does Williams offer?",
    a: (
      <>
        <p>
          Williams offers brand identity design, web design and development, product design (UI/UX), motion design, video production, and creative direction.
        </p>
        <p>
          His primary disciplines are brand identity, web, and product design. Explore his <Link to="/work/$slug" params={{ slug: "frauwa" }} className={FAQ_LINK_CLASS}>brand identity project for Frauwa</Link> and <Link to="/work/$slug" params={{ slug: "zamack-consults" }} className={FAQ_LINK_CLASS}>work for Zamack Consults</Link>.
        </p>
      </>
    ),
  },
  {
    q: "Does Williams design and develop websites?",
    a: (
      <>
        <p>
          Yes. Williams designs and develops landing pages, corporate websites, portfolios, and marketing websites for startups, businesses, and established brands.
        </p>
        <p>
          He works with Webflow, Framer, and WordPress, combining responsive design, usability, performance, and SEO considerations. <Link to="/work/$slug" params={{ slug: "webflow-development" }} className={FAQ_LINK_CLASS}>View a selected website project</Link>.
        </p>
      </>
    ),
  },
  {
    q: "Does Williams work on digital products and applications?",
    a: (
      <>
        <p>
          Yes. Williams works on digital product experiences, including websites, web applications, and mobile interfaces.
        </p>
        <p>
          His product design process involves understanding user needs, mapping user journeys, creating wireframes, designing interfaces, and developing interactive prototypes. His portfolio includes fintech and real-estate product experiences, including <Link to="/work/$slug" params={{ slug: "incash" }} className={FAQ_LINK_CLASS}>product design for Incash</Link>.
        </p>
      </>
    ),
  },
  {
    q: "What industries and businesses does Williams work with?",
    a: (
      <>
        <p>
          Williams has worked across fintech, technology, real estate, healthcare, education, fashion, construction, professional services, and e-commerce.
        </p>
        <p>
          Selected projects include <Link to="/work/$slug" params={{ slug: "incash" }} className={FAQ_LINK_CLASS}>Incash</Link>, <Link to="/work/$slug" params={{ slug: "webflow-development" }} className={FAQ_LINK_CLASS}>YDPay</Link>, Moon Republic, Zamack Consults, Getcrib, MyTherapist.ng, and Zaytrix. Explore the <Link to="/work" className={FAQ_LINK_CLASS}>selected work archive</Link> for more. Each project is shaped around its audience, business goals, and specific challenges.
        </p>
      </>
    ),
  },
  {
    q: "Does Williams work with international clients?",
    a: (
      <>
        <p>
          Based in Lagos, Nigeria, Williams is available for remote collaborations with businesses, startups, and creative teams.
        </p>
        <p>
          His portfolio includes work for businesses in Nigeria and Canada. Explore the <Link to="/work" className={FAQ_LINK_CLASS}>selected work archive</Link> to see examples. Contact him to discuss your project, location, and preferred communication workflow.
        </p>
      </>
    ),
  },
  {
    q: "What is it like working with Williams?",
    a: (
      <>
        <p>
          Every project begins with understanding the problem, the people it is intended for, and what the business hopes to achieve.
        </p>
        <p>
          From discovery and planning to design, feedback, and delivery, Williams keeps clients involved through a collaborative process without making the work unnecessarily complicated. The goal is to create thoughtful, functional solutions for both the business and its audience.
        </p>
      </>
    ),
  },
  {
    q: "How can I start a project with Williams?",
    a: (
      <>
        <p>
          Reach out through the <Link to="/contact" className={FAQ_LINK_CLASS}>contact page</Link> with a brief description of your project, what you hope to achieve, and any useful references or requirements.
        </p>
        <p>
          Williams will review your enquiry and discuss the project scope, expectations, and next steps. Whether you are building a brand, redesigning a website, or developing a digital product, the first step is a conversation.
        </p>
      </>
    ),
  },
  {
    q: "What digital tools has Williams built?",
    a: (
      <>
        <p>
          Williams also develops independent browser-based tools designed to solve practical problems.
        </p>
        <p>
          His projects include SeeQR, an offline QR code scanner; ImageSqueeze, a browser-based image compressor; Scrapely, an AI-powered web data extraction tool; and Screenshot Studio, a website screenshot and device mockup tool. <Link to="/projects" className={FAQ_LINK_CLASS}>Discover Williams' independent digital tools</Link>.
        </p>
      </>
    ),
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        <div className="mt-14 border-y border-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;
            const questionId = `faq-question-${index + 1}`;
            return (
              <Reveal key={faq.q} delay={Math.min(index * 0.03, 0.15)}>
                <div className="border-b border-border last:border-b-0">
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:py-7"
                    >
                      <span className="display-serif text-xl leading-snug text-foreground md:text-[22px]">
                        {faq.q}
                      </span>
                      <span aria-hidden="true" className="shrink-0 text-accent-dim transition-colors group-hover:text-accent">
                        {isOpen ? <Minus size={17} strokeWidth={1.5} /> : <Plus size={17} strokeWidth={1.5} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="max-w-[68ch] space-y-4 pb-7 text-[15px] leading-[1.8] text-foreground/75">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-border pt-10 md:mt-24 md:pt-14">
            <SectionLabel>Start a project</SectionLabel>
            <h3 className="display-serif mt-5 text-3xl md:text-4xl">Have something in mind?</h3>
            <p className="mt-4 text-lg text-foreground/85">Let's turn your next idea into something meaningful.</p>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-foreground/70">
              Whether it's a brand, website, or digital product, I'd love to hear what you're working on.
            </p>
            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dim transition-colors hover:border-accent-dim/70 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Start a conversation <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
