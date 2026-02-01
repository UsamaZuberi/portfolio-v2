/**
 * Environment configuration and API endpoints
 */

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000, // 10 seconds
};

// API Endpoints
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

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  cachedProfile: 'portfolio-profile-cache',
  cachedProjects: 'portfolio-projects-cache',
} as const;

// Cache Configuration
export const CACHE_CONFIG = {
  profileTTL: 1000 * 60 * 5, // 5 minutes
  projectsTTL: 1000 * 60 * 10, // 10 minutes
  skillsTTL: 1000 * 60 * 15, // 15 minutes
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
