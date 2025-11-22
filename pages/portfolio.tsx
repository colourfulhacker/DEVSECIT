
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeToggle } from '../components/ThemeToggle';

const Portfolio: NextPage = () => {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'DevSecIT Portfolio',
    description: 'Case studies and portfolio of successful software development and cybersecurity projects'
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack Development',
      description: 'Built a scalable e-commerce platform handling 10,000+ daily transactions with advanced payment integration.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      impact: '300% revenue increase'
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile & Security',
      description: 'Developed secure financial application with encryption, 2FA, and compliance with RBI regulations.',
      tech: ['React Native', 'Python', 'AWS', 'Blockchain'],
      impact: '50,000+ users'
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Data & Analytics',
      description: 'Created real-time analytics dashboard with custom API integrations and data visualization.',
      tech: ['React', 'D3.js', 'GraphQL', 'Firebase'],
      impact: '10x faster insights'
    },
    {
      title: 'Enterprise CRM System',
      category: 'Enterprise Solutions',
      description: 'Implemented comprehensive CRM with custom workflows, reporting, and team management features.',
      tech: ['Angular', 'Java', 'Oracle', 'Microservices'],
      impact: '40% productivity gain'
    },
    {
      title: 'AI-Powered Chatbot',
      category: 'AI & Automation',
      description: 'Developed intelligent chatbot with NLP, machine learning, and 24/7 customer support capabilities.',
      tech: ['Python', 'TensorFlow', 'AWS Lambda', 'DialogFlow'],
      impact: '80% query resolution'
    },
    {
      title: 'Cybersecurity Audit Platform',
      category: 'Security & Compliance',
      description: 'Built vulnerability scanning platform with penetration testing, compliance reporting, and remediation tracking.',
      tech: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL'],
      impact: 'Enterprise-grade security'
    }
  ];

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>Portfolio - DevSecIT | Software Development Case Studies</title>
        <meta name="description" content="View DevSecIT&apos;s portfolio of 500+ successful projects. Case studies of e-commerce platforms, mobile apps, SaaS solutions, and enterprise systems." />
        <meta name="keywords" content="portfolio, case studies, projects, software development, web apps, mobile apps, cybersecurity" />
        <link rel="canonical" href="https://devsecit.com/portfolio" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />
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
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            500+ successful projects delivered. From startups to enterprises, we&apos;ve helped businesses transform their vision into reality.
          </p>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200 hover:dark:border-primary-500/50 hover:light:border-primary-400 transition-all dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20"
              >
                <div className="inline-block px-3 py-1 dark:bg-primary-500/20 light:bg-primary-50 rounded-full mb-4 border dark:border-primary-500/30 light:border-primary-200">
                  <span className="text-sm font-semibold text-primary-400">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 dark:text-white light:text-gray-900 transition-colors duration-300">{project.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold dark:text-gray-300 light:text-gray-700 mb-2 transition-colors duration-300">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 text-xs dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t dark:border-dark-700 light:border-gray-200">
                  <p className="text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                    <span className="font-semibold text-primary-400">Result:</span> {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '100+', label: 'Happy Clients' },
              { number: '12+', label: 'Years Experience' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-display font-bold mb-8 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
            Industry <span className="text-gradient">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['E-Commerce', 'FinTech', 'SaaS', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Real Estate'].map((industry, i) => (
              <div key={i} className="dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg text-center dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
            Want to See More <span className="text-gradient">Details?</span>
          </h2>
          <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
            Let&apos;s discuss your project and how our experience can help you succeed.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
