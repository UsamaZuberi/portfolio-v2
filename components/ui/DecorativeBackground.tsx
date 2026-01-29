/**
 * DecorativeBackground Component
 *
 * Reusable decorative background with animated gradient blobs.
 * Provides visual depth and modern aesthetics to sections.
 *
 * @component
 */

'use client';

import React from 'react';

interface DecorativeBackgroundProps {
  variant?: 'default' | 'dense' | 'minimal';
  opacity?: number;
  className?: string;
}

const DecorativeBackground: React.FC<DecorativeBackgroundProps> = ({
  variant = 'default',
  opacity = 35,
  className = '',
}) => {
  const variants = {
    default: (
      <>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-bl from-primary-300/20 to-transparent blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-secondary-300/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gradient-to-t from-accent-300/20 to-transparent blur-3xl" />
      </>
    ),
    dense: (
      <>
        <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-primary-300/30 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-gradient-to-tl from-secondary-300/30 to-transparent blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 rounded-full bg-gradient-to-l from-accent-300/20 to-transparent blur-3xl" />
      </>
    ),
    minimal: (
      <>
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-300/40 to-transparent blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-gradient-to-bl from-secondary-300/40 to-transparent blur-3xl" />
      </>
    ),
  };

  return (
    <div className={`absolute inset-0 -z-10 opacity-${opacity} ${className}`}>
      {variants[variant]}
    </div>
  );
};

export default DecorativeBackground;
