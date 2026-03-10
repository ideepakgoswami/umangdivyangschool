## Umang Divyang School — Website

Production-ready website for **Umang Divyang School** built with **Next.js 14 (App Router) + TypeScript + TailwindCSS**, styled with **shadcn-style UI primitives**, and optimized for **Vercel**.

### Tech stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **TailwindCSS**
- **shadcn-style components** in `components/ui/`
- **Framer Motion** (subtle reveal animations)

### Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

### Project structure

- `app/`: Routes (Home, About, Programs, Gallery, Donate, Volunteer, Contact), metadata, sitemap/robots, OpenGraph image
- `components/`: Site components
  - `components/site/`: marketing sections (hero, stats, gallery lightbox, forms, navbar/footer)
  - `components/ui/`: accessible UI primitives (button, card, dialog, sheet, inputs)
- `lib/`: shared utilities and site config
- `public/`: images and gallery placeholders
- `styles/`: theme tokens

### What to replace before launch

- **Site URL / contact details / social links**: edit `lib/site.ts`
- **Donation details**: edit `app/donate/page.tsx` (UPI ID, Razorpay link, bank details)
- **Images**:
  - Hero and story placeholders in `public/images/`
  - Gallery placeholders in `public/gallery/`
  - Use real photos **only with consent**; keep alt text accurate
- **Forms**:
  - Server actions are in `app/actions.ts`
  - Currently they **log submissions to the server console**
  - Connect to email/CRM (e.g. Resend/Postmark/Sheets) before going live

### Pages included

- **Home**: hero, impact stats, about preview, programs, gallery preview + lightbox, testimonials, social previews, donation CTA
- **About**: story, mission/vision/values, founder message, timeline
- **Programs**: program cards with impact
- **Gallery**: responsive grid + lightbox
- **Donate**: transparent donation options (UPI/Razorpay/bank transfer)
- **Volunteer**: ways to help + volunteer form
- **Contact**: contact form + details + Google Map embed

### Accessibility & SEO

- Semantic sections and headings
- Focus-visible rings, keyboard-friendly navigation, accessible dialogs
- Per-page `metadata`, plus `app/sitemap.ts` and `app/robots.ts`
- Dynamic OpenGraph/Twitter images via `app/opengraph-image.tsx`

### Deploying to Vercel

This project is Vercel-ready. Import the repo in Vercel and deploy (no extra config needed).
