import React from "react";

export const Badge = ({ children, variant = "gold", className = "" }) => {
  const variants = {
    gold: "bg-gold-500/10 text-gold-400 border-gold-500/30 dark:bg-gold-500/10 dark:text-gold-300 dark:border-gold-500/30 light:bg-gold-50 light:text-gold-800 light:border-gold-300",
    navy: "bg-navy-800/60 text-slate-200 border-navy-700",
    outline: "bg-transparent text-slate-300 border-slate-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-sm transition-all duration-200 ${variants[variant] || variants.gold} ${className}`}
    >
      {children}
    </span>
  );
};
