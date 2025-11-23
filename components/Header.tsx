import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activePage?: string;
}

export const Header = ({ activePage }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/95 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg border-b border-dark-700 dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-display font-bold text-gradient">
            DevSecIT
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${activePage === 'home' ? 'text-primary-400' : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400'}`}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className={`transition-colors ${activePage === 'courses' ? 'text-primary-400' : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400'}`}
            >
              Courses
            </Link>
            <Link 
              href="/pricing" 
              className={`transition-colors ${activePage === 'pricing' ? 'text-primary-400' : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400'}`}
            >
              Pricing
            </Link>
            <a 
              href="/#faq" 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors"
            >
              FAQ
            </a>
            <a 
              href="https://wa.me/918101979855?text=Hi%20DEV%20SEC%20IT,%20I'm%20interested%20in%20enrolling" 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors"
            >
              Enroll
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="https://wa.me/918101979855?text=Hi%20DEV%20SEC%20IT,%20I'm%20interested%20in%20enrolling" 
              className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
