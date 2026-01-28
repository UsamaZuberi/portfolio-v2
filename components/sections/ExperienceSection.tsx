'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

interface Experience {
  company: string;
  location: string;
  positions: {
    title: string;
    period: string;
  }[];
  responsibilities: string[];
  technologies: string[];
  period: string;
  current?: boolean;
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: 'Hashcore',
      location: 'Karachi, Pakistan',
      positions: [
        { title: 'Sr. Software Engineer', period: 'Oct 2023 – Present' },
        { title: 'Software Engineer', period: 'Jun 2023 – Oct 2023' },
        { title: 'Frontend Developer', period: 'Apr 2023 – Jun 2023' },
      ],
      responsibilities: [
        'Leading frontend development for Ethereum and Solana based Web3 protocols using Next.js and TypeScript',
        'Integrating smart contracts and managing complex state for DeFi platforms including lending and DEX aggregators',
        'Engineered high-performance data-fetching layers using The Graph indexers (GraphQL) and REST APIs to ensure sub-second UI updates',
        'Mentoring junior developers and conducting code reviews to maintain high code quality standards',
      ],
      technologies: ['Next.js', 'TypeScript', 'Ethers.js', 'Solana Web3.js', 'GraphQL', 'Redux'],
      period: 'Apr 2023 – Present',
      current: true,
    },
    {
      company: '8th Loop',
      location: 'Karachi, Pakistan',
      positions: [
        { title: 'Frontend Developer - II', period: 'Jul 2022 – Jun 2023' },
        { title: 'Jr. Software Engineer', period: 'Feb 2022 – Jul 2022' },
        { title: 'Trainee React JS Developer', period: 'Jul 2021 – Feb 2022' },
      ],
      responsibilities: [
        'Advanced to Frontend Developer II to lead frontend logic for complex client-facing SaaS products',
        'Implemented modular component architectures and optimized application state management for reliability',
        'Collaborated with cross-functional teams to deliver high-quality features on tight deadlines',
        'Reduced application load time by 40% through code splitting and lazy loading implementations',
      ],
      technologies: ['React.js', 'Vue.js', 'TypeScript', 'REST APIs', 'Redux', 'SCSS'],
      period: 'Jul 2021 – Jun 2023',
    },
    {
      company: 'SoftThree',
      location: 'Karachi, Pakistan',
      positions: [
        { title: 'Jr. Software Engineer', period: 'Jan 2021 – Jul 2021' },
        { title: 'Software Engineering Intern', period: 'Oct 2020 – Jan 2021' },
      ],
      responsibilities: [
        'Engineered frontend structures for SaaS platforms and apprenticeship modules using React.js and Angular',
        'Earned a promotion to Jr. Software Engineer within 4 months of initial internship',
        'Developed reusable component libraries that improved development efficiency by 30%',
        'Participated in agile development processes and daily standups',
      ],
      technologies: ['React.js', 'Angular', 'JavaScript', 'Bootstrap', 'REST APIs'],
      period: 'Oct 2020 – Jul 2021',
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800"
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
                <div className="absolute -left-2 top-0 hidden h-4 w-4 rounded-full border-4 border-white bg-primary-500 shadow-lg md:block dark:border-gray-900" />

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
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    {experience.current && (
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
                      {experience.positions.map((position, posIndex) => (
                        <div
                          key={posIndex}
                          className="flex items-center justify-between rounded-lg bg-gradient-to-r from-primary-50 to-transparent p-3 dark:from-primary-900/20"
                        >
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {position.title}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {position.period}
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
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                          <span className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                          {responsibility}
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
                      {experience.technologies.map((tech, techIndex) => (
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
