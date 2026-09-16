import React from "react";
import {
  Scale,
  TrendingUp,
  ArrowRight,
  Download
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  XIcon,
  GitHubIcon
} from "../ui/SocialIcons";

export const Hero = () => {
  const { t } = useTheme();

  const activeSocials = [
    { key: "linkedin", icon: LinkedInIcon, url: siteConfig.socialLinks.linkedin },
    { key: "facebook", icon: FacebookIcon, url: siteConfig.socialLinks.facebook },
    { key: "x", icon: XIcon, url: siteConfig.socialLinks.x },
    { key: "instagram", icon: InstagramIcon, url: siteConfig.socialLinks.instagram },
    { key: "youtube", icon: YouTubeIcon, url: siteConfig.socialLinks.youtube },
    { key: "github", icon: GitHubIcon, url: siteConfig.socialLinks.github },
  ].filter((s) => Boolean(s.url && s.url.trim().length > 0));

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Full-Bleed Cinematic Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt || `${siteConfig.personal.name} — ${siteConfig.personal.title}`}
          className="w-full h-full object-cover object-[center_top] sm:object-[center_28%] lg:object-[center_25%]"
          fetchPriority="high"
          loading="eager"
        />

        {/* Sophisticated Dark Gradient Overlays for Optimal Text Readability & Drama */}
        {/* Horizontal Gradient: strong on left for text legibility, gently transparent on right for person and desk */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10, 17, 40, 0.98) 0%, rgba(10, 17, 40, 0.94) 38%, rgba(10, 17, 40, 0.65) 65%, rgba(10, 17, 40, 0.35) 100%)"
          }}
        />

        {/* Vertical subtle gradient for seamless blending into navbar and stats section */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-transparent via-45% to-navy-950" />

        {/* Mobile/Tablet ambient protection: ensures text is 100% clear on small screens */}
        <div className="absolute inset-0 bg-navy-950/40 md:bg-transparent" />
      </div>

      {/* Cinematic Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Information & CTAs (Cols 1-8 on desktop) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Top Identity Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <Badge variant="gold">
                <Scale className="w-3.5 h-3.5 mr-1" />
                {siteConfig.hero.badge}
              </Badge>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold-500/40" />
              <span className="text-xs text-slate-300 light:text-slate-600 font-medium">
                Criminal & Civil Lawyer
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-slate-100 light:text-slate-900 leading-[1.15] mb-6">
              {siteConfig.hero.headline}
              <span className="block mt-2 gold-gradient-text font-serif italic">
                {siteConfig.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subheadline & Professional Description */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl mb-8">
              {siteConfig.hero.subheadline}
            </p>

            {/* Key Verified Experience Metrics Quick Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg mb-8 p-4 rounded-xl bg-navy-900/75 light:bg-slate-100 border border-gold-500/30 light:border-gold-600/30 backdrop-blur-md shadow-lg">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400 light:text-gold-700">
                  {siteConfig.hero.yearsLegal}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 light:text-slate-600 font-medium leading-tight">
                  Years Criminal & Civil Law
                </div>
              </div>
              <div className="border-l border-white/10 light:border-slate-300/80 pl-3 sm:pl-6">
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400 light:text-gold-700">
                  {siteConfig.hero.yearsMarketing}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 light:text-slate-600 font-medium leading-tight">
                  Year Digital Marketing & SEO
                </div>
              </div>
              <div className="border-l border-white/10 light:border-slate-300/80 pl-3 sm:pl-6">
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400 light:text-gold-700">
                  {siteConfig.hero.officeSkillsLevel}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 light:text-slate-600 font-medium leading-tight">
                  Microsoft Office Mastery
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <Button
                as="a"
                href={siteConfig.hero.primaryCTA.href}
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-gold"
              >
                {t("hero.ctaPrimary")}
              </Button>

              <Button
                as="a"
                href={siteConfig.hero.secondaryCTA.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto backdrop-blur-sm"
              >
                {t("hero.ctaSecondary")}
              </Button>

              {siteConfig.personal.cvPath && (
                <Button
                  as="a"
                  href={siteConfig.personal.cvPath}
                  download
                  variant="outline"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="w-full sm:w-auto backdrop-blur-sm"
                >
                  {t("hero.downloadCV")}
                </Button>
              )}
            </div>

            {/* Social Links (Auto-hidden if empty) */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-slate-400 light:text-slate-600 uppercase tracking-wider font-semibold">
                  Connect:
                </span>
                <div className="flex items-center gap-2">
                  {activeSocials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.key}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-navy-900/80 light:bg-white border border-gold-500/20 hover:border-gold-400 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-gold-400 transition-colors shadow-sm"
                        aria-label={`Visit Zillur Rahman's ${social.key}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Open visual canvas allowing Zillur Rahman & law desk backdrop to shine, with subtle floating authority tags */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-end h-full space-y-4 pt-44 pointer-events-none">
            {/* Chamber Authority Pill */}
            <div className="pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-xl bg-navy-950/85 border border-gold-500/30 shadow-2xl backdrop-blur-md transform hover:-translate-y-0.5 transition-transform">
              <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100">Law Chamber & Advisory</p>
                <p className="text-[10px] text-gold-400 font-medium">Chittagong District Bar</p>
              </div>
            </div>

            {/* Digital Strategy Pill */}
            <div className="pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-xl bg-navy-950/85 border border-gold-500/30 shadow-2xl backdrop-blur-md transform hover:-translate-y-0.5 transition-transform">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100">Digital Strategy & SEO</p>
                <p className="text-[10px] text-emerald-400 font-medium">Growth Partner</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
