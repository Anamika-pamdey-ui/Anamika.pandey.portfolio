import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  colorClass?: string;
  className?: string;
}

export function SkillBadge({ children, icon, colorClass = "bg-secondary", className }: SkillBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 border-2 border-foreground px-3 py-1.5 shadow-[2px_2px_0px_0px_hsl(var(--foreground))]",
        colorClass,
        className
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="font-bold text-sm tracking-wide text-foreground">{children}</span>
    </div>
  );
}
