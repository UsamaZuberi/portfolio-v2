/**
 * Utility functions for the portfolio application
 */

/**
 * Get a placeholder image based on type
 */
export const getPlaceholderImage = (type: 'profile' | 'project' = 'project'): string => {
  return type === 'profile' ? '/images/placeholder-profile.svg' : '/images/placeholder-project.svg';
};

/**
 * Validate if an image path exists or return placeholder
 */
export const getImageWithFallback = (
  imagePath: string | undefined,
  type: 'profile' | 'project' = 'project'
): string => {
  return imagePath || getPlaceholderImage(type);
};

/**
 * Format file size in human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Check if we're running on the server
 */
export const isServer = typeof window === 'undefined';

/**
 * Safely parse JSON with fallback
 */
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
};
