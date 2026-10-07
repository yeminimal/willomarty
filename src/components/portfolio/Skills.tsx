import { Link } from "@tanstack/react-router";
import { ArrowUpRight, PenTool, Monitor, Layers, Clapperboard, Code2, Sparkles } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
const CAPABILITIES = [
  { title: "Brand identity", detail: "Frauwa Roofs & Interior Decor", icon: PenTool, slug: "frauwa" },
  { title: "Product & UI/UX", detail: "Incash", icon: Layers, slug: "incash" },
  { title: "Logo design", detail: "Zamack Consults", icon: Sparkles, slug: "zamack-consults" },
  { title: "Creative direction", detail: "Moon Republic", icon: Clapperboard, slug: "moon-republic" },
];
export function Skills() {
 return <section id="skills" className="border-t border-border py-24 md:py-28"><div className="mx-auto max-w-[1100px] px-6 md:px-10">
   <SectionLabel>Capabilities</SectionLabel><h2 className="display-serif mt-6 text-3xl md:text-5xl">The craft behind the work.</h2>
   <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
    {CAPABILITIES.map((c) => <Link key={c.title} to="/work/$slug" params={{slug:c.slug}} className="group border-b border-border py-7 pr-6 sm:pr-10"><c.icon size={24} className="text-accent" /><div className="mt-5 flex items-center justify-between gap-4"><h3 className="display-serif text-2xl group-hover:text-accent">{c.title}</h3><ArrowUpRight size={16} className="text-accent" /></div><p className="mt-2 text-sm text-muted">{c.detail}</p></Link>)}
    <Link to="/articles/$slug" params={{slug:"web-design-framer-webflow-wordpress"}} className="group border-b border-border py-7 pr-6 sm:pr-10"><Monitor size={24} className="text-accent" /><div className="mt-5 flex justify-between gap-4"><h3 className="display-serif text-2xl group-hover:text-accent">Web design</h3><ArrowUpRight size={16} className="text-accent" /></div><p className="mt-2 text-sm text-muted">Framer, Webflow & WordPress</p></Link>
    <a href="/#tools" className="group border-b border-border py-7 pr-6 sm:pr-10"><Code2 size={24} className="text-accent" /><div className="mt-5 flex justify-between gap-4"><h3 className="display-serif text-2xl group-hover:text-accent">Development</h3><ArrowUpRight size={16} className="text-accent" /></div><p className="mt-2 text-sm text-muted">Four independently shipped micro-tools</p></a>
   </div>
 </div></section>;
}
