# portfolio-v2 - Next.js 15

A modern, fully responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 15** with App Router & React 19
- 🎨 **Tailwind CSS** with dark mode and theme persistence
- 📘 **TypeScript** for full type safety
- 🧭 **Reusable UI** components and section-based architecture
- 🖼️ **Project galleries** with lightbox modal viewer
- 📄 **Resume preview** modal
- 🔗 **Live preview links** for projects (optional `allowLinkPreview` flag)
- 📱 **Contact form** with Formspree integration
- 🔙 **Previous portfolio** link in contact section
- 🎬 **Staggered animations** on scroll
- 📸 **Vercel Blob** integration for project images

## 📋 Prerequisites

- Node.js 20.16 or higher
- Yarn 4.0 or higher (recommended)

## 🛠️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. Install dependencies:

```bash
yarn install
```

3. Create `.env.local` file in root directory:

```bash
# Vercel Blob Storage (for project images)
portfolio_v2_images_READ_WRITE_TOKEN=your-vercel-blob-token

# Portfolio data JSON (required)
NEXT_PUBLIC_PORTFOLIO_DATA_BLOB_URL=https://<your-id>.public.blob.vercel-storage.com/portfolio-data.json

# Optional: custom API base URL (defaults to /api)
# NEXT_PUBLIC_API_URL=https://your-api.example.com
```

4. Get your Vercel Blob token:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Storage → Blob
   - Create a blob store named `portfolio-v2-images`
   - Copy the token to `.env.local`

5. Run development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-v2/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── projects/         # Project image APIs
│   │   └── contact/          # Contact form API
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── layout/               # Layout wrappers
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...more sections
│   ├── ui/                   # Reusable UI components
│   │   ├── ProjectCard.tsx   # Project display cards
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...more components
│   └── providers/            # Context providers
│       └── ThemeProvider.tsx
├── lib/                      # Utility functions
│   ├── api.ts                # HTTP request utilities
│   ├── config.ts             # Configuration constants
│   ├── constants.ts          # App constants
│   ├── utils.ts              # Helper functions
│   ├── hooks/                # Custom React hooks
│   │   ├── useApi.ts
│   │   ├── useProjectImages.ts
│   │   └── useInteractions.ts
│   └── services.ts           # Business logic
├── types/                    # TypeScript type definitions
│   └── index.ts
├── public/                   # Static assets
│   ├── images/               # Images & placeholders
│   └── resume/               # Resume files
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind styling
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## 📝 How to Use & Customize

### Update Portfolio Content

Portfolio data comes from two sources:

**Option 1: Vercel Blob (Recommended)**

1. Create a JSON file matching the `PortfolioDataStructure` type
2. Upload to Vercel Blob with public access
3. Set `NEXT_PUBLIC_PORTFOLIO_DATA_BLOB_URL` in `.env.local`

**Option 2: Local Data**

- Edit [data.js](data.js) directly in the project

### Adding Project Images

Images use the naming convention: `{project-slug}-{number}.{ext}`

Examples: `7-star-training-1.png`, `pixtool-1.png`, `project-name-2.jpg`

**Via Vercel Dashboard:**

1. Go to Storage → Blob → `portfolio-v2-images`
2. Upload images using the naming convention
3. The slug must match your portfolio JSON `slug` field

**Via Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel blob upload ./my-project-1.png --token=your-token
```

**Programmatically:**

```javascript
import { put } from '@vercel/blob';

const blob = await put('project-name-1.png', file, {
  access: 'public',
  token: process.env.portfolio_v2_images_READ_WRITE_TOKEN,
});
```

**How It Works:**

- API routes automatically fetch images grouped by project slug
- Images are cached and deduplicated via `useProjectImages()` hook
- Loading placeholders shown if Blob is unconfigured

**Troubleshooting Images:**

- Token missing/invalid? Check `.env.local`
- Images not loading? Verify naming: `{slug}-{number}.ext`
- Test API: Visit `http://localhost:3000/api/projects/images`

### Customize Styling

**Theme Colors**

- Edit [tailwind.config.ts](tailwind.config.ts) to change primary/secondary/accent colors
- Theme is persisted to localStorage automatically

**Fonts**

- Modify font imports in [app/layout.tsx](app/layout.tsx)
- Uses system variables defined in Tailwind config

