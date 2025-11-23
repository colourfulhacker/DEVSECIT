
import type { NextPage } from 'next';
import { useState, useLayoutEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { APISlider } from '../components/APISlider';
import { APIOrderModal } from '../components/APIOrderModal';
import { APIService, allAPICategories, topCommonAPIs } from '../lib/apiServices';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import { FloatingCTA } from '../components/FloatingCTA';
import { FactsSlider } from '../components/FactsSlider';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAPIService, setSelectedAPIService] = useState<APIService | null>(null);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to sales email via mailto
    const mailtoLink = `mailto:sales@devsecit.com?subject=New Project Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nProject Details:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const whatsappLink = `https://wa.me/918101979855?text=Hi DevSecIT, I&apos;m interested in discussing a project. Let&apos;s connect!`;

  // SEO Keywords - Professional IT Training focused
  const seoKeywords = "professional IT courses, web development course, cybersecurity training, DevOps certification, cloud computing courses, AI machine learning training, full-stack development course, mobile app development, data engineering, IT training India";

  // Schema.org structured data
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema("Custom Software Development", "Professional custom software development and cybersecurity solutions in West Bengal, India with expertise in full-stack development, API integration, mobile applications, AI/ML, and enterprise-grade solutions"),
    generateAggregateOfferSchema()
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen bg-dark-900 dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <SEOHead
        title="DEV SEC IT - Professional IT Training & Certification Courses"
        description="Expert-led professional IT courses in Web Development, DevSecOps, Cybersecurity, Cloud, AI/ML, and more. 100% practical training with certifications, real projects, internship & job support."
        keywords={seoKeywords}
        canonicalUrl="https://devsecit.com"
        schemas={schemas}
      />

      <Header activePage="home" />

      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200 transition-colors duration-300">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm transition-colors duration-300">Elite Development & Cybersecurity</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
              Custom Software Development <br />
              <span className="text-gradient">& API Integration in West Bengal</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-400 light:text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Full-spectrum software development, cybersecurity integration, and AI-powered solutions. 
              From concept to deployment, we build what others can&apos;t.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full sm:w-auto">
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg md:rounded-xl font-bold text-base sm:text-lg text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 dark:hover:shadow-primary-500/50 light:hover:shadow-primary-400/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-900 light:focus:ring-offset-white text-center"
              >
                Start Your Project
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg md:rounded-xl font-bold text-base sm:text-lg dark:text-gray-100 light:text-gray-900 dark:hover:bg-primary-500/10 light:hover:bg-primary-50 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-900 light:focus:ring-offset-white text-center"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Projects Delivered', role: 'doc-subtitle' },
                { value: '99.9%', label: 'Uptime SLA', role: 'doc-subtitle' },
                { value: '7 Days', label: 'API MVP Delivery', role: 'doc-subtitle' },
                { value: '24/7', label: 'Expert Support', role: 'doc-subtitle' }
              ].map((stat, i) => (
                <div key={i} className="animate-slide-up transition-colors duration-300" style={{ animationDelay: `${i * 0.1}s` }} role="contentinfo">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="dark:text-gray-400 light:text-gray-600 mt-1 text-xs sm:text-sm transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
              Comprehensive <span className="text-gradient">IT Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              End-to-end technology solutions tailored to your unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: '🚀',
                title: 'Custom Software Development',
                description: 'Bespoke applications for individuals, startups, and enterprises. Full-stack development with modern frameworks and scalable architecture.',
                features: ['Web & Mobile Apps', 'SaaS Platforms', 'Enterprise Solutions', 'Legacy Modernization']
              },
              {
                icon: '🔒',
                title: 'Cybersecurity Integration',
                description: 'Security-first development approach. Protect your digital assets with enterprise-grade security measures built into every layer.',
                features: ['Secure-by-Design', 'Penetration Testing', 'Compliance (GDPR, SOC 2)', 'Security Audits']
              },
              {
                icon: '🤖',
                title: 'AI & Automation',
                description: 'Harness the power of artificial intelligence and machine learning to automate processes and gain competitive advantages.',
                features: ['Machine Learning', 'Process Automation', 'Intelligent Analytics', 'AI Integration']
              },
              {
                icon: '⚡',
                title: 'Custom API Development',
                description: 'Build any API you need, no matter how specialized. 7-day MVP delivery for rapid prototyping and market validation.',
                features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Real-time APIs']
              },
              {
                icon: '🎯',
                title: 'Full Project Outsourcing',
                description: 'Hand over your entire project to our expert team. From planning to deployment, we handle everything while you focus on your business.',
                features: ['End-to-End Delivery', 'Agile Development', 'DevOps & CI/CD', 'Maintenance & Support']
              },
              {
                icon: '💡',
                title: 'Digital Transformation',
                description: 'Modernize your business with cutting-edge technology. Cloud migration, digital solutions, and strategic IT consulting.',
                features: ['Cloud Solutions', 'System Integration', 'IT Strategy', 'Performance Optimization']
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group dark:bg-dark-900 light:bg-white p-4 md:p-8 rounded-lg md:rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-400 transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 dark:text-gray-100 light:text-gray-900 transition-colors duration-300">{service.title}</h3>
                <p className="text-sm md:text-base dark:text-gray-400 light:text-gray-600 mb-3 md:mb-4 leading-relaxed transition-colors duration-300">{service.description}</p>
                <ul className="space-y-1 md:space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-xs md:text-sm dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
                      <span className="text-primary-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="techstack" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
              Our <span className="text-gradient">Technology Stack</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              We work with cutting-edge technologies to deliver exceptional solutions
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-dark-800 p-4 md:p-8 rounded-lg md:rounded-2xl border border-dark-700">
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-primary-400">Frontend Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Next.js', icon: '▲' },
                  { name: 'Vue.js', icon: '💚' },
                  { name: 'Angular', icon: '🅰️' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Tailwind CSS', icon: '🎨' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-3 md:p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-2xl md:text-3xl mb-1 md:mb-2">{tech.icon}</div>
                    <div className="text-xs md:text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 p-4 md:p-8 rounded-lg md:rounded-2xl border border-dark-700">
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-primary-400">Backend Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                {[
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'Go', icon: '🔷' },
                  { name: 'Rust', icon: '⚙️' },
                  { name: 'Java', icon: '☕' },
                  { name: 'PHP', icon: '🐘' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-3 md:p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-2xl md:text-3xl mb-1 md:mb-2">{tech.icon}</div>
                    <div className="text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Database & Storage</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'MongoDB', icon: '🍃' },
                  { name: 'Redis', icon: '🔴' },
                  { name: 'MySQL', icon: '🐬' },
                  { name: 'Firebase', icon: '🔥' },
                  { name: 'DynamoDB', icon: '⚡' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Cloud & DevOps</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'AWS', icon: '☁️' },
                  { name: 'Azure', icon: '🌐' },
                  { name: 'GCP', icon: '🔵' },
                  { name: 'Docker', icon: '🐳' },
                  { name: 'Kubernetes', icon: '⚓' },
                  { name: 'CI/CD', icon: '🔄' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Mobile Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'React Native', icon: '📱' },
                  { name: 'Flutter', icon: '🦋' },
                  { name: 'Swift', icon: '🍎' },
                  { name: 'Kotlin', icon: '🤖' },
                  { name: 'Ionic', icon: '⚡' },
                  { name: 'Xamarin', icon: '🔷' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">AI & Machine Learning</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'TensorFlow', icon: '🧠' },
                  { name: 'PyTorch', icon: '🔥' },
                  { name: 'OpenAI', icon: '🤖' },
                  { name: 'Scikit-learn', icon: '📊' },
                  { name: 'Hugging Face', icon: '🤗' },
                  { name: 'LangChain', icon: '🔗' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
              Elite <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Why industry leaders trust us with their most critical projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">Secure-by-Design Development</h3>
              <p className="dark:text-gray-400 light:text-gray-700 text-lg mb-6 leading-relaxed transition-colors duration-300">
                Security isn&apos;t an afterthought—it&apos;s embedded in every line of code. Our cybersecurity-integrated 
                development approach ensures your applications are protected from day one.
              </p>
              <div className="space-y-4">
                {[
                  'OWASP Top 10 compliance',
                  'Zero-trust architecture',
                  'Automated security testing',
                  'Regular vulnerability assessments'
                ].map((item, i) => (
                  <div key={i} className="flex items-center dark:bg-dark-800 light:bg-gray-100 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-4"></div>
                    <span className="dark:text-gray-200 light:text-gray-800 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative dark:bg-dark-800 light:bg-gray-50 p-8 rounded-3xl dark:border dark:border-dark-700 light:border light:border-gray-200 transition-colors duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-300 light:text-gray-700 transition-colors duration-300">Code Security Score</span>
                    <span className="text-2xl font-bold text-gradient">A+</span>
                  </div>
                  <div className="h-4 dark:bg-dark-700 light:bg-gray-200 rounded-full overflow-hidden transition-colors duration-300">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-blue-600" style={{ width: '98%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-400 transition-colors duration-300">100%</div>
                      <div className="text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Test Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-400 transition-colors duration-300">0</div>
                      <div className="text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Critical Vulns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rapid MVP Delivery',
                description: 'Launch your minimum viable product in weeks, not months. Perfect for startups and market validation.',
                metric: '2-4 Weeks',
                highlight: 'Average MVP Time'
              },
              {
                title: 'Scalable Architecture',
                description: 'Built to grow with your business. Handle millions of users without breaking a sweat.',
                metric: '10M+',
                highlight: 'Concurrent Users'
              },
              {
                title: 'Modern Tech Stack',
                description: 'React, Node.js, Python, Go, Kubernetes, AWS, Azure—we master the tools that matter.',
                metric: '50+',
                highlight: 'Technologies'
              }
            ].map((capability, i) => (
              <div key={i} className="dark:bg-gradient-to-br dark:from-dark-800 dark:to-dark-900 light:bg-gradient-to-br light:from-gray-100 light:to-gray-50 p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-400 transition-all duration-300">
                <div className="text-4xl font-bold dark:text-gradient light:bg-gradient-to-r light:from-primary-600 light:to-blue-700 light:bg-clip-text light:text-transparent mb-2">{capability.metric}</div>
                <div className="text-sm dark:text-primary-400 light:text-primary-700 font-semibold mb-4 transition-colors duration-300">{capability.highlight}</div>
                <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 transition-colors duration-300">{capability.title}</h4>
                <p className="dark:text-gray-400 light:text-gray-700 leading-relaxed transition-colors duration-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="py-20 dark:bg-dark-800/50 light:bg-gray-100/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="dark:bg-gradient-to-br dark:from-primary-900/30 dark:to-blue-900/30 light:bg-gradient-to-br light:from-primary-100 light:to-blue-100 rounded-3xl p-12 md:p-16 dark:border dark:border-primary-500/30 light:border light:border-primary-300/50 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 dark:bg-primary-500/20 light:bg-primary-400/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 dark:bg-primary-500/20 light:bg-primary-100 rounded-full dark:border dark:border-primary-500/50 light:border light:border-primary-300 mb-6 transition-colors duration-300">
                    <span className="dark:text-primary-300 light:text-primary-700 font-semibold transition-colors duration-300">⚡ Rapid API Development</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
                    Need a Custom API?
                    <br />
                    <span className="text-gradient">We&apos;ll Build It in 7 Days</span>
                  </h2>
                  <p className="text-xl dark:text-gray-300 light:text-gray-700 mb-8 leading-relaxed transition-colors duration-300">
                    Can&apos;t find the API you need? Whether it&apos;s a specialized music API, rare data integration, 
                    or unique business logic—we create custom APIs tailored to your exact requirements.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      'MVP delivered in 7 days or less',
                      'RESTful, GraphQL, or WebSocket',
                      'Complete documentation included',
                      'Production-ready and scalable',
                      'Security and rate limiting built-in'
                    ].map((point, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="dark:text-gray-200 light:text-gray-800 text-lg transition-colors duration-300">{point}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="#contact" 
                    className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 text-white"
                  >
                    Request Custom API
                  </a>
                </div>
                <div className="dark:bg-dark-900/50 light:bg-white/50 p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-300 transition-colors duration-300">
                  <div className="font-mono text-sm">
                    <div className="dark:text-primary-400 light:text-primary-600 mb-4 transition-colors duration-300">{`// Example: Custom Music API`}</div>
                    <div className="dark:text-gray-400 light:text-gray-700 transition-colors duration-300">
                      <span className="dark:text-blue-400 light:text-blue-600 transition-colors duration-300">GET</span> /api/v1/music/search
                    </div>
                    <div className="dark:bg-dark-800 light:bg-gray-100 p-4 rounded-lg mt-4 text-xs overflow-x-auto transition-colors duration-300">
                      <pre className="dark:text-gray-300 light:text-gray-800 transition-colors duration-300">
{`{
  "query": "jazz classics",
  "filters": {
    "era": "1960s",
    "mood": "relaxing"
  },
  "results": [
    {
      "title": "Take Five",
      "artist": "Dave Brubeck",
      "year": 1959,
      "spotify_id": "...",
      "audio_features": {...}
    }
  ]
}`}
                      </pre>
                    </div>
                    <div className="mt-6 dark:text-gray-400 light:text-gray-700 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span>Response Time</span>
                        <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">47ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Uptime</span>
                        <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">99.99%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Virtual CTO Service Section */}
      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="dark:bg-dark-800 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 transition-colors duration-300">
              <div className="space-y-6">
                <div className="dark:bg-dark-900 light:bg-gray-50 p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 transition-colors duration-300">
                  <h4 className="text-sm font-bold dark:text-primary-400 light:text-primary-600 mb-4 transition-colors duration-300">What&apos;s Included:</h4>
                  <ul className="space-y-3 dark:text-gray-300 light:text-gray-700 text-sm transition-colors duration-300">
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>Experienced CTO as Technical Co-founder (full-time/part-time)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>Architecture &amp; Tech Stack Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>MVP Development &amp; Deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>Team Building &amp; Engineering Leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>DevOps &amp; Infrastructure Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>90-day launch guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="dark:text-primary-400 light:text-primary-600 font-bold transition-colors duration-300">✓</span>
                      <span>Long-term technical strategy &amp; scaling</span>
                    </li>
                  </ul>
                </div>

                <div className="dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-primary-500/10 light:bg-blue-50 p-4 rounded-xl dark:border dark:border-blue-500/30 light:border light:border-blue-200 transition-colors duration-300">
                  <p className="text-xs dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                    <strong>Best for:</strong> Tech-first startups needing proven technical leadership, architecture expertise, and rapid MVP execution with scalable foundations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-6 px-4 py-2 dark:bg-blue-500/10 light:bg-blue-100 rounded-full dark:border dark:border-blue-500/30 light:border light:border-blue-300 transition-colors duration-300">
                <span className="dark:text-blue-400 light:text-blue-700 font-semibold text-sm transition-colors duration-300">Premium Technical Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
                Hire a <span className="text-gradient">Virtual CTO</span> for Your Startup
              </h2>
              <p className="text-xl dark:text-gray-300 light:text-gray-700 mb-8 transition-colors duration-300">
                Get an experienced Chief Technology Officer as a technical co-founder to build your MVP and lead engineering. Equity-based partnership with 100% legal agreements.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💻</div>
                  <div>
                    <h4 className="font-bold dark:text-white light:text-gray-900 mb-1 transition-colors duration-300">Technical Leadership</h4>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">Proven engineering expertise with 15+ years building scalable tech products</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏗️</div>
                  <div>
                    <h4 className="font-bold dark:text-white light:text-gray-900 mb-1 transition-colors duration-300">Architecture &amp; Design</h4>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">Enterprise-grade system design from day one, built for scale</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-bold dark:text-white light:text-gray-900 mb-1 transition-colors duration-300">Up to 10% Equity</h4>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">Performance-based equity stake aligned with product success</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚖️</div>
                  <div>
                    <h4 className="font-bold dark:text-white light:text-gray-900 mb-1 transition-colors duration-300">100% Legal Framework</h4>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">Complete legal documentation from incorporation to equity agreements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-bold dark:text-white light:text-gray-900 mb-1 transition-colors duration-300">Beyond Launch Support</h4>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">Ongoing CTO-level guidance for Series A, scaling, and team building</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/918101979855?text=Hi DevSecIT! I&apos;m interested in the Virtual CTO service for my startup. Let&apos;s discuss how we can build the MVP together.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all text-white text-center"
                >
                  💬 Start Conversation
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 dark:border-2 dark:border-blue-500/50 light:border-2 light:border-blue-600 rounded-lg font-bold dark:hover:bg-blue-500/10 light:hover:bg-blue-200 transition-all dark:text-white light:text-blue-900 text-center transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              We Serve <span className="text-gradient">Every Client</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From individual developers to Fortune 500 companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👤',
                title: 'Individuals',
                description: 'Personal projects and portfolio pieces with professional quality'
              },
              {
                icon: '🚀',
                title: 'Startups',
                description: 'MVP development and rapid scaling for growing companies'
              },
              {
                icon: '💼',
                title: 'SMBs',
                description: 'Custom solutions to digitize and optimize business operations'
              },
              {
                icon: '🏢',
                title: 'Enterprises',
                description: 'Mission-critical systems with enterprise-grade reliability'
              }
            ].map((segment, i) => (
              <div key={i} className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all text-center">
                <div className="text-5xl mb-4">{segment.icon}</div>
                <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
                <p className="text-gray-400 text-sm">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Services Section */}
      <section id="apis" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Custom API Development <span className="text-gradient">& Integration</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Need a specific API integrated into your application? We design, develop, and integrate APIs tailored to your exact business needs, requirements, and use cases.
            </p>
          </div>

          {/* Custom API Development Capabilities */}
          <div className="mb-16 bg-gradient-to-r from-primary-500/10 via-blue-500/10 to-primary-500/10 p-8 md:p-12 rounded-2xl border border-primary-500/40">
            <h3 className="text-2xl font-bold text-white mb-6">Our API Integration Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-white mb-2">Custom Requirements</h4>
                <p className="text-gray-300 text-sm">We analyze your business logic, integrate any third-party API, and build custom APIs from scratch based on your exact specifications.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🔗</div>
                <h4 className="font-bold text-white mb-2">Any API You Need</h4>
                <p className="text-gray-300 text-sm">Music, payments, AI, social media, databases, IoT—we integrate 100+ popular APIs plus custom proprietary systems and legacy APIs.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-white mb-2">Rapid Development</h4>
                <p className="text-gray-300 text-sm">From requirement gathering to deployment, we deliver production-ready API integrations in as little as 7 days for simple use cases.</p>
              </div>
            </div>
          </div>

          {/* Examples of APIs We Can Integrate */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-3">Examples: APIs We Can Integrate for Your Use Case</h3>
            <p className="text-gray-400 mb-6">Below are popular APIs we regularly integrate. Tell us your need, and we&apos;ll integrate the right solution for you.</p>
            
            {/* Top APIs Examples */}
            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700 mb-8">
              <h4 className="text-lg font-bold text-white mb-4">Popular API Examples We Integrate</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCommonAPIs.map((api, i) => (
                <div key={i} className="bg-dark-900 p-4 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all">
                  <div className="text-4xl mb-2">{api.icon}</div>
                  <h4 className="font-bold text-white mb-1">{api.name}</h4>
                  <p className="text-xs text-gray-400 mb-3">{api.category}</p>
                  <button
                    onClick={() => setSelectedAPIService(api)}
                    className="w-full px-3 py-2 bg-primary-500/20 hover:bg-primary-500/40 text-primary-300 rounded text-sm font-semibold transition-all"
                  >
                    Custom Order
                  </button>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* API Sliders by Category - Labeled as Examples */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6">Browse API Categories</h3>
            {allAPICategories.map((category, i) => (
              <APISlider
                key={i}
                title={`${category.icon} ${category.name}`}
                apis={category.apis}
                onOrderClick={setSelectedAPIService}
              />
            ))}
          </div>

          {/* Main CTA - Custom API Integration */}
          <div className="mt-16 dark:bg-gradient-to-r dark:from-primary-500/20 dark:via-blue-500/20 dark:to-primary-500/20 light:bg-gradient-to-r light:from-primary-100 light:via-blue-100 light:to-primary-100 p-8 md:p-12 rounded-2xl dark:border-2 dark:border-primary-500/50 light:border-2 light:border-primary-300/50 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold dark:text-white light:text-gray-900 mb-4 transition-colors duration-300">Have a Unique Use Case?</h3>
                <p className="dark:text-gray-300 light:text-gray-700 mb-4 transition-colors duration-300">
                  Whether you need to integrate a niche API, build a custom API from scratch, or combine multiple services into one unified solution—we handle it all. Tell us what you need, and we&apos;ll build it.
                </p>
                <p className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">
                  <strong>Timeline:</strong> Simple integrations in 7 days • <strong>Scope:</strong> From single APIs to complex multi-service platforms
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white text-center text-lg"
                >
                  Discuss Your API Needs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
              <span className="text-gradient">Robust Features</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Simplify operations for your business. With concepts in mind, we carefully design and perfect every detail to match your vision and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🔗',
                title: 'Integrate and synchronize',
                description: 'Integrate and synchronize easily with DSI APIs'
              },
              {
                icon: '🎨',
                title: 'Personalize your site',
                description: 'Using DSI Studio you can customize your website as you want!'
              },
              {
                icon: '🤖',
                title: 'Enhance and automate',
                description: 'DSI AI is here to help you automate business!'
              },
              {
                icon: '🧠',
                title: 'AI companion',
                description: 'Create your own AI agent with DSI AI and take benefits of AI'
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group dark:bg-dark-800 light:bg-gray-50 p-4 md:p-8 rounded-lg md:rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-400 transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20 animate-slide-up text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 dark:text-gray-100 light:text-gray-900 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm md:text-base dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              Ready to <span className="text-gradient">Build Something Great?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
              Let&apos;s discuss your project and turn your vision into reality
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-900 p-4 md:p-8 lg:p-12 rounded-lg md:rounded-2xl border border-dark-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors"
                  placeholder="John Doe"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors"
                  placeholder="john@company.com"
                  aria-label="Your Email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Company (Optional)</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors"
                placeholder="Your Company"
                aria-label="Company Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Project Details *</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors resize-none"
                placeholder="Tell us about your project, timeline, and requirements..."
                aria-label="Project Details"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                type="submit"
                className="flex-1 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
              >
                📧 Send via Email
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 text-center"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </form>

          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
            <a href="mailto:sales@devsecit.com" className="bg-dark-900 p-3 md:p-6 rounded-lg md:rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">📧</div>
              <div className="font-semibold text-gray-300 text-xs md:text-sm">Sales</div>
              <div className="text-primary-400 hover:text-primary-300 text-xs">sales@devsecit.com</div>
            </a>
            <a href="mailto:info@devsecit.com" className="bg-dark-900 p-3 md:p-6 rounded-lg md:rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">ℹ️</div>
              <div className="font-semibold text-gray-300 text-xs md:text-sm">Info</div>
              <div className="text-primary-400 hover:text-primary-300 text-xs">info@devsecit.com</div>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-dark-900 p-3 md:p-6 rounded-lg md:rounded-xl border border-dark-700 hover:border-green-500/50 transition-all">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">💬</div>
              <div className="font-semibold text-gray-300 text-xs md:text-sm">WhatsApp</div>
              <div className="text-green-400 hover:text-green-300 text-xs">+91 8101 979855</div>
            </a>
            <div className="bg-dark-900 p-3 md:p-6 rounded-lg md:rounded-xl border border-dark-700">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">⚡</div>
              <div className="font-semibold text-gray-300 text-xs md:text-sm">Response</div>
              <div className="text-primary-400 text-xs">Within 4 hours</div>
            </div>
          </div>
        </div>
      </section>

      <FactsSlider />

      <Testimonials />

      <FAQ />

      <footer className="bg-dark-900 border-t border-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-gradient mb-4">DevSecIT</h3>
              <p className="text-gray-400 mb-4">
                Elite software development and cybersecurity solutions. 
                Transforming visions into secure, scalable reality.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Custom Development</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Cybersecurity</a></li>
                <li><a href="#api" className="hover:text-primary-400 transition-colors">API Development</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">AI & Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About</Link></li>
                <li><Link href="/pricing" className="hover:text-primary-400 transition-colors">Pricing</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/virtual-cto" className="hover:text-primary-400 transition-colors">Virtual CTO</Link></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
                <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">India Offices</h4>
              <ul className="space-y-2 text-gray-400 text-sm grid grid-cols-2 gap-2">
                <li><Link href="/cities/delhi" className="hover:text-primary-400 transition-colors">Delhi</Link></li>
                <li><Link href="/cities/mumbai" className="hover:text-primary-400 transition-colors">Mumbai</Link></li>
                <li><Link href="/cities/bangalore" className="hover:text-primary-400 transition-colors">Bangalore</Link></li>
                <li><Link href="/cities/hyderabad" className="hover:text-primary-400 transition-colors">Hyderabad</Link></li>
                <li><Link href="/cities/pune" className="hover:text-primary-400 transition-colors">Pune</Link></li>
                <li><Link href="/cities/kolkata" className="hover:text-primary-400 transition-colors">Kolkata</Link></li>
                <li><Link href="/cities/chennai" className="hover:text-primary-400 transition-colors">Chennai</Link></li>
                <li><Link href="/cities/ahmedabad" className="hover:text-primary-400 transition-colors">Ahmedabad</Link></li>
                <li><Link href="/cities/jaipur" className="hover:text-primary-400 transition-colors">Jaipur</Link></li>
                <li><Link href="/cities/lucknow" className="hover:text-primary-400 transition-colors">Lucknow</Link></li>
                <li><Link href="/cities/surat" className="hover:text-primary-400 transition-colors">Surat</Link></li>
                <li><Link href="/cities/kochi" className="hover:text-primary-400 transition-colors">Kochi</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm mb-4">
              <p>&copy; 2025 DevSecIT. All rights reserved. Built with excellence and secured by design. <span className="text-primary-400">Maintained and powered by <span className="font-semibold">DEVSECIT</span></span></p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms</Link>
              </div>
            </div>
            <div className="flex justify-center pt-4 border-t border-dark-800">
              <p className="text-gray-500 text-xs">
                Developed by <a href="https://www.linkedin.com/in/colourfulhacker/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">Jit Banerjee</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* API Order Modal */}
      <APIOrderModal
        service={selectedAPIService}
        onClose={() => setSelectedAPIService(null)}
      />
    </div>
  );
};

export default Home;
