
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeToggle } from '../components/ThemeToggle';

const Process: NextPage = () => {
  const processSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'DevSecIT Development Process',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Discovery & Planning',
        description: 'We understand your vision, requirements, and goals. Our team conducts stakeholder interviews and creates detailed project roadmaps.'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Design & Architecture',
        description: 'Our architects design scalable solutions with security-first approach. We create wireframes, mockups, and technical specifications.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Development & Integration',
        description: 'Our developers build using latest technologies. We integrate APIs, implement security measures, and follow agile methodology.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Testing & QA',
        description: 'Rigorous testing including unit tests, integration tests, security audits, and performance optimization before deployment.'
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Deployment & Launch',
        description: 'We deploy to production with zero-downtime strategy. Continuous monitoring ensures 99.9% uptime guarantee.'
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Support & Optimization',
        description: '24/7 ongoing support, bug fixes, security updates, and continuous optimization based on performance metrics.'
      }
    ]
  };

  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your vision, conducting stakeholder interviews, and creating detailed project roadmaps and timelines.',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Creating scalable system architecture with security-first approach. Wireframes, mockups, and technical specifications.',
      icon: '🏗️'
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'Building with latest technologies, API integration, cybersecurity implementation, and agile development methodology.',
      icon: '💻'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit tests, integration tests, security audits, and performance optimization.',
      icon: '✅'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Zero-downtime deployment to production with continuous monitoring and automatic failover systems in place.',
      icon: '🚀'
    },
    {
      number: '06',
      title: '24/7 Support',
      description: 'Ongoing maintenance, bug fixes, security updates, and performance optimization with guaranteed uptime SLA.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>Our Development Process - DevSecIT | West Bengal, India</title>
        <meta name="description" content="Learn about DevSecIT&apos;s proven development process: Discovery, Design, Development, Testing, Deployment, and 24/7 Support. From concept to production." />
        <meta name="keywords" content="development process, software methodology, agile development, DevSecIT process, quality assurance" />
        <link rel="canonical" href="https://devsecit.com/process" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }} />
      </Head>

      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/#contact" className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
            Our Proven <span className="text-gradient">Development Process</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            From concept to production, we follow a structured methodology to deliver exceptional software solutions.
          </p>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:dark:border-primary-500/50 hover:light:border-primary-400 transition-all h-full dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-4xl font-display font-bold text-primary-400 mb-2">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white light:text-gray-900 transition-colors duration-300">{step.title}</h3>
                  <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 dark:bg-gradient-to-r dark:from-primary-500 dark:to-transparent light:bg-gradient-to-r light:from-primary-400 light:to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-12 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
            Why Our Process <span className="text-gradient">Works</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Agile Methodology', desc: 'Iterative development with regular feedback cycles ensures we build exactly what you need.' },
              { title: 'Security-First', desc: 'Security is built into every step, from architecture to deployment, not added as an afterthought.' },
              { title: 'Quality Assurance', desc: 'Rigorous testing at every stage catches issues early and ensures zero production defects.' },
              { title: 'Transparent Communication', desc: 'Regular updates, sprint reviews, and open communication keep you informed every step of the way.' },
              { title: 'Scalable Architecture', desc: 'We design for growth, ensuring your solution scales as your business expands.' },
              { title: 'Continuous Support', desc: '24/7 monitoring, optimization, and support ensure ongoing success after launch.' }
            ].map((item, i) => (
              <div key={i} className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-lg border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 transition-colors duration-300">{item.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
            Let&apos;s discuss your project and how we can help you build something exceptional.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
