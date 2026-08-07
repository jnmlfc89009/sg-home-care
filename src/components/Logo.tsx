import { cn } from '../lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg viewBox="0 0 100 100" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House/Shield Outline */}
        <path 
          d="M 50 10 L 15 40 L 15 75 C 15 85 25 95 50 95 C 75 95 85 85 85 75 L 85 40 Z" 
          stroke="currentColor" 
          className="text-slate-900"
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Inner Heart/Leaf shape */}
        <path 
          d="M 50 35 C 35 35 25 45 25 60 C 25 75 50 85 50 85 C 50 85 75 75 75 60 C 75 45 65 35 50 35 Z" 
          fill="currentColor"
          className="text-emerald-600"
        />
        <path 
          d="M 50 85 C 50 85 55 60 75 45" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-slate-900">
        SGHome<span className="text-emerald-600">Care</span>
      </span>
    </div>
  );
}
