/**
 * ExperienceSection Component
 *
 * Displays professional work experience in a timeline format.
 * Shows:
 * - Career progression within companies
 * - Key achievements and responsibilities
 * - Technologies used
 * - Company logos and locations
 *
 * Features:
 * - Vertical timeline design (desktop) / Stacked cards (mobile)
 * - Gradient timeline connector
 * - Animated entrance of experience cards
 * - Responsive layout with accessibility support
 * - Expandable sections for more details
 *
 * @component
 * @returns {React.ReactElement} Timeline of professional experience
 */

'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { usePortfolioData } from '@/lib/hooks/usePortfolioData';

const ExperienceSection: React.FC = () => {
  const { data: portfolioData } = usePortfolioData();
  const experiences = portfolioData.experience;

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-50 to-white px-4 py-20 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8"
      role="region"
      aria-label="Experience section"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey through the tech industry"
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 md:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-0 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 hidden h-4 w-4 rounded-full border-4 border-white bg-primary-500 shadow-lg dark:border-gray-900 md:block" />

                {/* Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  {/* Gradient Bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500" />

                  {/* Header */}
                  <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        {experience.company}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {experience.location}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-primary-600 dark:text-primary-400">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {experience.startDate}
                        </span>
                      </div>
                    </div>

                    {experience.currentlyWorking && (
                      <span className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                        </span>
                        Current Role
                      </span>
                    )}
                  </div>

                  {/* Positions Timeline */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Career Progression
                    </h4>
                    <div className="space-y-2">
                      {experience.careerProgression.map((position, posIndex) => (
                        <div
                          key={posIndex}
                          className="flex items-center justify-between rounded-lg bg-gradient-to-r from-primary-50 to-transparent p-3 dark:from-primary-900/20"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                              {posIndex + 1}
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {position.title}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {position.startDate} – {position.endDate}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {experience.keyAchievements.map((achievement, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                          <span className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
