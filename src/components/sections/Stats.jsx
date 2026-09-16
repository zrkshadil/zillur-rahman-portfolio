import React from "react";
import { Scale, TrendingUp, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export const Stats = () => {
  const iconMap = {
    Scale: Scale,
    TrendingUp: TrendingUp,
    FileSpreadsheet: FileSpreadsheet,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section className="py-12 bg-navy-900/40 light:bg-slate-50 border-y border-gold-500/15 light:border-gold-600/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat) => {
            const Icon = iconMap[stat.icon] || Scale;
            return (
              <div
                key={stat.id}
                className="flex items-center gap-4 p-5 rounded-xl bg-navy-950/60 light:bg-white border border-gold-500/15 light:border-gold-600/25 hover:border-gold-400/40 hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 text-gold-400 light:text-gold-700 flex items-center justify-center shrink-0 border border-gold-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 light:text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gold-400/95 light:text-gold-700">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 light:text-slate-500 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
