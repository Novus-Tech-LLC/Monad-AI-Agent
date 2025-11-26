
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedShinyText({
  children,
  className,
  ...props
}: AnimatedShinyTextProps) {
  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,white,white,transparent)]",
        className
      )}
      {...props}
    >
      {children}
      <div
        className="pointer-events-none absolute -left-[15%] top-0 h-full w-1/3 skew-x-12 animate-[shiny_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ animation: "shiny 4s ease-in-out infinite" }}
      />
    </div>
  );
}
