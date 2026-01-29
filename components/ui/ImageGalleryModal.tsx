'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageGalleryModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
  projectTitle?: string;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  isOpen,
  images,
  initialIndex = 0,
  onClose,
  projectTitle = 'Project Gallery',
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Header with Title and Close */}
      <div className="absolute left-0 right-0 top-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary-600/20 p-2 backdrop-blur-sm">
              <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{projectTitle}</h2>
              <p className="text-sm text-gray-400">Gallery Preview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:rotate-90 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Close gallery"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative mx-4 w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-white/10">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
            fill
            className="object-contain transition-opacity duration-300"
            sizes="90vw"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous image"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next image"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter & Thumbnails Bar */}
        {images.length > 1 && (
          <div className="absolute -bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
            <div className="rounded-full bg-black/80 px-5 py-2.5 ring-1 ring-white/10 backdrop-blur-md">
              <span className="font-mono text-sm font-semibold text-white">
                {currentIndex + 1}
                <span className="mx-1.5 text-gray-500">/</span>
                {images.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
