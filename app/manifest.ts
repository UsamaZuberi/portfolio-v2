import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammad Usama Zuberi - Front-end Web Developer Portfolio',
    short_name: 'Usama Zuberi',
    description:
      'Portfolio of Muhammad Usama Zuberi, a Senior Front-end Web Developer specializing in React, Next.js, TypeScript, and Web3 technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/uz-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
