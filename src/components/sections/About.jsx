import React from "react";
import { Gavel, Search, Cpu, Scale } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const About = () => {
  const iconMap = {
    Gavel: Gavel,
    Search: Search,
    Cpu: Cpu,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={siteConfig.about.badge}
          title={siteConfig.about.title}
          subtitle="Synthesizing rigorous legal practice, technical digital strategy, and high-precision documentation workflows."
        />

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Dual Photographic Authority Presentation (Court & Practice) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-xl group">
              <img
                src={siteConfig.personal.courtImage}
                alt="Zillur Rahman at Chittagong District Judge Court"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/90 light:bg-white/95 backdrop-blur-md border border-gold-500/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 light:text-gold-700">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-100 light:text-slate-900">
                      Courtroom & Legal Practice
                    </p>
                    <p className="text-[11px] text-gold-400 light:text-gold-700 font-medium">
                      Criminal & Civil Advocate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-card with Bar Association logo highlight */}
            <div className="p-4 rounded-xl bg-navy-900/60 light:bg-slate-50 border border-gold-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={siteConfig.personal.barLogo}
                  alt="District Bar Association"
                  width="44"
                  height="44"
                  loading="lazy"
                  className="w-11 h-11 object-contain rounded-full bg-white/10 p-1"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-200 light:text-slate-800">
                    Chittagong District Bar Jurisdiction
                  </p>
                  <p className="text-[10px] text-slate-400 light:text-slate-500">
                    Legal Chamber & Practice Area
                  </p>
                </div>
              </div>
              <Badge variant="gold">Affiliated</Badge>
            </div>
          </div>

          {/* Right: Detailed Multi-Pillar Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg font-medium text-slate-100 light:text-slate-900 border-l-2 border-gold-500 pl-4 py-1">
              {siteConfig.about.paragraph1}
            </p>

            <p>{siteConfig.about.paragraph2}</p>

            <p>{siteConfig.about.paragraph3}</p>

            {/* Core Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {siteConfig.about.pillars.map((pillar, idx) => {
                const Icon = iconMap[pillar.icon] || Gavel;
                return (
                  <Card key={idx} hover={true} className="p-4 sm:p-5">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-sm text-slate-100 light:text-slate-900 mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-normal">
                      {pillar.description}
                    </p>
                  </Card>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
