import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { APISlider } from '../components/APISlider';
import { APIOrderModal } from '../components/APIOrderModal';
import { APIService, allAPICategories, topCommonAPIs } from '../lib/apiServices';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to sales email via mailto
    const mailtoLink = `mailto:sales@devsecit.com?subject=New Project Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nProject Details:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const whatsappLink = `https://wa.me/918101979855?text=Hi DevSecIT, I'm interested in discussing a project. Let's connect!`;

  // SEO Keywords - West Bengal & India focused - Comprehensive keyword strategy
  const seoKeywords = "software development West Bengal, custom API development Kolkata, cybersecurity solutions India, AI integration services, startup MVP development, full-stack development India, web development services West Bengal, mobile app development, enterprise software solutions, digital transformation, API integration, tech company Kolkata, technology outsourcing India, software house West Bengal, IT services India, cloud development, web application development, e-commerce solutions";

  // Schema.org structured data
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema("Custom Software Development", "Professional custom software development and cybersecurity solutions in West Bengal, India with expertise in full-stack development, API integration, mobile applications, AI/ML, and enterprise-grade solutions"),
    generateAggregateOfferSchema()
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <SEOHead
        title="DevSecIT - Custom Software Development & API Integration | West Bengal, India"
        description="Leading custom software development and cybersecurity solutions company in West Bengal, India. Specializing in API integration, MVP development, AI automation, and startup tech products. 500+ projects delivered. Get lifetime free hosting."
        keywords={seoKeywords}
        canonicalUrl="https://devsecit.com"
        schemas={schemas}
      />

      <nav className="fixed top-0 w-full z-50 bg-dark-900/95 backdrop-blur-lg border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-display font-bold text-gradient">DevSecIT</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</a>
              <a href="#techstack" className="text-gray-300 hover:text-primary-400 transition-colors">Tech Stack</a>
              <a href="#capabilities" className="text-gray-300 hover:text-primary-400 transition-colors">Capabilities</a>
              <a href="#api" className="text-gray-300 hover:text-primary-400 transition-colors">Custom APIs</a>
              <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="#contact" 
                className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white"
              >
                Get Started
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-primary-400 p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-800 border-t border-dark-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-primary-400 transition-colors py-2">Services</a>
              <a href="#techstack" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-primary-400 transition-colors py-2">Tech Stack</a>
              <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-primary-400 transition-colors py-2">Capabilities</a>
              <a href="#api" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-primary-400 transition-colors py-2">Custom APIs</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-primary-400 transition-colors py-2">Contact</a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-blue-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30">
              <span className="text-primary-400 font-semibold text-sm">Elite Development & Cybersecurity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Custom Software Development <br />
              <span className="text-gradient">& API Integration in West Bengal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-spectrum software development, cybersecurity integration, and AI-powered solutions. 
              From concept to deployment, we build what others can&apos;t.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
              >
                Start Your Project
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border-2 border-primary-500/50 rounded-lg font-bold text-lg hover:bg-primary-500/10 transition-all"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Projects Delivered', role: 'doc-subtitle' },
                { value: '99.9%', label: 'Uptime SLA', role: 'doc-subtitle' },
                { value: '7 Days', label: 'API MVP Delivery', role: 'doc-subtitle' },
                { value: '24/7', label: 'Expert Support', role: 'doc-subtitle' }
              ].map((stat, i) => (
                <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }} role="contentinfo">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Comprehensive <span className="text-gradient">IT Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end technology solutions tailored to your unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group bg-dark-900 p-8 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-300">
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

      <section id="techstack" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver exceptional solutions
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Frontend Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Next.js', icon: '▲' },
                  { name: 'Vue.js', icon: '💚' },
                  { name: 'Angular', icon: '🅰️' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Tailwind CSS', icon: '🎨' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="text-sm text-gray-300">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Backend Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'Go', icon: '🔷' },
                  { name: 'Rust', icon: '⚙️' },
                  { name: 'Java', icon: '☕' },
                  { name: 'PHP', icon: '🐘' }
                ].map((tech, i) => (
                  <div key={i} className="bg-dark-900 p-4 rounded-lg text-center hover:border-primary-500/50 border border-dark-700 transition-all">
                    <div className="text-3xl mb-2">{tech.icon}</div>
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

      <section id="capabilities" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Elite <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Why industry leaders trust us with their most critical projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Secure-by-Design Development</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
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
                  <div key={i} className="flex items-center bg-dark-800 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-4"></div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-dark-800 p-8 rounded-3xl border border-dark-700">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Code Security Score</span>
                    <span className="text-2xl font-bold text-gradient">A+</span>
                  </div>
                  <div className="h-4 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-blue-600" style={{ width: '98%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-400">100%</div>
                      <div className="text-sm text-gray-400">Test Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-400">0</div>
                      <div className="text-sm text-gray-400">Critical Vulns</div>
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
              <div key={i} className="bg-gradient-to-br from-dark-800 to-dark-900 p-8 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all">
                <div className="text-4xl font-bold text-gradient mb-2">{capability.metric}</div>
                <div className="text-sm text-primary-400 mb-4">{capability.highlight}</div>
                <h4 className="text-xl font-bold mb-3">{capability.title}</h4>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-900/30 to-blue-900/30 rounded-3xl p-12 md:p-16 border border-primary-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full border border-primary-500/50 mb-6">
                    <span className="text-primary-300 font-semibold">⚡ Rapid API Development</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    Need a Custom API?
                    <br />
                    <span className="text-gradient">We&apos;ll Build It in 7 Days</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
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
                        <span className="text-gray-200 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="#contact" 
                    className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
                  >
                    Request Custom API
                  </a>
                </div>
                <div className="bg-dark-900/50 p-8 rounded-2xl border border-dark-700">
                  <div className="font-mono text-sm">
                    <div className="text-primary-400 mb-4">{`// Example: Custom Music API`}</div>
                    <div className="text-gray-400">
                      <span className="text-blue-400">GET</span> /api/v1/music/search
                    </div>
                    <div className="bg-dark-800 p-4 rounded-lg mt-4 text-xs overflow-x-auto">
                      <pre className="text-gray-300">
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
                    <div className="mt-6 text-gray-400">
                      <div className="flex items-center justify-between mb-2">
                        <span>Response Time</span>
                        <span className="text-primary-400 font-bold">47ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Uptime</span>
                        <span className="text-primary-400 font-bold">99.99%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual CEO Service Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30">
                <span className="text-primary-400 font-semibold text-sm">Premium Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Hire a <span className="text-gradient">Virtual CEO</span> for Your Startup
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your tech product MVP ready to launch within a quarter with a seasoned founder and technical leader. Equity-based partnership with 100% legal agreements.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">MVP Ready in 90 Days</h4>
                    <p className="text-gray-400 text-sm">Complete product development from concept to launch-ready MVP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Up to 10% Equity Stake</h4>
                    <p className="text-gray-400 text-sm">Performance-based equity partnership aligned with your success</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚖️</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">100% Legal Agreements</h4>
                    <p className="text-gray-400 text-sm">Full documentation and compliance from day one</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Long-term Support</h4>
                    <p className="text-gray-400 text-sm">Ongoing strategic guidance and scaling support beyond launch</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/918101979855?text=Hi DevSecIT! I'm interested in the Virtual CEO service for my startup. Let's discuss how we can collaborate.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold hover:shadow-2xl hover:shadow-primary-500/50 transition-all text-white text-center"
                >
                  💬 Schedule Discussion
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-primary-500/50 rounded-lg font-bold hover:bg-primary-500/10 transition-all text-white text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <div className="space-y-6">
                <div className="bg-dark-900 p-6 rounded-xl border border-dark-700">
                  <h4 className="text-sm font-bold text-primary-400 mb-4">What&apos;s Included:</h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 font-bold">✓</span>
                      <span>Founder as Virtual CEO (part-time/full-time flexibility)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 font-bold">✓</span>
                      <span>Complete MVP development &amp; deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 font-bold">✓</span>
                      <span>Product strategy &amp; market positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 font-bold">✓</span>
                      <span>Technology stack optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 font-bold">✓</span>
                      <span>90-day delivery guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 font-bold">✓</span>
                      <span>Post-launch scaling support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary-500/10 to-blue-500/10 p-4 rounded-xl border border-primary-500/30">
                  <p className="text-xs text-gray-400">
                    <strong>Best for:</strong> Ambitious startups with great ideas but need technical execution &amp; strategic leadership to succeed.
                  </p>
                </div>
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
          <div className="mt-16 bg-gradient-to-r from-primary-500/20 via-blue-500/20 to-primary-500/20 p-8 md:p-12 rounded-2xl border-2 border-primary-500/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">Have a Unique Use Case?</h3>
                <p className="text-gray-300 mb-4">
                  Whether you need to integrate a niche API, build a custom API from scratch, or combine multiple services into one unified solution—we handle it all. Tell us what you need, and we&apos;ll build it.
                </p>
                <p className="text-gray-400 text-sm">
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

      <section id="contact" className="py-20 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Ready to <span className="text-gradient">Build Something Great?</span>
            </h2>
            <p className="text-xl text-gray-400">
              Let&apos;s discuss your project and turn your vision into reality
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-900 p-8 md:p-12 rounded-2xl border border-dark-700">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
              >
                📧 Send via Email
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 text-center"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <a href="mailto:sales@devsecit.com" className="bg-dark-900 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all">
              <div className="text-3xl mb-2">📧</div>
              <div className="font-semibold text-gray-300">Email Sales</div>
              <div className="text-primary-400 hover:text-primary-300">sales@devsecit.com</div>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-dark-900 p-6 rounded-xl border border-dark-700 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-300">WhatsApp</div>
              <div className="text-green-400 hover:text-green-300">+91-8101979855</div>
            </a>
            <div className="bg-dark-900 p-6 rounded-xl border border-dark-700">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-gray-300">Response Time</div>
              <div className="text-primary-400">Within 4 hours</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark-900 border-t border-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
                <li><a href="#capabilities" className="hover:text-primary-400 transition-colors">Capabilities</a></li>
                <li><a href="#techstack" className="hover:text-primary-400 transition-colors">Tech Stack</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
                <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>&copy; 2024 DevSecIT. All rights reserved. Built with excellence and secured by design.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms</Link>
              </div>
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
