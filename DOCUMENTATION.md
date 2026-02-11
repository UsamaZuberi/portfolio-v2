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

#### Setup

Add this to `.env.local`:

```bash
portfolio_v2_images_READ_WRITE_TOKEN=your-vercel-blob-token
```

Get the token from Vercel:

1. Go to https://vercel.com/dashboard
2. Storage -> Blob
3. Create a blob store named `portfolio-v2-images`
4. Copy the token into `.env.local`

#### Naming Convention

```
{project-slug}-{number}.{extension}
```

Examples:

- `7-star-training-1.png`
- `pixtool-1.png`
- `ehj-and-sj-consultancy-2.jpg`

#### Uploading Images

Dashboard:

1. Storage -> Blob -> `portfolio-v2-images`
2. Upload images using the naming convention above

CLI:

```bash
npm install -g vercel
vercel login
vercel link
vercel blob upload ./pixtool-1.png --token=$portfolio_v2_images_READ_WRITE_TOKEN
```

Programmatic:

```javascript
import { put } from '@vercel/blob';

const blob = await put('pixtool-1.png', file, {
  access: 'public',
  token: process.env.portfolio_v2_images_READ_WRITE_TOKEN,
});

console.log(blob.url);
```

#### How It Works

- API: `/api/projects/images` returns all images grouped by slug.
- API: `/api/projects/[projectId]/images` returns images for a single project.
- Hook: `useProjectImages()` caches and dedupes requests.
- Fallback: if blob is not configured or empty, the UI uses `data.js` images.

#### Troubleshooting

- Token missing or invalid -> check `.env.local`.
- Images not loading -> verify filenames match `{project-slug}-{number}`.
- API check -> open `http://localhost:3000/api/projects/images`.

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

Last updated: February 11, 2026
