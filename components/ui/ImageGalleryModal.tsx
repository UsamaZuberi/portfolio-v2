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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setImageLoaded(false);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, [initialIndex]);

  // Preload adjacent images for faster navigation
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    // Preload next and previous images
    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    preloadImage(images[nextIndex]);
    preloadImage(images[prevIndex]);
  }, [currentIndex, images, isOpen]);

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
    setImageLoaded(false);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setImageLoaded(false);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Optimize image loading based on format
  const getImageQuality = (url: string): number => {
    const ext = url.toLowerCase().split('.').pop();
    // WebP supports better compression, so we can use higher quality
    if (ext === 'webp') return 95;
    // JPEG/JPG are already compressed, use moderate quality
    if (ext === 'jpg' || ext === 'jpeg') return 90;
    // PNG are lossless, quality doesn't apply but Next.js may still optimize
    return 90;
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
        <div
          className={`relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-white/10 ${zoomLevel > 1 ? 'cursor-move' : 'cursor-default'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Loading Spinner */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
            </div>
          )}

          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
            fill
            className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            }}
            sizes="90vw"
            quality={getImageQuality(images[currentIndex])}
            priority
            onLoad={() => setImageLoaded(true)}
            draggable={false}
          />

          {/* Hidden preload images for next/prev */}
          {images.length > 1 && (
            <>
              <div className="hidden">
                <Image
                  src={images[(currentIndex + 1) % images.length]}
                  alt="Preload next"
                  width={1}
                  height={1}
                  quality={getImageQuality(images[(currentIndex + 1) % images.length])}
                  priority
                />
              </div>
              <div className="hidden">
                <Image
                  src={images[(currentIndex - 1 + images.length) % images.length]}
                  alt="Preload previous"
                  width={1}
                  height={1}
                  quality={getImageQuality(
                    images[(currentIndex - 1 + images.length) % images.length]
                  )}
                  priority
                />
              </div>
            </>
          )}
        </div>

        {/* Zoom Controls */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 3}
            className="rounded-lg bg-gray-900/90 p-2.5 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Zoom in"
            title="Zoom in"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </button>
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            className="rounded-lg bg-gray-900/90 p-2.5 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Zoom out"
            title="Zoom out"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
              />
            </svg>
          </button>
          {zoomLevel > 1 && (
            <button
              onClick={handleResetZoom}
              className="rounded-lg bg-gray-900/90 p-2.5 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          )}
          <div className="rounded-lg bg-gray-900/90 px-2.5 py-1.5 text-center text-xs text-white backdrop-blur-sm">
            {Math.round(zoomLevel * 100)}%
          </div>
        </div>

        {/* Navigation Arrows - Changed to dark background */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/90 p-4 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/90 p-4 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
