
import { useState, useEffect, useLayoutEffect } from 'react';

interface Fact {
  title: string;
  description: string;
  category: 'Security' | 'Development' | 'API' | 'DevOps' | 'Best Practice';
}

const facts: Fact[] = [
  {
    title: '91% of Data Breaches',
    description: 'Result from non-malicious human error. Proper training and secure coding practices are your first defense against cyber threats.',
    category: 'Security'
  },
  {
    title: 'APIs Power Modern Apps',
    description: 'Over 85% of enterprise workloads now depend on APIs. Well-designed APIs are critical for scalability and integration.',
    category: 'API'
  },
  {
    title: 'Cost of Data Breach',
    description: 'Average global cost is $4.45 million in 2023. Prevention through security-first development is 10x cheaper than remediation.',
    category: 'Security'
  },
  {
    title: 'Secure Code Saves Time',
    description: 'Finding bugs after deployment costs 5-10x more than finding them during development. Security audits during development save money and time.',
    category: 'Best Practice'
  },
  {
    title: 'DevOps Reduces Deployment Time',
    description: 'Companies using CI/CD pipelines deploy 30x more frequently with 200x faster lead time. Automation improves reliability and speed.',
    category: 'DevOps'
  },
  {
    title: 'API Security Critical',
    description: '95% of breaches involve APIs. Rate limiting, OAuth 2.0, and API versioning are essential for protecting your integrations.',
    category: 'API'
  },
  {
    title: 'Code Review Best Practice',
    description: 'Peer code reviews catch 80% more bugs than manual testing alone. They improve code quality and knowledge sharing across teams.',
    category: 'Best Practice'
  },
  {
    title: 'Microservices Advantage',
    description: 'Companies using microservices can update services independently. They scale faster, deploy quicker, and reduce system downtime.',
    category: 'Development'
  },
  {
    title: 'Cloud Security',
    description: 'Shared responsibility model means both provider and customer must implement security. Understanding your provider&apos;s SLA is critical.',
    category: 'Security'
  },
  {
    title: 'Testing Matters',
    description: '1 hour of QA testing prevents 10 hours of production bug fixing. Automated testing catches 40% more issues than manual testing.',
    category: 'Best Practice'
  },
  {
    title: 'API Versioning',
    description: 'Proper API versioning prevents breaking changes for existing clients. V1, V2 endpoints allow smooth transitions and backward compatibility.',
    category: 'API'
  },
  {
    title: 'Encryption Non-Negotiable',
    description: 'HTTPS alone isn&apos;t enough. Encrypt data at rest, in transit, and implement end-to-end encryption for sensitive information.',
    category: 'Security'
  }
];

export const FactsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!autoPlay || !isMounted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, isMounted]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % facts.length);
    setAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const currentFact = facts[currentIndex];

  const categoryColors: Record<Fact['category'], string> = {
    'Security': 'dark:bg-red-500/20 light:bg-red-50 dark:border-red-500/30 light:border-red-200 dark:text-red-400 light:text-red-600',
    'API': 'dark:bg-blue-500/20 light:bg-blue-50 dark:border-blue-500/30 light:border-blue-200 dark:text-blue-400 light:text-blue-600',
    'Development': 'dark:bg-purple-500/20 light:bg-purple-50 dark:border-purple-500/30 light:border-purple-200 dark:text-purple-400 light:text-purple-600',
    'DevOps': 'dark:bg-green-500/20 light:bg-green-50 dark:border-green-500/30 light:border-green-200 dark:text-green-400 light:text-green-600',
    'Best Practice': 'dark:bg-amber-500/20 light:bg-amber-50 dark:border-amber-500/30 light:border-amber-200 dark:text-amber-400 light:text-amber-600'
  };

  return (
    <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
            Tech <span className="text-gradient">Facts & Insights</span>
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
            Stay informed with genuine facts about cybersecurity, APIs, development, and best practices in the tech industry
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="dark:bg-dark-800/50 light:bg-gray-50 rounded-xl md:rounded-2xl border dark:border-dark-700 light:border-gray-200 p-4 sm:p-6 md:p-12 min-h-80 sm:min-h-96 flex flex-col justify-between transition-colors duration-300">
            {/* Fact Content */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start justify-end gap-3 md:gap-6">
                <div className={`px-2 sm:px-3 py-1 rounded-full border text-xs sm:text-sm font-semibold whitespace-nowrap ${categoryColors[currentFact.category]} transition-colors duration-300`}>
                  {currentFact.category}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 dark:text-white light:text-gray-900 transition-colors duration-300 line-clamp-2 md:line-clamp-none">
                  {currentFact.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300 light:text-gray-700 leading-relaxed transition-colors duration-300">
                  {currentFact.description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center gap-2 md:gap-4 mt-6 md:mt-8 flex-wrap sm:flex-nowrap">
              <button
                onClick={handlePrev}
                className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm dark:bg-dark-700 light:bg-gray-200 dark:hover:bg-dark-600 light:hover:bg-gray-300 rounded-lg dark:text-gray-300 light:text-gray-700 transition-all hover:scale-110"
                aria-label="Previous fact"
              >
                ← Prev
              </button>

              <div className="text-xs sm:text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                {currentIndex + 1} / {facts.length}
              </div>

              <button
                onClick={handleNext}
                className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm dark:bg-dark-700 light:bg-gray-200 dark:hover:bg-dark-600 light:hover:bg-gray-300 rounded-lg dark:text-gray-300 light:text-gray-700 transition-all hover:scale-110"
                aria-label="Next fact"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {facts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'dark:bg-primary-500 light:bg-primary-600 w-8'
                    : 'dark:bg-dark-600 light:bg-gray-300 dark:hover:bg-dark-500 light:hover:bg-gray-400'
                } transition-colors duration-300`}
                aria-label={`Go to fact ${index + 1}`}
              />
            ))}
          </div>

          {/* Category Filter Info */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {['Security', 'API', 'Development', 'DevOps', 'Best Practice'].map((cat) => {
              const count = facts.filter(f => f.category === cat).length;
              return (
                <div key={cat} className="text-center">
                  <div className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-1 md:mb-2 ${categoryColors[cat as Fact['category']]}`}>
                    {cat}
                  </div>
                  <div className="dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm">{count} facts</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
