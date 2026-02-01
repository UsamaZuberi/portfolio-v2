# Portfolio Developer Guide

## Overview

This project is a Next.js 15 portfolio built with React 19, TypeScript, and Tailwind CSS. It is designed to be easy to customize without touching backend code.

## Quick Start

### Prerequisites

- Node.js 20.16 or higher
- Yarn 4.0 or higher

### Install & Run

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

## Where to Update Content

- **Main content**: Edit [data.js](data.js)
- **Sections**: Update files in [components/sections](components/sections)
- **UI components**: Reusable components in [components/ui](components/ui)

## Images

### Vercel Blob (Recommended for project galleries)

1. Add `portfolio_v2_images_READ_WRITE_TOKEN` to `.env.local`
2. Upload images named `{project-slug}-{number}.ext`
3. The slug must match `data.js`

See [BLOB_SETUP.md](BLOB_SETUP.md) for full setup.

### Local Images (Optional)

- Replace `/public/images/placeholder-profile.svg`
- Replace `/public/images/placeholder-project.svg`
- Update references in section components if you add new files

## Theme

- Theme is stored in localStorage and applied by [components/providers/ThemeProvider.tsx](components/providers/ThemeProvider.tsx)
- Toggle UI lives in [components/ui/ThemeToggle.tsx](components/ui/ThemeToggle.tsx)

## API Utilities

- Client fetch helpers are in [lib/api.ts](lib/api.ts)
- Default base URL is `/api`
- Set `NEXT_PUBLIC_API_URL` if you use an external API

## Scripts

- `yarn dev` — run development server
- `yarn build` — production build
- `yarn start` — run production server
- `yarn lint` — lint code
- `yarn type-check` — TypeScript checks

## Troubleshooting

- **Type errors**: run `yarn type-check`
- **Blob images missing**: verify token and image naming
- **Styles not updating**: restart dev server

Last updated: February 1, 2026
