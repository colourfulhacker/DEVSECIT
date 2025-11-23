import { useTheme } from '../context/ThemeContext';
import { useLayoutEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 focus-visible:ring-2 dark:bg-dark-800 light:bg-gray-100 dark:hover:bg-dark-700 light:hover:bg-gray-200 text-yellow-400 dark:text-yellow-400 light:text-gray-800 dark:focus-visible:ring-primary-500 light:focus-visible:ring-primary-400"
        aria-label="Theme toggle"
        disabled
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 focus-visible:ring-2 ${
        isDark
          ? 'dark:bg-dark-800 light:bg-gray-100 dark:hover:bg-dark-700 light:hover:bg-gray-200 text-yellow-400 dark:text-yellow-400 light:text-gray-800 dark:focus-visible:ring-primary-500 light:focus-visible:ring-primary-400'
          : 'dark:bg-dark-800 light:bg-gray-100 dark:hover:bg-dark-700 light:hover:bg-gray-200 dark:text-yellow-400 light:text-gray-800 dark:focus-visible:ring-primary-500 light:focus-visible:ring-primary-400'
      }`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.414 5.414a1 1 0 01.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zm2.121-10.607a1 1 0 11-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM3 8a1 1 0 000 2h1a1 1 0 000-2H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};
