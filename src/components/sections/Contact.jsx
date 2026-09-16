import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  XIcon,
  GitHubIcon
} from "../ui/SocialIcons";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: siteConfig.contact.serviceOptions[0] || "",
    message: "",
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: null });

    try {
      // If Formspree endpoint is provided via env
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }
      } else {
        // Simulated submission or Netlify Forms native fallback
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setFormState({ submitting: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: siteConfig.contact.serviceOptions[0] || "",
        message: "",
      });
    } catch (_err) {
      console.warn("Contact form submission error:", _err);
      setFormState({
        submitting: false,
        success: false,
        error: "Unable to submit your message right now. Please email or call directly.",
      });
    }
  };

  const socialItems = [
    { key: "linkedin", label: "LinkedIn", icon: LinkedInIcon, url: siteConfig.socialLinks.linkedin },
    { key: "facebook", label: "Facebook", icon: FacebookIcon, url: siteConfig.socialLinks.facebook },
    { key: "instagram", label: "Instagram", icon: InstagramIcon, url: siteConfig.socialLinks.instagram },
    { key: "youtube", label: "YouTube", icon: YouTubeIcon, url: siteConfig.socialLinks.youtube },
    { key: "x", label: "X (Twitter)", icon: XIcon, url: siteConfig.socialLinks.x },
    { key: "github", label: "GitHub", icon: GitHubIcon, url: siteConfig.socialLinks.github },
  ].filter((item) => Boolean(item.url && item.url.trim().length > 0));

  const hasWhatsApp = Boolean(
    siteConfig.whatsapp.enabled && siteConfig.whatsapp.number && siteConfig.whatsapp.number.trim().length > 0
  );

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={siteConfig.contact.badge}
          title={siteConfig.contact.title}
          subtitle={siteConfig.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card hover={false} className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-100 light:text-slate-900 mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  For formal legal consultations, corporate documentation requests, or digital marketing audits, contact via the channels below.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 uppercase tracking-wider block font-semibold">
                      Chamber / Location
                    </span>
                    <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                      {siteConfig.contact.location || "[ADD PROFESSIONAL LOCATION]"}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 uppercase tracking-wider block font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-medium text-slate-200 light:text-slate-800 hover:text-gold-400 transition-colors"
                    >
                      {siteConfig.contact.email || "[ADD EMAIL]"}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 uppercase tracking-wider block font-semibold">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-medium text-slate-200 light:text-slate-800 hover:text-gold-400 transition-colors"
                    >
                      {siteConfig.contact.phone || "[ADD PHONE]"}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-400 light:text-gold-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 uppercase tracking-wider block font-semibold">
                      Consultation Hours
                    </span>
                    <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                      {siteConfig.contact.consultationHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Trigger if configured */}
              {hasWhatsApp && (
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.number.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-semibold text-xs sm:text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              )}

              {/* Social Channels */}
              {socialItems.length > 0 && (
                <div className="pt-4 border-t border-white/5 light:border-slate-200">
                  <span className="text-xs font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider block mb-3">
                    Professional Networks:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {socialItems.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.key}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-navy-950 light:bg-slate-100 border border-gold-500/20 hover:border-gold-400 text-slate-300 light:text-slate-700 hover:text-gold-400 flex items-center justify-center transition-colors"
                          aria-label={s.label}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column: Contact & Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card hover={false} className="p-6 sm:p-10">
              <h3 className="text-xl font-serif font-bold text-slate-100 light:text-slate-900 mb-2">
                Send an Inquiry or Book Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 mb-6">
                Please provide your contact information and outline your requirements.
              </p>

              {/* Success Message */}
              {formState.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message Received</p>
                    <p className="text-xs text-emerald-300/90 mt-0.5">
                      Thank you for reaching out. Your inquiry has been noted and a response will follow shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formState.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p>{formState.error}</p>
                </div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-4 sm:space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-950/70 light:bg-slate-50 border border-gold-500/20 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder:text-slate-500 focus:border-gold-400 focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-950/70 light:bg-slate-50 border border-gold-500/20 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder:text-slate-500 focus:border-gold-400 focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +880 1XXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-950/70 light:bg-slate-50 border border-gold-500/20 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder:text-slate-500 focus:border-gold-400 focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-950 light:bg-slate-50 border border-gold-500/20 light:border-slate-300 text-slate-100 light:text-slate-900 focus:border-gold-400 focus:outline-none text-sm transition-colors"
                    >
                      {siteConfig.contact.serviceOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt} className="bg-navy-950 text-slate-100 light:bg-white light:text-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Your Message / Case Overview *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your legal matter, document drafting need, or digital marketing objectives..."
                    className="w-full px-4 py-3 rounded-lg bg-navy-950/70 light:bg-slate-50 border border-gold-500/20 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder:text-slate-500 focus:border-gold-400 focus:outline-none text-sm transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={formState.submitting}
                  icon={Send}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  {formState.submitting ? "Transmitting..." : "Send Confidential Message"}
                </Button>
              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
