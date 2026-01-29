'use client';

import { useState, useEffect } from 'react';

interface GitHubRepoData {
  stars: number;
  forks: number;
  loading: boolean;
}

export default function GitHubRepoWidget() {
  const [repoData, setRepoData] = useState<GitHubRepoData>({
    stars: 0,
    forks: 0,
    loading: true,
  });

  const repoOwner = 'UsamaZuberi';
  const repoName = 'portfolio-v2';
  const repoUrl = `https://github.com/${repoOwner}/${repoName}`;

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        const data = await response.json();

        setRepoData({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching GitHub repo data:', error);
        setRepoData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchRepoData();
  }, []);

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
      aria-label="View source code on GitHub"
    >
      {/* GitHub Icon */}
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>

      <span>View Source</span>

      {/* Stats */}
      {!repoData.loading && (
        <div className="flex items-center gap-3 border-l border-gray-300 pl-3 dark:border-gray-600">
          {/* Stars */}
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold">{repoData.stars}</span>
          </div>

          {/* Forks */}
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 3C6.34 3 5 4.34 5 6c0 1.4.96 2.57 2.25 2.9v2.35C7.25 12.2 6.1 13.35 5 14.45 4.37 15.08 4 15.84 4 16.75V19c0 1.66 1.34 3 3 3s3-1.34 3-3v-2.25c0-.91-.37-1.67-1-2.3-1.1-1.1-2.25-2.25-2.25-3.2V8.9C8.04 8.57 9 7.4 9 6c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 17c0 .55-.45 1-1 1s-1-.45-1-1v-1.25c0-.41.16-.8.44-1.08.63-.63 1.31-1.42 1.56-2.42v4.75zm9-14c-1.66 0-3 1.34-3 3 0 1.4.96 2.57 2.25 2.9v8.35c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-1.38-1.12-2.5-2.5-2.5S8.25 12.12 8.25 13.5V17c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-2.48 2.02-4.5 4.5-4.5S15.25 11.02 15.25 13.5V17c0 1.66 1.34 3 3 3s3-1.34 3-3V8.9c1.29-.33 2.25-1.5 2.25-2.9 0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
            </svg>
            <span className="text-xs font-semibold">{repoData.forks}</span>
          </div>
        </div>
      )}
    </a>
  );
}
