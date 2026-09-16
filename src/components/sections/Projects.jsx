import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "legal", label: "Legal & Drafting" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "technology", label: "Technology & Data" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Portfolio & Practice"
          title="Selected Work & Case Studies"
          subtitle="Documented frameworks, search architecture workflows, and database projects developed during professional practice."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? "bg-gold-500 text-navy-950 shadow-gold-sm"
                  : "bg-navy-900 light:bg-white text-slate-300 light:text-slate-700 border border-gold-500/20 hover:border-gold-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              hover={true}
              className="flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="gold">{project.categoryLabel}</Badge>
                  <span className="text-xs text-slate-400 light:text-slate-500">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-100 light:text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tools used */}
                <div className="mb-4">
                  <span className="text-[11px] font-semibold text-gold-400 light:text-gold-700 uppercase tracking-wider block mb-2">
                    Tools & Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-navy-950/70 light:bg-slate-100 border border-white/5 light:border-slate-300 text-[11px] text-slate-200 light:text-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tags and Action Link */}
              <div className="pt-4 border-t border-white/5 light:border-slate-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] text-slate-400 light:text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold-400 light:text-gold-700 hover:text-gold-300 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
