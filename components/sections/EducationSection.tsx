'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights?: string[];
  gpa?: string;
}

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      degree: 'Master of Science',
      field: 'Computer Science and IT',
      institution: 'NED University of Engineering and Technology',
      location: 'Karachi, Pakistan',
      period: 'Oct 2023 – Dec 2025',
      highlights: [
        'Specialized in Advanced Algorithms and Data Structures',
        'Research focus on Web3 technologies and distributed systems',
        'Machine learning applications in modern web development',
      ],
    },
    {
      degree: 'Bachelor of Science',
      field: 'Software Engineering',
      institution: 'University of Karachi',
      location: 'Karachi, Pakistan',
      period: 'Jan 2017 – Feb 2021',
      highlights: [
        'Comprehensive study of software development lifecycle',
        'Specialized in web technologies and modern frameworks',
        'Strong foundation in data structures and algorithms',
      ],
    },
  ];

  return (
    <section
      id="education"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900"
      role="region"
      aria-label="Education section"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Education & Qualifications"
          subtitle="Academic background and continuous learning"
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-800/50"
            >
              {/* Decorative element */}
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 transform rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />

              {/* Degree Badge */}
              <div className="relative mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {edu.field}
                    </p>
                  </div>
                </div>
              </div>

              {/* Institution */}
              <div className="relative mb-6">
                <h4 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {edu.institution}
                </h4>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="relative">
                  <ul className="space-y-2.5">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 dark:border-primary-800 dark:from-primary-900/20 dark:to-secondary-900/20">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Committed to staying current with the latest technologies through online courses,
                certifications, and hands-on projects. Currently exploring advanced Web3
                development, serverless architectures, and AI integration in web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
