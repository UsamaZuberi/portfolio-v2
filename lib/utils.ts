/**
 * Utility Functions for Portfolio Application
 *
 * Collection of helper functions for:
 * - Image handling and fallback management
 * - File size and data formatting
 * - Performance optimization (debouncing)
 * - Environment and runtime detection
 *
 * These utilities are used throughout the app to reduce code duplication
 * and provide consistent behavior across components.
 */

/**
 * Get placeholder image path based on type
 *
 * Returns the correct placeholder SVG path for different image types.
 * Used when actual images are missing or need fallback display.
 *
 * @param {('profile'|'project')} [type='project'] - Type of placeholder needed
 * @returns {string} Path to the placeholder image SVG
 * @example
 * getPlaceholderImage('profile') // '/images/placeholder-profile.svg'
 * getPlaceholderImage('project') // '/images/placeholder-project.svg'
 */
export const getPlaceholderImage = (type: 'profile' | 'project' = 'project'): string => {
  return type === 'profile' ? '/images/placeholder-profile.svg' : '/images/placeholder-project.svg';
};

/**
 * Get image with automatic fallback to placeholder
 *
 * Safely displays images with fallback handling. If imagePath is undefined
 * or invalid, automatically returns appropriate placeholder image.
 *
 * @param {string|undefined} imagePath - Path to the image to display
 * @param {('profile'|'project')} [type='project'] - Placeholder type to use
 * @returns {string} Either the provided path or a placeholder image path
 * @example
 * getImageWithFallback('/images/project.jpg') // '/images/project.jpg'
 * getImageWithFallback(undefined) // '/images/placeholder-project.svg'
 */
export const getImageWithFallback = (
  imagePath: string | undefined,
  type: 'profile' | 'project' = 'project'
): string => {
  return imagePath || getPlaceholderImage(type);
};

/**
 * Format bytes into human-readable file size string
 *
 * Converts raw byte values to readable format (Bytes, KB, MB, GB, TB).
 * Useful for displaying file sizes in UI.
 *
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size with appropriate unit
 * @example
 * formatFileSize(1024) // '1 KB'
 * formatFileSize(1048576) // '1 MB'
 * formatFileSize(0) // '0 Bytes'
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
 *
 * Delays function execution until after a specified wait time has elapsed.
 * Useful for expensive operations (API calls, DOM updates) triggered by
 * frequent events (typing, scrolling, window resizing).
 *
 * @template T - Function type being debounced
 * @param {T} func - The function to debounce
 * @param {number} wait - Milliseconds to wait before executing function
 * @returns {Function} Debounced version of the function that delays execution
 * @example
 * const handleSearch = debounce((query: string) => {
 *   // Make API call
 *   fetchResults(query);
 * }, 300);
 *
 * // Called 5 times rapidly, but API call only fires once after 300ms
 * input.addEventListener('input', (e) => handleSearch(e.target.value));
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
 * Runtime environment detection
 *
 * Checks if code is running on the server (Next.js SSR) or in the browser.
 * Used to prevent window/document access errors in server-side code.
 *
 * @type {boolean}
 * @example
 * if (!isServer) {
 *   // Safe to access window/document APIs here
 *   localStorage.setItem('theme', 'dark');
 *   document.body.classList.add('no-scroll');
 * }
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
