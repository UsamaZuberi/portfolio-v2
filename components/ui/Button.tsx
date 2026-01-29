/**
 * Button Component
 *
 * Versatile, accessible button component with multiple styling options.
 * Used throughout the portfolio for actions and navigation.
 *
 * Variants:
 * - primary: Main call-to-action buttons (solid primary color)
 * - secondary: Secondary actions (solid secondary color)
 * - outline: Outlined style with border
 * - ghost: Minimal style (text only, appears on hover)
 *
 * Sizes:
 * - sm: Small buttons (compact)
 * - md: Medium buttons (default)
 * - lg: Large buttons (prominent)
 *
 * Features:
 * - Full keyboard accessibility (focus states)
 * - Disabled state support
 * - Smooth hover/active transitions
 * - Dark mode support
 * - ARIA labels for screen readers
 * - Active click animation (scale)
 *
 * @component
 * @param {ButtonProps} props - Button configuration
 * @returns {React.ReactElement} Styled button element
 */

import React from 'react';
import type { ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
}) => {
  // Base styles applied to all button variants
  const baseStyles =
    'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant-specific styles (colors and hover effects)
  const variantStyles = {
    // Primary: Main call-to-action with bold color
    primary:
      'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 focus:ring-primary-300 dark:focus:ring-primary-800 active:scale-95',
    // Secondary: Secondary action with secondary color
    secondary:
      'bg-secondary-600 dark:bg-secondary-500 text-white hover:bg-secondary-700 dark:hover:bg-secondary-600 focus:ring-secondary-300 dark:focus:ring-secondary-800 active:scale-95',
    // Outline: Border style with transparent background
    outline:
      'border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-300 dark:focus:ring-primary-800',
    // Ghost: Minimal style, only shows background on hover
    ghost:
      'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-300 dark:focus:ring-primary-800',
  };

  // Size-specific padding and text styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm', // Compact size
    md: 'px-6 py-3 text-base', // Default/medium size
    lg: 'px-8 py-4 text-lg', // Large/prominent size
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      aria-label={ariaLabel || text}
    >
      {text}
    </button>
  );
};

export default Button;
