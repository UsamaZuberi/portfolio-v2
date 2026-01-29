/**
 * Card Component
 *
 * Reusable card wrapper with multiple variants for consistent styling.
 * Reduces code duplication across the application.
 *
 * Variants:
 * - default: Standard card with border and shadow
 * - elevated: Enhanced shadow with hover lift effect
 * - gradient: Gradient border with animated background
 * - ghost: Minimal styling with hover effects
 *
 * @component
 */

'use client';

import React, { memo } from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'gradient' | 'ghost';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = 'relative overflow-hidden rounded-2xl transition-all duration-300';

  const variantClasses = {
    default:
      'border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800' +
      (hover ? ' hover:-translate-y-1 hover:shadow-xl' : ''),
    elevated:
      'border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800' +
      (hover ? ' hover:-translate-y-2 hover:shadow-2xl' : ''),
    gradient:
      'border-2 border-transparent bg-gradient-to-br from-white to-gray-50 shadow-lg ' +
      'ring-1 ring-gray-200/50 dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700/50' +
      (hover
        ? ' hover:-translate-y-1 hover:shadow-xl hover:ring-primary-500/50 dark:hover:ring-primary-500/50'
        : ''),
    ghost:
      'bg-transparent border border-gray-100 dark:border-gray-800' +
      (hover ? ' hover:bg-gray-50 dark:hover:bg-gray-800/50' : ''),
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
      {/* Gradient overlay for gradient variant */}
      {variant === 'gradient' && hover && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      {children}
    </div>
  );
};

export default memo(Card);
