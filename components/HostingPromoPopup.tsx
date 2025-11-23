
import { useState, useEffect, useLayoutEffect } from 'react';

export const HostingPromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check if popup was already shown today
    const today = new Date().toDateString();
    const lastShownDate = localStorage.getItem('hostingPromoLastShown');

    // Only show if it wasn't shown today
    if (lastShownDate !== today) {
      // Show popup after 40 seconds
      const timer = setTimeout(() => {
        if (!isClosed) {
          setIsVisible(true);
          // Mark as shown today
          localStorage.setItem('hostingPromoLastShown', today);
        }
      }, 40000);

      return () => clearTimeout(timer);
    }
  }, [isClosed, isClient]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  const whatsappLink = `https://wa.me/918101979855?text=Hi DevSecIT! I'm interested in developing my website with you and learning about the lifetime free hosting offer.`;

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-fade-in">
        <div className="dark:bg-dark-900 light:bg-white rounded-2xl border-2 dark:border-primary-500/50 light:border-primary-400/30 dark:shadow-2xl light:shadow-lg dark:shadow-primary-500/20 light:shadow-primary-300/20 overflow-hidden transition-colors duration-300">
          {/* Header */}
          <div className="dark:bg-gradient-to-r dark:from-primary-500/20 dark:to-blue-500/20 light:bg-gradient-to-r light:from-primary-500/10 light:to-blue-500/10 p-6 relative transition-colors duration-300">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 dark:text-gray-400 light:text-gray-600 dark:hover:text-white light:hover:text-gray-900 text-2xl leading-none transition-colors"
              aria-label="Close popup"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold dark:text-white light:text-gray-900 transition-colors duration-300">Exclusive Offer!</h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
            <div>
              <h3 className="text-xl font-bold text-gradient mb-2 transition-colors duration-300">
                Lifetime Free Hosting
              </h3>
              <p className="dark:text-gray-300 light:text-gray-600 transition-colors duration-300">
                Develop your website with DevSecIT and get <strong>lifetime free hosting</strong> included!
              </p>
            </div>

            <div className="dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg dark:border-dark-700 light:border-gray-200 border transition-colors duration-300">
              <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-3 transition-colors duration-300">
                <strong>What&apos;s included:</strong>
              </p>
              <ul className="text-sm dark:text-gray-300 light:text-gray-700 space-y-2 transition-colors duration-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>Unlimited free hosting for your website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>Custom domain setup (your choice)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>SSL certificate &amp; security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>24/7 uptime &amp; support</span>
                </li>
              </ul>
            </div>

            <p className="text-xs dark:text-gray-500 light:text-gray-500">
              Limited time offer for new projects. Valid for 1 year minimum engagement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="p-6 pt-0 flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-3 dark:bg-dark-800 light:bg-gray-200 dark:hover:bg-dark-700 light:hover:bg-gray-300 dark:text-gray-300 light:text-gray-700 rounded-lg font-semibold transition-all"
            >
              Maybe Later
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 dark:hover:shadow-lg dark:hover:shadow-green-500/50 light:hover:shadow-lg light:hover:shadow-green-400/30 text-white rounded-lg font-semibold transition-all text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostingPromoPopup;
