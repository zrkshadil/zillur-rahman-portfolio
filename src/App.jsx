import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { LegalServices } from "./components/sections/LegalServices";
import { DigitalMarketing } from "./components/sections/DigitalMarketing";
import { MicrosoftSkills } from "./components/sections/MicrosoftSkills";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { CTASection } from "./components/sections/CTASection";
import { Contact } from "./components/sections/Contact";

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-navy-950 light:bg-slate-50 text-slate-100 light:text-slate-900 transition-colors duration-300 relative selection:bg-gold-500 selection:text-navy-950">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections in Strategic Order */}
        <main>
          {/* 1. Cinematic Hero Section */}
          <Hero />

          {/* 2. Experience Statistics */}
          <Stats />

          {/* 3. About Section */}
          <About />

          {/* 4. Legal Services (Criminal & Civil) */}
          <LegalServices />

          {/* 5. Digital Marketing & SEO */}
          <DigitalMarketing />

          {/* 6. Microsoft Office & Technology Mastery */}
          <MicrosoftSkills />

          {/* 7. Categorized Skills */}
          <Skills />

          {/* 8. Professional Experience Timeline */}
          <Experience />

          {/* 9. Projects & Portfolio */}
          <Projects />

          {/* 10. Testimonials */}
          <Testimonials />

          {/* 11. High-Impact Call to Action */}
          <CTASection />

          {/* 12. Contact & Consultation Booking */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
