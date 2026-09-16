import React, { useState } from "react";
import { ShieldCheck, FileEdit, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { LegalDisclaimer } from "../ui/LegalDisclaimer";

export const LegalServices = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = siteConfig.legalServices.categories;

  const filteredCategories =
    activeTab === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="legal-services" className="py-20 md:py-28 bg-navy-950/70 light:bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge={siteConfig.legalServices.badge}
          title={siteConfig.legalServices.title}
          subtitle={siteConfig.legalServices.subtitle}
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
              activeTab === "all"
                ? "bg-gold-500 text-navy-950 shadow-gold-sm"
                : "bg-navy-900 light:bg-white text-slate-300 light:text-slate-700 border border-gold-500/20 hover:border-gold-400"
            }`}
          >
            All Legal Practice
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === cat.id
                  ? "bg-gold-500 text-navy-950 shadow-gold-sm"
                  : "bg-navy-900 light:bg-white text-slate-300 light:text-slate-700 border border-gold-500/20 hover:border-gold-400"
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>

        {/* Categories List */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Subhead */}
              <div className="flex items-center gap-3 border-b border-gold-500/20 pb-4">
                <div className="w-9 h-9 rounded-lg bg-gold-500/15 text-gold-400 light:text-gold-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 light:text-slate-900">
                    {category.categoryName} Practice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} hover={true} className="flex flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold tracking-wider text-gold-400 light:text-gold-700 uppercase">
                          Practice Area 0{index + 1}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gold-500/10 text-gold-400 light:text-gold-700 flex items-center justify-center">
                          <FileEdit className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-lg font-serif font-bold text-slate-100 light:text-slate-900 mb-2.5">
                        {service.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-5">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables / Scope */}
                    <div className="pt-4 border-t border-white/5 light:border-slate-200">
                      <p className="text-[11px] font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-2.5">
                        Scope & Support:
                      </p>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-14 max-w-4xl mx-auto">
          <LegalDisclaimer />
        </div>

      </div>
    </section>
  );
};
