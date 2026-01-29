/**
 * TestimonialCard Component
 *
 * Displays individual testimonial with author details, rating, and quote.
 * Features:
 * - Star rating display (1-5 stars)
 * - Gender-based avatar icons (male/female) or initials fallback
 * - Company and role information
 * - Quotation marks styling
 * - Hover animations
 * - Responsive design
 * - Dark mode support
 *
 * @component
 */

'use client';

import React, { memo } from 'react';
import { TestimonialItem } from '@/types';
import { TRANSITIONS } from '@/lib/constants';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  const { name, role, company, image, rating, testimonial: quote, gender } = testimonial;

  // Generate initials as fallback
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Animation delay
  const cardAnimation = `fadeInUp 0.6s ease-out ${0.1 * index}s both`;

  // Avatar icons based on gender
  const MaleAvatar = () => (
    <svg
      className="h-full w-full p-3 text-white"
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Male icon - businessman silhouette */}
      <circle cx="16" cy="9" r="5" />
      {/* Shoulders and torso - broader/rectangular */}
      <path d="M16 16c-5 0-9 2.5-9 7v5c0 1 1 2 2 2h14c1 0 2-1 2-2v-5c0-4.5-4-7-9-7z" />
      {/* Tie detail */}
      <path d="M16 15l-1.5 8h3l-1.5-8z" opacity="0.5" />
    </svg>
  );

  const FemaleAvatar = () => (
    <svg
      className="h-full w-full p-3 text-white"
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Female icon - woman with long hair silhouette */}
      <circle cx="16" cy="9" r="5" />
      {/* Hair/head outline */}
      <ellipse cx="16" cy="9" rx="6" ry="7" opacity="0.3" />
      {/* Dress/skirt silhouette - A-line shape */}
      <path d="M16 16c-2 0-4 0.5-5 1.5c-1 1-2 2.5-2 4.5v6c0 1 0.5 2 1.5 2h11c1 0 1.5-1 1.5-2v-6c0-2-1-3.5-2-4.5c-1-1-3-1.5-5-1.5z" />
      {/* Dress flare */}
      <path d="M10 23l-1.5 7h15l-1.5-7z" opacity="0.4" />
    </svg>
  );

  return (
    <div
      className={`group relative flex h-full flex-col rounded-xl bg-white p-6 shadow-md ${TRANSITIONS.BASE} hover:shadow-2xl dark:bg-gray-800`}
      style={{ animation: cardAnimation }}
    >
      {/* Quote Icon */}
      <div className="absolute right-6 top-6 text-primary-100 dark:text-primary-900/30">
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Rating Stars */}
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
        &quot;{quote}&quot;
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Profile Image/Avatar Icon */}
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-secondary-400">
          {gender === 'male' ? (
            <MaleAvatar />
          ) : gender === 'female' ? (
            <FemaleAvatar />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
              {initials}
            </div>
          )}
        </div>

        {/* Name and Role */}
        <div className="min-w-0 flex-1">
          <h4 className="truncate font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="truncate text-sm text-gray-600 dark:text-gray-400">{role}</p>
          <p className="truncate text-sm font-medium text-primary-600 dark:text-primary-400">
            {company}
          </p>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors group-hover:border-primary-200 dark:group-hover:border-primary-800" />
    </div>
  );
};

export default memo(TestimonialCard);
