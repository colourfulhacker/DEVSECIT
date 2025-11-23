import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activePage?: string;
}

export const Header = ({ activePage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/courses', label: 'Courses', page: 'courses' },
    { href: '/services', label: 'Services', page: 'services' },
    { href: '/pricing', label: 'Pricing', page: 'pricing' },
    { href: '/#faq', label: 'FAQ', page: null },
  ];

  return (
    <nav suppressHydrationWarning className="fixed top-0 w-full z-50 bg-dark-900/95 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg border-b border-dark-700 dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-display font-bold text-gradient">
            DevSecIT
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  item.page && activePage === item.page
                    ? 'text-primary-400'
                    : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="https://wa.me/918101979855?text=Hi%20DevSecIT, I'm interested in discussing a project" 
              className="bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-800 border-t border-dark-700 py-4 space-y-2">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded transition-colors ${
                  item.page && activePage === item.page
                    ? 'text-primary-400 bg-dark-700'
                    : 'text-gray-300 hover:text-primary-400 hover:bg-dark-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918101979855?text=Hi%20DevSecIT, I'm interested in discussing a project"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold text-center hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
