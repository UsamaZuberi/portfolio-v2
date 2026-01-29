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
      {/* Mouse Follower */}
      {isMouseInside && (
        <>
          {/* Main cursor glow */}
          <div
            className="pointer-events-none absolute z-30 h-64 w-64 rounded-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl transition-all duration-300 ease-out"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Secondary smaller glow */}
          <div
            className="pointer-events-none absolute z-30 h-32 w-32 rounded-full bg-gradient-to-r from-accent-400/30 to-primary-400/30 blur-2xl transition-all duration-200 ease-out"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)',
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
            <div
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800"
              style={{ animation: 'fadeInUp 0.6s ease-out both' }}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {heroData.availabilityStatus}
              </span>
            </div>

            {/* Greeting */}
            <p
              className="text-lg font-medium text-primary-600 dark:text-primary-400"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
            >
              Hello! I&apos;m
            </p>

            {/* Name with gradient animation and letter hover */}
            <h1
              className="group flex flex-wrap gap-4 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              {heroData.nameWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-flex">
                  {word.split('').map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="letter-hover inline-block cursor-default bg-gradient-to-r from-gray-900 via-primary-700 to-secondary-700 bg-clip-text text-transparent dark:from-white dark:via-primary-400 dark:to-secondary-400"
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Title with typing effect */}
            <div
              className="flex items-center gap-3"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              <h2 className="text-2xl font-semibold text-secondary-600 dark:text-secondary-400 sm:text-3xl">
                {heroData.designation}
              </h2>
            </div>

            {/* Description */}
            <p
              className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              {heroData.summary}
            </p>

            {/* Stats Row */}
            <div
              className="flex flex-wrap gap-6"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
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
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {heroData.yearsOfExperience}+ Years
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-900/30">
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
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {heroData.projectsCompleted}+ Projects
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Completed</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/30">
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
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {heroData.clientSatisfactionRate}%
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-col gap-4 sm:flex-row"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
            >
              <Button
                text="Preview Resume"
                variant="primary"
                size="lg"
                onClick={() => setIsResumePreviewOpen(true)}
                ariaLabel="Preview my resume"
              />
              {/* <Button
                text="Download Resume"
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                ariaLabel="Download my resume"
              /> */}
              <Button
                text="View Portfolio"
                variant="outline"
                size="lg"
                onClick={scrollToPortfolio}
                ariaLabel="View my portfolio section"
              />
            </div>

            {/* Tech Stack */}
            <div className="pt-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary-600"
                      style={{
                        animation: `fadeInScale 0.4s ease-out ${0.8 + index * 0.1}s both`,
                      }}
                    >
                      {tech}
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full dark:via-white/10" />
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

              {/* Profile Image with enhanced border */}
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl transition-transform duration-500 hover:scale-105 dark:border-gray-800 dark:from-primary-900/20 dark:to-secondary-900/20">
                {/* Rotating gradient border effect */}
                <div className="animate-spin-slow absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50"></div>

                <Image
                  src="/images/placeholder-profile.svg"
                  alt="Muhammad Usama Zuberi - Front-end Web Developer"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
