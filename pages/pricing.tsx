import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PricingCalculator } from '../components/PricingCalculator';
import { Rocket, Briefcase, Building2, Check } from 'lucide-react';

const Pricing: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  
  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    priceCurrency: 'INR',
    price: 'Custom',
    description: 'DevSecIT offers flexible pricing models for custom software development, API integration, and cybersecurity services'
  };

  const plans = [
    {
      name: 'Startup MVP',
      price: '₹99,999',
      duration: 'Starting price',
      description: 'Perfect for startups and MVPs',
      features: [
        'Basic web application',
        '5-7 day delivery',
        'Responsive design',
        'Basic security',
        '30 days support',
        'Source code included'
      ],
      Icon: Rocket
    },
    {
      name: 'Professional',
      price: '₹299,999',
      duration: 'Starting price',
      description: 'For growing businesses',
      features: [
        'Full-stack application',
        'API integration',
        'Database design',
        'Advanced security',
        '90 days support',
        'Deployment included',
        '3 rounds revision'
      ],
      Icon: Briefcase,
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'Contact for quote',
      description: 'For large-scale projects',
      features: [
        'Complex systems',
        'Multiple APIs',
        'Microservices',
        'Enterprise security',
        '6 months support',
        'Dedicated team',
        'Ongoing optimization'
      ],
      Icon: Building2
    }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <Head>
        <title>Pricing - DevSecIT | Transparent Software Development Costs</title>
        <meta name="description" content="DevSecIT offers transparent, flexible pricing for custom software development, API integration, and cybersecurity services. No hidden costs." />
        <meta name="keywords" content="pricing, software development cost, API development pricing, cybersecurity pricing, India" />
        <link rel="canonical" href="https://devsecit.com/pricing" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      </Head>

      <Header activePage="pricing" />

      {isClient && (
      <>
      <section className="relative pt-32 pb-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Flexible pricing models tailored to your project needs. No hidden costs, no surprises.
          </p>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 group ${
                  plan.highlight
                    ? 'dark:bg-gradient-to-br dark:from-primary-900/40 dark:to-blue-900/40 light:bg-gradient-to-br light:from-primary-50 light:to-blue-50 dark:border-2 dark:border-primary-500 light:border-2 light:border-primary-400 transform scale-105'
                    : 'dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-200'
                }`}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <plan.Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white light:text-gray-900 transition-colors duration-300">{plan.name}</h3>
                <div className="mb-2 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{plan.description}</div>
                <div className="text-3xl font-bold text-primary-400 mb-1">{plan.price}</div>
                <div className="text-sm dark:text-gray-400 light:text-gray-600 mb-6 transition-colors duration-300">{plan.duration}</div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
                      <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/#contact" className="block w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all text-center">
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="dark:bg-dark-900 light:bg-white rounded-2xl p-8 border dark:border-dark-700 light:border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
              What&apos;s Included in All Plans?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '24/7 Expert Support',
                '99.9% Uptime SLA',
                'Security Audit',
                'Performance Optimization',
                'Free Maintenance (90 days)',
                'Source Code Ownership',
                'Responsive Design',
                'Technical Documentation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
                  <Check className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Courses Pricing Section */}
      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Professional <span className="text-gradient">Training Courses</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">
              Industry-leading certification programs with practical projects & job support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { title: 'Full-Stack Web Development', price: '₹24,999', duration: '4-6 Months', emoji: '🌐' },
              { title: 'DevSecOps', price: '₹29,999', duration: '3 Months', emoji: '🔄' },
              { title: 'Cyber Security & Ethical Hacking', price: '₹34,999', duration: '4-6 Months', emoji: '🔒' },
              { title: 'Mobile App Development', price: '₹27,999', duration: '3-4 Months', emoji: '📱' },
              { title: 'Cloud Computing (AWS/Azure/GCP)', price: '₹22,999', duration: '2-3 Months', emoji: '☁️' },
              { title: 'AI & Machine Learning', price: '₹34,999', duration: '4-6 Months', emoji: '🧠' },
              { title: 'Secure Software Engineering', price: '₹19,999', duration: '2-3 Months', emoji: '🛡️' },
              { title: 'Advanced Backend Engineering', price: '₹28,999', duration: '3-4 Months', emoji: '⚙️' },
              { title: 'Data Engineering & Big Data', price: '₹32,999', duration: '4-5 Months', emoji: '📊' },
              { title: 'Software Testing & QA', price: '₹17,999', duration: '2-3 Months', emoji: '✅' }
            ].map((course, i) => (
              <div key={i} className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg transition text-center">
                <div className="text-3xl mb-2">{course.emoji}</div>
                <h3 className="font-bold mb-2 dark:text-white light:text-gray-900 text-sm">{course.title}</h3>
                <div className="text-2xl font-bold text-primary-400 mb-1">{course.price}</div>
                <div className="text-xs dark:text-gray-400 light:text-gray-600">⏱️ {course.duration}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition">
              📚 View All Courses with Details
            </Link>
          </div>
        </div>
      </section>

      <PricingCalculator />

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-6 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
            Other Engagement <span className="text-gradient">Models</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Time & Materials',
                desc: 'Pay for actual hours worked. Perfect for flexible or evolving projects. Hourly rate starting from ₹1,500/hour.',
                icon: '⏰'
              },
              {
                title: 'Fixed Price',
                desc: 'Agree on scope and deliverables. Best for well-defined projects with clear requirements.',
                icon: '📋'
              },
              {
                title: 'Virtual CTO',
                desc: 'Strategic technology leadership with equity stake. 90-day MVP guarantee with ongoing mentorship.',
                icon: '👔'
              },
              {
                title: 'Retainer Support',
                desc: 'Monthly retainer for ongoing support, maintenance, and optimization of your existing systems.',
                icon: '🔧'
              }
            ].map((model, i) => (
              <div key={i} className="dark:bg-dark-800 light:bg-white p-6 rounded-lg border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
                <div className="text-4xl mb-3">{model.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900 transition-colors duration-300">{model.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
            Have Questions About <span className="text-gradient">Pricing?</span>
          </h2>
          <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
            Every project is unique. Let&apos;s discuss your requirements and create a custom quote.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
            Request a Custom Quote
          </Link>
        </div>
      </section>
      </>
      )}

      <Footer />
    </div>
  );
};

export default Pricing;
