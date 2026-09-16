import React from "react";
import { Calendar, CheckCircle2, Scale, TrendingUp } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-navy-950/60 light:bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Professional Timeline"
          title="Experience & Practice History"
          subtitle="Verified career milestones across Criminal and Civil Law and digital growth consultancy."
        />

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-gold-500/30 ml-4 sm:ml-32 md:ml-40 space-y-12 pl-6 sm:pl-8">
          {siteConfig.experience.map((item) => {
            const isLegal = item.type === "legal";
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Pin / Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-navy-950 light:bg-white border-2 border-gold-500 flex items-center justify-center shadow-gold-sm group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                </div>

                {/* Left Date label for Tablet/Desktop */}
                <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right">
                  <span className="text-xs font-serif font-bold text-gold-400 light:text-gold-700 tracking-wider">
                    {item.period}
                  </span>
                </div>

                {/* Experience Card */}
                <Card hover={true} className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-gold-500/10 text-gold-400 light:text-gold-700">
                        {isLegal ? <Scale className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                      </div>
                      <Badge variant="gold">{item.badge}</Badge>
                    </div>

                    {/* Mobile Period Badge */}
                    <div className="sm:hidden flex items-center gap-1 text-xs text-gold-400 light:text-gold-700 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-100 light:text-slate-900 mb-1">
                    {item.role}
                  </h3>

                  <p className="text-xs text-gold-400/90 light:text-gold-700 font-semibold mb-5">
                    {item.organization}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 light:text-gold-700 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
