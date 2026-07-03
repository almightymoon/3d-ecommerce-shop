# NovaMart — 3D E-commerce Experience

Immersive 3D shopping platform built with **Next.js 14**, **React Three Fiber**, and **Three.js**. Forked from [Shop3D](https://github.com/NZLouislu/Shop3D) and enhanced with a premium dark cyberpunk UI.

[![CI](https://github.com/almightymoon/3d-ecommerce-shop/actions/workflows/ci.yml/badge.svg)](https://github.com/almightymoon/3d-ecommerce-shop/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Features

- **WebGL hero scene** — Floating 3D product with sparkles, orbit controls, and contact shadows
- **360° product viewer** — Full interactive GLB exploration on product pages
- **Premium dark UI** — Glass navbar, trust bar, glowing product cards, cyberpunk palette
- **Responsive layout** — Mobile, tablet, and desktop optimized
- **Docker ready** — Multi-stage standalone Next.js container
- **CI/CD** — GitHub Actions lint + production build

## Tech Stack

| Layer | Stack |
|-------|-------|
| Framework | Next.js 14 (App Router) |
| 3D | Three.js, React Three Fiber, Drei |
| Styling | CSS Modules, glassmorphism |
| Language | TypeScript |
| Deploy | Docker, Vercel-compatible |

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
```

### Docker

```bash
docker compose up --build
```

## Project Structure

```
src/
├── components/     # HeroScene, HeroBanner, TrustBar, ThreeViewer
├── app/            # Next.js App Router pages
└── styles/         # Dark theme CSS modules
```

## Enhancements

See [ENHANCEMENTS.md](./ENHANCEMENTS.md) for the full list of custom improvements over upstream.

## Author

Built by [Moon](https://github.com/almightymoon) · Based on [NZLouislu/Shop3D](https://github.com/NZLouislu/Shop3D)
