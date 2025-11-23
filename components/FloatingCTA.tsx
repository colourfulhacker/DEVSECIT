import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingCTA = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-bounce">
      <a
        href="https://wa.me/918101979855?text=Hi%20DEV%20SEC%20IT,%20I'm%20interested%20in%20enrolling%20in%20a%20course"
        className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all text-white font-semibold"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">WhatsApp Now</span>
      </a>
    </div>
  );
};
