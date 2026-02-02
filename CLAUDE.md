# CLAUDE.md - Project Context for Claude Code

## Project Overview
Personal portfolio website for Mayowa Awoyomi, a software engineer based in the UK.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP
- **Deployment**: (TBD)

## Project Structure
```
src/app/
├── _components/          # Reusable components
│   ├── Navbar.tsx        # Navigation with mobile menu & active route highlighting
│   ├── LandingPage.tsx   # Hero section with video background & GSAP animations
│   ├── About.tsx         # Bio, skills, YouTube playlist modal
│   ├── Contact.tsx       # Contact info & CTA buttons
│   ├── Clock.tsx         # Real-time clock (hydration-safe)
│   ├── ThemeProvider.tsx # Theme context (light/dark/system)
│   ├── ThemeToggle.tsx   # Theme switcher button
│   └── ThemeScript.tsx   # FOUC prevention script
├── _fonts/               # Custom fonts (WanoQuin)
├── about/page.tsx        # About route
├── contact/page.tsx      # Contact route
├── configs/config.ts     # Centralized constants (URLs, contact info)
├── globals.css           # Tailwind + custom CSS variables + animations
├── layout.tsx            # Root layout with fonts, theme, navbar
└── page.tsx              # Home page
```

## Key Features Implemented
- [x] Dark/Light/System theme with localStorage persistence
- [x] FOUC prevention for theme
- [x] Responsive design (mobile-first)
- [x] Mobile hamburger menu (full-screen overlay)
- [x] Active route highlighting in navbar
- [x] GSAP landing page animations
- [x] Video background with WebM/MP4 fallback
- [x] Scroll lock when mobile menu is open
- [x] CLS reduction with font display swap
- [x] Hydration-safe clock component

## Configuration
All external URLs and contact details are in `src/app/configs/config.ts`

## Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Code Conventions
- Use "use client" directive for interactive components
- Prefer Tailwind classes over custom CSS
- Use CSS variables for theme colors
- Keep components in `_components/` folder
- Use absolute imports with `@/` alias

## Deployment
- [x] GitHub Actions CI/CD pipeline (`.github/workflows/ci.yml`)
- [ ] Push to GitHub
- [ ] Connect to Vercel/Netlify for auto-deployment


