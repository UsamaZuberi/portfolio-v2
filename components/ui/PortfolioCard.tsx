'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageGalleryModal from './ImageGalleryModal';
import type { PortfolioItem } from '@/types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    if (item.images && item.images.length > 0) {
      setCurrentImageIndex(0);
      setIsGalleryOpen(true);
    }
  };

  return (
    <>
      <article
        className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10"
        role="article"
        aria-label={`Portfolio project: ${item.title}`}
      >
        {/* Image Container */}
        <div
          className="relative h-48 cursor-pointer overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30"
          onClick={handleImageClick}
        >
          <Image
            src={item.logo || '/images/placeholder-project.svg'}
            alt={`${item.title} logo`}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder-project.svg';
            }}
          />
          {item.images && item.images.length > 1 && (
            <div className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
              +{item.images.length} photos
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 font-heading text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
            {item.title}
          </h3>
          <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{item.description}</p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link -ml-2 inline-flex items-center rounded-md px-2 py-1 font-medium text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-primary-400 dark:hover:text-primary-300 dark:focus:ring-primary-400 dark:focus:ring-offset-gray-900"
              aria-label={`View ${item.title} project`}
            >
              View Project
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {item.images && item.images.length > 0 && (
              <button
                onClick={handleImageClick}
                className="inline-flex items-center rounded-md px-2 py-1 font-medium text-secondary-600 hover:text-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:text-secondary-400 dark:hover:text-secondary-300 dark:focus:ring-secondary-400 dark:focus:ring-offset-gray-900"
                aria-label={`View ${item.title} screenshots`}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Screenshots
              </button>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-secondary-600 px-3 py-1 text-xs font-semibold text-white dark:bg-secondary-700">
            Featured
          </div>
        )}
      </article>

      {/* Gallery Modal */}
      {item.images && item.images.length > 0 && (
        <ImageGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={item.images}
          initialIndex={currentImageIndex}
          projectTitle={item.title}
        />
      )}
    </>
  );
};

export default PortfolioCard;
