const ITEMS: { type: "metric" | "brand"; value: string }[] = [
  { type: "metric", value: "7+ Years Experience" },
  { type: "brand", value: "Incash" },
  { type: "metric", value: "20+ Projects Delivered" },
  { type: "brand", value: "Zamack Consults" },
  { type: "metric", value: "4 Micro-Tools Shipped" },
  { type: "brand", value: "Moon Republic" },
  { type: "metric", value: "8+ Brands Served" },
  { type: "brand", value: "Frauwa Roofs" },
  { type: "brand", value: "MASAI Communications" },
  { type: "brand", value: "Getcrib" },
  { type: "brand", value: "Mytherapist.ng" },
  { type: "brand", value: "Victorious Tech" },
];

export function MetricStrip() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative mt-16 md:mt-20 border-y border-border overflow-hidden">
      <div className="flex w-max motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:gap-4 motion-reduce:py-5">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 shrink-0 px-8 py-5"
            aria-hidden={i >= ITEMS.length ? "true" : undefined}
          >
            <span
              className={
                item.type === "metric"
                  ? "font-mono text-[11px] uppercase tracking-[0.18em] text-accent whitespace-nowrap"
                  : "display-serif text-lg md:text-xl text-foreground/60 whitespace-nowrap"
              }
            >
              {item.value}
            </span>
            <span className="text-accent-dim/50">✦</span>
          </div>
        ))}
      </div>

      {/* Edge fade so items scroll in/out cleanly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
