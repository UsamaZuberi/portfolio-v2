import React from 'react';

interface SectionLoadingProps {
  id?: string;
  label: string;
  className?: string;
}

const SectionLoading: React.FC<SectionLoadingProps> = ({ id, label, className }) => {
  return (
    <section id={id} className={className} role="region" aria-label={label} aria-busy="true">
      <div className="flex min-h-[240px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
        <span className="sr-only">{label}</span>
      </div>
    </section>
  );
};

export default SectionLoading;
