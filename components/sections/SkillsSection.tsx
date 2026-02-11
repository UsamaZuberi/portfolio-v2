/**
 * SkillsSection Component
 *
 * Displays technical skills organized in multiple ways:
 * - Skill Categories: Core technologies, Web3 tools, and supporting tools
 * - Skill Highlights: Featured expertise areas with descriptions and icons
 * - Responsive grid layout that adapts to screen size
 *
 * Features:
 * - Color-coded skill categories (primary, secondary, accent)
 * - Animated gradient backgrounds on hover
 * - Icon-based highlights for key expertise
 * - Responsive design (1 col mobile → 3 cols desktop)
 * - Full accessibility with semantic HTML
 *
 * @component
 * @returns {React.ReactElement} Skills section with categories and highlights
 */

'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionLoading from '@/components/ui/SectionLoading';
import { usePortfolioData } from '@/lib/hooks/usePortfolioData';

/**
 * Type for skill category with styling properties
 */
interface SkillCategory {
  title: string;
  skills: string[];
  colorScheme: 'primary' | 'secondary' | 'accent';
  gradientFrom: string;
  gradientTo: string;
}

const SkillsSection: React.FC = () => {
  const { data: portfolioData } = usePortfolioData();

  if (!portfolioData) {
    return (
      <SectionLoading
        id="skills"
        label="Loading skills"
        className="relative overflow-hidden bg-white px-4 py-20 dark:bg-gray-800 sm:px-6 lg:px-8"
      />
    );
  }
  const skillCategories = portfolioData.skills.categories as SkillCategory[];

  const highlights = [
    {
      title: 'Frontend Excellence',
      description:
        'Expert in building responsive, performant web applications with modern frameworks',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      title: 'Web3 Development',
      description:
        'Specialized in blockchain integration, DeFi platforms, and decentralized applications',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      ),
    },
    {
      title: 'Performance Optimization',
      description: 'Proven track record of reducing load times and improving user experience',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: 'Full Stack Ready',
      description: 'Backend experience with Node.js, Python, and database management',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      ),
    },
  ];

  const getColorClasses = (colorScheme: 'primary' | 'secondary' | 'accent') => {
    const colors = {
      primary: {
        border: 'border-primary-200 dark:border-primary-800',
        bg: 'from-primary-50 to-white dark:from-primary-900/30 dark:to-gray-800',
        text: 'text-primary-700 dark:text-primary-300',
        hover: 'group-hover:from-primary-500/10 group-hover:to-secondary-500/10',
      },
      secondary: {
        border: 'border-secondary-200 dark:border-secondary-800',
        bg: 'from-secondary-50 to-white dark:from-secondary-900/30 dark:to-gray-800',
        text: 'text-secondary-700 dark:text-secondary-300',
        hover: 'group-hover:from-secondary-500/10 group-hover:to-accent-500/10',
      },
      accent: {
        border: 'border-accent-200 dark:border-accent-800',
        bg: 'from-accent-50 to-white dark:from-accent-900/30 dark:to-gray-800',
        text: 'text-accent-700 dark:text-accent-300',
        hover: 'group-hover:from-accent-500/10 group-hover:to-primary-500/10',
      },
    };
    return colors[colorScheme];
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-4 py-20 dark:bg-gray-800 sm:px-6 lg:px-8"
      role="region"
      aria-label="Skills section"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-4 top-20 h-72 w-72 animate-pulse rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -right-4 bottom-20 h-72 w-72 animate-pulse rounded-full bg-secondary-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Expertise across modern web technologies, frameworks, and tools"
          className="mb-16"
        />

        {/* Highlights Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />

              {/* Icon with pulse effect */}
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 p-3 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                <svg
                  className="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {highlight.icon}
                </svg>
              </div>

              <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                {highlight.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>

        {/* Tech Stack Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.colorScheme);
            return (
              <div
                key={categoryIndex}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.4 + categoryIndex * 0.15}s both`,
                }}
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo} transition-all duration-500 group-hover:w-16`}
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <span className="ml-auto rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`group/skill relative overflow-hidden rounded-lg border ${colors.border} bg-gradient-to-br ${colors.bg} px-5 py-3 font-medium ${colors.text} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg`}
                      style={{
                        animation: `fadeInScale 0.4s ease-out ${0.6 + categoryIndex * 0.15 + skillIndex * 0.03}s both`,
                      }}
                    >
                      {skill}
                      {/* Hover gradient overlay */}
                      <div
                        className={`absolute inset-0 -z-10 bg-gradient-to-r ${colors.hover} opacity-0 transition-all duration-300 group-hover/skill:opacity-100`}
                      />

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover/skill:translate-x-full" />
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
