
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import { FloatingCTA } from '../components/FloatingCTA';
import { 
  generateOrganizationSchema, 
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateAggregateOfferSchema 
} from '../lib/seoSchema';

const Home: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi DevSecIT! 👋\n\n*Project Inquiry*\n\nName: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}Project Details:\n${formData.message}`;
    const whatsappLink = `https://wa.me/918101979855?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const seoKeywords = "professional IT courses, web development course, cybersecurity training, DevOps certification, cloud computing courses, AI machine learning training, custom software development, IT services India";

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema("Custom Software Development", "Professional custom software development and cybersecurity solutions in West Bengal, India with expertise in full-stack development, API integration, mobile applications, AI/ML, and enterprise-grade solutions"),
    generateAggregateOfferSchema()
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen bg-dark-900">
      <SEOHead
        title="DEV SEC IT - Professional IT Training & Custom Software Development"
        description="Expert-led IT courses and custom software solutions. Full-Stack Development, DevSecOps, Cybersecurity, Cloud, AI/ML training with certifications and job support."
        keywords={seoKeywords}
        canonicalUrl="https://devsecit.com"
        schemas={schemas}
      />

      <Header activePage="home" />

      {isClient && (
      <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200 transition-colors duration-300">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm">Elite Development & Training</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
              Custom Software Development <br />
              <span className="text-gradient">& Professional IT Training</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto">
              Build enterprise-grade applications and master cutting-edge technologies. From concept to deployment, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 text-center"
              >
                Start Your Project
              </a>
              <Link 
                href="/courses" 
                className="w-full sm:w-auto px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition text-center"
              >
                Explore Courses
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '10+', label: 'Years Experience' },
                { value: '7 Days', label: 'MVP Delivery' },
                { value: '99.9%', label: 'Uptime SLA' }
              ].map((stat, i) => (
                <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="dark:text-gray-400 light:text-gray-600 mt-1 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Comprehensive <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
              Custom software development, IT training, and enterprise solutions all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: '10 Professional Courses', desc: 'Web Development, DevOps, Cybersecurity, AI/ML, Cloud & more' },
              { icon: '💼', title: '22+ IT Services', desc: 'Custom development, API integration, DevOps, cloud solutions' },
              { icon: '🚀', title: 'Rapid Delivery', desc: '2-4 week MVP, 7-day API development, scalable architecture' }
            ].map((item, i) => (
              <div key={i} className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900">{item.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-dark-900 light:bg-white transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">
              Tell us about your project. We'll respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="dark:bg-dark-800 light:bg-gray-50 p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="px-4 py-3 rounded-lg dark:bg-dark-900 light:bg-white dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="px-4 py-3 rounded-lg dark:bg-dark-900 light:bg-white dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-900 light:bg-white dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <textarea
              placeholder="Describe your project"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={5}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-900 light:bg-white dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition-all"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      </>
      )}

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Home;
