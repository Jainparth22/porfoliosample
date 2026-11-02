# Parth Jain — Modern Developer Portfolio

A high-performance, modular developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a cinematic dark theme inspired by modern developer portfolios.

---

## ⚡ Highlights & Key Features

- **Decoupled & Modular Data Architecture:** All projects, skills, certifications, experience, and personal details are located in `src/data/` as clean TypeScript data files. You can add, edit, or remove cards without touching any React component!
- **Complete GitHub Catalog:** Integrated all **34 public repositories** organized by category:
  - ⭐ **Featured / Star Projects** (Top high-impact systems)
  - 🤖 **Machine Learning & NLP** (Pipelines, Kaggle models, Hugging Face)
  - 🏗️ **Backend & Full-Stack Systems** (FastAPI, Flask, Vue, Next.js, Redis, Celery)
  - ⚡ **Distributed Systems & High Concurrency** (OCC, Rate Limiter, WebSockets, Newsfeed)
  - 📚 **Coursework & Learning** (DSA, Git, CS Notes, System Design)
- **Interactive Multi-Category Filter:** Dynamic client-side tabs with live counts.
- **Cinematic Dark Theme:** Zinc-950 canvas with glowing cyan (`#22d3ee`) & violet (`#8b5cf6`) accents, background grid pattern, and smooth micro-interactions.
- **Interactive Sections:**
  - Hero with typewriter role cycle and live animated counters
  - Dual-degree education showcase (VIT Bhopal & IIT Madras)
  - Experience timeline with Government of MP / TCS JV and Hugging Face contributions
  - Skills matrix categorized into 5 domains with color-coded badges
  - Verified certifications cards + achievements showcase
  - Quick contact form with 1-click clipboard copy for email

---

## 📂 Project Structure

```text
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, Google Fonts (Inter & JetBrains Mono), SEO metadata
│   │   ├── page.tsx           # Assembles all portfolio sections
│   │   └── globals.css        # Tailwind directives, custom dark scrollbar & accents
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Responsive navbar with active scroll spy & mobile menu
│   │   │   └── Footer.tsx     # Modern footer with social links & copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Typewriter, animated stats, CTA buttons
│   │   │   ├── About.tsx      # Dual degree cards, bio, quick badges
│   │   │   ├── Experience.tsx # Vertical glowing timeline
│   │   │   ├── Projects.tsx   # Interactive category filter tabs & responsive grid
│   │   │   ├── Skills.tsx     # 5-domain skill matrix & domain pills
│   │   │   ├── Certifications.tsx # Cert cards & achievement highlights
│   │   │   └── Contact.tsx    # Direct contact, email copy, & quick message form
│   │   └── ui/
│   │       ├── ProjectCard.tsx # Reusable card with glow on hover, tags & badges
│   │       ├── CertCard.tsx    # Reusable certification card
│   │       ├── SectionHeading.tsx # Gradient headings with underline accent
│   │       └── AnimatedCounter.tsx # Intersection-observer driven numeric counter
│   ├── data/                 # ⭐️ ALL CONTENT LIVES HERE FOR EASY EDITING
│   │   ├── personal.ts        # Name, bio, roles, stats, education, achievements
│   │   ├── projects.ts        # 34 projects, categories, descriptions, tech stacks, links
│   │   ├── skills.ts          # Skill groups, badges, icons, and colors
│   │   ├── experience.ts      # Roles, companies, bullet points, and dates
│   │   └── certifications.ts  # Certifications, issuers, platforms, and skills
│   └── lib/
│       └── utils.ts           # Class merging helper (clsx + twMerge)
├── tailwind.config.ts         # Theme colors, glow effects, keyframe animations
├── tsconfig.json              # TypeScript configuration with @/* path alias
├── next.config.js             # Image optimization & Next.js settings
└── package.json               # Dependencies and scripts
```

---

## 🛠️ Step-by-Step Setup Guide

Since you mentioned Node.js is not yet installed on your system, follow these quick steps:

### 1. Install Node.js
1. Visit [nodejs.org](https://nodejs.org/) and download the **LTS version** for Windows.
2. Run the installer and check the box to automatically install necessary build tools.
3. Once finished, verify by opening a new PowerShell window and running:
   ```powershell
   node -v
   npm -v
   ```

### 2. Install Project Dependencies
In PowerShell or VS Code terminal, navigate to your portfolio folder:
```powershell
cd c:\Users\parth\OneDrive\Desktop\Portfolio
npm install
```
*(Or if you prefer `pnpm`: run `npm install -g pnpm` then `pnpm install`)*

### 3. Run the Development Server
```powershell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your live portfolio!

---

## 🎨 How to Edit & Customize (Modular Cards)

You never have to touch complex React code to update your portfolio. Everything is contained in the `src/data/` directory:

### 1. Adding or Editing a Project
Open `src/data/projects.ts` and add or edit any project object:
```typescript
{
  title: 'My New Project',
  description: 'Detailed description of what you built and the impact...',
  tech: ['FastAPI', 'Redis', 'Docker'],
  github: 'https://github.com/Jainparth22/my-new-project',
  live: 'https://my-live-demo.com', // Optional: leave blank or omit if not deployed yet
  category: ['featured', 'backend'], // Options: 'featured' | 'ml' | 'backend' | 'distributed' | 'coursework'
  featured: true,                    // Set to true to give it star styling & glow border
  status: 'production',              // Options: 'production' | 'demo' | 'learning'
  highlights: [
    'Handled 10k requests/sec',
    'Implemented cache-aside strategy',
  ],
}
```

### 2. Updating Skills & Tech Stack
Open `src/data/skills.ts`:
- Add new skills directly to the `skills` array under any category.
- Add whole new categories with their own icon and color scheme.

### 3. Updating Certifications & Achievements
Open `src/data/certifications.ts`:
- Add new certifications with `title`, `issuer`, `platform`, `skills`, and `verifyUrl`.

### 4. Updating Personal Info & Experience
- Edit `src/data/personal.ts` to update your bio, social URLs, animated typewriter roles, or education details.
- Edit `src/data/experience.ts` to add new internships, jobs, or open-source roles.

---

## 🚀 Free Deployment to Vercel (When Ready)

1. Push this folder to a GitHub repository:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Parth Jain portfolio"
   git branch -M main
   git remote add origin https://github.com/Jainparth22/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"**, select your repository, and click **"Deploy"**.
4. Your portfolio will be live worldwide on a fast CDN with automatic SSL!

