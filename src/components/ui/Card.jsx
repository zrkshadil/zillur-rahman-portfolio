import React from "react";

export const Card = ({
  children,
  className = "",
  hover = true,
  glow = false,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={`
        relative rounded-xl p-6 md:p-8 transition-all duration-300
        bg-navy-900/80 light:bg-white
        border border-gold-500/15 light:border-gold-600/20
        backdrop-blur-md
        ${hover ? "hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-gold-sm light:hover:shadow-md" : ""}
        ${glow ? "shadow-gold-sm" : "shadow-sm"}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};
