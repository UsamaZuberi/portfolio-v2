# Portfolio - Next.js 15

A modern, fully responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS with dark mode support, image galleries, resume preview, and social sharing.

## 🚀 Features

### Core Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling with custom color palette
- 📘 **TypeScript** for type safety
- 🧶 **Yarn 4** (Berry) as package manager
- ♿ **Accessibility** features (WCAG 2.1 AA compliant)
- 🎭 **Smooth animations** and transitions
- 📱 **Fully responsive** design
- 🌐 **SEO optimized** with meta tags
- 🎯 **Performance optimized** with Next.js Image component

### New Features ✨

- 🌓 **Dark/Light Mode Toggle** with localStorage persistence
- 🖼️ **Image Gallery Modal** with keyboard navigation
- 📄 **Resume Preview Modal** with PDF viewer
- 📱 **Social Share Buttons** (Twitter, LinkedIn, Facebook, WhatsApp, Email, Copy Link)
- 🎴 **Enhanced Portfolio Cards** with multiple screenshots
- 📧 **Contact Form** with validation and dark mode support

## 🎨 Color Scheme

**Light Mode:**

- Primary: Blue (600-700)
- Secondary: Purple/Fuchsia (600-700)
- Accent: Emerald/Green (600-700)
- Background: White, Gray-50, Gray-100
- Text: Gray-900, Gray-700, Gray-600

**Dark Mode:**

- Primary: Blue (500-400)
- Secondary: Purple/Fuchsia (500-400)
- Accent: Emerald/Green (500-400)
- Background: Gray-900, Gray-800, Gray-950
- Text: White, Gray-100, Gray-300

## 📋 Prerequisites

- Node.js 18.0 or higher
- Yarn 4.0 or higher (recommended package manager)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Portfolio/
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
2. **Portfolio Items**: Update the portfolioItems array in components/sections/PortfolioSection.tsx
3. **Contact Info**: Modify components/sections/ContactSection.tsx
4. **Social Links**: Update socialLinks in components/layout/Footer.tsx

### Customize Styling

- **Colors**: Edit tailwind.config.ts to change the color scheme
- **Fonts**: Modify font imports in app/layout.tsx
- **Animations**: Add custom animations in app/globals.css

### Add Images

The project includes placeholder images by default. To add your own:

1. **Profile Image**: Replace `/images/placeholder-profile.svg` with your photo (recommended: 800x800px)
2. **Project Logos**: Replace `/images/placeholder-project.svg` or add individual project images
3. **Update paths** in `components/sections/HeroSection.tsx` and `components/sections/PortfolioSection.tsx`

```typescript
// Example: Update in PortfolioSection.tsx
logo: '/images/your-project-logo.png';
```

All images automatically use placeholders if the file is missing, ensuring the site always works.

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking
- `yarn format` - Format code with Prettier

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader announcements
- Skip to main content link
- High contrast colors
- Responsive text sizing

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

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
