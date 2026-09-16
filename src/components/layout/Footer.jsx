import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  XIcon,
  GitHubIcon
} from "../ui/SocialIcons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = [
    { key: "linkedin", label: "LinkedIn", icon: LinkedInIcon, url: siteConfig.socialLinks.linkedin },
    { key: "facebook", label: "Facebook", icon: FacebookIcon, url: siteConfig.socialLinks.facebook },
    { key: "instagram", label: "Instagram", icon: InstagramIcon, url: siteConfig.socialLinks.instagram },
    { key: "youtube", label: "YouTube", icon: YouTubeIcon, url: siteConfig.socialLinks.youtube },
    { key: "x", label: "X / Twitter", icon: XIcon, url: siteConfig.socialLinks.x },
    { key: "github", label: "GitHub", icon: GitHubIcon, url: siteConfig.socialLinks.github },
  ].filter((item) => Boolean(item.url && item.url.trim().length > 0));

  return (
    <footer className="bg-navy-950 light:bg-slate-100 border-t border-gold-500/20 light:border-gold-600/20 text-slate-400 light:text-slate-600 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5 light:border-slate-300/60">
          {/* Col 1: Brand & Monogram */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-navy-900 border border-gold-500/50 flex items-center justify-center shadow-gold-sm">
                <span className="font-serif font-bold text-gold-400 text-xl tracking-wider">
                  {siteConfig.personal.initials}
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-100 light:text-slate-900">
                  {siteConfig.personal.name}
                </h3>
                <p className="text-xs text-gold-400 light:text-gold-700 font-medium">
                  {siteConfig.personal.title}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {siteConfig.personal.shortBio}
            </p>
            {socialIcons.length > 0 && (
              <div className="flex items-center gap-2 pt-2">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-navy-900/90 light:bg-white border border-gold-500/20 hover:border-gold-400 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-gold-400 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-slate-100 light:text-slate-900 uppercase tracking-wider mb-4 text-gold-400/90 light:text-gold-700">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  About Zillur Rahman
                </a>
              </li>
              <li>
                <a href="#legal-services" className="hover:text-gold-400 transition-colors">
                  Criminal & Civil Legal Services
                </a>
              </li>
              <li>
                <a href="#digital-marketing" className="hover:text-gold-400 transition-colors">
                  Digital Marketing & SEO
                </a>
              </li>
              <li>
                <a href="#microsoft-skills" className="hover:text-gold-400 transition-colors">
                  Microsoft Office & Data Mastery
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold-400 transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-slate-100 light:text-slate-900 uppercase tracking-wider mb-4 text-gold-400/90 light:text-gold-700">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Criminal Procedural Advisory & Drafting</li>
              <li>Civil Litigation Support & Deeds</li>
              <li>Statutory Research & Precedent Analysis</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Google Ads (SEM) & Lead Acquisition</li>
              <li>Advanced Excel, Access & Word Workflows</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Location */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-slate-100 light:text-slate-900 uppercase tracking-wider mb-4 text-gold-400/90 light:text-gold-700">
              Professional Contact
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.personal.location && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.personal.location}</span>
                </li>
              )}
              {siteConfig.personal.email && (
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <a href={`mailto:${siteConfig.personal.email}`} className="hover:text-gold-400 transition-colors">
                    {siteConfig.personal.email}
                  </a>
                </li>
              )}
              {siteConfig.personal.phone && (
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <a href={`tel:${siteConfig.personal.phone}`} className="hover:text-gold-400 transition-colors">
                    {siteConfig.personal.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="my-8 p-4 rounded-lg bg-navy-900/40 light:bg-slate-200/50 border border-gold-500/20 text-xs leading-relaxed text-slate-400 light:text-slate-600">
          <span className="font-semibold text-gold-400 light:text-gold-800">Legal Disclaimer: </span>
          {siteConfig.legalServices.disclaimer}
        </div>

        {/* Bottom Bar with Dynamic Year and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-slate-500 light:text-slate-500">
          <p>© {currentYear} Zillur Rahman. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors group"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
