# Portfolio Project Documentation

## Overview

This is a modern, fully documented portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. The project follows best practices for code organization, type safety, and component reusability.

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── components/                  # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Page footer
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx     # Landing section with intro
│   │   ├── SkillsSection.tsx   # Technical skills display
│   │   ├── ExperienceSection.tsx # Work experience timeline
│   │   ├── EducationSection.tsx # Education & learning
│   │   ├── PortfolioSection.tsx # Featured & all projects
│   │   └── ContactSection.tsx  # Contact form & info
│   ├── providers/              # Context providers
│   │   └── ThemeProvider.tsx   # Dark mode provider
│   └── ui/                     # Reusable UI components
│       ├── Button.tsx          # Flexible button component
│       ├── ProjectCard.tsx     # Project card component
│       ├── SectionHeading.tsx  # Section titles
│       ├── ImageGalleryModal.tsx # Image viewer modal
│       ├── ResumePreviewModal.tsx # Resume viewer modal
│       ├── ThemeToggle.tsx     # Dark mode toggle
│       ├── ScrollToTop.tsx     # Scroll button
│       └── SocialShare.tsx     # Social sharing
├── lib/                        # Utilities and helpers
│   ├── api.ts                 # API integration
│   ├── config.ts              # Configuration
│   ├── constants.ts           # App-wide constants
│   ├── services.ts            # Business logic
│   ├── utils.ts               # Helper functions
│   ├── hooks/                 # Custom React hooks
│   │   └── useInteractions.ts # Scroll, observer, modal hooks
│   └── validations/           # Input validation
├── types/                     # TypeScript type definitions
│   └── index.ts              # All type interfaces
├── public/                    # Static assets
│   ├── images/               # Image files
│   └── resume/               # Resume PDF
├── data.js                    # Centralized data source (NO DATABASE)
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS theme
└── package.json              # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >=18.0.0
- Yarn 4.12.0 or npm

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Type check
yarn type-check

# Lint code
yarn lint
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Data Management

### Single Source of Truth: `data.js`

All portfolio content is managed in a single **`data.js`** file. This centralized approach means:

✅ **Easy Updates**: Change content in one place  
✅ **Type Safety**: TypeScript validates data structure  
✅ **No Database**: Completely client-side, no backend needed  
✅ **Performance**: Lightweight data loading

### Data Structure

```javascript
export const portfolioData = {
  hero: {...},           // Name, designation, stats, resume link
  skills: {...},         // Skill categories and highlights
  experience: [...],     // Work history and achievements
  education: [...],      # Degrees and qualifications
  continuousLearning: [], # Courses and certifications
  projects: [...],       # Portfolio projects
  contact: {...},        # Contact info and form config
}
```

---

## 🏗️ Architecture & Patterns

### Component Structure

#### Section Components

Each main section follows a consistent pattern:

```tsx
/**
 * [SectionName]Component
 *
 * Description of what this section displays
 * Key features and functionality
 *
 * @component
 * @returns {React.ReactElement} Description
 */

'use client'; // Next.js client component

import React from 'react';
import { portfolioData } from '@/data';

const [SectionName]Component: React.FC = () => {
  // Get data from centralized source
  const sectionData = portfolioData.[section];

  // Handlers and state
  // ...

  return (
    <section id="[section-id]" role="region" aria-label="...">
      {/* Content */}
    </section>
  );
};

export default [SectionName]Component;
```

#### UI Components

Small, reusable components with clear props:

```tsx
interface ComponentProps {
  /** Property description */
  propName: Type;
}

const Component: React.FC<ComponentProps> = ({ propName }) => {
  // Component logic
};
```

### Custom Hooks

#### `useScrollToSection()`

Smooth scroll to sections by ID.

```tsx
const scrollToSection = useScrollToSection();
scrollToSection('#portfolio'); // Scrolls to portfolio section
```

#### `useIntersectionObserver()`

Scroll-triggered animations and lazy loading.

```tsx
const ref = useIntersectionObserver((isVisible) => setVisible(isVisible), { threshold: 0.5 });

return <div ref={ref}>{isVisible && <Content />}</div>;
```

#### `useModal()`

Modal state management.

```tsx
const { isOpen, open, close, toggle } = useModal();

return (
  <>
    <button onClick={open}>Open</button>
    {isOpen && <Modal onClose={close} />}
  </>
);
```

### Constants & Configuration

All magic values are in **`lib/constants.ts`**:

```typescript
export const ANIMATION = {
  DURATIONS: { FAST: '200ms', NORMAL: '300ms', SLOW: '500ms' },
  EASING: { EASE_OUT: 'ease-out', EASE_IN: 'ease-in' },
  SECTION_STAGGER: 0.1,
};

export const TRANSITIONS = {
  BASE: 'transition-all duration-300',
  FAST: 'transition-all duration-200',
  SLOW: 'transition-all duration-500',
};

export const SIZES = {
  CONTAINER: 'max-w-7xl',
  BREAKPOINTS: { SM: 640, MD: 768, LG: 1024, XL: 1280 },
};
```

---

## 📝 Type Safety

