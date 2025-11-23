import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { ThemeToggle } from '../components/ThemeToggle';

const Console: NextPage = () => {
  return (
    <>
      <Head>
        <title>Console - DevSecIT</title>
        <meta name="description" content="DevSecIT Console - Coming Soon" />
      </Head>

      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/" className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen pt-32 pb-20 dark:bg-dark-900 light:bg-white transition-colors duration-300 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
            DevSecIT <span className="text-gradient">Console</span>
          </h1>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
            Coming Soon. Your dedicated dashboard for managing projects and tracking development progress.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Console;
