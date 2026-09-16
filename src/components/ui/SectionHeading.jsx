import React from "react";
import { Badge } from "./Badge";

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start mr-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="gold">{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-bold text-slate-100 light:text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-1 w-16 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
};
