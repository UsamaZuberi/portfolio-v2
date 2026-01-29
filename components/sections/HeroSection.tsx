/**
 * HeroSection Component
 *
 * Main landing section of the portfolio. Features:
 * - Animated greeting with name display (letter-by-letter animation)
 * - Dynamic stats (experience years, projects completed, satisfaction rate)
 * - Call-to-action buttons (Resume preview, View portfolio)
 * - Tech stack display with hover effects
 * - Responsive profile image with animated backgrounds
 * - Interactive mouse-following glow effect
 * - Smooth staggered animations on page load
 * - Resume preview modal integration
 *
 * @component
 * @returns {React.ReactElement} Full-height hero section with intro and CTA
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ResumePreviewModal from '@/components/ui/ResumePreviewModal';
import { portfolioData } from '@/data';

const HeroSection: React.FC = () => {
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const heroData = portfolioData.hero;
  const resumeUrl = heroData.resumeLink;

  /**
   * Effect: Track mouse position for interactive glow effect
   *
   * Updates the position of mouse-following gradient elements in real-time.
   * Only active when mouse is inside the section to improve performance.
   * Properly cleans up event listeners on unmount.
   */
  useEffect(() => {
    // Update mouse position relative to section bounds
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    // Enable glow effect when mouse enters section
    const handleMouseEnter = () => setIsMouseInside(true);
    // Disable glow effect when mouse leaves section
    const handleMouseLeave = () => setIsMouseInside(false);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup: Remove event listeners to prevent memory leaks
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // const handleDownloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = resumeUrl;
  //   link.download = 'Muhammad_Usama_Zuberi_Resume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  /**
   * Handler: Scroll to portfolio section with smooth animation
   * Finds the portfolio element and uses native scrollIntoView API
   */
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4 pb-16 pt-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-6 lg:px-8"
      role="region"
      aria-label="Hero section"
    >
      {/* Mouse Follower - Spotlight Effect */}
      {isMouseInside && (
        <>
          {/* Spotlight beam */}
          <div
            className="pointer-events-none absolute z-30 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)',
              background:
                'radial-gradient(circle, rgba(var(--primary-rgb, 99, 102, 241), 0.15) 0%, rgba(var(--primary-rgb, 99, 102, 241), 0.08) 25%, rgba(var(--secondary-rgb, 168, 85, 247), 0.05) 50%, transparent 70%)',
              opacity: 1,
            }}
          />
          {/* Cursor trail particles */}
          <div
            className="pointer-events-none absolute z-30 h-3 w-3 rounded-full bg-primary-500/60 blur-sm transition-all duration-100"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            className="pointer-events-none absolute z-30 h-2 w-2 rounded-full bg-secondary-500/50 blur-sm transition-all duration-200"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%) scale(1.5)',
            }}
          />
          <div
            className="pointer-events-none absolute z-30 h-1.5 w-1.5 rounded-full bg-accent-500/40 blur-sm transition-all duration-300"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%) scale(2)',
            }}
          />
        </>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-500/10" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-secondary-300/20 blur-3xl [animation-delay:1s] dark:bg-secondary-500/10" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-accent-300/20 blur-3xl [animation-delay:2s] dark:bg-accent-500/10" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="order-2 space-y-6 lg:order-1">
            {/* Greeting Badge */}
            {/* Availability Badge */}
            <div className="mb-3">
              <span
                className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-md ring-2 ring-green-200/50 transition-all hover:scale-105 hover:shadow-lg dark:from-green-900/40 dark:to-emerald-900/40 dark:text-green-400 dark:ring-green-700/50"
                style={{ animation: 'fadeInUp 0.6s ease-out 0s both' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                {heroData.availabilityStatus}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-200/50 to-emerald-200/50 opacity-0 transition-opacity duration-300 hover:opacity-100 dark:from-green-800/30 dark:to-emerald-800/30" />
              </span>
            </div>

            {/* Greeting */}
            <p
              className="text-base font-medium text-primary-600 dark:text-primary-400"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
            >
              Hello! I&apos;m
            </p>

            {/* Name with gradient animation and letter hover */}
            <h1
              className="group relative mb-3 flex flex-wrap gap-4 font-heading text-3xl font-bold leading-tight drop-shadow-sm sm:text-4xl lg:text-5xl"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              {heroData.nameWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-flex">
                  {word.split('').map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="letter-hover inline-block cursor-default bg-gradient-to-br from-gray-900 via-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all hover:from-primary-600 hover:via-secondary-500 hover:to-accent-600 hover:drop-shadow-lg dark:from-white dark:via-primary-400 dark:to-secondary-400 dark:hover:from-primary-300 dark:hover:via-secondary-300 dark:hover:to-accent-300"
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Title with animated underline */}
            <div
              className="mb-6 flex items-center gap-3"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              <div className="relative">
                <h2 className="text-lg font-bold text-secondary-600 dark:text-secondary-400 sm:text-xl lg:text-2xl">
                  {heroData.designation}
                </h2>
                <div className="mt-1 h-1 w-3/4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              </div>
            </div>

            {/* Description */}
            <p
              className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              {heroData.summary}
            </p>

            {/* Stats Row with enhanced cards */}
            <div
              className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-primary-100 opacity-50 transition-transform group-hover:scale-150 dark:bg-primary-900/30" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <svg
                      className="h-5 w-5 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {heroData.yearsOfExperience}+
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-secondary-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-secondary-100 opacity-50 transition-transform duration-500 group-hover:scale-150 dark:bg-secondary-900/30" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-900/30">
                    <svg
                      className="h-5 w-5 text-secondary-600 dark:text-secondary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {heroData.projectsCompleted}+
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Projects Done</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-accent-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-accent-100 opacity-50 transition-transform duration-500 group-hover:scale-150 dark:bg-accent-900/30" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/30">
                    <svg
                      className="h-5 w-5 text-accent-600 dark:text-accent-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {heroData.clientSatisfactionRate}%
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons with enhanced styling */}
            <div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
            >
              <button
                onClick={() => setIsResumePreviewOpen(true)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 px-6 py-3 font-bold text-white shadow-xl ring-2 ring-primary-300/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:ring-primary-400/60"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm transition-transform group-hover:scale-105">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview Resume
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-700 to-secondary-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-300 bg-gradient-to-br from-white to-gray-50 px-6 py-3 font-bold text-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary-500 hover:shadow-2xl dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 dark:text-gray-200 dark:hover:border-primary-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm transition-transform group-hover:scale-105">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  View Portfolio
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-primary-900/20 dark:to-secondary-900/20" />
              </button>
            </div>

            {/* Tech Stack with improved design */}
            <div className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-8 animate-pulse rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-sm" />
                <p className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Tech Stack
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className="dark:via-gray-750 group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary-400 hover:shadow-xl hover:ring-primary-200 dark:border-gray-600 dark:from-gray-800 dark:to-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:border-primary-500 dark:hover:ring-primary-700"
                      style={{
                        animation: `fadeInScale 0.4s ease-out ${0.8 + index * 0.1}s both`,
                      }}
                    >
                      <span className="relative z-10 transition-all group-hover:scale-105">
                        {tech}
                      </span>
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-white/10" />
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="order-1 lg:order-2"
            style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Decorative Background with multiple layers */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 opacity-20 blur-3xl dark:opacity-10"></div>
                <div className="absolute inset-4 animate-pulse rounded-full bg-gradient-to-br from-secondary-400 to-accent-400 opacity-20 blur-2xl [animation-delay:0.5s] dark:opacity-10"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -left-4 top-1/4 h-20 w-20 animate-bounce rounded-full bg-primary-200/50 blur-xl [animation-delay:0.5s] dark:bg-primary-500/20"></div>
              <div className="absolute -right-4 bottom-1/4 h-24 w-24 animate-bounce rounded-full bg-secondary-200/50 blur-xl [animation-delay:1s] dark:bg-secondary-500/20"></div>

              {/* Profile Image with enhanced effects */}
              <div className="hover:shadow-3xl group relative aspect-square overflow-hidden rounded-full border-8 border-white bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl transition-all duration-500 hover:scale-105 dark:border-gray-700 dark:from-primary-900/20 dark:to-secondary-900/20">
                {/* Animated gradient ring */}
                <div className="animate-spin-slow absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 via-secondary-500 to-primary-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>

                <Image
                  src={heroData.profileImage}
                  alt="Muhammad Usama Zuberi - Front-end Web Developer"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToPortfolio}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Scroll down to portfolio section"
          style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}
        >
          <svg
            className="h-6 w-6 text-primary-600 dark:text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isResumePreviewOpen}
        onClose={() => setIsResumePreviewOpen(false)}
        resumeUrl={resumeUrl}
      />

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes letterPop {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.15);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .letter-hover {
          transition: all 0.3s ease;
        }

        .letter-hover:hover {
          animation: letterPop 0.5s ease-out;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
