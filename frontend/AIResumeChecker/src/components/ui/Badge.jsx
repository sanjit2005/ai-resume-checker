import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-tight tabular",
  {
    variants: {
      tone: {
        neutral:
          "bg-[var(--surface-2)] text-[var(--ink-muted)] border border-[var(--border)]",
        accent:
          "bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent)]/20",
        success:
          "bg-[rgba(78,186,124,0.12)] text-[var(--success)] border border-[var(--success)]/20",
        warning:
          "bg-[rgba(245,158,11,0.12)] text-[var(--warning)] border border-[var(--warning)]/20",
        danger:
          "bg-[rgba(240,93,94,0.12)] text-[var(--danger)] border border-[var(--danger)]/20",
        ink:
          "bg-[var(--ink)] text-[var(--bg)]",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export function Badge({ className, tone, ...props }) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

export { badgeVariants };
