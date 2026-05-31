import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PixelCardProps {
  children: ReactNode;
  className?: string;
}

export function PixelCard({ children, className }: PixelCardProps) {
  return (
    <div 
      className={cn(
        "bg-card border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--primary))] p-6 relative transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))] duration-200",
        className
      )}
    >
      {/* Decorative pixel corners */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-foreground -translate-x-[4px] -translate-y-[4px]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-foreground translate-x-[4px] -translate-y-[4px]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-foreground -translate-x-[4px] translate-y-[4px]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-foreground translate-x-[4px] translate-y-[4px]"></div>
      
      {children}
    </div>
  );
}
