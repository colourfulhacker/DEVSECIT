'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the timeline for MVP development?',
    answer: 'Our standard MVP development timeline is 7 days for custom APIs and 30-90 days for full-stack applications. This depends on project complexity and requirements. We provide detailed timelines during the discovery phase.'
  },
  {
    question: 'Do you offer Virtual CTO services?',
    answer: 'Yes! Our Virtual CTO service provides strategic technology leadership with up to 10% equity stake. We build your MVP in 90 days with 100% legal agreements, long-term support, and ongoing mentorship.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern tech stacks including Next.js, React, Node.js, Python, AWS, PostgreSQL, MongoDB, and more. We also provide cybersecurity integration, AI/ML solutions, and 50+ API integrations.'
  },
  {
    question: 'How do you handle cybersecurity?',
    answer: 'Security is built into every layer of development. We follow OWASP standards, conduct security audits, implement encryption, secure authentication, and provide ongoing security monitoring and updates.'
  },
  {
    question: 'What is your support model?',
    answer: 'We offer 24/7 expert support for all our clients. This includes bug fixes, performance optimization, security updates, and feature enhancements. All covered under our comprehensive SLA.'
  },
  {
    question: 'Do you serve clients outside West Bengal?',
    answer: 'Yes! We serve clients across India and internationally. We have dedicated teams in 12 major Indian cities and provide services in multiple languages and time zones.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing is flexible and depends on project scope, complexity, and timeline. We offer fixed-price projects, time-and-materials, and equity-based arrangements. Schedule a consultation for a custom quote.'
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We follow strict quality assurance protocols including code reviews, automated testing, staging environment verification, and client approval before deployment. 99.9% uptime SLA guaranteed.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="dark:bg-dark-800 light:bg-gray-50 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:dark:bg-dark-700 hover:light:bg-gray-100 transition-colors text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold dark:text-white light:text-gray-900 transition-colors duration-300">
                  {item.question}
                </h3>
                <span className={`text-primary-400 text-2xl transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 dark:bg-dark-700/50 light:bg-gray-100 border-t dark:border-dark-600 light:border-gray-200"
                >
                  <p className="dark:text-gray-300 light:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
