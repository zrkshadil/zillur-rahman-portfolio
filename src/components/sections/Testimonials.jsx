import React from "react";
import { Quote, MessageSquareQuote } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export const Testimonials = () => {
  const hasTestimonials =
    siteConfig.testimonials && siteConfig.testimonials.length > 0;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-navy-950/60 light:bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Endorsements"
          title="Client Testimonials & Feedback"
          subtitle="Genuine professional reviews and client experiences."
        />

        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((item, index) => (
              <Card key={index} hover={true} className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                  <p className="text-sm text-slate-300 light:text-slate-700 italic leading-relaxed mb-6">
                    "{item.testimonial}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5 light:border-slate-200">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.clientName}
                      width="40"
                      height="40"
                      className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-sm">
                      {item.clientName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-serif font-bold text-sm text-slate-100 light:text-slate-900">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-slate-400 light:text-slate-500">
                      {item.position}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* Tasteful Empty State */
          <div className="max-w-2xl mx-auto text-center p-10 rounded-2xl bg-navy-900/60 light:bg-white border border-gold-500/20 light:border-gold-600/30 shadow-md">
            <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 light:text-gold-700 mx-auto flex items-center justify-center mb-4">
              <MessageSquareQuote className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-100 light:text-slate-900 mb-2">
              Client Testimonials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {siteConfig.testimonialsEmptyState || "Client testimonials will be added here."}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
