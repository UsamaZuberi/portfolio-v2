/**
 * PortfolioSection Component
 *
 * Displays all portfolio projects organized into two sections:
 * 1. Featured Projects: Highlighted projects with larger card layouts
 * 2. All Projects: Complete grid of every portfolio item
 *
 * Features:
 * - Filters projects by featured flag
 * - Image gallery modal for viewing project screenshots
 * - Smooth scroll navigation to contact section
 * - Responsive grid (1 col mobile → 2 cols tablet → 3 cols desktop)
 * - Optimized with useCallback to prevent unnecessary re-renders
 * - ProjectCard component for consistent styling and behavior
 * - Full accessibility with ARIA labels
 *
 * @component
 * @returns {React.ReactElement} Portfolio section with featured and all projects
 */

'use client';

import React, { useState, useCallback, useMemo } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import ProjectCard from '@/components/ui/ProjectCard';
import DecorativeBackground from '@/components/ui/DecorativeBackground';
import { portfolioData } from '@/data';
import { useScrollToSection } from '@/lib/hooks/useInteractions';
import { useProjectImages } from '@/lib/hooks/useProjectImages';
import { ProjectItem } from '@/types';

const PortfolioSection: React.FC = () => {
  // State management for gallery modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  // Fetch images from Vercel Blob
  const { images: blobImages, loading: blobLoading } = useProjectImages();

  // Use blob images as primary source, fallback to data.js only if blob not available
  const projectsWithBlobImages = useMemo(() => {
    return portfolioData.projects
      .slice() // Create new array to avoid mutation
      .reverse() // Show most recent projects first
      .map((project) => {
        const blobProjectImages = blobImages[project.slug];
        // Prioritize blob images - only use data.js images if no blob images exist
        return {
          ...project,
          images:
            blobProjectImages && blobProjectImages.length > 0 ? blobProjectImages : project.images,
        };
      });
  }, [blobImages]);

  // Filter projects into featured and complete list
  const featuredProjects = projectsWithBlobImages.filter((p) => p.isFeatured);
  const allProjects = projectsWithBlobImages;

  /**
   * Handler: Open gallery modal with selected project
   * Memoized with useCallback to prevent unnecessary re-renders of ProjectCard children
   */
  const handleViewScreenshots = useCallback((project: ProjectItem) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  }, []);

  /**
   * Handler: Close gallery modal
   * Clears the selected project from state
   * Memoized for performance optimization
   */
  const handleCloseGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  /**
   * Handler: Scroll to contact section
   * Uses the custom scroll hook for smooth behavior
   */
  const handleContactClick = useCallback(() => {
    scrollToSection('#contact');
  }, [scrollToSection]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white px-4 py-20 dark:bg-gray-800 sm:px-6 lg:px-8"
      role="region"
      aria-label="Portfolio section"
    >
      {/* Decorative Background Elements */}
      <DecorativeBackground variant="default" opacity={40} />
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Key Recent Projects"
          subtitle="Showcasing my best work in web development and design"
          className="mb-12"
        />

        {/* Featured Projects Section */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-100 to-pink-100 px-3 py-1 text-sm font-semibold text-primary-700 ring-2 ring-primary-200/50 dark:from-primary-900/40 dark:to-pink-900/40 dark:text-primary-300 dark:ring-primary-700/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-primary-500 to-pink-500" />
              Highlighted Work
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured
                index={index}
                onViewGallery={handleViewScreenshots}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Projects</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-secondary-100 to-accent-100 px-3 py-1 text-sm font-semibold text-secondary-700 ring-2 ring-secondary-200/50 dark:from-secondary-900/40 dark:to-accent-900/40 dark:text-secondary-300 dark:ring-secondary-700/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-secondary-500 to-accent-500" />
              {allProjects.length} Projects
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewGallery={handleViewScreenshots}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-accent-600 via-primary-600 to-secondary-600 p-12 shadow-2xl">
          {/* Animated background blobs */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <h3 className="mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-3xl font-bold text-transparent">
              Interested in working together?
            </h3>
            <p className="mb-8 text-lg text-white/90">
              I&apos;m always open to exciting projects and collaborations.
            </p>
            <button
              onClick={handleContactClick}
              className="group relative overflow-hidden rounded-xl bg-white px-8 py-3 font-semibold text-primary-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              aria-label="Get in touch"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
        images={selectedProject?.images || []}
        projectTitle={selectedProject?.title || ''}
      />

      {/* Animations */}
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
      `}</style>
    </section>
  );
};

export default PortfolioSection;
