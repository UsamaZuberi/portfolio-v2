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

import React, { useState, useCallback } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import ProjectCard from '@/components/ui/ProjectCard';
import { portfolioData } from '@/data';
import { useScrollToSection } from '@/lib/hooks/useInteractions';
import { ProjectItem } from '@/types';

const PortfolioSection: React.FC = () => {
  // State management for gallery modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  // Filter projects into featured and complete list
  const featuredProjects = portfolioData.projects.filter((p) => p.isFeatured);
  const allProjects = portfolioData.projects;

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
      className="bg-gradient-to-br from-gray-50 to-white px-4 py-20 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8"
      role="region"
      aria-label="Portfolio section"
    >
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
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
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
            <span className="inline-flex items-center rounded-full bg-secondary-100 px-3 py-1 text-sm font-semibold text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300">
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
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 p-12 text-center shadow-2xl">
          <h3 className="mb-4 text-3xl font-bold text-white">Interested in working together?</h3>
          <p className="mb-8 text-lg text-white/90">
            I&apos;m always open to exciting projects and collaborations.
          </p>
          <button
            onClick={handleContactClick}
            className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Get in touch"
          >
            Get in Touch
          </button>
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
