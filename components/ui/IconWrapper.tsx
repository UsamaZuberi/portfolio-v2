/**
 * IconWrapper Component
 *
 * Reusable wrapper for icons with gradient backgrounds.
 * Provides consistent styling across different sections.
 *
 * @component
 */

'use client';

import React, { memo } from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'gradient';
  className?: string;
  animate?: boolean;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  size = 'md',
  variant = 'gradient',
  className = '',
  animate = false,
}) => {
  const sizeClasses = {
    sm: 'h-10 w-10 p-2',
    md: 'h-12 w-12 p-2.5',
    lg: 'h-14 w-14 p-3',
    xl: 'h-16 w-16 p-3.5',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary-500 to-primary-600',
    secondary: 'bg-gradient-to-br from-secondary-500 to-secondary-600',
    accent: 'bg-gradient-to-br from-accent-500 to-accent-600',
    gradient: 'bg-gradient-to-br from-primary-500 to-secondary-500',
  };

  const animateClasses = animate
    ? 'transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl'
    : '';

  const classes = `inline-flex items-center justify-center rounded-xl shadow-lg text-white ${sizeClasses[size]} ${variantClasses[variant]} ${animateClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default memo(IconWrapper);
