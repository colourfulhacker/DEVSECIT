import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="dark:bg-dark-800 light:bg-gray-50 border-t dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">DevSecIT</h3>
            <p className="dark:text-gray-400 light:text-gray-600 text-sm">
              Professional IT training and custom software development solutions in West Bengal, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Courses</Link>
              </li>
              <li>
                <Link href="/pricing" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Pricing</Link>
              </li>
              <li>
                <a href="/#faq" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4">Featured Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses#course-1" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Full-Stack Web Dev</a></li>
              <li><a href="/courses#course-2" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">DevSecOps</a></li>
              <li><a href="/courses#course-3" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Cybersecurity</a></li>
              <li><a href="/courses#course-6" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">AI & ML</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+918101979855" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">📞 +91 8101 979855</a>
              </li>
              <li>
                <a href="https://wa.me/918101979855" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">💬 WhatsApp</a>
              </li>
              <li>
                <a href="mailto:sales@devsecit.com" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">📧 sales@devsecit.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-dark-700 light:border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="dark:text-gray-400 light:text-gray-600 text-sm">
            © {currentYear} DevSecIT. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