### TypeScript Configuration

- **Strict Mode**: Enabled for maximum safety
- **Full Coverage**: All files include proper types
- **Path Aliases**: `@/` for clean imports

### Key Types

```typescript
// Button props
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// Project item
interface ProjectItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  isFeatured?: boolean;
  skills: string[];
}

// Education entry
interface EducationItem {
  title: string;
  major: string;
  institution: string;
  summary: string;
  status: 'completed' | 'in-progress';
}
```

---

## 🎨 Styling

### Tailwind CSS

- **Custom Colors**: Primary, secondary, accent colors in `tailwind.config.ts`
- **Dark Mode**: Fully supported with `dark:` prefix utilities
- **Responsive**: Mobile-first design with breakpoints

### Animation System

Consistent animations defined in constants:

```typescript
// In components:
style={{ animation: 'fadeInUp 0.6s ease-out both' }}

// Staggered animations:
const delay = index * 0.1; // 0.1s between items
style={{ animation: `fadeInUp 0.6s ease-out ${delay}s both` }}
```

### CSS Keyframes

In `app/globals.css` and component `<style jsx>` blocks:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## ♿ Accessibility

### Standards Compliance

- **WCAG 2.1 AA**: Full keyboard navigation
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: All interactive elements labeled
- **Focus Management**: Clear focus indicators
- **Color Contrast**: Meets accessibility standards

### Implementation Examples

```tsx
// Semantic section with landmarks
<section id="portfolio" role="region" aria-label="Portfolio section">
  // ARIA labels on interactive elements
  <button aria-label="View project gallery">View Gallery</button>
  // Alt text on images
  <img src="project.jpg" alt="Project name description" />
</section>
```

---

## 🔧 Utilities

### Helper Functions

#### Image Management

```typescript
// Get placeholder image
getPlaceholderImage('project'); // '/images/placeholder-project.svg'

// Get image with fallback
getImageWithFallback(imagePath, 'project');
```

#### Formatting

```typescript
// Format file size
formatFileSize(1048576); // '1 MB'
```

#### Performance

```typescript
// Debounce expensive operations
const debouncedSearch = debounce((query) => {
  fetchResults(query);
}, 300);
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind)

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Mobile-First Approach

```tsx
// Default (mobile): Single column
// md: Two columns
// lg: Three columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## 🌓 Dark Mode

### Implementation

- Uses `next-themes` for theme management
- Stored in localStorage
- Applied via `dark:` Tailwind utilities
- Toggle button in header

### Usage

```tsx
// In components:
<div className="bg-white dark:bg-gray-800">
  <p className="text-gray-900 dark:text-white">Content</p>
</div>
```

---

## 🚢 Deployment

The portfolio is optimized for deployment to:

- **Vercel** (recommended - native Next.js support)
- **Netlify**
- **AWS Amplify**
- **Docker**

### Build & Deploy

```bash
# Production build
yarn build

# Test production build locally
yarn start

# Deploy (to Vercel)
vercel deploy
```

---

## 📋 Checklist for Adding Features

- [ ] Create component file with JSDoc comment block
- [ ] Add TypeScript interfaces in `types/index.ts`
- [ ] Add data to `data.js` if needed
- [ ] Use path aliases (`@/`) for imports
- [ ] Add ARIA labels for accessibility
- [ ] Test with keyboard navigation
- [ ] Test dark mode
- [ ] Test mobile responsiveness
- [ ] Add unit tests (optional)

---

## 🐛 Troubleshooting

### Type Errors

```bash
# Run type checker
yarn type-check

# Watch mode
yarn type-check --watch
```

### Component Not Showing

1. Check data.js has required section
2. Verify component imports data correctly
3. Check console for JavaScript errors
4. Run `yarn type-check` for type issues

### Styling Issues

1. Check Tailwind config includes component file
2. Verify dark mode prefix syntax
3. Clear Tailwind cache: `rm -rf .next && yarn build`

---

## 📚 Code Quality

### Documentation Standards

- Every file starts with JSDoc comment block
- Functions include parameter documentation
- Complex logic has inline comments
- ARIA labels explain interactive elements

### Code Style

- TypeScript strict mode enabled
- ESLint configured for consistency
- Prettier formatting (optional)
- Consistent naming conventions

---

## 📞 Support & Maintenance

For questions or updates:

1. Review existing section components as examples
2. Check types/index.ts for available interfaces
3. Refer to constants.ts for configuration
4. See data.js for content updates

---

## ✅ Best Practices Implemented

✅ **Centralized Data**: Single data.js source  
✅ **Type Safety**: Full TypeScript with strict mode  
✅ **Reusable Hooks**: Custom hooks for common patterns  
✅ **Component Composition**: Modular, testable components  
✅ **Performance**: Memoization, lazy loading, optimization  
✅ **Accessibility**: WCAG 2.1 AA compliance  
✅ **Responsive Design**: Mobile-first approach  
✅ **Dark Mode**: Full theme support  
✅ **Documentation**: Comprehensive JSDoc comments  
✅ **Code Organization**: Clear folder structure

---

Last Updated: January 29, 2026
