import React from "react";
import { FileText, FileSpreadsheet, Database, CheckCircle2, Award, Zap } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const MicrosoftSkills = () => {
  const toolIcons = {
    word: FileText,
    excel: FileSpreadsheet,
    access: Database,
  };

  return (
    <section id="microsoft-skills" className="py-20 md:py-28 bg-navy-950/60 light:bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={siteConfig.microsoftSkills.badge}
          title={siteConfig.microsoftSkills.title}
          subtitle={siteConfig.microsoftSkills.subtitle}
        />

        {/* 3 Core Microsoft Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {siteConfig.microsoftSkills.tools.map((tool) => {
            const Icon = toolIcons[tool.id] || FileText;
            return (
              <Card
                key={tool.id}
                hover={true}
                className="relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              >
                {/* Accent top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: tool.color || "#d4af37" }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-md"
                      style={{ backgroundColor: tool.color || "#d4af37" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="gold">{tool.proficiency}</Badge>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-100 light:text-slate-900 mb-4">
                    {tool.name}
                  </h3>

                  <ul className="space-y-3">
                    {tool.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 light:text-gold-700 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-200 flex items-center justify-between text-xs text-gold-400 light:text-gold-700 font-semibold">
                  <span>Executive Precision</span>
                  <Award className="w-4 h-4" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Productivity & Workflow Capabilities Matrix */}
        <div className="rounded-2xl p-6 sm:p-8 bg-navy-900/80 light:bg-white border border-gold-500/20 light:border-gold-600/30 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-slate-100 light:text-slate-900">
                Productivity & Document Infrastructure
              </h4>
              <p className="text-xs text-slate-400 light:text-slate-500">
                Transforming raw information into structured, presentation-grade outputs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {siteConfig.microsoftSkills.additionalProductivity.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3.5 rounded-lg bg-navy-950/60 light:bg-slate-50 border border-white/5 light:border-slate-200 text-xs sm:text-sm text-slate-300 light:text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
