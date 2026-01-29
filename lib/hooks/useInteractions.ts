/**
 * Custom React Hooks for Portfolio Interactions
 *
 * Collection of reusable hooks that encapsulate common interaction patterns:
 *
 * 1. useScrollToSection - Smooth scrolling to sections by ID
 * 2. useIntersectionObserver - Scroll-triggered animations and lazy loading
 * 3. useModal - Modal state management (open, close, toggle)
 *
 * These hooks reduce code duplication across components and provide
 * consistent behavior for interactions throughout the portfolio.
 */

import { useCallback, useState } from 'react';
import { ANIMATION } from '@/lib/constants';

/**
 * Hook: Smooth scroll to elements by ID
 *
 * Returns a memoized function that smoothly scrolls to any element with
 * the specified ID. Uses browser's native scrollIntoView API.
 *
 * @returns {Function} Function that accepts section ID (e.g. '#portfolio')
 * @example
 * const scrollToSection = useScrollToSection();
 *
 * // In event handler:
 * <button onClick={() => scrollToSection('#portfolio')}>
 *   View Portfolio
 * </button>
 */
export const useScrollToSection = () => {
  return useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: ANIMATION.SCROLL_BEHAVIOR });
    }
  }, []);
};

/**
 * Hook: Intersection Observer for scroll-triggered animations
 *
 * Returns a ref callback that automatically monitors when an element
 * enters or leaves the viewport. Automatically cleans up observer
 * on component unmount to prevent memory leaks.
 *
 * Use cases:
 * - Trigger animations when sections become visible
 * - Lazy load images/content on scroll
 * - Track user engagement with page sections
 *
 * @param {Function} callback - Called with isVisible boolean on visibility changes
 * @param {IntersectionObserverInit} [options] - Observer options (threshold, root, etc)
 * @returns {Function} Ref callback to attach to DOM element
 * @example
 * const [isVisible, setIsVisible] = useState(false);
 * const ref = useIntersectionObserver(
 *   (visible) => setIsVisible(visible),
 *   { threshold: 0.5 } // Trigger when 50% visible
 * );
 *
 * return <div ref={ref}>{isVisible && <AnimatedContent />}</div>
 */
export const useIntersectionObserver = (
  callback: (isVisible: boolean) => void,
  options?: IntersectionObserverInit
) => {
  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(([entry]) => {
        callback(entry.isIntersecting);
      }, options);

      observer.observe(node);

      return () => observer.disconnect();
    },
    [callback, options]
  );

  return ref;
};

/**
 * Hook: Modal state management
 *
 * Provides simple, reusable state management for modals.
 * Eliminates boilerplate for open/close/toggle logic across components.
 *
 * @param {boolean} [initialState=false] - Initial modal open/closed state
 * @returns {Object} Modal state and control methods
 * @returns {boolean} isOpen - Whether modal is currently open
 * @returns {Function} open - Function to open modal
 * @returns {Function} close - Function to close modal
 * @returns {Function} toggle - Function to toggle modal state
 * @example
 * const { isOpen, open, close } = useModal();
 *
 * return (
 *   <>
 *     <button onClick={open}>Open Modal</button>
 *     {isOpen && <Modal onClose={close} />}\n *   </>
 * )
 */
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
};
