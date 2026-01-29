/**
 * Constants for the portfolio application
 */

export const SITE_CONFIG = {
  name: 'Muhammad Usama Zuberi',
  title: 'Muhammad Usama Zuberi - Front-end Web Developer',
  description:
    'Portfolio of Muhammad Usama Zuberi, a passionate Front-end Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  url: 'https://usamazuberi.com',
  email: 'usama.zuberi1010@gmail.com',
  github: 'https://github.com/usamazuberi',
  linkedin: 'https://linkedin.com/in/usamazuberi',
} as const;

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const;

export const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'] as const;

export const SOCIAL_PLATFORMS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  email: 'Email',
} as const;

/**
 * Animation and Timing Constants
 */
export const ANIMATION = {
  DURATIONS: {
    FAST: '200ms',
    NORMAL: '300ms',
    SLOW: '500ms',
    SLOWER: '700ms',
  },
  EASING: {
    EASE_OUT: 'ease-out',
    EASE_IN: 'ease-in',
    EASE_IN_OUT: 'ease-in-out',
  },
  SECTION_STAGGER: 0.1, // seconds between staggered items
  HERO_STAGGER: 0.1, // seconds
  SCROLL_BEHAVIOR: 'smooth' as const,
} as const;

/**
 * Size and Layout Constants
 */
export const SIZES = {
  CONTAINER: 'max-w-7xl',
  CONTAINER_MD: 'max-w-6xl',
  CONTAINER_SM: 'max-w-4xl',
  PADDING: {
    SECTION: 'px-4 py-20 sm:px-6 lg:px-8',
    CARD: 'p-8',
    CARD_SM: 'p-6',
    CARD_XS: 'p-4',
  },
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
  },
} as const;

/**
 * Transition and Transform Constants
 */
export const TRANSITIONS = {
  BASE: 'transition-all duration-300',
  FAST: 'transition-all duration-200',
  SLOW: 'transition-all duration-500',
  TRANSFORM: 'transition-transform duration-500',
  OPACITY: 'transition-opacity duration-300',
} as const;

/**
 * Scroll Configuration
 */
export const SCROLL_CONFIG = {
  OFFSET: 80, // For fixed header offset
  DELAY: 100, // Delay before scroll animation
} as const;

/**
 * Dark Mode Configuration
 */
export const DARK_MODE = {
  STORAGE_KEY: 'theme-mode',
  VALUES: {
    LIGHT: 'light',
    DARK: 'dark',
  },
} as const;

/**
 * Accessibility Constants
 */
export const ACCESSIBILITY = {
  FOCUS_RING: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
  FOCUS_RING_DARK: 'dark:focus:ring-offset-gray-900',
  SKIP_LINK_ID: 'skip-to-main',
} as const;

/**
 * Utility function to create animation delay
 */
export const createAnimationDelay = (
  index: number,
  baseDelay: number = ANIMATION.SECTION_STAGGER
) => ({
  animation: `fadeInUp 0.6s ease-out ${index * baseDelay}s both`,
});
