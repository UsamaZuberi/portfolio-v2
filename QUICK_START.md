# Quick Start Guide

Get your Next.js portfolio up and running in minutes!

## Prerequisites

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **Yarn** 4.0 or higher (installed via Corepack)

## Installation Steps

### 1. Enable Corepack (One-time setup)

```bash
corepack enable
```

### 2. Install Dependencies

```bash
yarn install
```

This will:

- Install all required packages
- Set up Yarn 4.12.0 (specified in package.json)
- Create node_modules directory

### 3. Add Your Images (Optional)

**The site works perfectly with placeholder images!** You can skip this step and add real images later.

To add your own images:

```powershell
# Windows PowerShell - Add your images
Copy-Item -Path "your-profile-photo.jpg" -Destination "public\images\"
Copy-Item -Path "your-resume.pdf" -Destination "public\resume\"
```

```bash
# macOS/Linux
cp your-profile-photo.jpg public/images/
cp your-resume.pdf public/resume/
```

Then update the image paths in:

- `components/sections/HeroSection.tsx` (profile image)
- `components/sections/PortfolioSection.tsx` (project logos)

See `docs/IMAGE_GUIDE.md` for detailed instructions.

### 4. Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## Available Commands

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `yarn dev`        | Start development server (with hot reload) |
| `yarn build`      | Build optimized production bundle          |
| `yarn start`      | Start production server                    |
| `yarn lint`       | Run ESLint to check code quality           |
| `yarn lint:fix`   | Auto-fix ESLint issues                     |
| `yarn type-check` | Check TypeScript types                     |
| `yarn format`     | Format code with Prettier                  |

## Project Structure

```
Portfolio/
├── app/                      # Next.js App Router
│   ├── api/contact/         # Contact form API endpoint
│   ├── layout.tsx           # Root layout (fonts, metadata)
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Hero, Portfolio, Contact
│   └── ui/                  # Reusable components
├── public/                  # Static files
│   ├── images/              # Project images
│   └── resume/                  # Resume PDF files
├── types/                   # TypeScript definitions
└── package.json             # Dependencies & scripts
```

## Customization Checklist

- [ ] Update personal info in `components/sections/HeroSection.tsx`
- [ ] Add your projects to `components/sections/PortfolioSection.tsx`
- [ ] Update contact email in `components/sections/ContactSection.tsx`
- [ ] Add social links in `components/layout/Footer.tsx`
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Add your images to `public/images/`
- [ ] Add your Resume to `public/resume/`

## Technology Stack

- ⚡ **Next.js 15.1.3** - React framework with App Router
- ⚛️ **React 19** - Latest React with new features
- 📘 **TypeScript 5.7.2** - Type safety
- 🎨 **Tailwind CSS 3.4.17** - Utility-first CSS
- 📦 **Yarn 4.12.0** - Fast, reliable package manager
- ✨ **Prettier 3.4.2** - Code formatting
- 🔍 **ESLint 9.18.0** - Code linting

## Troubleshooting

### Port already in use

```bash
# Kill the process using port 3000
yarn dev --port 3001
```

### Module not found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
yarn install
```

### Type errors

```bash
# Check all TypeScript errors
yarn type-check
```

### Styling issues

Make sure Tailwind is working:

1. Check `tailwind.config.ts` paths include all component files
2. Verify `globals.css` imports Tailwind directives
3. Restart dev server

## Next Steps

1. **Deploy** - Push to GitHub and deploy on [Vercel](https://vercel.com)
2. **Customize** - Update colors, fonts, and content
3. **Add Pages** - Create additional pages in `app/` directory
4. **Analytics** - Add analytics tracking
5. **SEO** - Optimize metadata in `app/layout.tsx`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Yarn Documentation](https://yarnpkg.com/)
- [Full Migration Guide](./MIGRATION.md)

---

**Need Help?** Check the [README.md](./README.md) for detailed documentation or [MIGRATION.md](./MIGRATION.md) for migration details.
