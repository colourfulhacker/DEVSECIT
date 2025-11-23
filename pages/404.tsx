import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Custom404: NextPage = () => {
  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300 flex flex-col items-center justify-center px-4">
      <Head>
        <title>Page Not Found - DevSecIT</title>
        <meta name="description" content="The page you&apos;re looking for doesn&apos;t exist. Return to DevSecIT homepage." />
        <link rel="canonical" href="https://devsecit.com/404" />
      </Head>

      <div className="text-center">
        <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold dark:text-white light:text-gray-900 mb-4 transition-colors duration-300">
          Page Not Found
        </h1>
        
        <p className="text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-2xl mx-auto transition-colors duration-300">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 dark:hover:bg-primary-500/10 light:hover:bg-primary-50 transition-all"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/#services' },
            { title: 'Contact', href: '/#contact' }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-lg dark:hover:bg-dark-700 light:hover:bg-gray-100 transition-colors"
            >
              <div className="font-semibold dark:text-white light:text-gray-900 transition-colors duration-300">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Custom404;
