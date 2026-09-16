import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { useTheme } from "../../context/ThemeContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme, language, setLanguage, t } = useTheme();

  // Scroll listener for compact navbar & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "legal-services",
        "digital-marketing",
        "microsoft-skills",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home", id: "home" },
    { name: t("nav.about"), href: "#about", id: "about" },
    { name: t("nav.legalServices"), href: "#legal-services", id: "legal-services" },
    { name: t("nav.digitalMarketing"), href: "#digital-marketing", id: "digital-marketing" },
    { name: t("nav.microsoftSkills"), href: "#microsoft-skills", id: "microsoft-skills" },
    { name: t("nav.skills"), href: "#skills", id: "skills" },
    { name: t("nav.experience"), href: "#experience", id: "experience" },
    { name: t("nav.projects"), href: "#projects", id: "projects" },
    { name: t("nav.contact"), href: "#contact", id: "contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-navy-950/90 light:bg-white/90 backdrop-blur-md shadow-lg border-b border-gold-500/20 light:border-gold-600/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Zillur Rahman Homepage"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border border-gold-500/40 flex items-center justify-center shadow-gold-sm group-hover:border-gold-400 transition-all">
            <span className="font-serif font-bold text-gold-400 text-lg tracking-wider">
              {siteConfig.personal.initials}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg text-slate-100 light:text-slate-900 tracking-tight group-hover:text-gold-400 transition-colors">
              {siteConfig.personal.name}
            </span>
            <span className="text-[10px] sm:text-xs text-gold-400/90 light:text-gold-700 font-medium tracking-wide uppercase">
              Lawyer & Marketer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all ${
                  isActive
                    ? "text-gold-400 font-semibold bg-gold-500/10 light:text-gold-700 light:bg-gold-50"
                    : "text-slate-300 light:text-slate-700 hover:text-gold-400 light:hover:text-gold-700 hover:bg-white/5 light:hover:bg-slate-100"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Language, Theme, CTA) */}
        <div className="hidden md:flex items-center gap-2 md:gap-3">
          {/* Language Switcher */}
          {siteConfig.siteSettings.enableLanguageToggle && (
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-gold-500/20 hover:border-gold-400 text-xs font-semibold text-slate-300 light:text-slate-700 hover:text-gold-400 flex items-center gap-1.5 transition-all"
              aria-label={`Switch to ${language === "en" ? "Bengali" : "English"}`}
              title={`Switch to ${language === "en" ? "বাংলা" : "English"}`}
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>{language === "en" ? "বাংলা" : "EN"}</span>
            </button>
          )}

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gold-500/20 hover:border-gold-400 text-slate-300 light:text-slate-700 hover:text-gold-400 transition-all"
            aria-label="Toggle Dark/Light Mode"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-gold-400" />
            ) : (
              <Moon className="w-4 h-4 text-gold-700" />
            )}
          </button>

          {/* Main CTA */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 text-xs sm:text-sm font-semibold shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <span>{t("nav.cta")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Button (Shown on < xl) */}
        <div className="flex xl:hidden items-center gap-2">
          {siteConfig.siteSettings.enableLanguageToggle && (
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded border border-gold-500/30 text-xs font-bold text-gold-400"
              aria-label="Switch Language"
            >
              {language === "en" ? "বাংলা" : "EN"}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 light:text-slate-800 border border-gold-500/30 hover:border-gold-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Open mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-gold-400" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-950/95 light:bg-white/95 backdrop-blur-xl border-b border-gold-500/30 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium border-b border-white/5 transition-colors ${
                    isActive
                      ? "text-gold-400 font-bold"
                      : "text-slate-300 light:text-slate-800 hover:text-gold-400"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 flex items-center justify-between border-t border-gold-500/20 mt-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm text-slate-300 light:text-slate-700 py-1.5"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-gold-700" />}
                <span>{theme === "dark" ? t("common.themeLight") : t("common.themeDark")}</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2 rounded-lg bg-gold-500 text-navy-950 text-sm font-semibold shadow-gold-sm"
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