**Animations**

- Add custom animations in [app/globals.css](app/globals.css)
- Cards have staggered fade-in animations on load

### Using Local Images (Optional)

Replace the default placeholder images:

- Profile image: `/public/images/placeholder-profile.svg`
- Project logos: `/public/images/placeholder-project.svg`

Then update references in:

- [components/sections/HeroSection.tsx](components/sections/HeroSection.tsx)
- [components/sections/PortfolioSection.tsx](components/sections/PortfolioSection.tsx)

### Special Portfolio Fields

**`allowLinkPreview` (optional)**

- Add to project object: `allowLinkPreview: true`
- Shows "Live Preview" button on project cards
- Opens project link in new tab

**`previousPortfolio` (optional)**

- Add to contact object: `previousPortfolio: "https://old-portfolio.com"`
- Displays as a card in the Contact section
- Links to your previous portfolio website

## 🎨 Theme & Dark Mode

- Theme preference stored in localStorage
- Toggle button in Header automatically switches light/dark modes
- All components have dark mode support via Tailwind classes (`dark:`)
- Provider located in [components/providers/ThemeProvider.tsx](components/providers/ThemeProvider.tsx)

## 🔧 API & Utilities

**Fetch Utilities** ([lib/api.ts](lib/api.ts))

- Pre-configured HTTP client with timeout handling
- Default base URL: `/api` (use `NEXT_PUBLIC_API_URL` to override)
- Supports GET, POST, PUT, PATCH, DELETE operations
- Built-in error handling and type safety

**Hooks** ([lib/hooks/](lib/hooks/))

- `usePortfolioData()` - Fetch portfolio data with SWR caching
- `useProjectImages()` - Fetch & cache project images
- `useInteractions()` - Track user interactions
- `useApi()` - Generic API hook with loading/error states

## 📦 Available Scripts

| Script            | Purpose                              |
| ----------------- | ------------------------------------ |
| `yarn dev`        | Start development server (port 3000) |
| `yarn build`      | Create optimized production build    |
| `yarn start`      | Run production server                |
| `yarn lint`       | Run ESLint checks                    |
| `yarn type-check` | Run TypeScript type checking         |
| `yarn format`     | Format code (if Prettier configured) |

## 🌐 Deployment

### Vercel (Recommended - One Click)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys
4. Environment variables automatically synced

### Other Platforms

1. Build project:

```bash
yarn build
```

2. Deploy the `.next` folder to your hosting provider

3. Ensure environment variables are set on the platform

### Environment Variables for Production

Set these on your hosting platform:

- `portfolio_v2_images_READ_WRITE_TOKEN` - Vercel Blob token
- `NEXT_PUBLIC_PORTFOLIO_DATA_BLOB_URL` - Portfolio data Blob URL
- `NEXT_PUBLIC_API_URL` (optional) - Custom API URL

## 🐛 Troubleshooting

| Issue                    | Solution                                                          |
| ------------------------ | ----------------------------------------------------------------- |
| **Type errors**          | Run `yarn type-check` to find issues                              |
| **Images not loading**   | Check naming: `{slug}-{number}.ext`, verify token in `.env.local` |
| **Blob not configured**  | Set `portfolio_v2_images_READ_WRITE_TOKEN` in `.env.local`        |
| **Styles not updating**  | Restart dev server with `yarn dev`                                |
| **API errors**           | Check base URL, verify routes exist in `/api` directory           |
| **Theme not persisting** | Check localStorage in browser dev tools                           |

## 📚 Key Files Reference

- **Types**: [types/index.ts](types/index.ts) - All TypeScript interfaces
- **Config**: [lib/config.ts](lib/config.ts) - API endpoints, constants
- **Constants**: [lib/constants.ts](lib/constants.ts) - Reusable constants
- **Services**: [lib/services.ts](lib/services.ts) - Business logic
- **Theme**: [components/providers/ThemeProvider.tsx](components/providers/ThemeProvider.tsx) - Dark mode

## 📄 License

MIT License - feel free to use this portfolio template!

## 👤 Author

**Muhammad Usama Zuberi**

---

**Last Updated:** February 11, 2026

- GitHub: [@usamazuberi](https://github.com/usamazuberi)
