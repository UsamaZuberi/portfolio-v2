/**
 * TestimonialsSection Component
 *
 * Displays client and colleague testimonials in a responsive grid layout.
 * Features:
 * - Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
 * - Staggered fade-in animations
 * - Star ratings and profile images
 * - Quote styling with quotation marks
 * - Dark mode support
 * - Fully typed with TypeScript
 *
 * @component
 */

'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import DecorativeBackground from '@/components/ui/DecorativeBackground';
import { usePortfolioData } from '@/lib/hooks/usePortfolioData';

const TestimonialsSection: React.FC = () => {
  const { data: portfolioData } = usePortfolioData();

  const testimonials = [
    ...(portfolioData.testimonials as Array<{
      id: number;
      name: string;
      role: string;
      company: string;
      image: string;
      rating: number;
      testimonial: string;
      gender?: 'male' | 'female';
    }>),
  ].reverse(); // Show most recent testimonials first

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-900"
    >
      {/* Decorative Background Elements */}
      <DecorativeBackground variant="dense" opacity={35} />
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="What People Say"
          subtitle="Testimonials from clients and colleagues I've worked with"
        />

        {/* Stats Banner */}
        {/* <div className="mb-20 mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-md dark:bg-gray-800">
            <div className="mb-2 text-4xl font-bold text-primary-600 dark:text-primary-400">
              100%
            </div>
            <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md dark:bg-gray-800">
            <div className="mb-2 text-4xl font-bold text-primary-600 dark:text-primary-400">
              {testimonials.length}+
            </div>
            <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md dark:bg-gray-800">
            <div className="mb-2 flex items-center justify-center gap-1">
              <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">5.0</span>
              <svg className="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
        </div> */}

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
