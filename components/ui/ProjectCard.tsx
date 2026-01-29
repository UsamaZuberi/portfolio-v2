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
 * - Skill badges with \"+ more\" indicator for long lists
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

import React from 'react';
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
  /** Callback function triggered when user clicks \"View Gallery\" button */
  onViewGallery: (project: ProjectItem) => void;
  /** Index position for calculating animation delay */
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFeatured = false,
  onViewGallery,
  index = 0,
}) => {
  // Calculate animation delay: featured projects use consistent 0.1s spacing,
  // while regular projects use staggered timing (0.4s base + incremental 0.05s)
  const cardAnimation = `fadeInUp 0.6s ease-out ${isFeatured ? index * 0.1 : 0.4 + (index % 12) * 0.05}s both`;

  return (
    <div
      className={`group relative overflow-hidden ${isFeatured ? 'rounded-2xl bg-white shadow-lg' : 'rounded-xl bg-white shadow-md'} ${TRANSITIONS.SLOW} hover:shadow-2xl dark:bg-gray-800`}
      style={{ animation: cardAnimation }}
      role="article"
      aria-label={`${project.title} project`}
    >
      {/* Image Container - Clickable to open gallery */}
      <div
        onClick={() => onViewGallery(project)}
        className={`relative ${isFeatured ? 'h-56' : 'h-40'} cursor-pointer overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600`}
      >
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

        <div className="flex h-full items-center justify-center">
          <img
            src={project.images[0]}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Image Count Badge - Clean and aligned */}
        {project.images && project.images.length > 1 && (
          <div
            className={`absolute ${isFeatured ? 'bottom-4 right-4' : 'bottom-3 right-3'} flex items-center ${isFeatured ? 'gap-2' : 'gap-1.5'} rounded-lg bg-white/95 ${isFeatured ? 'px-3 py-2' : 'px-2.5 py-1.5'} border border-primary-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-primary-800 dark:bg-gray-900/95`}
          >
            <svg
              className={`${isFeatured ? 'h-4 w-4' : 'h-3.5 w-3.5'} text-primary-600 dark:text-primary-400`}
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
            <span
              className={`${isFeatured ? 'text-sm' : 'text-xs'} font-semibold text-gray-900 dark:text-gray-100`}
            >
              {project.images.length}
            </span>
          </div>
        )}

        {/* Year Badge */}
        <div
          className={`absolute right-${isFeatured ? '4' : '2'} top-${isFeatured ? '4' : '2'} rounded-lg ${isFeatured ? 'bg-white dark:bg-gray-800' : 'bg-white/90 dark:bg-gray-800/90'} px-${isFeatured ? '3' : '2'} py-${isFeatured ? '1' : '1'} text-${isFeatured ? 'sm' : 'xs'} font-semibold text-primary-600 shadow-lg dark:text-primary-400`}
        >
          {project.startYear} - {project.endYear}
        </div>
      </div>

      {/* Content */}
      <div className={isFeatured ? 'p-6' : 'p-4'}>
        <h3
          className={`mb-${isFeatured ? '2' : '1'} ${isFeatured ? 'text-xl' : 'text-base'} font-bold text-gray-900 ${TRANSITIONS.BASE} group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400`}
        >
          {project.title}
        </h3>

        <p
          className={`mb-${isFeatured ? '4' : '3'} ${isFeatured ? 'text-sm' : 'text-xs'} leading-relaxed text-gray-600 dark:text-gray-400`}
        >
          {project.description}
        </p>

        {/* Skills */}
        <div className={`flex flex-wrap gap-${isFeatured ? '2' : '1.5'}`}>
          {project.usedSkills.slice(0, isFeatured ? 4 : 3).map((skill, i) => (
            <span
              key={i}
              className={`rounded-full bg-primary-100 px-${isFeatured ? '3' : '2'} py-${isFeatured ? '1' : '0.5'} text-${isFeatured ? 'xs' : 'xs'} font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300`}
            >
              {skill}
            </span>
          ))}
          {project.usedSkills.length > (isFeatured ? 4 : 3) && (
            <span
              className={`rounded-full bg-gray-100 px-${isFeatured ? '3' : '2'} py-${isFeatured ? '1' : '0.5'} text-${isFeatured ? 'xs' : 'xs'} font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300`}
            >
              +{project.usedSkills.length - (isFeatured ? 4 : 3)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
