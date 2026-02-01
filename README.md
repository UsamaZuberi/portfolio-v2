# portfolio-v2 - Next.js 15

A modern, fully responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** styling with dark mode
- 📘 **TypeScript** for type safety
- 🧭 **Reusable UI** components and sections
- 🖼️ **Project galleries** with modal viewer
- 📄 **Resume preview** modal
- 📱 **Social share** and contact form

## 📋 Prerequisites

- Node.js 20.16 or higher
- Yarn 4.0 or higher (recommended package manager)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```bash
# Vercel Blob Storage (for project images)
portfolio_v2_images_READ_WRITE_TOKEN=your-vercel-blob-token

# Optional: use a custom API base URL (defaults to /api)
# NEXT_PUBLIC_API_URL=https://your-api.example.com
```

To get your Vercel Blob token:

- Go to your Vercel dashboard
- Navigate to Storage → Blob
- Create a new blob store named `portfolio-v2-images`
- Copy the token and add it to `.env.local`

4. Run the development server:

```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-v2/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form API
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── layout/               # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                   # Reusable UI components
│       ├── Button.tsx
│       ├── PortfolioCard.tsx
│       ├── SectionHeading.tsx
│       └── ScrollToTop.tsx
├── lib/                      # Utility functions
│   ├── utils.ts              # Helper functions
│   └── constants.ts          # App constants
├── types/                    # TypeScript type definitions
│   └── index.ts
├── public/                   # Static assets
│   ├── images/               # Images & placeholders
│   └── resume/                   # Resume files
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit components/sections/HeroSection.tsx
2. **Portfolio Items**: Update the projects array in data.js
3. **Contact Info**: Modify the contact object in data.js
4. **Social Links**: Update socialLinks in the contact section of data.js

### Add Project Images to Vercel Blob

The portfolio uses Vercel Blob storage for project screenshots. To add images:

1. **Via Vercel Dashboard**:
   - Go to Storage → Blob → portfolio-v2-images
   - Upload images with naming convention: `{project-slug}-{number}.ext`
   - Examples: `7-star-training-1.png`, `pixtool-1.png`, `ehj-and-sj-consultancy-1.png`
   - The slug must match the `slug` field in [data.js](data.js)

2. **Via Vercel CLI**:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Upload images with proper naming
vercel blob upload ./7-star-training-1.png --token=your-token
vercel blob upload ./pixtool-1.png --token=your-token
```

3. **Automatic Integration**:
   - Images are automatically fetched from Vercel Blob
   - Falls back to local images from [data.js](data.js) if blob is not configured
   - See [BLOB_SETUP.md](BLOB_SETUP.md) or [BLOB_QUICK_START.md](BLOB_QUICK_START.md)

### Customize Styling

- **Colors**: Edit tailwind.config.ts to change the color scheme
- **Fonts**: Modify font imports in app/layout.tsx
- **Animations**: Add custom animations in app/globals.css

### Local Images (Optional)

- Profile image: replace `/images/placeholder-profile.svg`
- Project logos: replace `/images/placeholder-project.svg` or add new files
- Update paths in `components/sections/HeroSection.tsx` and `components/sections/PortfolioSection.tsx`

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking
- `yarn format` - Format code with Prettier

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project:

```bash
yarn build
```

Then deploy the .next folder to your hosting provider.

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Muhammad Usama Zuberi**

- GitHub: [@usamazuberi](https://github.com/usamazuberi)
