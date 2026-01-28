# Dark Mode Implementation Guide

## Overview

This document describes the dark mode implementation for the Next.js portfolio website.

## Features Implemented

### 1. **Theme System**

- **Location**: `components/providers/ThemeProvider.tsx`
- **Features**:
  - React Context-based theme management
  - LocalStorage persistence
  - System preference detection
  - SSR-safe implementation with `suppressHydrationWarning`

### 2. **Theme Toggle Button**

- **Location**: `components/ui/ThemeToggle.tsx`
- **Features**:
  - Sun/Moon icon animation
  - Smooth transitions
  - Accessible (ARIA labels)
  - Available in both desktop and mobile navigation

### 3. **Dark Mode Colors Applied to All Components**

#### Layout Components

- **Header** (`components/layout/Header.tsx`)
  - Dark navigation background
  - Theme toggle in desktop and mobile menus
  - Dark mode hover states for links
- **Footer** (`components/layout/Footer.tsx`)
  - Darker background in dark mode
  - Adjusted text and icon colors

#### Section Components

- **HeroSection** (`components/sections/HeroSection.tsx`)
  - Dark gradient backgrounds
  - Resume preview modal integration
  - Dark mode for all text and buttons
- **PortfolioSection** (`components/sections/PortfolioSection.tsx`)
  - Dark section background
  - Updated portfolio items with gallery support
  - Dark mode for all interactive elements
- **ContactSection** (`components/sections/ContactSection.tsx`)
  - Dark form inputs with proper contrast
  - Dark mode error states
  - Dark background for contact info cards

#### UI Components

- **Button** (`components/ui/Button.tsx`)
  - All variants support dark mode
  - Adjusted focus rings for dark backgrounds
- **PortfolioCard** (`components/ui/PortfolioCard.tsx`)
  - Dark card backgrounds
  - Gallery integration with image counter
  - Screenshot button for multi-image projects
- **SectionHeading** (`components/ui/SectionHeading.tsx`)
  - Dark mode text colors
- **ScrollToTop** (`components/ui/ScrollToTop.tsx`)
  - Dark mode button styling

### 4. **New Components Created**

#### Resume Preview Modal

- **Location**: `components/ui/ResumePreviewModal.tsx`
- **Features**:
  - Full-screen PDF preview
  - Download button
  - Close on ESC key
  - Dark mode styling
  - Accessible

#### Image Gallery Modal

- **Location**: `components/ui/ImageGalleryModal.tsx`
- **Features**:
  - Full-screen image viewer
  - Keyboard navigation (ESC, Arrow Left, Arrow Right)
  - Image counter
  - Previous/Next navigation
  - Dark overlay
  - Click outside to close

#### Social Share Component

- **Location**: `components/ui/SocialShare.tsx`
- **Features**:
  - Share on Twitter, LinkedIn, Facebook, WhatsApp
  - Email sharing
  - Copy link to clipboard with visual feedback
  - Dark mode styling
  - Accessible buttons

### 5. **Global Styles Updated**

- **Location**: `app/globals.css`
- **Changes**:
  - Dark mode body background
  - Dark scrollbar styling
  - Dark mode focus rings
  - Updated ring offsets for dark backgrounds

### 6. **Tailwind Configuration**

- **Location**: `tailwind.config.ts`
- **Changes**:
  - Added `darkMode: 'class'`
  - Updated color palette:
    - Primary: Blue (50-950)
    - Secondary: Purple/Fuchsia (50-950)
    - Accent: Emerald/Green (50-950)

### 7. **Type Definitions Extended**

- **Location**: `types/index.ts`
- **Changes**:
  - Extended `PortfolioItem` interface with:
    - `images?: string[]` - Array of screenshot URLs
    - `longDescription?: string` - Detailed project description
    - `githubLink?: string` - GitHub repository link
    - `technologies?: string[]` - Tech stack array
    - `year?: number` - Project year

## Usage

### Theme Provider

Wrap your app with the `ThemeProvider` in `app/layout.tsx`:

```tsx
<ThemeProvider>{children}</ThemeProvider>
```

### Using Theme in Components

```tsx
import { useTheme } from '@/components/providers/ThemeProvider';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

### Dark Mode CSS Classes

Tailwind's dark mode classes are used throughout:

```tsx
// Example
<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">Content</div>
```

## Color Scheme

### Light Mode

- **Background**: White, Gray-50, Gray-100
- **Text**: Gray-900, Gray-700, Gray-600
- **Primary**: Blue-600, Blue-700
- **Secondary**: Purple-600, Fuchsia-600
- **Accent**: Emerald-600, Green-600

### Dark Mode

- **Background**: Gray-900, Gray-800, Gray-950
- **Text**: White, Gray-100, Gray-300
- **Primary**: Blue-500, Blue-400
- **Secondary**: Purple-500, Fuchsia-500
- **Accent**: Emerald-500, Green-500

## Testing

1. **Toggle Theme**: Click the sun/moon icon in the header
2. **Persistence**: Refresh the page - theme should persist
3. **System Preference**: Clear localStorage and check if it follows system preference
4. **All Components**: Navigate through all sections and verify dark mode styling
5. **Modals**: Test resume preview and image gallery in both themes
6. **Forms**: Test contact form validation in both themes
7. **Accessibility**: Tab through all interactive elements with keyboard

## Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Performance

- Theme preference stored in localStorage (1 read on mount)
- No flash of unstyled content (FOUC)
- SSR-safe with `suppressHydrationWarning`
- CSS-only transitions (no JavaScript animations)

## Accessibility

- All interactive elements have proper ARIA labels
- Focus rings visible in both themes
- Color contrast meets WCAG AA standards
- Keyboard navigation fully supported
- Screen reader announcements for theme changes

## Future Enhancements

- [ ] Add more theme options (e.g., auto, light, dark, custom)
- [ ] Add color scheme customization
- [ ] Add animation preferences (respect prefers-reduced-motion)
- [ ] Add high contrast mode
- [ ] Add theme-specific images/logos
