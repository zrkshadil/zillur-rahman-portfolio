import React from "react";
import { Scale, TrendingUp, Laptop } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export const Skills = () => {
  const iconMap = {
    Scale: Scale,
    TrendingUp: TrendingUp,
    Laptop: Laptop,
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Core Competencies"
          title="Categorized Professional Skills"
          subtitle="A transparent overview of verified legal, digital marketing, and technical software capabilities."
        />

        {/* 3 Categorized Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.skillsCategories.map((category) => {
            const Icon = iconMap[category.icon] || Scale;
            return (
              <Card
                key={category.id}
                hover={true}
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-gold-500/20">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-slate-100 light:text-slate-900">
                        {category.name}
                      </h3>
                      <span className="text-[11px] text-gold-400 light:text-gold-700 font-medium uppercase tracking-wider">
                        Domain Competencies
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-navy-950/40 light:bg-slate-50 border border-white/5 light:border-slate-200/80 text-xs sm:text-sm text-slate-200 light:text-slate-800"
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[10px] font-semibold text-gold-400 light:text-gold-700 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 text-center">
                  <span className="text-[11px] text-slate-400 light:text-slate-500">
                    Continuously refined through active practice
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
