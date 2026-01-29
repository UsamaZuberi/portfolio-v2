# Quick Reference: Upload Images to Vercel Blob

## Step 1: Get Your Token

```bash
# Already in your .env.local
portfolio_v2_images_READ_WRITE_TOKEN=vercel_blob_...
```

## Step 2: Name Your Images

Images must follow the naming convention:

```
{project-slug}-{number}.{extension}
```

Examples:

```
7-star-training-1.png
7-star-training-2.png
pixtool-1.png
ehj-and-sj-consultancy-1.png
natours-1.jpg
```

> **Important:** The slug must match the `slug` field in [data.js](data.js)

## Step 3: Upload via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project → Storage → Blob
3. Click on `portfolio-v2-images`
4. Upload images with folder structure

## Step 4: Verify

Visit your local site:

```bash
yarn dev
```

Then check: http://localhost:3000/api/projects/images

You should see:

```json
{
  "images": {
    "7-star-training": ["https://...png", "https://...png"],
    "pixtool": ["https://...png"],
    "ehj-and-sj-consultancy": ["https://...png"]
  },
  "projectCount": 3
}
```

## Project ID Reference

| Project Title        | Folder Name          |
| -------------------- | -------------------- |
| Pixtool              | `pixtool`            |
| 7 Star Training      | `7-star-training`    |
| Natours              | `natours`            |
| Trillo               | `trillo`             |
| Nexter               | `nexter`             |
| Eberhard Capital     | `eberhard-capital`   |
| EHJ & SJ Consultancy | `ehj-sj-consultancy` |
| Novospace            | `novospace`          |
| Cylinder             | `cylinder`           |

## Troubleshooting

**Images not showing?**

- Check folder names match project IDs exactly (lowercase, hyphens)
- Verify token in `.env.local`
- Restart dev server after adding token

**Need to add more images?**

- Just upload to Vercel Blob - no code changes needed
- Changes appear immediately (no rebuild required)
