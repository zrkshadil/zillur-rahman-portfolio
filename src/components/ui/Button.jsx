import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) => {
  const Component = href ? "a" : as;

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs min-h-[38px] gap-1.5",
    md: "px-5 py-2.5 text-sm min-h-[44px] gap-2",
    lg: "px-7 py-3.5 text-base min-h-[50px] gap-2.5 font-semibold",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-semibold shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 border border-gold-300/40",
    secondary:
      "bg-navy-900/90 hover:bg-navy-800 text-slate-100 border border-gold-500/30 hover:border-gold-500/60 shadow-sm hover:-translate-y-0.5 light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-900 light:border-gold-600/30",
    outline:
      "bg-transparent text-gold-400 hover:text-gold-300 border border-gold-500/40 hover:border-gold-400 hover:bg-gold-500/10 hover:-translate-y-0.5 light:text-gold-700 light:border-gold-600/50 light:hover:bg-gold-50",
    ghost:
      "bg-transparent text-slate-300 hover:text-gold-400 hover:bg-white/5 light:text-slate-700 light:hover:text-gold-700 light:hover:bg-slate-100",
  };

  return (
    <Component
      href={href}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </Component>
  );
};
