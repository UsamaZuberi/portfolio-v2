/**
 * GradientText Component
 * 
 * Reusable gradient text component for eye-catching headings and labels.
 * Supports multiple gradient directions and color schemes.
 * 
 * @component
 */

'use client';

import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  direction?: 'to-r' | 'to-br' | 'to-b' | 'to-bl';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'primary',
  direction = 'to-r',
  className = '',
  as: Component = 'span',
}) => {
  const gradients = {
    primary: `bg-gradient-${direction} from-primary-600 via-primary-500 to-secondary-600`,
    secondary: `bg-gradient-${direction} from-secondary-600 via-accent-500 to-accent-600`,
    accent: `bg-gradient-${direction} from-accent-600 via-primary-500 to-primary-600`,
    rainbow: `bg-gradient-${direction} from-primary-600 via-secondary-500 to-accent-600`,
  };

  const classes = `${gradients[variant]} bg-clip-text text-transparent ${className}`;

  return <Component className={classes}>{children}</Component>;
};

export default GradientText;
