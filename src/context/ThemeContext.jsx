import React, { createContext, useContext, useEffect, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { translations } from "../config/translations";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("zr_theme");
    return saved || siteConfig.siteSettings.defaultTheme || "dark";
  });

  // Language state
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("zr_lang");
    return saved || siteConfig.siteSettings.defaultLanguage || "en";
  });

  // Handle Theme application
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      if (theme === "system") {
        if (mediaQuery.matches) {
          root.classList.add("dark");
          root.classList.remove("light");
        } else {
          root.classList.add("light");
          root.classList.remove("dark");
        }
      } else if (theme === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
        root.classList.remove("light");
      }
    };

    applyTheme();
    localStorage.setItem("zr_theme", theme);

    const listener = () => {
      if (theme === "system") applyTheme();
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  // Handle Language persistence
  useEffect(() => {
    localStorage.setItem("zr_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation helper function
  const t = (path) => {
    const parts = path.split(".");
    let current = translations[language] || translations.en;
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const p of parts) {
          fallback = fallback?.[p];
        }
        return fallback || path;
      }
    }
    return current;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage, t }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
