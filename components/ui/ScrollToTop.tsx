'use client';

import React, { useEffect, useState } from 'react';

interface ScrollToTopProps {
  showAfter?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showAfter = 250 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 p-4 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:from-primary-700 hover:to-secondary-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-300 dark:from-primary-500 dark:to-secondary-500 dark:hover:from-primary-600 dark:hover:to-secondary-600 dark:focus:ring-primary-800 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="h-6 w-6 transition-transform group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
