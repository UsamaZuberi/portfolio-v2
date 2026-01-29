'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';
import type { NavLink } from '@/types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '#hero', ariaLabel: 'Navigate to home section' },
    { label: 'Skills', href: '#skills', ariaLabel: 'Navigate to skills section' },
    { label: 'My Journey', href: '#timeline', ariaLabel: 'Navigate to timeline section' },
    { label: 'Portfolio', href: '#portfolio', ariaLabel: 'Navigate to portfolio section' },
    { label: 'Testimonials', href: '#testimonials', ariaLabel: 'Navigate to testimonials section' },
    { label: 'Contact', href: '#contact', ariaLabel: 'Navigate to contact section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white py-4 shadow-md dark:bg-gray-900 dark:shadow-gray-800'
          : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group relative font-heading text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-primary-600 focus:outline-none dark:text-white dark:hover:text-primary-400"
            aria-label="Muhammad Usama Zuberi - Home"
          >
            <span className="relative z-10">Usama Zuberi</span>
            <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-primary-50 opacity-0 transition-all duration-300 group-focus:scale-100 group-focus:opacity-100 dark:bg-primary-900/20" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center space-x-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="rounded-md px-3 py-2 font-medium text-gray-700 transition-colors hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:text-primary-400 dark:focus:ring-offset-gray-900"
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-md p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'mt-4 max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="region"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-2 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
