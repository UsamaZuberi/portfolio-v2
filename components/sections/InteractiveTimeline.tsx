/**
 * Interactive Timeline Component
 *
 * Displays a chronological timeline combining education and work experience.
 * Features:
 * - Unified timeline view of career journey
 * - Filter by type (All, Education, Experience)
 * - Animated scroll-triggered reveals
 * - Vertical timeline with connecting line
 * - Icons for different event types
 * - Status indicators (current, completed)
 * - Responsive design with mobile layout
 * - Dark mode support
 *
 * @component
 */

'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/types';
import { TRANSITIONS } from '@/lib/constants';
import portfolioData from '@/data';

type FilterType = 'all' | 'education' | 'experience';

const InteractiveTimeline: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  // Transform data into timeline items
  const timelineItems = [
    ...portfolioData.education.map((edu) => ({
      id: `edu-${edu.title}`,
      type: 'education' as const,
      title: edu.title,
      subtitle: `${edu.major} | ${edu.institutionName}`,
      location: edu.location,
      startDate: edu.startDate,
      endDate: edu.endDate,
      status: (edu.status === 'in-progress' ? 'in-progress' : 'completed') as
        | 'completed'
        | 'in-progress',
      description: edu.summary,
      category: 'Education',
      progressions: undefined,
    })),
    ...portfolioData.experience.map((exp) => {
      const latestRole = exp.careerProgression[0];
      return {
        id: `exp-${exp.company}`,
        type: 'experience' as const,
        title: latestRole.title,
        subtitle: exp.company,
        location: exp.location,
        startDate: exp.startDate,
        endDate: latestRole.endDate === 'Present' ? 'Present' : latestRole.endDate,
        status: (exp.currentlyWorking ? 'current' : 'completed') as 'completed' | 'current',
        description: exp.keyAchievements,
        category: 'Experience',
        progressions: exp.careerProgression,
      };
    }),
  ].sort((a, b) => {
    // Sort by start date, newest first
    const parseDate = (dateStr: string) => {
      if (dateStr === 'Present') return new Date();
      // Parse "MMM YYYY" format
      return new Date(dateStr);
    };
    const dateA = parseDate(a.startDate);
    const dateB = parseDate(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  // Filter timeline items
  const filteredItems =
    filter === 'all' ? timelineItems : timelineItems.filter((item) => item.type === filter);

  // Format date for display
  const formatDate = (date: string) => {
    if (date === 'Present') return 'Present';
    // Already in "MMM YYYY" format, return as is
    return date;
  };

  return (
    <section id="timeline" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading title="My Journey" subtitle="A chronological view of my career path" />

        {/* Filter Buttons */}
        <div className="mb-12 mt-8 flex flex-wrap justify-center gap-3">
          {[
            { value: 'all', label: 'All', icon: '🎯' },
            { value: 'education', label: 'Education', icon: '🎓' },
            { value: 'experience', label: 'Experience', icon: '💼' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as FilterType)}
              className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold ${TRANSITIONS.BASE} ${
                filter === btn.value
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary-200 via-secondary-200 to-primary-200 dark:from-primary-800 dark:via-secondary-800 dark:to-primary-800 md:left-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.type === 'education';

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                  }}
                >
                  {/* Content Card */}
                  <div
                    className={`ml-20 w-full rounded-xl bg-gray-50 p-6 shadow-md ${TRANSITIONS.BASE} hover:shadow-xl dark:bg-gray-700 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    {/* Status Badge */}
                    {(item.status === 'in-progress' || item.status === 'current') && (
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        {item.status === 'current' ? 'Currently Working' : 'In Progress'}
                      </div>
                    )}

                    {/* Title & Subtitle */}
                    <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <h4 className="mb-2 font-semibold text-primary-600 dark:text-primary-400">
                      {item.subtitle}
                    </h4>

                    {/* Meta Info */}
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.location}
                      </span>
                    </div>

                    {/* Career Progression - Enhanced Design */}
                    {item.progressions && item.progressions.length > 1 && (
                      <div className="mb-4 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 p-4 dark:from-primary-900/10 dark:to-secondary-900/10">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-md bg-primary-600 p-1">
                            <svg
                              className="h-3.5 w-3.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-400">
                            Career Path
                          </span>
                          <span className="ml-auto rounded-full bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                            {item.progressions.length} Roles
                          </span>
                        </div>
                        <div className="space-y-2.5">
                          {item.progressions.map((prog, idx) => (
                            <div
                              key={idx}
                              className="group relative flex items-start gap-3 rounded-md bg-white/60 p-2.5 transition-all hover:bg-white hover:shadow-sm dark:bg-gray-800/40 dark:hover:bg-gray-800"
                            >
                              <div className="flex flex-col items-center">
                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-xs font-bold text-white shadow-sm">
                                  {idx + 1}
                                </div>
                                {idx < item.progressions.length - 1 && (
                                  <div className="mt-1 h-full w-0.5 bg-gradient-to-b from-primary-300 to-secondary-300 dark:from-primary-700 dark:to-secondary-700" />
                                )}
                              </div>
                              <div className="flex-1 pt-0.5">
                                <div className="font-semibold text-gray-900 dark:text-white">
                                  {prog.title}
                                </div>
                                <div className="mt-0.5 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span>
                                    {formatDate(prog.startDate)} - {formatDate(prog.endDate)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {item.description && item.description.length > 0 && (
                      <ul className="space-y-2">
                        {item.description.slice(0, 3).map((desc, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg dark:border-gray-800 md:left-1/2 md:-translate-x-1/2">
                    {isEducation ? (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.27L3.81 12 12 7.73 20.19 12 12 16.27z" />
                        <path d="M12 17l-7-3.82v5.07c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5.07L12 17z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 p-6 dark:from-primary-900/20 dark:to-primary-800/20">
            <div className="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400">
              {portfolioData.education.length}
            </div>
            <p className="text-gray-700 dark:text-gray-300">Educational Qualifications</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 dark:from-secondary-900/20 dark:to-secondary-800/20">
            <div className="mb-2 text-3xl font-bold text-secondary-600 dark:text-secondary-400">
              {portfolioData.experience.length}
            </div>
            <p className="text-gray-700 dark:text-gray-300">Professional Experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
