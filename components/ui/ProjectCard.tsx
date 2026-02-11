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

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFeatured = false,
  onViewGallery,
  index = 0,
}) => {
  // Calculate animation delay: featured projects use consistent 0.1s spacing,
  // while regular projects use staggered timing (0.4s base + incremental 0.05s)
  const cardAnimation = `fadeInUp 0.6s ease-out ${isFeatured ? index * 0.1 : 0.4 + (index % 12) * 0.05}s both`;

  const heightClass = isFeatured ? 'h-56' : 'h-40';
  const badgeBottomSpacing = isFeatured ? 'bottom-4 right-4' : 'bottom-3 right-3';
  const badgeGap = isFeatured ? 'gap-2' : 'gap-1.5';
  const badgeSize = isFeatured ? 'h-3.5 w-3.5' : 'h-3 w-3';
  const badgeTextSize = isFeatured ? 'text-xs' : 'text-xs';
  const contentPadding = isFeatured ? 'p-6' : 'p-4';
  const titleSize = isFeatured ? 'mb-2 text-xl' : 'mb-1 text-base';
  const descSize = isFeatured ? 'mb-4 text-sm' : 'mb-3 text-xs';
  const skillPadding = isFeatured ? 'px-3 py-1' : 'px-2 py-0.5';
  const skillGap = isFeatured ? 'gap-2' : 'gap-1.5';
  const skillDisplayCount = isFeatured ? 4 : 3;

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
        className={
          'relative ' +
          heightClass +
          ' flex cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-700 dark:via-secondary-700 dark:to-accent-700'
        }
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:bg-black group-hover:opacity-20" />

        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-transform duration-700 group-hover:translate-x-full"></div>

        {/* Project Title as visual element */}
        <div className="z-5 relative px-6 text-center">
          <h2
            className={
              isFeatured
                ? 'text-4xl font-bold text-white dark:text-white'
                : 'text-2xl font-bold text-white dark:text-white'
            }
          >
            {project.title}
          </h2>
        </div>

        {/* Gallery Badge - Shows available images in gallery */}
        {project.images && project.images.length > 0 && (
          <div
            className={
              'absolute z-20 ' +
              badgeBottomSpacing +
              ' flex items-center' +
              badgeGap +
              ' border-1 rounded-lg border-primary-300 bg-white px-2 py-1 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-primary-600 dark:bg-gray-900'
            }
          >
            <svg
              className={badgeSize + ' text-primary-600 dark:text-primary-400'}
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
              className={badgeTextSize + ' m ml-1 font-semibold text-gray-900 dark:text-gray-100'}
            >
              {project.images.length}
            </span>
          </div>
        )}

        {project.allowLinkPreview && project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'absolute z-20 left-4 top-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white/95 px-2 py-1 text-xs font-semibold text-emerald-700 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-emerald-700 dark:bg-gray-900/90 dark:text-emerald-300'
            }
            aria-label={`Preview ${project.title} in a new tab`}
          >
            <svg
              className={badgeSize + ' text-emerald-600 dark:text-emerald-300'}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h6m0 0v6m0-6L10 20m-6-6v-4a2 2 0 012-2h4"
              />
            </svg>
            Live Preview
          </Link>
        )}
      </div>

      {/* Content */}
      <div className={contentPadding}>
        <h3
          className={
            titleSize +
            ' font-bold text-gray-900' +
            TRANSITIONS.BASE +
            ' group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400'
          }
        >
          {project.title}
        </h3>

        <p className={descSize + ' leading-relaxed text-gray-600 dark:text-gray-400'}>
          {project.description}
        </p>

        {/* Skills with gradients */}
        <div className={'flex flex-wrap ' + skillGap}>
          {project.usedSkills.slice(0, skillDisplayCount).map((skill, i) => {
            const colors = [
              'from-primary-100 to-primary-50 text-primary-700 dark:from-primary-800 dark:to-primary-900 dark:text-primary-300',
              'from-secondary-100 to-secondary-50 text-secondary-700 dark:from-secondary-800 dark:to-secondary-900 dark:text-secondary-300',
              'from-accent-100 to-accent-50 text-accent-700 dark:from-accent-800 dark:to-accent-900 dark:text-accent-300',
              'from-blue-100 to-blue-50 text-blue-700 dark:from-blue-800 dark:to-blue-900 dark:text-blue-300',
            ];
            return (
              <span
                key={i}
                className={
                  'rounded-full bg-gradient-to-r ' +
                  colors[i % colors.length] +
                  ' ' +
                  skillPadding +
                  ' text-xs font-medium ring-1 ring-transparent transition-all hover:scale-105'
                }
              >
                {skill}
              </span>
            );
          })}
          {project.usedSkills.length > skillDisplayCount && (
            <span
              className={
                'rounded-full bg-gradient-to-r from-gray-100 to-gray-50 ' +
                skillPadding +
                ' text-xs font-medium text-gray-700 ring-1 ring-gray-200 transition-all hover:scale-105 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:ring-gray-600'
              }
            >
              +{project.usedSkills.length - skillDisplayCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
