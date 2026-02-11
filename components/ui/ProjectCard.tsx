/**
 * ProjectCard Component
 *
 * Reusable, fully typed component for displaying individual portfolio projects.
 * Supports two display modes for flexible use across the site:
 *
 * - Featured Mode: Larger cards (h-56) with prominent styling, used in featured section
 * - Standard Mode: Regular size (h-40) for all projects grid
 *
 * Features:
 * - Lazy image loading with placeholder styling
 * - Smooth hover animations (image zoom, overlay reveal)
 * - Skill badges with "+ more" indicator for long lists
 * - Gallery trigger button for screenshot viewing
 * - Fully responsive and mobile-friendly
 * - Complete ARIA labels for accessibility
 * - Staggered animations based on card index
 *
 * @component
 * @param {Object} props - Component props
 * @param {ProjectItem} props.project - Project data (title, description, images, skills)
 * @param {boolean} [props.isFeatured=false] - Whether to use featured styling (larger)
 * @param {Function} props.onViewGallery - Callback when gallery button is clicked
 * @param {number} [props.index=0] - Card index for animation stagger timing
 * @returns {React.ReactElement} Rendered project card with animations
 */

'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types';
import { TRANSITIONS } from '@/lib/constants';

/**
 * Props interface for ProjectCard component
 */
interface ProjectCardProps {
  /** The project/portfolio item to display */
  project: ProjectItem;
  /** Whether this is a featured project (affects size and styling) */
  isFeatured?: boolean;
  /** Callback function triggered when user clicks "View Gallery" button */
  onViewGallery: (project: ProjectItem) => void;
  /** Index position for calculating animation delay */
  index?: number;
}

const DOMINANT_COLORS = ['#06b6d4', '#ec4899', '#14b8a6', '#f59e0b'];

// Style configuration based on featured/standard mode
const STYLE_CONFIG = {
  featured: {
    height: 'h-56',
    badgeSpacing: 'bottom-4 right-4',
    badgeGap: 'gap-2',
    badgeSize: 'h-3.5 w-3.5',
    contentPadding: 'p-6',
    titleSize: 'mb-2 text-xl',
    descSize: 'mb-4 text-sm',
    skillPadding: 'px-3 py-1',
    skillGap: 'gap-2',
    skillDisplayCount: 4,
    titleTextSize: 'text-4xl',
  },
  standard: {
    height: 'h-40',
    badgeSpacing: 'bottom-3 right-3',
    badgeGap: 'gap-1.5',
    badgeSize: 'h-3 w-3',
    contentPadding: 'p-4',
    titleSize: 'mb-1 text-base',
    descSize: 'mb-3 text-xs',
    skillPadding: 'px-2 py-0.5',
    skillGap: 'gap-1.5',
    skillDisplayCount: 3,
    titleTextSize: 'text-2xl',
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFeatured = false,
  onViewGallery,
  index = 0,
}) => {
  // Calculate animation delay: featured projects use consistent 0.1s spacing,
  // while regular projects use staggered timing (0.4s base + incremental 0.05s)
  const cardAnimation = `fadeInUp 0.6s ease-out ${isFeatured ? index * 0.1 : 0.4 + (index % 12) * 0.05}s both`;

  const styles = STYLE_CONFIG[isFeatured ? 'featured' : 'standard'];
  const dominantColor = DOMINANT_COLORS[index % DOMINANT_COLORS.length];
  const baseGradient = `linear-gradient(135deg, ${dominantColor} 0%, ${dominantColor} 45%, #7c3aed 70%, #1e3a8a 100%)`;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800"
      style={{
        animation: cardAnimation,
      }}
      role="article"
      aria-label={`${project.title} project`}
    >
      {/* Image Container - Now shows project title instead */}
      <div
        onClick={() => onViewGallery(project)}
        className={`relative ${styles.height} flex cursor-pointer items-center justify-center overflow-hidden`}
        style={{ backgroundImage: baseGradient }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:bg-black group-hover:opacity-20" />

        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-transform duration-700 group-hover:translate-x-full"></div>

        {/* Project Title as visual element */}
        <div className="z-5 relative px-6 text-center">
          <h2 className={`${styles.titleTextSize} font-bold text-white dark:text-white`}>
            {project.title}
          </h2>
        </div>

        {/* Gallery Badge - Shows available images in gallery */}
        {project.images && project.images.length > 0 && (
          <div
            className={`absolute z-20 ${styles.badgeSpacing} flex items-center ${styles.badgeGap} rounded-lg bg-white px-2 py-1 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-300/40 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 dark:hover:shadow-slate-700/40`}
          >
            <svg
              className={`${styles.badgeSize} text-primary-600 transition-transform duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 dark:text-white`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="m text-xs font-semibold text-gray-900 dark:text-white">
              {project.images.length}
            </span>
          </div>
        )}

        {project.allowLinkPreview && project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-lg bg-white p-2 text-primary-600 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-300/40 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 dark:text-white dark:hover:shadow-slate-700/40"
            aria-label={`Preview ${project.title} in a new tab`}
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* Content */}
      <div className={styles.contentPadding}>
        <h3
          className={`${styles.titleSize} font-bold text-gray-900${TRANSITIONS.BASE} group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400`}
        >
          {project.title}
        </h3>

        <p className={`${styles.descSize} leading-relaxed text-gray-600 dark:text-gray-400`}>
          {project.description}
        </p>

        {/* Skills with gradients */}
        <div className={`flex flex-wrap ${styles.skillGap}`}>
          {project.usedSkills.slice(0, styles.skillDisplayCount).map((skill, i) => {
            const colors = [
              'from-primary-100 to-primary-50 text-primary-700 dark:from-primary-800 dark:to-primary-900 dark:text-primary-300',
              'from-secondary-100 to-secondary-50 text-secondary-700 dark:from-secondary-800 dark:to-secondary-900 dark:text-secondary-300',
              'from-accent-100 to-accent-50 text-accent-700 dark:from-accent-800 dark:to-accent-900 dark:text-accent-300',
              'from-blue-100 to-blue-50 text-blue-700 dark:from-blue-800 dark:to-blue-900 dark:text-blue-300',
            ];
            return (
              <span
                key={i}
                className={`rounded-full bg-gradient-to-r ${colors[i % colors.length]} ${styles.skillPadding} text-xs font-medium ring-1 ring-transparent transition-all hover:scale-105`}
              >
                {skill}
              </span>
            );
          })}
          {project.usedSkills.length > styles.skillDisplayCount && (
            <span
              className={`rounded-full bg-gradient-to-r from-gray-100 to-gray-50 ${styles.skillPadding} text-xs font-medium text-gray-700 ring-1 ring-gray-200 transition-all hover:scale-105 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:ring-gray-600`}
            >
              +{project.usedSkills.length - styles.skillDisplayCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
