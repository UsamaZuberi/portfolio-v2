'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import type { PortfolioItem } from '@/types';

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleViewScreenshots = (item: PortfolioItem) => {
    setSelectedProject(item);
    setIsGalleryOpen(true);
  };

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Pixtool',
      description:
        'A SaaS web app for video editing, sharing & stage simulation with advanced features.',
      logo: '/images/placeholder-project.svg',
      link: 'https://pixtool-66579.firebaseapp.com/home',
      tags: ['React', 'Video Processing', 'SaaS'],
      featured: true,
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'A comprehensive SaaS platform for video editing, sharing, and stage simulation. Features include real-time collaboration, advanced editing tools, and cloud storage integration.',
      year: 2023,
      technologies: ['React', 'Node.js', 'Firebase', 'Video.js'],
    },
    {
      id: '2',
      title: 'Eberhard Capital',
      description:
        'Official website of Eberhard Capital with modern design and investment portfolio.',
      logo: '/images/placeholder-project.svg',
      link: 'http://eberhardcapital.com/',
      tags: ['Web Design', 'Corporate'],
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Professional corporate website featuring investment portfolio management, financial analytics, and client resources.',
      year: 2023,
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: '3',
      title: '7 Star Training',
      description:
        'A SaaS web app for apprenticeship trainings with comprehensive course management.',
      logo: '/images/placeholder-project.svg',
      link: 'https://star-309014.ew.r.appspot.com/',
      tags: ['SaaS', 'Education', 'React'],
      featured: true,
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Educational platform for managing apprenticeship programs with course scheduling, progress tracking, and certification management.',
      year: 2022,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: '4',
      title: 'EHJ & SJ Consultancy',
      description: 'Official website of EHJ & SJ Consultancy providing professional services.',
      logo: '/images/placeholder-project.svg',
      link: 'https://ehjsjconsultancy.com/',
      tags: ['Corporate', 'Web Design'],
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Corporate website for consultancy services with service offerings, case studies, and client testimonials.',
      year: 2022,
      technologies: ['React', 'Next.js', 'CSS'],
    },
    {
      id: '5',
      title: 'Novospace',
      description:
        'A SaaS web app for hardware & product configurations with advanced customization.',
      logo: '/images/placeholder-project.svg',
      link: 'https://novo-back.herokuapp.com/',
      tags: ['SaaS', 'Configuration', 'React'],
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Product configuration platform allowing users to customize hardware specifications, visualize configurations, and generate quotes.',
      year: 2022,
      technologies: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: '6',
      title: 'Natours',
      description: 'A website for fictional tour company Natours with stunning CSS animations.',
      logo: '/images/placeholder-project.svg',
      link: 'https://usamazuberi.github.io/Natours/',
      tags: ['CSS', 'Animation', 'Design'],
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Demo project showcasing advanced CSS animations, transitions, and modern web design techniques.',
      year: 2021,
      technologies: ['HTML', 'CSS', 'SASS'],
    },
    {
      id: '7',
      title: 'Nexter',
      description: 'A website for fictional real estate company Nexter showcasing properties.',
      logo: '/images/placeholder-project.svg',
      link: 'https://usamazuberi.github.io/Nexter/',
      tags: ['CSS Grid', 'Real Estate'],
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Real estate website demonstrating CSS Grid layout techniques and responsive design patterns.',
      year: 2021,
      technologies: ['HTML', 'CSS', 'CSS Grid'],
    },
    {
      id: '8',
      title: 'Trillo',
      description: 'A website for fictional all-in-one tour company Trillo with modern UI.',
      logo: '/images/placeholder-project.svg',
      link: 'https://usamazuberi.github.io/Trillo/',
      tags: ['Flexbox', 'Tour', 'Design'],
      images: ['/images/placeholder-project.svg', '/images/placeholder-project.svg'],
      longDescription:
        'Tour booking website showcasing Flexbox layouts and modern UI design principles.',
      year: 2021,
      technologies: ['HTML', 'CSS', 'Flexbox'],
    },
    {
      id: '9',
      title: 'Cylinder',
      description: 'A web calculator for complex daily hot water requirements calculation.',
      logo: '/images/placeholder-project.svg',
      link: 'https://cylinder-41ed8.firebaseapp.com/',
      tags: ['Calculator', 'Utility'],
      images: [
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
        '/images/placeholder-project.svg',
      ],
      longDescription:
        'Utility calculator for determining daily hot water requirements based on various parameters and usage patterns.',
      year: 2020,
      technologies: ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-br from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800"
      role="region"
      aria-label="Portfolio section"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Key Recent Projects"
          subtitle="Showcasing my best work in web development and design"
          className="mb-12"
        />

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Featured Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioItems
              .filter((item) => item.featured)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="group relative animate-fade-in overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Featured Badge */}
                  <div className="absolute right-4 top-4 z-10 animate-pulse rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-xs font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-110">
                    Featured
                  </div>

                  {/* Screenshot Gallery Preview */}
                  <div
                    className="to-accent-50 dark:to-accent-900/20 relative h-56 cursor-pointer overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 dark:from-primary-900/20 dark:via-secondary-900/20"
                    onClick={() => handleViewScreenshots(item)}
                  >
                    {/* Decorative elements */}
                    <div className="absolute -right-12 -top-12 h-32 w-32 animate-pulse rounded-full bg-primary-400/20 blur-3xl transition-all duration-700 group-hover:scale-150" />
                    <div className="absolute -bottom-8 -left-8 h-24 w-24 animate-pulse rounded-full bg-secondary-400/20 blur-2xl transition-all duration-700 group-hover:scale-150" />

                    {item.images && item.images[0] && (
                      <img
                        src={item.images[0]}
                        alt={`${item.title} screenshot`}
                        className="relative z-10 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                    )}

                    {/* Gradient overlay with shine effect */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-tr from-primary-600/10 via-transparent to-secondary-600/10 opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* Screenshot count badge with gradient */}
                    {item.images && item.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl">
                        <svg
                          className="h-4 w-4 animate-pulse"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.images.length}
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <div className="mb-2 flex items-start justify-between">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        {item.year && (
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {item.year}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.longDescription || item.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies &&
                          item.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* View Project Button */}
                    <button
                      onClick={() => handleViewScreenshots(item)}
                      className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-primary-700 hover:to-primary-800 hover:shadow-xl hover:shadow-primary-500/50 active:scale-95"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full" />
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Project
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            All Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative animate-fade-in overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Screenshot Preview */}
                <div
                  className="to-accent-50/50 dark:to-accent-900/10 relative h-48 cursor-pointer overflow-hidden bg-gradient-to-br from-primary-50/50 via-secondary-50/50 dark:from-primary-900/10 dark:via-secondary-900/10"
                  onClick={() => handleViewScreenshots(item)}
                >
                  {/* Decorative blur */}
                  <div className="absolute -right-8 -top-8 h-20 w-20 animate-pulse rounded-full bg-primary-400/10 blur-2xl transition-all duration-700 group-hover:scale-150" />

                  <img
                    src={item.images?.[0] || '/images/placeholder-project.svg'}
                    alt={`${item.title} preview`}
                    className="relative z-10 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-primary-600/5 via-transparent to-secondary-600/5 opacity-50 transition-opacity duration-500 group-hover:opacity-70" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Screenshot count badge */}
                  {item.images && item.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      <svg
                        className="h-3.5 w-3.5 animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.images.length}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h4 className="flex-1 text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    {item.year && (
                      <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags &&
                      item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-primary-50 hover:text-primary-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {/* View Project Button */}
                  <button
                    onClick={() => handleViewScreenshots(item)}
                    className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-primary-100 hover:shadow-lg hover:shadow-primary-500/20 active:scale-95 dark:bg-primary-900/30 dark:text-primary-400 dark:hover:bg-primary-900/50"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full" />
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 text-center dark:border-primary-800 dark:from-primary-900/20 dark:to-secondary-900/20">
          <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
            Interested in working together?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Let&apos;s Talk
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && selectedProject.images && (
        <ImageGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => {
            setIsGalleryOpen(false);
            setSelectedProject(null);
          }}
          images={selectedProject.images}
          initialIndex={0}
          projectTitle={selectedProject.title}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
