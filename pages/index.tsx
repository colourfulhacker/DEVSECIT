import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Head>
        <title>DevSecIT - Elite Software Development & Cybersecurity Solutions</title>
        <meta name="description" content="Full-spectrum software development and cybersecurity solutions. Custom development, AI integration, and rapid API creation in 7 days." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-display font-bold text-gradient">DevSecIT</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</a>
              <a href="#capabilities" className="text-gray-300 hover:text-primary-400 transition-colors">Capabilities</a>
              <a href="#api" className="text-gray-300 hover:text-primary-400 transition-colors">Custom APIs</a>
              <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a>
            </div>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
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
              Transform Your Vision
              <br />
              <span className="text-gradient">Into Secure Reality</span>
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
                { value: '500+', label: 'Projects Delivered' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '7 Days', label: 'API MVP' },
                { value: '24/7', label: 'Support' }
              ].map((stat, i) => (
                <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
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
                <label className="block text-gray-300 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors"
                  placeholder="john@company.com"
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
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Project Details</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors resize-none"
                placeholder="Tell us about your project, timeline, and requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-dark-900 p-6 rounded-xl border border-dark-700">
              <div className="text-3xl mb-2">📧</div>
              <div className="font-semibold text-gray-300">Email</div>
              <div className="text-primary-400">contact@devsecit.com</div>
            </div>
            <div className="bg-dark-900 p-6 rounded-xl border border-dark-700">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-300">Live Chat</div>
              <div className="text-primary-400">Available 24/7</div>
            </div>
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
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DevSecIT. All rights reserved. Built with excellence and secured by design.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
