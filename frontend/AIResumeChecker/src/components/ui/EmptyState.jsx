import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function EmptyState({ icon: Icon, title, description, action, className }) {
  return (
    <Card className={cn("flex flex-col items-center text-center py-12", className)}>
      {Icon && (
        <div className="h-14 w-14 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent)]/20 flex items-center justify-center mb-3">
          <Icon size={22} />
        </div>
      )}
      <div className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">{title}</div>
      {description && (
        <p className="text-sm text-[var(--ink-muted)] mt-1.5 max-w-sm leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </Card>
  );
}
