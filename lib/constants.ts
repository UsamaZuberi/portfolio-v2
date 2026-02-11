/**
 * Re-exports of constants from config module
 *
 * This file maintains backward compatibility by re-exporting constants
 * from lib/config.ts. Prefer importing directly from lib/config.ts in new code.
 *
 * @deprecated - Import directly from './config.ts' instead
 */

export {
  SITE_CONFIG,
  NAVIGATION_LINKS,
  TECH_STACK,
  SOCIAL_PLATFORMS,
  ANIMATION,
  TRANSITIONS,
  API_CONFIG,
  API_ENDPOINTS,
  STORAGE_KEYS,
  CACHE_CONFIG,
} from './config';

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
