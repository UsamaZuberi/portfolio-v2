import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="mb-4 animate-slide-up font-heading text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-3xl animate-slide-up text-lg text-gray-600 md:text-xl dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
