'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCityBySlug, City } from '../lib/cities';

export const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState<City | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    if (!router.isReady) return;
    
    const isCityPage = router.pathname.startsWith('/cities/');
    if (isCityPage && router.query.city) {
      const cityData = getCityBySlug(router.query.city as string);
      setCity(cityData || null);
    }
  }, [router.isReady, router.pathname, router.query.city]);
  
  const waMessage = city 
    ? `Hi DevSecIT, I'm from ${city.name} and interested in software development services!`
    : `Hi DevSecIT, I'm interested in discussing a project!`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 animate-fade-in">
          <a
            href={`https://wa.me/918101979855?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 dark:bg-dark-800 light:bg-white dark:border dark:border-dark-600 light:border light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 hover:dark:border-green-500 hover:light:border-green-400 transition-all shadow-lg"
          >
            <span className="text-2xl">💬</span>
            <span className="font-semibold">WhatsApp</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-3 dark:bg-dark-800 light:bg-white dark:border dark:border-dark-600 light:border light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 hover:dark:border-primary-500 hover:light:border-primary-400 transition-all shadow-lg"
          >
            <span className="text-2xl">📝</span>
            <span className="font-semibold">Contact Form</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-2xl dark:shadow-primary-500/50 light:shadow-primary-400/40 dark:hover:shadow-primary-500/70 light:hover:shadow-primary-400/50 transition-all transform hover:scale-110 flex items-center justify-center font-bold text-2xl focus:outline-none focus:ring-2 dark:focus:ring-primary-500 light:focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-dark-900 light:focus:ring-offset-white"
        aria-label="Open contact options"
        title="Quick contact options"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
};
