import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: IconComponent
}) {
  const base = "inline-flex items-center font-extrabold rounded-full transition-all shadow-sm select-none";

  const variants = {
    default: "bg-neutral-900 dark:bg-slate-800 text-white dark:text-slate-100 border border-neutral-700/80",
    accent: "bg-neutral-950/90 text-amber-400 dark:bg-neutral-950/95 dark:text-amber-400 border border-amber-400/80 backdrop-blur-md font-extrabold shadow-md",
    amber: "bg-amber-400 text-neutral-950 font-extrabold border border-amber-300 shadow-md",
    emerald: "bg-emerald-500 text-white font-extrabold shadow-sm",
    success: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 font-bold",
    outline: "bg-neutral-900/80 text-white border border-neutral-600 font-bold backdrop-blur-sm"
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1 gap-1",
    md: "text-xs px-3.5 py-1.5 gap-1.5",
    lg: "text-sm px-4 py-1.5 gap-2"
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${sizes[size]} ${className}`}>
      {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
