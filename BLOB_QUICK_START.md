# Vercel Blob: Quick Start

## 1) Add your token

```bash
portfolio_v2_images_READ_WRITE_TOKEN=vercel_blob_...
```

## 2) Name images

```
{project-slug}-{number}.{extension}
```

Example: `pixtool-1.png`

> The slug must match the `slug` field in [data.js](data.js)

## 3) Upload via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Storage → Blob → `portfolio-v2-images`
3. Upload images

## 4) Verify

Check: http://localhost:3000/api/projects/images

## Need more details?

See [BLOB_SETUP.md](BLOB_SETUP.md).
