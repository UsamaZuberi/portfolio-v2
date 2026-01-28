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
