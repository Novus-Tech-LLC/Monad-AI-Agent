
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-x",
        className
      )}
    >
      {children}
    </span>
  );
}
