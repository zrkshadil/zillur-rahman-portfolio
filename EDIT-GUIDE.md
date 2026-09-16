# ZILLUR RAHMAN — WEBSITE EASY EDIT GUIDE

Welcome to your personal portfolio management guide. This website is built with a **centralized configuration system**. 

You do **NOT** need to edit hundreds of lines of complex code or search through folders. 

Almost all of your personal details, services, skills, portfolio projects, and contact info live in one single file:
👉 **`/src/config/siteConfig.js`**

---

## Quick Table of Contents

1. [How to change your name](#1-how-to-change-your-name)
2. [How to change profile photo](#2-how-to-change-profile-photo)
3. [How to change hero headline](#3-how-to-change-hero-headline)
4. [How to change hero description](#4-how-to-change-hero-description)
5. [How to change About section](#5-how-to-change-about-section)
6. [How to change legal services](#6-how-to-change-legal-services)
7. [How to change digital marketing services](#7-how-to-change-digital-marketing-services)
8. [How to change skills](#8-how-to-change-skills)
9. [How to change experience](#9-how-to-change-experience)
10. [How to add projects](#10-how-to-add-projects)
11. [How to remove projects](#11-how-to-remove-projects)
12. [How to add testimonials](#12-how-to-add-testimonials)
13. [How to change email](#13-how-to-change-email)
14. [How to change phone](#14-how-to-change-phone)
15. [How to change WhatsApp](#15-how-to-change-whatsapp)
16. [How to change social media links](#16-how-to-change-social-media-links)
17. [How to change colors](#17-how-to-change-colors)
18. [How to change fonts](#18-how-to-change-fonts)
19. [How to change SEO title](#19-how-to-change-seo-title)
20. [How to change SEO description](#20-how-to-change-seo-description)
21. [How to replace images](#21-how-to-replace-images)
22. [How to add or replace your CV](#22-how-to-add-or-replace-your-cv)
23. [How to connect forms (Netlify / Formspree)](#23-how-to-connect-forms)
24. [How to deploy to GitHub](#24-how-to-deploy-to-github)
25. [How to deploy to Netlify](#25-how-to-deploy-to-netlify)
26. [How to update the live website later](#26-how-to-update-the-live-website-later)

---

### 1. How to change your name
Open `/src/config/siteConfig.js`. At the top under `personal`:
```js
personal: {
  name: "Zillur Rahman",  // Change to your updated name
  initials: "ZR",        // 2-letter initials for your logo
}
```
Save the file. It updates everywhere (Navbar, Hero, Footer, and SEO tags).

---

### 2. How to change profile photo
There are two easy methods:
- **Method A (No code change)**: Name your new photo `zillur-rahman.png` (or `zillur-rahman.webp`) and paste it into `/public/images/profile/`, overwriting the existing file.
- **Method B (Via config)**: Paste your photo into `/public/images/profile/my-new-photo.jpg`, then open `/src/config/siteConfig.js` and edit:
```js
profileImage: "/images/profile/my-new-photo.jpg",
```

---

### 2B. How to change the Hero Section Image (Full-Bleed Background)
The homepage Hero section features a wide cinematic office background image of Zillur Rahman.

To replace this image in the future:
- **Method A (Easiest)**: Save your new wide landscape photo as `/public/images/hero/zillur-rahman-hero.png` (or `.webp`), overwriting the existing file.
- **Method B (Via config)**:
  1. Put your image into `/public/images/hero/your-image-name.webp`.
  2. Open `/src/config/siteConfig.js` and find the `hero` section:
  ```js
  hero: {
    // =================================================
    // HERO IMAGE — EDIT HERE
    // =================================================
    image: "/images/hero/your-image-name.webp",
    imageAlt: "Advocate Zillur Rahman in Law Chamber",
  ```
  3. Save the file. The Hero background updates immediately!

---

### 3. How to change hero headline
Open `/src/config/siteConfig.js` and find `hero`:
```js
hero: {
  headline: "Law, Strategy & Digital Growth",
  headlineHighlight: "Built Around Professional Excellence.",
}
```
Edit the text and save.

---

### 4. How to change hero description
Open `/src/config/siteConfig.js` under `hero`:
```js
subheadline: "Providing rigorous Criminal and Civil legal assistance alongside high-impact Digital Marketing...",
```

---

### 5. How to change About section
Open `/src/config/siteConfig.js` under `about`:
- Edit `paragraph1`, `paragraph2`, and `paragraph3`.
- Edit the 3 pillars (`Criminal & Civil Law`, `Digital Marketing & SEO`, `Advanced Productivity`).

---

### 6. How to change legal services
Open `/src/config/siteConfig.js` under `legalServices`:
- You will see two categories: `Criminal Law` and `Civil Law`.
- Each service has `title`, `description`, and `deliverables` (bullet points).
- Simply change the text or add a new service item following the same format.
- To change the legal disclaimer, edit `disclaimer: "..."`.

---

### 7. How to change digital marketing services
Open `/src/config/siteConfig.js` under `digitalMarketingServices`:
- Each item has `title`, `description`, `icon`, and `tags`.
- Change any service description or add new tags as you expand your digital offerings.

---

### 8. How to change skills
Open `/src/config/siteConfig.js` under `skillsCategories`:
- Skills are grouped into: `legal`, `marketing`, and `tech`.
- To add a skill:
```js
{ name: "Contract Negotiation", level: "Proficient" }
```

---

### 9. How to change experience
Open `/src/config/siteConfig.js` under `experience`:
- Update `period` (e.g. "4+ Years Experience").
- Add or edit bullet points in `responsibilities: [...]`.

---

### 10. How to add projects
Open `/src/config/siteConfig.js` under `projects`:
Add a new object to the array:
```js
{
  id: "proj-5",
  title: "Your Project Title Here",
  category: "marketing", // Choose: "legal", "marketing", or "technology"
  categoryLabel: "Digital Marketing",
  description: "Brief summary of what was accomplished.",
  tools: ["Google Ads", "Analytics"],
  services: ["PPC Campaign"],
  url: "",
  caseStudyUrl: "",
  date: "2026",
  tags: ["Google Ads", "SEM"]
}
```

---

### 11. How to remove projects
Open `/src/config/siteConfig.js`, locate the project block inside `projects: [...]`, and delete or comment out the `{ ... }` block.

---

### 12. How to add testimonials
Open `/src/config/siteConfig.js` under `testimonials`:
```js
testimonials: [
  {
    clientName: "Advocate Ahmed",
    position: "Senior Associate, High Court",
    testimonial: "Zillur Rahman's legal research compendiums and meticulous drafting saved us dozens of hours on critical motions.",
    photo: "", // Optional image path
    date: "2026"
  }
]
```
If the array is empty (`testimonials: []`), the website automatically displays the dignified placeholder message.

---

### 13. How to change email
Open `/src/config/siteConfig.js` under `personal` and `contact`:
```js
email: "your-real-email@domain.com",
```
This updates the Hero, Contact section, and Footer mail links automatically.

---

### 14. How to change phone
Open `/src/config/siteConfig.js`:
```js
phone: "+880 1700-000000",
```

---

### 15. How to change WhatsApp
Open `/src/config/siteConfig.js` under `whatsapp`:
```js
whatsapp: {
  enabled: true,                       // Set to true to activate
  number: "8801700000000",              // Country code + digits without '+' or spaces
  defaultMessage: "Hello Zillur Rahman, I would like to inquire about your professional services.",
}
```
If `enabled: false` or the number is blank, the WhatsApp buttons automatically hide from the website.

---

### 16. How to change social media links
Open `/src/config/siteConfig.js` under `socialLinks`:
```js
socialLinks: {
  linkedin: "https://linkedin.com/in/your-username",
  facebook: "https://facebook.com/your-username",
  instagram: "",
  youtube: "",
  x: "",
  github: "",
}
```
**Important**: Any link left as `""` (empty) will **automatically disappear** from the website.

---

### 17. How to change colors
Colors are controlled via CSS variables in `/src/index.css` and tokens in `/tailwind.config.js`:
- In `/src/index.css`, edit `--primary: #d4af37;` to adjust the gold accent.
- In `/tailwind.config.js`, adjust the `gold` or `navy` color palette.

---

### 18. How to change fonts
Fonts are imported in `index.html` via Google Fonts:
- Open `index.html` and replace the Google Font URL.
- Open `/tailwind.config.js` and update `fontFamily.serif` or `fontFamily.sans`.

---

### 19. How to change SEO title
Open `/src/config/siteConfig.js` under `seo`:
```js
siteTitle: "Your New SEO Page Title Here",
```
Also review `<title>` in `index.html`.

---

### 20. How to change SEO description
Open `/src/config/siteConfig.js` under `seo`:
```js
siteDescription: "Your updated 150-160 character description...",
```

---

### 21. How to replace images
All images are organized in `/public/images/`:
- `/public/images/profile/` (Your portraits and emblems)
- `/public/images/projects/` (Project screenshots)
- `/public/images/og/` (Social media preview card)

---

### 22. How to add or replace your CV
Save your updated PDF as:
`/public/documents/zillur-rahman-cv.pdf`
The "Download CV" buttons across the website point to this file automatically.

---

### 23. How to connect forms
The contact form has native support for:
1. **Netlify Forms** (Zero-setup): When deployed to Netlify, form submissions are captured automatically in your Netlify dashboard under **Site > Forms**.
2. **Formspree**: Create a free form on Formspree, copy your endpoint, and add it to your `.env` file:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

---

### 24. How to deploy to GitHub
Run these commands in your project terminal:
```bash
git init
git add .
git commit -m "Complete portfolio build for Zillur Rahman"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

### 25. How to deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site > Import an existing project**.
3. Connect your GitHub account and select your repository.
4. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**. Your website is live in seconds!

---

### 26. How to update the live website later
Whenever you want to change any information:
1. Open `/src/config/siteConfig.js` and edit your text.
2. Test locally with `npm run dev`.
3. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update legal services and contact info"
   git push
   ```
4. Netlify will automatically detect your git push and rebuild your live website within 60 seconds!
