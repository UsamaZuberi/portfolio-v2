/**
 * Badge Component
 *
 * Reusable badge component with multiple variants and color schemes.
 * Used throughout the portfolio for status indicators, labels, and tags.
 *
 * @component
 */

'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'status' | 'count';
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'green' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  colorScheme = 'primary',
  size = 'md',
  icon,
  pulse = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  const variantClasses = {
    default: {
      primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
      secondary:
        'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400',
      accent: 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-400',
      green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      gray: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    },
    gradient: {
      primary:
        'bg-gradient-to-r from-primary-100 to-pink-100 text-primary-700 ring-2 ring-primary-200/50 dark:from-primary-900/40 dark:to-pink-900/40 dark:text-primary-300 dark:ring-primary-700/50',
      secondary:
        'bg-gradient-to-r from-secondary-100 to-accent-100 text-secondary-700 ring-2 ring-secondary-200/50 dark:from-secondary-900/40 dark:to-accent-900/40 dark:text-secondary-300 dark:ring-secondary-700/50',
      accent:
        'bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 ring-2 ring-accent-200/50 dark:from-accent-900/40 dark:to-primary-900/40 dark:text-accent-300 dark:ring-accent-700/50',
      green:
        'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 ring-2 ring-green-200/50 dark:from-green-900/40 dark:to-emerald-900/40 dark:text-green-400 dark:ring-green-700/50',
      gray: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 ring-2 ring-gray-200/50 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:ring-gray-600/50',
    },
    status: {
      primary: 'bg-primary-500 text-white shadow-md',
      secondary: 'bg-secondary-500 text-white shadow-md',
      accent: 'bg-accent-500 text-white shadow-md',
      green: 'bg-green-500 text-white shadow-md',
      gray: 'bg-gray-500 text-white shadow-md',
    },
    count: {
      primary: 'bg-primary-600 text-white font-bold',
      secondary: 'bg-secondary-600 text-white font-bold',
      accent: 'bg-accent-600 text-white font-bold',
      green: 'bg-green-600 text-white font-bold',
      gray: 'bg-gray-600 text-white font-bold',
    },
  };

  const baseClasses = 'inline-flex items-center gap-1.5 rounded-full font-semibold transition-all';
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant][colorScheme]} ${className}`;

  return (
    <span className={classes}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current"></span>
        </span>
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
