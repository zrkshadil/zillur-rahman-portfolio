# Zillur Rahman — Professional Portfolio Website
### Criminal & Civil Lawyer | Digital Marketing Professional | Advanced Microsoft Office Specialist

A production-ready personal brand portfolio website built for **Zillur Rahman**, establishing dual authority across the legal profession and digital marketing.

---

## 🌟 Key Highlights

- **Tailored Brand Identity**: Bespoke dark navy and luxury gold design system crafted for legal gravitas and modern digital acumen.
- **Centralized Editing System**: All personal information, services, skills, projects, testimonials, and SEO tags are controlled in a single file: `src/config/siteConfig.js`.
- **Authentic Portrait Treatment**: Integrated real photographic assets (`zillur-rahman.png`, `zillur-rahman-court.png`, and bar association insignia) without altering personal facial identity.
- **Bilingual Architecture**: Built-in architecture supporting both English and Bengali (বাংলা) language toggling.
- **Theme Support**: Seamless Dark Mode, Light Mode, and System Default with localStorage persistence.
- **Form Architecture**: Multi-state contact form ready for Netlify Forms, Formspree, and Firebase.
- **Production Optimized**: Lighthouse-optimized assets, lazy-loading, strict security headers in `netlify.toml`, and Schema.org structured data.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/) / [GitHub Pages](https://pages.github.com/)

---

## 📁 Project Structure

```text
New portfolio/
├── public/
│   ├── favicon.svg                  # Luxury ZR monogram vector icon
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # XML sitemap for Google Search Console
│   ├── documents/
│   │   └── zillur-rahman-cv.pdf     # Downloadable Curriculum Vitae
│   └── images/
│       ├── profile/                 # Authentic portraits of Zillur Rahman
│       │   ├── zillur-rahman.png    # Primary hero portrait
│       │   ├── zillur-rahman.webp   # WebP optimized portrait
│       │   ├── zillur-rahman-full.jpg
│       │   ├── zillur-rahman-court.png
│       │   └── bar-association-logo.png
│       ├── projects/                # Portfolio showcase images
│       └── og/                      # Social media Open Graph preview cards
├── src/
│   ├── config/
│   │   ├── siteConfig.js            # ⭐ SINGLE SOURCE OF TRUTH (EDIT HERE)
│   │   └── translations.js          # Bilingual dictionary (EN / BN)
│   ├── context/
│   │   └── ThemeContext.jsx         # Dark/Light/System theme & language state
│   ├── components/
│   │   ├── layout/                  # Navbar, Footer, FloatingWhatsApp
│   │   ├── sections/                # Hero, Stats, About, LegalServices, etc.
│   │   └── ui/                      # Button, Card, Badge, SectionHeading
│   ├── lib/
│   │   └── firebase.js              # Future-ready Firebase/Firestore module
│   ├── App.jsx                      # Main page composition
│   ├── index.css                    # Tailwind directives & CSS design tokens
│   └── main.jsx                     # Application entry point
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules (protects .env & dist)
├── netlify.toml                     # Netlify build, SPA rewrite & security headers
├── EDIT-GUIDE.md                    # 26-step simple English editing guide
└── README.md                        # Technical overview & deployment guide
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to see your live portfolio.

### 4. Build for Production
```bash
npm run build
```
This generates a production-ready, minified bundle in the `/dist` directory.

---

## ✏️ How to Edit Your Information

Open **`src/config/siteConfig.js`** in any code editor (like VS Code or Notepad). 

Every section has prominent comments:
- Change your name, titles, bio, and phone number under `personal`
- Change headlines and CTAs under `hero`
- Update Criminal and Civil legal offerings under `legalServices`
- Update SEO and marketing offerings under `digitalMarketingServices`
- Add or remove projects under `projects`
- Add verified client testimonials under `testimonials`
- Enter social media profile URLs under `socialLinks`

👉 **For an easy 26-point step-by-step tutorial, read [`EDIT-GUIDE.md`](./EDIT-GUIDE.md).**

---

## 🌐 Deployment Instructions

### Deploy to GitHub
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Zillur Rahman portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Connect your local folder and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

### Deploy to Netlify (Recommended)
1. Sign in to [Netlify](https://www.netlify.com/).
2. Click **Add new site > Import an existing project**.
3. Select your GitHub repository.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

---

## 🔒 Security Best Practices

- Never commit confidential credentials or API tokens into source files.
- Use `.env` for private variables (refer to `.env.example`).
- The repository `.gitignore` is preconfigured to prevent leaking secrets.

---

## 📄 License & Legal Notice

© 2026 Zillur Rahman. All rights reserved.  
*The legal information provided on this portfolio is for general professional presentation and does not constitute formal individualized legal advice.*
