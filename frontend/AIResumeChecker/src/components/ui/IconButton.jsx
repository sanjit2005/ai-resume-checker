import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const IconButton = forwardRef(
  ({ className, dot, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--ink)] shadow-card transition-all hover:shadow-hover hover:border-[rgba(255,180,130,0.2)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30 cursor-pointer",
        className
      )}
      {...props}
    >
      {props.children}
      {dot && (
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[var(--accent)] ring-2 ring-[var(--surface)] animate-pulse" />
      )}
    </button>
  )
);
IconButton.displayName = "IconButton";
