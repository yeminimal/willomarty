export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  projectSlug?: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "[[PLACEHOLDER: request a real quote from this client]]",
    name: "[[PLACEHOLDER: client name]]",
    role: "[[PLACEHOLDER: client role/title]]",
    company: "[[PLACEHOLDER: company name]]",
    projectSlug: "incash",
  },
  {
    quote: "[[PLACEHOLDER: request a real quote from this client]]",
    name: "[[PLACEHOLDER: client name]]",
    role: "[[PLACEHOLDER: client role/title]]",
    company: "[[PLACEHOLDER: company name]]",
    projectSlug: "zamack-consults",
  },
  {
    quote: "[[PLACEHOLDER: request a real quote from this client]]",
    name: "[[PLACEHOLDER: client name]]",
    role: "[[PLACEHOLDER: client role/title]]",
    company: "[[PLACEHOLDER: company name]]",
    projectSlug: "moon-republic",
  },
  {
    quote: "[[PLACEHOLDER: request a real quote from this client]]",
    name: "[[PLACEHOLDER: client name]]",
    role: "[[PLACEHOLDER: client role/title]]",
    company: "[[PLACEHOLDER: company name]]",
    projectSlug: "frauwa",
  },
];
