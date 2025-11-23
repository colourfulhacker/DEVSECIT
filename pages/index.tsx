
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
  Rocket, GraduationCap, Briefcase, Globe, RefreshCw, Shield, Brain,
  Cloud, Bot, Zap, Lightbulb, Building2, BookOpen, Clock, Search,
  DollarSign, Target, TrendingUp, Sparkles, Smartphone, Phone, 
  MessageCircle, Award, Users, HeadphonesIcon
} from 'lucide-react';
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
    const whatsappMessage = `Hi DevSecIT!\n\n*Project Inquiry*\n\nName: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}Project Details:\n${formData.message}`;
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

  const featuredCourses = [
    { title: 'Full-Stack Web Development', price: '₹24,999', duration: '4–6 Months', Icon: Globe },
    { title: 'DevSecOps', price: '₹29,999', duration: '3 Months', Icon: RefreshCw },
    { title: 'Cyber Security & Ethical Hacking', price: '₹34,999', duration: '4–6 Months', Icon: Shield },
    { title: 'AI & Machine Learning', price: '₹34,999', duration: '4–6 Months', Icon: Brain }
  ];

  const serviceCategories = [
    { title: 'Custom Software Development', desc: 'Web, mobile, enterprise solutions', Icon: Rocket, link: '/services' },
    { title: 'Cybersecurity & Compliance', desc: 'Secure-by-design approach', Icon: Shield, link: '/services' },
    { title: 'Cloud Solutions & DevOps', desc: 'AWS, Azure, GCP & CI/CD', Icon: Cloud, link: '/services' },
    { title: 'AI & Automation', desc: 'ML models & process automation', Icon: Bot, link: '/services' },
    { title: 'API Development', desc: '7-day MVP delivery', Icon: Zap, link: '/services' },
    { title: 'IT Consulting', desc: 'Strategy & digital transformation', Icon: Lightbulb, link: '/services' }
  ];

  const pricingPlans = [
    { name: 'Startup MVP', price: '₹99,999', Icon: Rocket },
    { name: 'Professional', price: '₹299,999', Icon: Briefcase, highlight: true },
    { name: 'Enterprise', price: 'Custom', Icon: Building2 }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
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
      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm">Elite Development & Training Platform</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
              Custom Software Development <br />
              <span className="text-gradient">& Professional IT Training</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with 10 professional courses or build enterprise-grade applications. Everything you need to succeed in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Your Project
              </a>
              <Link 
                href="/courses" 
                className="w-full sm:w-auto px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition text-center flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Explore Courses
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto px-8 py-4 border-2 dark:border-blue-500/50 light:border-blue-400 rounded-lg font-bold dark:text-blue-300 light:text-blue-600 hover:shadow-lg transition text-center flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Browse Services
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Projects' },
                { value: '10+', label: 'Years' },
                { value: '7 Days', label: 'MVP' },
                { value: '99.9%', label: 'Uptime' }
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

      {/* Featured Courses Section */}
      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Featured <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">Start your journey to mastery with industry-leading training</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredCourses.map((course, i) => (
              <div key={i} className="dark:bg-dark-900 light:bg-white p-6 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg transition group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <course.Icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{course.title}</h3>
                <div className="text-sm dark:text-gray-400 light:text-gray-600 mb-4">
                  <div className="font-semibold text-primary-400">{course.price}</div>
                  <div className="text-xs flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-3">
            <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition">
              <BookOpen className="w-5 h-5" />
              View All 10 Courses
            </Link>
            <p className="text-sm dark:text-gray-400 light:text-gray-600 flex items-center justify-center gap-2 flex-wrap">
              <span className="flex items-center gap-1"><Award className="w-4 h-4" /> 100% Practical</span> •
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Job Support</span> •
              <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Certifications</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 dark:bg-dark-900 light:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              IT <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">22+ comprehensive services for every technology need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {serviceCategories.map((service, i) => (
              <Link key={i} href={service.link} className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg hover:border-primary-500/50 transition group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.Icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{service.title}</h3>
                <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-3">{service.desc}</p>
                <div className="text-primary-400 font-semibold text-sm hover:text-primary-300 flex items-center gap-1">
                  Explore <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 dark:bg-dark-700 light:bg-gray-100 rounded-lg font-bold dark:text-white light:text-gray-900 hover:shadow-lg transition">
              <Search className="w-5 h-5" />
              Browse All 22 Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Flexible <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">Choose a plan that fits your project needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {pricingPlans.map((plan, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-lg transition-all group ${
                  plan.highlight
                    ? 'dark:bg-gradient-to-br dark:from-primary-900/40 dark:to-blue-900/40 light:bg-gradient-to-br light:from-primary-50 light:to-blue-50 dark:border-2 dark:border-primary-500 light:border-2 light:border-primary-400 transform scale-105'
                    : 'dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-200'
                }`}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <plan.Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white light:text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary-400 mb-2">{plan.price}</div>
                {plan.highlight && <div className="text-sm text-primary-400 font-semibold mb-4 flex items-center gap-1">
                  <Award className="w-4 h-4" /> Most Popular
                </div>}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition">
              <DollarSign className="w-5 h-5" />
              View Complete Pricing & Details
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 dark:bg-dark-900 light:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Why Choose <span className="text-gradient">DevSecIT?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Target, title: 'Industry Expert Team', desc: 'Vetted professionals with 10+ years of experience' },
              { Icon: Zap, title: 'Rapid Delivery', desc: '2-4 week MVPs, 7-day API development' },
              { Icon: Shield, title: 'Security First', desc: 'OWASP compliance, penetration testing built-in' },
              { Icon: TrendingUp, title: 'Scalable Solutions', desc: 'Handle millions of users without breaking' },
              { Icon: HeadphonesIcon, title: '24/7 Support', desc: 'Round-the-clock assistance & maintenance' },
              { Icon: Sparkles, title: 'Quality Guaranteed', desc: '100% test coverage, zero critical vulnerabilities' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900">{item.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">
              Tell us about your project or learning goals. We'll respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <textarea
              placeholder="Describe your project or learning goal"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={5}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918101979855" className="px-6 py-2 dark:text-primary-400 light:text-primary-600 font-semibold hover:underline flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                +91 8101 979855
              </a>
              <a href="https://wa.me/918101979855" className="px-6 py-2 dark:text-green-400 light:text-green-600 font-semibold hover:underline flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
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
