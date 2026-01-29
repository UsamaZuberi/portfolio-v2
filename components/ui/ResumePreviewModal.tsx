'use client';

import React, { useEffect } from 'react';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  useEffect(() => {
    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muhammad_Usama_Zuberi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative mx-4 flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient background */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50 p-5 dark:border-gray-800 dark:from-gray-800 dark:to-gray-800">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary-600 p-2.5">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Resume Preview</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Muhammad Usama Zuberi</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Download resume"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg bg-gray-100 p-2.5 text-gray-700 transition-all hover:rotate-90 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              aria-label="Close preview"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer with enhanced styling */}
        <div className="h-full w-full flex-1 overflow-hidden bg-gray-100 dark:bg-gray-950">
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            className="h-full w-full"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;
