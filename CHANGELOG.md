# Changelog

Todos los cambios de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/)
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.2] - 2026-04-02

### Added
- Add multi language level in SEO

---

## [1.0.1] - 2026-03-31

### Added
- Security headers (X-Frame-Options, HSTS, CSP, Referrer-Policy, Permissions-Policy, X-Content-Type-Options) via `next.config.ts`
- Image optimization config: AVIF + WebP formats, device/image size breakpoints, 30-day cache TTL

### Changed
- Removed unused `"use client"` directives from `page.tsx`, `home.tsx`, `clients.tsx`, `identity.tsx`, `contact.tsx`, and `services.tsx` — converted to Server Components

### Fixed

### Documentation
- Updated `README.md` with project-specific content: tech stack, folder structure, scripts reference, and deployment notes

---

## [1.0.0] - 2026-03-31

### Added
- Landing page initial
- Create client component
- Create contanct component
- Create identity component
- Create services component
- Create us component
- Create animations in componentes and routes

### Changed
- Update value of texts in client component

### Fixed
- Fix names of styles
