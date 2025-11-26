
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_10px_30px_rgba(99,102,241,0.35)] sm:h-14 sm:w-14">
        <div className="absolute inset-[3px] rounded-[18px] bg-background/60 backdrop-blur-sm" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-8 w-8 text-indigo-500 sm:h-9 sm:w-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 22c0-5.523 4.477-10 10-10s10 4.477 10 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 10c0-3.314 2.686-6 6-6s6 2.686 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.6}
          />
          <circle cx="16" cy="22" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          MnadAI
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Monad Agent
        </span>
      </div>
    </div>
  );
};

export default Logo;
