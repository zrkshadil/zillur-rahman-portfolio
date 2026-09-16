// ====================================================================
// ZILLUR RAHMAN WEBSITE — EASY EDIT CENTRAL CONFIGURATION
// ALL EDITABLE INFORMATION IS MANAGED IN THIS FILE
//
// Change any information below, save the file, and your website
// updates everywhere automatically!
// ====================================================================

export const siteConfig = {
  // ==================================================================
  // 1. PERSONAL INFORMATION
  // EDIT HERE: Your core identity, titles, and direct contact details
  // ==================================================================
  personal: {
    name: "Zillur Rahman",
    initials: "ZR",
    title: "Criminal & Civil Lawyer",
    secondaryTitle: "Digital Marketing Professional",
    subLabel: "Advocate & Digital Strategist",
    tagline: "Law, Strategy & Digital Growth — Built Around Professional Excellence.",
    
    // Short summary used across cards and profile badges
    shortBio: "Dedicated Criminal & Civil Lawyer with 3+ years of professional legal practice and 1+ year of expertise in Digital Marketing, SEO, and advanced technology workflows.",
    
    // Detailed bio
    fullBio: "Zillur Rahman is a dual-discipline professional bridging the rigorous disciplines of Criminal and Civil Law with modern Digital Marketing and advanced technology systems. With over 3 years of hands-on legal experience encompassing legal drafting, thorough case research, and client advisory, coupled with over a year of technical SEO, paid search, and digital strategy, he brings a unique, analytical precision to both courtroom documentation and online growth.",
    
    // Profile Images (Stored in /public/images/profile/)
    // To replace: Place your new photo in /public/images/profile/ and name it zillur-rahman.webp or .png
    profileImage: "/images/profile/zillur-rahman.png",
    profileImageFull: "/images/profile/zillur-rahman-full.jpg",
    courtImage: "/images/profile/zillur-rahman-court.png",
    barLogo: "/images/profile/bar-association-logo.png",
    profileImageAlt: "Zillur Rahman — Criminal and Civil Lawyer and Digital Marketing Professional",

    // Contact Information (Empty fields will automatically hide or show clean placeholders)
    email: "contact@zillurrahman.com", // [EDIT OR REPLACE WITH YOUR EMAIL]
    phone: "+880 1XXXXXXXXX", // [ADD PHONE NUMBER]
    whatsappNumber: "", // Leave blank if not active, or format e.g. "8801XXXXXXXXX"
    location: "Chittagong, Bangladesh", // Professional chamber location
    serviceArea: "Chittagong & Nationwide Online Consultation",
    cvPath: "/documents/zillur-rahman-cv.pdf",
    
    // Qualitative branding notice
    statusBadge: "Available for Legal Consultation & Digital Strategy",
  },

  // ==================================================================
  // 2. HERO SECTION
  // EDIT HERE: Main banner headline, badges, and call-to-action buttons
  // ==================================================================
  hero: {
    // =================================================
    // HERO IMAGE — EDIT HERE
    // =================================================
    image: "/images/hero/zillur-rahman-hero.png",
    imageAlt: "Advocate Zillur Rahman — Criminal & Civil Lawyer and Digital Marketing Professional",

    badge: "Dual Authority: Law & Digital Strategy",
    headline: "Law, Strategy & Digital Growth",
    headlineHighlight: "Built Around Professional Excellence.",
    subheadline: "Providing rigorous Criminal and Civil legal assistance alongside high-impact Digital Marketing, SEO architecture, and advanced productivity systems.",
    primaryCTA: {
      text: "Get in Touch",
      href: "#contact"
    },
    secondaryCTA: {
      text: "Explore Services",
      href: "#legal-services"
    },
    downloadCVCTA: {
      text: "Download CV",
      href: "/documents/zillur-rahman-cv.pdf"
    },
    yearsLegal: "3+",
    yearsMarketing: "1+",
    officeSkillsLevel: "Advanced",
  },

  // ==================================================================
  // 3. STATS / HIGHLIGHTS SECTION
  // EDIT HERE: Verified experience metrics (No fabricated numbers)
  // ==================================================================
  stats: [
    {
      id: "stat-legal",
      value: "3+",
      label: "Years Legal Experience",
      subtext: "Criminal & Civil Law Practice",
      icon: "Scale"
    },
    {
      id: "stat-marketing",
      value: "1+",
      label: "Year Digital Marketing",
      subtext: "SEO & Growth Strategy",
      icon: "TrendingUp"
    },
    {
      id: "stat-office",
      value: "Advanced",
      label: "Microsoft Office",
      subtext: "Word, Excel & Access Specialist",
      icon: "FileSpreadsheet"
    },
    {
      id: "stat-commitment",
      value: "100%",
      label: "Professional Dedication",
      subtext: "Confidentiality & Precision",
      icon: "ShieldCheck"
    }
  ],

  // ==================================================================
  // 4. ABOUT SECTION
  // EDIT HERE: Detailed multi-pillar story and credentials
  // ==================================================================
  about: {
    badge: "About Zillur Rahman",
    title: "A Multidisciplinary Mind Built on Integrity and Strategic Execution",
    paragraph1: "In today's interconnected legal and business environment, technical precision and digital visibility are equally critical. Zillur Rahman combines 3+ years of rigorous legal engagement across both Criminal and Civil law domains with 1+ year of high-caliber digital marketing practice.",
    paragraph2: "As a lawyer, he specializes in meticulous legal drafting, statutory research, case file organization, and structured client communication. Concurrently, as a digital marketing specialist, he applies structured keyword intelligence, search engine optimization, content strategy, and data organization to build sustainable online authority.",
    paragraph3: "His advanced command of Microsoft Word, Excel, and Access transforms complex legal dossiers and marketing data streams into organized, actionable, and visually pristine documentation.",
    
    pillars: [
      {
        title: "Criminal & Civil Law",
        description: "3+ years dedicated to case analysis, legal documentation, research, and client advisory with uncompromising ethics.",
        icon: "Gavel"
      },
      {
        title: "Digital Marketing & SEO",
        description: "1+ year driving organic visibility, on-page optimization, technical search readiness, and digital campaigns.",
        icon: "Search"
      },
      {
        title: "Advanced Productivity",
        description: "Mastery of Microsoft Word, Excel, and Access for enterprise-level documentation, data modeling, and reporting.",
        icon: "Cpu"
      }
    ]
  },

  // ==================================================================
  // 5. LEGAL SERVICES
  // EDIT HERE: Criminal & Civil legal services and legal disclaimer
  // ==================================================================
  legalServices: {
    badge: "Legal Practice",
    title: "Legal Services & Consultation Support",
    subtitle: "Professional legal research, drafting, and case preparation assistance with complete client confidentiality.",
    
    // Mandatory Legal Disclaimer
    disclaimer: "This website provides general information about professional services and is not a substitute for individualized legal advice. No information on this website should be interpreted as a guarantee of any legal outcome.",
    
    categories: [
      {
        id: "criminal-law",
        categoryName: "Criminal Law",
        description: "Rigorous legal assistance and documentation support for criminal legal matters and procedure.",
        services: [
          {
            title: "Criminal Legal Consultation",
            description: "Structured legal guidance on criminal procedural law, rights, and regulatory frameworks.",
            deliverables: ["Procedural guidance", "Rights advisory", "Confidential consultation"]
          },
          {
            title: "Legal Research & Statutory Analysis",
            description: "In-depth case law research, precedent examination, and statutory interpretation for criminal cases.",
            deliverables: ["Precedent tracking", "Statutory references", "Comparative law analysis"]
          },
          {
            title: "Criminal Legal Drafting",
            description: "Preparation of petitions, legal notices, formal responses, and court-ready legal documents.",
            deliverables: ["Legal notice preparation", "Pleadings & petitions", "Formal representations"]
          },
          {
            title: "Case File Preparation & Documentation",
            description: "Thorough organization of criminal case records, evidence indices, and brief preparation.",
            deliverables: ["Evidence indexing", "Case brief compilation", "Document verification"]
          }
        ]
      },
      {
        id: "civil-law",
        categoryName: "Civil Law",
        description: "Comprehensive assistance in civil disputes, property documentation, and civil litigation support.",
        services: [
          {
            title: "Civil Matters Consultation",
            description: "Advisory on civil remedies, contractual rights, land/property disputes, and civil procedure.",
            deliverables: ["Civil remedy evaluation", "Dispute appraisal", "Settlement documentation"]
          },
          {
            title: "Civil Drafting & Deeds",
            description: "Drafting of civil suits, plaints, written statements, affidavits, and statutory notices.",
            deliverables: ["Plaints & written statements", "Deeds & agreements", "Affidavit preparation"]
          },
          {
            title: "Civil Legal Documentation",
            description: "Review, auditing, and structured verification of title records, contracts, and civil agreements.",
            deliverables: ["Contractual review", "Title deed scrutiny", "Documentation auditing"]
          },
          {
            title: "Dispute-Related Advisory Support",
            description: "Pre-litigation dispute analysis and structured negotiation drafting for civil conflicts.",
            deliverables: ["Pre-litigation strategy", "Reconciliation drafting", "Case assessment"]
          }
        ]
      }
    ]
  },

  // ==================================================================
  // 6. DIGITAL MARKETING SERVICES
  // EDIT HERE: SEO, Google Ads, Content, Social Media & Digital Strategy
  // ==================================================================
  digitalMarketingServices: {
    badge: "Growth & Visibility",
    title: "Digital Marketing & SEO Services",
    subtitle: "Data-backed search optimization, paid search execution, and digital strategy tailored for sustainable organic reach.",
    services: [
      {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        description: "Holistic organic search strategy designed to rank key search terms and increase qualified organic traffic.",
        icon: "Search",
        tags: ["Keyword Research", "Rank Tracking", "SERP Analysis"]
      },
      {
        id: "on-page-seo",
        title: "On-Page SEO Optimization",
        description: "Fine-tuning meta tags, H1/H2 structures, semantic internal linking, and search-aligned content formatting.",
        icon: "FileCode",
        tags: ["Meta Optimization", "Content Structure", "Schema Markup"]
      },
      {
        id: "technical-seo",
        title: "Technical SEO & Site Health",
        description: "Auditing crawl errors, sitemaps, robots.txt, Core Web Vitals, site speed, and mobile responsiveness.",
        icon: "Wrench",
        tags: ["Site Speed", "Crawlability", "Indexation"]
      },
      {
        id: "local-seo",
        title: "Local SEO & Map Pack",
        description: "Optimizing Google Business Profile, local citations, and geo-targeted keywords for localized client acquisition.",
        icon: "MapPin",
        tags: ["Google Business Profile", "Local Citations", "Geo-targeting"]
      },
      {
        id: "google-ads",
        title: "Google Ads & SEM",
        description: "High-intent search campaign architecture, negative keyword filtration, and cost-per-click efficiency.",
        icon: "Target",
        tags: ["Search Campaigns", "PPC Strategy", "Quality Score"]
      },
      {
        id: "content-strategy",
        title: "Content Strategy & Copywriting",
        description: "Creating search-intent content calendars, educational articles, and client-centric value propositions.",
        icon: "PenTool",
        tags: ["Content Calendar", "Intent Mapping", "Brand Voice"]
      },
      {
        id: "social-media",
        title: "Social Media Marketing",
        description: "Professional personal branding and targeted campaigns across LinkedIn, Facebook, and professional networks.",
        icon: "Share2",
        tags: ["LinkedIn Growth", "Meta Campaigns", "Audience Engagement"]
      },
      {
        id: "website-audit",
        title: "Website SEO Audit & Analytics",
        description: "Comprehensive diagnostics identifying ranking bottlenecks, UX friction, and conversion opportunities.",
        icon: "BarChart3",
        tags: ["Full Site Audit", "Google Analytics", "Search Console"]
      },
      {
        id: "conversion-optimization",
        title: "Conversion Rate Optimization (CRO)",
        description: "Refining calls-to-action, landing page hierarchy, and user funnels to turn visitors into inquiries.",
        icon: "CheckCircle2",
        tags: ["User Flow", "CTA Optimization", "Form Optimization"]
      }
    ]
  },

  // ==================================================================
  // 7. MICROSOFT OFFICE & PRODUCTIVITY
  // EDIT HERE: Advanced software proficiency & documentation workflows
  // ==================================================================
  microsoftSkills: {
    badge: "Technology & Productivity",
    title: "Advanced Microsoft Office Mastery",
    subtitle: "High-level software capabilities transforming data, complex legal files, and business reports into pristine assets.",
    tools: [
      {
        id: "word",
        name: "Microsoft Word",
        proficiency: "Advanced",
        color: "#2b579a",
        highlights: [
          "Professional legal and corporate document creation",
          "Advanced styles, typography, and section break formatting",
          "Automated tables of contents, indices, and citation tables",
          "Complex legal pleadings, deeds, and contract drafting"
        ]
      },
      {
        id: "excel",
        name: "Microsoft Excel",
        proficiency: "Advanced",
        color: "#217346",
        highlights: [
          "Advanced formula architecture and logical modeling",
          "Data cleaning, sorting, and conditional formatting",
          "Pivot tables, summary charts, and executive reporting",
          "Client case management and marketing campaign tracking"
        ]
      },
      {
        id: "access",
        name: "Microsoft Access",
        proficiency: "Advanced",
        color: "#a4373a",
        highlights: [
          "Relational database design and query building",
          "Custom data-entry forms with validation rules",
          "Automated relational report generation and export",
          "Structured records management for legal and client files"
        ]
      }
    ],
    additionalProductivity: [
      "Professional Document Creation & Typography",
      "Advanced Spreadsheet Modeling & Data Management",
      "Relational Database Architecture & Records Retrieval",
      "Executive Reporting & Structured Presentations",
      "Fast & Accurate Legal Keyboard Transcription",
      "Streamlined File Management & Cloud Backup Workflows"
    ]
  },

  // ==================================================================
  // 8. SKILLS SECTION (Categorized Tags)
  // EDIT HERE: Add or remove specific skill tags
  // ==================================================================
  skillsCategories: [
    {
      id: "legal",
      name: "Legal Practice",
      icon: "Scale",
      skills: [
        { name: "Criminal Law", level: "3+ Years" },
        { name: "Civil Law", level: "3+ Years" },
        { name: "Legal Research & Precedents", level: "Advanced" },
        { name: "Legal Drafting & Pleadings", level: "Advanced" },
        { name: "Legal Documentation", level: "Advanced" },
        { name: "Client Advisory & Communication", level: "Professional" },
        { name: "Case File Management", level: "Meticulous" },
        { name: "Statutory Interpretation", level: "Proficient" }
      ]
    },
    {
      id: "marketing",
      name: "Digital Marketing & Growth",
      icon: "TrendingUp",
      skills: [
        { name: "Search Engine Optimization (SEO)", level: "Core" },
        { name: "On-Page SEO Optimization", level: "Advanced" },
        { name: "Technical SEO & Indexing", level: "Proficient" },
        { name: "Local SEO & Citations", level: "Proficient" },
        { name: "Keyword & Competitor Research", level: "Advanced" },
        { name: "Google Ads (SEM / PPC)", level: "Campaign Ready" },
        { name: "Social Media Marketing", level: "Strategic" },
        { name: "Content Strategy & Planning", level: "Skilled" }
      ]
    },
    {
      id: "tech",
      name: "Technology & Software",
      icon: "Laptop",
      skills: [
        { name: "Microsoft Word", level: "Advanced" },
        { name: "Microsoft Excel", level: "Advanced" },
        { name: "Microsoft Access", level: "Advanced" },
        { name: "Database Structuring", level: "Proficient" },
        { name: "Data Organization", level: "Advanced" },
        { name: "Professional Reporting", level: "Advanced" },
        { name: "Digital Workflow Optimization", level: "Proficient" },
        { name: "Secure Digital Archiving", level: "Standard" }
      ]
    }
  ],

  // ==================================================================
  // 9. PROFESSIONAL EXPERIENCE TIMELINE
  // EDIT HERE: Verified chronological career experience
  // ==================================================================
  experience: [
    {
      id: "exp-legal",
      role: "Criminal & Civil Lawyer",
      organization: "Legal Practice & Consultation",
      period: "3+ Years Experience",
      badge: "Law Practice",
      type: "legal",
      responsibilities: [
        "Conducted thorough legal research on relevant statutory provisions, case law precedents, and judicial rulings.",
        "Drafted formal legal documents, court petitions, legal notices, affidavits, and civil deeds with precision.",
        "Provided confidential consultation and procedural assistance to clients navigating criminal and civil law matters.",
        "Organized and synthesized complex case files, evidence inventories, and structured legal records.",
        "Maintained stringent adherence to professional ethics, client confidentiality, and legal due process."
      ]
    },
    {
      id: "exp-marketing",
      role: "Digital Marketing Professional & SEO Specialist",
      organization: "Digital Strategy & Consulting",
      period: "1+ Year Experience",
      badge: "Digital Growth",
      type: "marketing",
      responsibilities: [
        "Formulated and executed data-driven SEO campaigns focusing on on-page architecture, metadata, and keyword alignment.",
        "Conducted comprehensive website SEO audits, identifying crawl bottlenecks, mobile responsiveness flaws, and speed improvements.",
        "Managed keyword intelligence and competitor gap analysis to discover organic traffic opportunities.",
        "Engineered content strategies that bridge educational value with search-intent optimization.",
        "Supervised digital reporting and data tracking to ensure measurable return on marketing efforts."
      ]
    }
  ],

  // ==================================================================
  // 10. PROJECTS / PORTFOLIO SYSTEM
  // EDIT HERE: Real or showcase projects. Filterable by category.
  // ==================================================================
  projects: [
    {
      id: "proj-1",
      title: "Legal Research & Statutory Precedent Compendium",
      category: "legal",
      categoryLabel: "Legal & Drafting",
      description: "Structured legal precedent analysis synthesizing statutory provisions and high court rulings for fast retrieval during criminal and civil litigation preparation.",
      tools: ["Microsoft Word", "Legal Case Law", "Research Indices"],
      services: ["Legal Research", "Document Structuring"],
      url: "",
      caseStudyUrl: "",
      date: "Professional Practice",
      tags: ["Criminal Law", "Civil Law", "Research"]
    },
    {
      id: "proj-2",
      title: "Comprehensive On-Page SEO & Content Architecture",
      category: "marketing",
      categoryLabel: "Digital Marketing",
      description: "Complete organic search overhaul incorporating semantic heading structures, optimized meta tags, internal linking architecture, and keyword intent mapping.",
      tools: ["Google Search Console", "Keyword Planner", "On-Page SEO"],
      services: ["Technical SEO", "Content Optimization"],
      url: "",
      caseStudyUrl: "",
      date: "Professional Practice",
      tags: ["SEO", "Keyword Research", "On-Page"]
    },
    {
      id: "proj-3",
      title: "Relational Client & Case Records Database System",
      category: "technology",
      categoryLabel: "Technology & Data",
      description: "Custom Microsoft Access database developed to systematically track case documentation, hearing schedules, evidence catalogs, and client records with validation checks.",
      tools: ["Microsoft Access", "Microsoft Excel", "Database Design"],
      services: ["Database Structuring", "Data Management"],
      url: "",
      caseStudyUrl: "",
      date: "Professional Practice",
      tags: ["MS Access", "MS Excel", "Database"]
    },
    {
      id: "proj-4",
      title: "Local Search & Map Pack Optimization Strategy",
      category: "marketing",
      categoryLabel: "Digital Marketing",
      description: "Localized search optimization blueprint targeting geo-specific keywords, Google Business Profile enhancement, and localized client inquiry pathways.",
      tools: ["Local SEO", "Google Business Profile", "Geo-Targeting"],
      services: ["Local SEO", "Digital Strategy"],
      url: "",
      caseStudyUrl: "",
      date: "Professional Practice",
      tags: ["Local SEO", "Google Maps", "Lead Gen"]
    }
  ],

  // ==================================================================
  // 11. TESTIMONIALS SYSTEM
  // EDIT HERE: Data-driven testimonials. If empty, displays placeholder.
  // ==================================================================
  testimonials: [
    // Leave array empty or populate with real feedback:
    // {
    //   clientName: "Client Name",
    //   position: "Business Owner / Client",
    //   testimonial: "Detailed testimonial text here...",
    //   photo: "/images/testimonials/avatar.jpg",
    //   date: "2026"
    // }
  ],
  testimonialsEmptyState: "Client testimonials and professional references will be published here upon verification.",

  // ==================================================================
  // 12. CONTACT INFORMATION & FORM
  // EDIT HERE: Contact methods, hours, and form options
  // ==================================================================
  contact: {
    badge: "Get in Touch",
    title: "Discuss Your Legal Matter or Digital Strategy",
    subtitle: "Reach out directly for consultation inquiries, legal drafting assistance, or digital marketing advisory. All communications are treated with strict confidentiality.",
    
    // Details
    email: "contact@zillurrahman.com", // [EDIT YOUR EMAIL]
    phone: "+880 1XXXXXXXXX",          // [ADD YOUR PHONE]
    location: "Chittagong, Bangladesh",
    consultationHours: "Saturday – Thursday: 10:00 AM – 8:00 PM",
    
    // Form service options
    serviceOptions: [
      "Criminal Law Consultation & Drafting",
      "Civil Law Consultation & Drafting",
      "Legal Research & Documentation Support",
      "Search Engine Optimization (SEO)",
      "Google Ads & Digital Marketing",
      "Microsoft Office / Data Organization Workflows",
      "General Professional Inquiry"
    ]
  },

  // ==================================================================
  // 13. SOCIAL MEDIA LINKS
  // EDIT HERE: Put your URLs. Any link left blank will automatically hide!
  // ==================================================================
  socialLinks: {
    linkedin: "",  // e.g. "https://www.linkedin.com/in/yourprofile"
    facebook: "",  // e.g. "https://www.facebook.com/yourprofile"
    instagram: "",
    youtube: "",
    x: "",
    github: "",
  },

  // ==================================================================
  // 14. WHATSAPP FLOATING & INLINE CTA
  // EDIT HERE: WhatsApp direct messaging button
  // ==================================================================
  whatsapp: {
    enabled: false, // Set to true when you enter your WhatsApp number below
    number: "",     // e.g. "8801700000000" (country code without '+' or spaces)
    defaultMessage: "Hello Zillur Rahman, I would like to inquire about your professional services.",
  },

  // ==================================================================
  // 15. SEO & SEARCH CONSOLE CONFIGURATION
  // EDIT HERE: Meta titles, descriptions, and verification keys
  // ==================================================================
  seo: {
    siteTitle: "Zillur Rahman — Criminal & Civil Lawyer | Digital Marketing Professional",
    siteDescription: "Official professional portfolio of Zillur Rahman — Criminal & Civil Lawyer (3+ Years) and Digital Marketing Professional (1+ Year) with Advanced Microsoft Office expertise.",
    siteKeywords: "Zillur Rahman, Criminal Lawyer, Civil Lawyer, Digital Marketing, SEO, Google Ads, Microsoft Word, Microsoft Excel, Microsoft Access, Chittagong, Bangladesh",
    canonicalUrl: "https://zillurrahman.com",
    author: "Zillur Rahman",
    ogImage: "/images/og/og-image.jpg",
    twitterHandle: "@zillurrahman",
    googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
    googleSearchConsoleTag: "", // e.g. "google-site-verification=XXXXX"
  },

  // ==================================================================
  // 16. SITE SETTINGS & FEATURE FLAGS
  // ==================================================================
  siteSettings: {
    defaultTheme: "dark", // "dark" | "light" | "system"
    enableLanguageToggle: true,
    defaultLanguage: "en", // "en" | "bn"
    year: new Date().getFullYear(),
    copyrightText: `© ${new Date().getFullYear()} Zillur Rahman. All rights reserved.`
  }
};
