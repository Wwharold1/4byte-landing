# 4byte Landing

Corporate landing page for **4byte** — built with Next.js 16, React 19, Tailwind CSS v4, and Motion (Framer Motion).

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.1.6 |
| React | 19.2.3 |
| Tailwind CSS | ^4 |
| Motion | ^12.38.0 |
| TypeScript | ^5 |
| Package manager | pnpm |

## Project Structure

```
app/
├── layout.tsx           # Root layout — metadata, fonts, global providers
├── page.tsx             # Entry point (dynamic import of init.tsx)
├── init.tsx             # Splash screen + page bootstrap (client)
├── globals.css          # Global styles & Tailwind base
├── robots.ts            # /robots.txt
├── sitemap.ts           # /sitemap.xml
├── components/
│   └── AnimatedSection.tsx   # Scroll-triggered section wrapper
├── modules/
│   └── home/
│       ├── home.tsx           # Home page composition
│       └── components/        # Section components (us, identity, services, clients, contact)
└── shared/
    └── components/            # Navbar, Footer, Logo, WhatsApp, ScrollButton, Splash
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Deployment

Optimized for deployment on [Vercel](https://vercel.com). The `next.config.ts` includes:

- **Security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Image optimization** — AVIF + WebP formats, 30-day cache TTL
