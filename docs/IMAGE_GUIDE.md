# Image Guide

## Current Status

The portfolio uses **SVG placeholder images** by default to ensure the site works even without actual images.

## Placeholder Images

Located in `public/images/`:

- `placeholder-profile.svg` - For your profile/hero image (800x800 gradient)
- `placeholder-project.svg` - For portfolio project logos (600x400 gradient)

## Adding Your Own Images

### Profile Image

1. Add your photo to `public/images/` (e.g., `profile.jpg`)
2. Update `components/sections/HeroSection.tsx`:

```tsx
<Image
  src="/images/profile.jpg" // Change this line
  alt="Muhammad Usama Zuberi - Front-end Web Developer"
  fill
  priority
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**Recommended specs:**

- Format: JPG, PNG, or WebP
- Size: 800x800px (square)
- File size: Under 500KB
- Quality: High resolution

### Portfolio Project Images

1. Add project logos/screenshots to `public/images/`
2. Update `components/sections/PortfolioSection.tsx`:

```tsx
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Pixtool',
    description: '...',
    logo: '/images/pixtool-logo.png', // Update this
    link: '...',
    tags: ['React', 'SaaS'],
    featured: true,
  },
  // ... other projects
];
```

**Recommended specs:**

- Format: PNG (with transparency) or SVG
- Size: 400x300px or similar aspect ratio
- File size: Under 200KB per image
- Background: Transparent or solid color

## Automatic Fallback

The `PortfolioCard` component automatically falls back to placeholder if:

- Image path is empty
- Image file doesn't exist
- Image fails to load

This is handled by the `onError` handler in `components/ui/PortfolioCard.tsx`.

## Image Optimization

Next.js automatically optimizes images:

- ✅ Automatic WebP conversion
- ✅ Responsive image sizes
- ✅ Lazy loading (except priority images)
- ✅ Blur placeholder (optional)

### Adding Blur Placeholder

```tsx
<Image
  src="/images/your-image.jpg"
  alt="Description"
  fill
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generate this
/>
```

## Best Practices

1. **Use WebP format** when possible for better compression
2. **Optimize before upload** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)
3. **Use consistent naming**:
   - Profile: `profile.jpg`, `hero.jpg`
   - Projects: `project-name-logo.png`
4. **Keep it organized** in `public/images/`

## Testing Images

After adding images, test locally:

```bash
yarn dev
```

Visit http://localhost:3000 and verify:

- Images load correctly
- No console errors
- Images are responsive on mobile
- Alt text is descriptive

## Troubleshooting

### Image not showing

1. Check the path starts with `/images/` (leading slash)
2. Verify file exists in `public/images/`
3. Check browser console for errors
4. Clear Next.js cache: `rm -rf .next && yarn dev`

### Image quality is poor

1. Use higher resolution source image
2. Check if Next.js is optimizing too aggressively
3. Adjust quality in `next.config.ts`:

```typescript
images: {
  quality: 90,  // Default is 75
}
```

### Images loading slowly

1. Reduce file size before upload
2. Use modern formats (WebP, AVIF)
3. Add `priority` prop for above-the-fold images
4. Consider using CDN for large assets
