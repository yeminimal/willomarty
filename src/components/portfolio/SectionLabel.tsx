export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 label-mono">
      <span className="h-px w-8 bg-accent-dim/60" />
      <span>{children}</span>
    </div>
  );
}
