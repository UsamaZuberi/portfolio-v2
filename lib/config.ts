/**
 * Centralized Configuration for Portfolio Application
 *
 * Contains all configuration, constants, and endpoints used throughout the app.
 * Split into logical sections for easy maintenance and discovery.
 */

// ============================================================================
// API Configuration
// ============================================================================

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000, // 10 seconds
} as const;

export const API_ENDPOINTS = {
  // Profile/Hero
  profile: '/profile',
  // Projects
  projects: '/projects',
  projectById: (id: string) => `/projects/${id}`,
  featuredProjects: '/projects?featured=true',
  // Skills
  skills: '/skills',
  // Experience & Education
  experience: '/experience',
  education: '/education',
  // Contact
  contact: '/contact',
  // Resume
  resume: '/resume',
  // Social Links
  socialLinks: '/social-links',
} as const;

// ============================================================================
// Storage & Caching
// ============================================================================

export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  cachedProfile: 'portfolio-profile-cache',
  cachedProjects: 'portfolio-projects-cache',
} as const;

export const CACHE_CONFIG = {
  profileTTL: 1000 * 60 * 5, // 5 minutes
  projectsTTL: 1000 * 60 * 10, // 10 minutes
  skillsTTL: 1000 * 60 * 15, // 15 minutes
} as const;

// ============================================================================
// Site Configuration
// ============================================================================

export const SITE_CONFIG = {
  name: 'Muhammad Usama Zuberi',
  title: 'Muhammad Usama Zuberi - Front-end Web Developer',
  description:
    'Portfolio of Muhammad Usama Zuberi, a passionate Front-end Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  url: 'https://usamazuberi.vercel.app',
  email: 'usama.zuberi1010@gmail.com',
  github: 'https://github.com/usamazuberi',
  linkedin: 'https://linkedin.com/in/usamazuberi',
  x: 'https://x.com/usamazuberi',
} as const;

// ============================================================================
// Navigation & UI
// ============================================================================

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_PLATFORMS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  email: 'Email',
} as const;

// ============================================================================
// Tech Stack & Skills
// ============================================================================

export const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'] as const;

// ============================================================================
// Animation & Timing
// ============================================================================

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
  SECTION_STAGGER: 0.1,
  HERO_STAGGER: 0.1,
  SCROLL_BEHAVIOR: 'smooth' as const,
} as const;

// ============================================================================
// Transitions (for Tailwind classes)
// ============================================================================

export const TRANSITIONS = {
  BASE: 'transition-all duration-300',
  FAST: 'transition-all duration-200',
  SLOW: 'transition-all duration-500',
  TRANSFORM: 'transition-transform duration-500',
  OPACITY: 'transition-opacity duration-300',
} as const;

// Feature Flags
export const FEATURES = {
  useApi: process.env.NEXT_PUBLIC_USE_API === 'true',
  enableCache: process.env.NEXT_PUBLIC_ENABLE_CACHE === 'true',
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
} as const;

export default {
  API_CONFIG,
  API_ENDPOINTS,
  STORAGE_KEYS,
  CACHE_CONFIG,
  FEATURES,
};
