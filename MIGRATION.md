# Migration Guide - React to Next.js

## Overview

This document provides instructions for completing the migration from Create React App to Next.js 15.

## Completed Steps ✅

1. ✅ Created Next.js configuration files (next.config.ts, tsconfig.json)
2. ✅ Set up Tailwind CSS configuration
3. ✅ Created TypeScript type definitions
4. ✅ Built all UI components with accessibility features
5. ✅ Converted all sections to Next.js components
6. ✅ Created API route for contact form
7. ✅ Set up app router structure (layout.tsx, page.tsx)
8. ✅ Updated package.json with Next.js dependencies
9. ✅ Created comprehensive README

## Next Steps to Complete Migration 🚀

### 1. Install Dependencies

```bash
# Remove old dependencies
rm -rf node_modules package-lock.json yarn.lock

# Install new Next.js dependencies with Yarn
yarn install
```

### 2. Copy Assets

Move your existing assets to the public directory:

```bash
# Copy images
cp -r src/assets/images/* public/images/

# Copy Resume files
cp -r src/assets/resume/* public/resume/
```

Or on Windows:

```powershell
Copy-Item -Path "src\assets\images\*" -Destination "public\images\" -Recurse
Copy-Item -Path "src\assets\resume\*" -Destination "public\resume\" -Recurse
```

### 3. Run Development Server

```bash
yarn dev
```

Visit http://localhost:3000 to see your new Next.js portfolio!

### 4. Clean Up Old Files (Optional)

Once you've verified everything works, you can remove the old React files:

```bash
# Remove old src directory
rm -rf src/

# Remove old public files
rm public/index.html public/manifest.json public/robots.txt

# Remove old config files
rm firebase.json
```

## Component Structure 📁

### Reusable UI Components (`components/ui/`)

- **Button.tsx** - Accessible button with multiple variants
- **PortfolioCard.tsx** - Card for displaying portfolio projects
- **SectionHeading.tsx** - Consistent section headings
- **ScrollToTop.tsx** - Scroll to top functionality

### Layout Components (`components/layout/`)

- **Header.tsx** - Responsive navigation with mobile menu
- **Footer.tsx** - Footer with social links

### Section Components (`components/sections/`)

- **HeroSection.tsx** - Hero banner with introduction
- **PortfolioSection.tsx** - Portfolio projects showcase
- **ContactSection.tsx** - Contact form with validation

## Accessibility Features ♿

All components include:

- ✅ Semantic HTML elements (header, nav, main, section, footer, article)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management and visible focus indicators
- ✅ Screen reader announcements
- ✅ Skip to main content link
- ✅ Form validation with error messages
- ✅ Alt text for images
- ✅ Proper heading hierarchy

## Customization Guide 🎨

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
}
```

### Update Personal Info

1. **Hero Section**: Edit `components/sections/HeroSection.tsx`
   - Update name, title, bio
   - Change tech stack

2. **Portfolio Items**: Edit `components/sections/PortfolioSection.tsx`
   - Update the `portfolioItems` array
   - Add/remove projects

3. **Contact Info**: Edit `components/sections/ContactSection.tsx`
   - Update email address
   - Modify contact methods

4. **Social Links**: Edit `components/layout/Footer.tsx`
   - Update social media URLs
   - Add/remove platforms

### Add New Pages

1. Create a new directory in `app/`:

```
app/
  about/
    page.tsx
```

2. Add navigation link in `components/layout/Header.tsx`

## Performance Optimizations 🚀

The new setup includes:

- ✅ Next.js Image component for automatic image optimization
- ✅ Font optimization with next/font
- ✅ Automatic code splitting
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ API routes for backend functionality

## Deployment 🌐

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Other Platforms

```bash
yarn build
yarn start
```

## Troubleshooting 🔧

### Issue: Images not loading

- Ensure images are in `public/images/` directory
- Use `/images/filename.png` (leading slash)

### Issue: TypeScript errors

- Run `yarn type-check` to see all errors
- Check that all imports are correct

### Issue: Styles not applying

- Verify Tailwind CSS is configured correctly
- Check that `globals.css` is imported in `layout.tsx`

## Key Differences from Old Setup 📊

| Feature    | Old (CRA)        | New (Next.js)           |
| ---------- | ---------------- | ----------------------- |
| Styling    | SCSS             | Tailwind CSS            |
| Language   | JavaScript       | TypeScript              |
| Routing    | React Router     | Next.js App Router      |
| Images     | Regular img tags | Next.js Image component |
| API        | External backend | Next.js API routes      |
| Build      | React Scripts    | Next.js                 |
| Deployment | Static hosting   | Vercel/Edge             |

## Resources 📚

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Support 💬

If you encounter any issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review error messages carefully
3. Check browser console for client-side errors
4. Check terminal for server-side errors

Good luck with your new Next.js portfolio! 🎉
