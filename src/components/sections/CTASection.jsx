import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { Button } from "../ui/Button";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background visual styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-gold-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Professional Excellence & Strategy</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight mb-6">
          Ready to Discuss Your Legal Matter or Digital Growth?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you require thorough legal research, civil dispute assistance, criminal procedural drafting, or a high-impact search engine optimization campaign, let us begin with a confidential consultation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            as="a"
            href="#contact"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Request a Consultation
          </Button>

          {siteConfig.personal.cvPath && (
            <Button
              as="a"
              href={siteConfig.personal.cvPath}
              download
              variant="outline"
              size="lg"
            >
              Download Professional CV
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
