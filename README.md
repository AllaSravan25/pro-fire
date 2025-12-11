# Pro Fire Protections & Safety Solutions

Marketing site for Pro Fire Protections: services, AMC plans, training, and contact. Built with React + Vite + TypeScript and Tailwind (CDN).

## Features
- Service listings with detail pages
- AMC plans overview
- Training & mock drill offerings
- Contact page with CTA buttons
- Responsive layout with hero imagery and local branding assets

## Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes with Node)

## Installation
```bash
npm install
```

## Run the app (dev)
```bash
npm run dev
```
Vite serves on http://localhost:3000 (see `vite.config.ts`).

## Build for production
```bash
npm run build
```

## Preview production build
```bash
npm run preview
```

## Project structure
- `pages/` – route views (Home, Services, ServiceDetail, AMC, Training, About, Contact)
- `components/` – shared layout/nav
- `public/images/` – local assets (logos, hero, services)
- `constants.ts` – company info, services, testimonials
- `App.tsx` / `index.tsx` – routing and bootstrapping

## Tech stack
- React 19.2 + TypeScript
- Vite 6.2
- React Router DOM 7.9
- Tailwind CSS (via CDN)
- Lucide React icons

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview built site

## Deploy to Vercel
The repo includes `vercel.json` with SPA rewrites.

1) Push the repo to GitHub/GitLab/Bitbucket  
2) In Vercel, “Add New Project” → import the repo  
3) Framework preset: Vite  
4) Build command: `npm run build`  
5) Output dir: `dist`  
6) Deploy

## Notes
- Assets live in `public/images` and are referenced as `/images/...`.
- No API key is required for the current static content.

## Contact
- Company: Pro Fire Protections
- Phone: +91 7674057480
- Email: profireprotections@gmail.com
- Address: Pragathi Nagar, Hyderabad, Telangana 500090
