import React from "react";
import {
  Search,
  FileCode,
  Wrench,
  MapPin,
  Target,
  PenTool,
  Share2,
  BarChart3,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export const DigitalMarketing = () => {
  const iconMap = {
    Search: Search,
    FileCode: FileCode,
    Wrench: Wrench,
    MapPin: MapPin,
    Target: Target,
    PenTool: PenTool,
    Share2: Share2,
    BarChart3: BarChart3,
    CheckCircle2: CheckCircle2,
  };

  return (
    <section id="digital-marketing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={siteConfig.digitalMarketingServices.badge}
          title={siteConfig.digitalMarketingServices.title}
          subtitle={siteConfig.digitalMarketingServices.subtitle}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.digitalMarketingServices.services.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <Card
                key={service.id}
                hover={true}
                className="flex flex-col justify-between group p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 light:text-gold-700 flex items-center justify-center border border-gold-500/25 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#contact"
                      className="text-slate-400 hover:text-gold-400 light:hover:text-gold-700 transition-colors p-1"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-slate-100 light:text-slate-900 mb-3 group-hover:text-gold-400 light:group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tags / Sub-skills */}
                <div className="pt-4 border-t border-white/5 light:border-slate-200">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-navy-950/60 light:bg-slate-200/70 text-slate-300 light:text-slate-700 border border-white/5 light:border-slate-300/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Growth Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-serif font-bold text-slate-100">
              Need a Custom Website SEO Audit or Growth Strategy?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Discover keyword opportunities, eliminate crawl errors, and optimize client conversion touchpoints.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all shadow-gold-sm hover:shadow-gold-md shrink-0"
          >
            Request Digital Audit
          </a>
        </div>

      </div>
    </section>
  );
};
