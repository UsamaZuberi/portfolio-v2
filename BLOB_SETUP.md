# Vercel Blob Integration Guide

## Overview

This portfolio uses **Vercel Blob Storage** to host project screenshots and gallery images. The blob store is named `portfolio-v2-images`.

## Setup

### 1. Environment Configuration

Add the following to your `.env.local`:

```bash
portfolio_v2_images_READ_WRITE_TOKEN=your-vercel-blob-token
```

### 2. Getting Your Blob Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** → **Blob**
3. Create a new blob store named `portfolio-v2-images`
4. Copy the `portfolio_v2_images_READ_WRITE_TOKEN`
5. Add it to your `.env.local` file

## Image Naming Convention

Images must follow a specific naming pattern to be automatically matched with projects:

```
{project-slug}-{number}.{extension}
```

**Examples:**

- `7-star-training-1.png`
- `7-star-training-2.jpg`
- `pixtool-1.png`
- `ehj-and-sj-consultancy-1.png`

The system will:

1. Match images to projects using the `slug` field from [data.js](data.js)
2. Sort images numerically (1, 2, 3, etc.)
3. Display them in order in the project gallery

## Uploading Images

### Method 1: Vercel Dashboard

1. Go to Storage → Blob → portfolio-v2-images
2. Click **Upload**
3. Create folders matching your project IDs
4. Upload images to respective folders

### Method 2: Vercel CLI

```bash
# Install CLI
npm install -g vercel

# Login
vercel login

# Link your project
vercel link

# Upload an image
vercel blob upload ./screenshot.png --token=$portfolio_v2_images_READ_WRITE_TOKEN
```

### Method 3: Programmatically (Node.js)

```javascript
import { put } from '@vercel/blob';

const blob = await put('pixtool/screenshot1.png', file, {
  access: 'public',
  token: process.env.portfolio_v2_images_READ_WRITE_TOKEN,
});

console.log(blob.url);
```

## How It Works

### 1. API Routes

- **`/api/projects/images`** - Fetches all project images grouped by project ID
- **`/api/projects/[projectId]/images`** - Fetches images for a specific project

### 2. React Hook

```typescript
import { useProjectImages } from '@/lib/hooks/useProjectImages';

function MyComponent() {
  const { images, loading, error } = useProjectImages();

  // images = { 'pixtool': ['url1', 'url2'], 'natours': ['url3'] }
}
```

### 3. Automatic Fallback

If blob images aren't available (no token or no images uploaded), the portfolio falls back to the `images` array defined in `data.js`.

## Project ID Mapping

Make sure your blob folder names match the project IDs in `data.js`:

| Project Title        | Project ID (Folder Name) |
| -------------------- | ------------------------ |
| Pixtool              | `pixtool`                |
| Natours              | `natours`                |
| Trillo               | `trillo`                 |
| Nexter               | `nexter`                 |
| Eberhard Capital     | `eberhard-capital`       |
| EHJ & SJ Consultancy | `ehj-sj-consultancy`     |
| Novospace            | `novospace`              |
| Cylinder             | `cylinder`               |
| 7 Star Training      | `7-star-training`        |

## Architecture

```
┌─────────────────┐
│  PortfolioSection│
│   Component      │
└────────┬─────────┘
         │
         │ useProjectImages()
         │
         ▼
┌─────────────────────┐
│ /api/projects/images│
│    API Route         │
└────────┬────────────┘
         │
         │ getAllProjectImages()
         │
         ▼
┌─────────────────┐
│  Vercel Blob    │
│  Storage API    │
└─────────────────┘
```

## Benefits

- ✅ **Centralized Storage**: All images in one place
- ✅ **CDN Delivery**: Fast global image loading via Vercel's CDN
- ✅ **Easy Updates**: Upload new images without redeploying
- ✅ **Version Control**: Keep images out of git repository
- ✅ **Automatic Optimization**: Images served optimally via Next.js Image component

## Troubleshooting

### Images Not Loading

1. **Check Token**: Ensure `portfolio_v2_images_READ_WRITE_TOKEN` is set correctly
2. **Check Folder Names**: Must match project IDs exactly (case-sensitive)
3. **Check API Response**: Visit `/api/projects/images` to see what's returned
4. **Check Console**: Look for errors in browser DevTools

### Slow Loading

- Images are cached after first load
- Consider using smaller image sizes (recommended: max 2000px width)
- Use WebP format for better compression

### Development vs Production

- Development: Uses `.env.local`
- Production: Set `portfolio_v2_images_READ_WRITE_TOKEN` in Vercel project settings
  - Go to Project Settings → Environment Variables
  - Add `portfolio_v2_images_READ_WRITE_TOKEN` for Production, Preview, and Development

## Best Practices

1. **Image Formats**: Use WebP or PNG for screenshots
2. **Image Sizes**: Keep under 500KB per image for fast loading
3. **Naming**: Use descriptive names: `home-page.png`, `dashboard.png`
4. **Folders**: Always use lowercase project IDs as folder names
5. **Alt Text**: Automatically generated as `{Project Title} - Screenshot {index}`

## Cost Considerations

Vercel Blob pricing (as of 2026):

- **Free Tier**: 1 GB storage, 100 GB bandwidth
- **Pro Tier**: 100 GB storage, 1 TB bandwidth included
- **Enterprise**: Custom limits

For a typical portfolio with ~10 projects and 3-5 screenshots each (2 MB avg), you'll use ~50-100 MB of storage, well within free tier limits.
