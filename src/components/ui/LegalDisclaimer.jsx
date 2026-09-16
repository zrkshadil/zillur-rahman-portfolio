import React from "react";
import { ShieldAlert } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export const LegalDisclaimer = ({ className = "" }) => {
  return (
    <div
      className={`rounded-xl p-5 md:p-6 bg-navy-900/60 light:bg-slate-50 border border-gold-500/25 light:border-gold-600/30 flex items-start gap-4 text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed ${className}`}
      role="note"
      aria-label="Legal Disclaimer"
    >
      <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 shrink-0 mt-0.5">
        <ShieldAlert className="w-5 h-5" />
      </div>
      <div>
        <p className="font-semibold text-slate-200 light:text-slate-900 mb-1 tracking-wide uppercase text-[11px]">
          Professional Legal Notice & Disclaimer
        </p>
        <p>{siteConfig.legalServices.disclaimer}</p>
      </div>
    </div>
  );
};
