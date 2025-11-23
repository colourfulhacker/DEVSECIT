import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectSubmissionForm } from '../components/ProjectSubmissionForm';
import {
  Globe, Smartphone, Zap, Cloud, RefreshCw, Bot, Brain, BarChart3,
  Shield, Database, Layers, Link2, Plug, CheckSquare, Blocks,
  Lightbulb, Wrench, Gauge, Search, Users, TrendingUp, Rocket,
  Target, Check
} from 'lucide-react';

const IT_SERVICES = [
  { id: 'web-dev', name: 'Web Application Development', Icon: Globe, category: 'Development' },
  { id: 'mobile-dev', name: 'Mobile App Development', Icon: Smartphone, category: 'Development' },
  { id: 'api-dev', name: 'Custom API Development', Icon: Zap, category: 'Development' },
  { id: 'cloud-solutions', name: 'Cloud Solutions & Migration', Icon: Cloud, category: 'Infrastructure' },
  { id: 'devops', name: 'DevOps & CI/CD Pipeline', Icon: RefreshCw, category: 'Infrastructure' },
  { id: 'automation', name: 'Business Process Automation', Icon: Bot, category: 'Automation' },
  { id: 'ai-ml', name: 'AI & Machine Learning Solutions', Icon: Brain, category: 'AI' },
  { id: 'data-analytics', name: 'Data Analytics & BI', Icon: BarChart3, category: 'Analytics' },
  { id: 'cybersecurity', name: 'Cybersecurity & Compliance', Icon: Shield, category: 'Security' },
  { id: 'database-design', name: 'Database Design & Optimization', Icon: Database, category: 'Database' },
  { id: 'microservices', name: 'Microservices Architecture', Icon: Layers, category: 'Architecture' },
  { id: 'blockchain', name: 'Blockchain Development', Icon: Blocks, category: 'Emerging Tech' },
  { id: 'iot', name: 'IoT Solutions', Icon: Plug, category: 'Emerging Tech' },
  { id: 'testing', name: 'QA & Automation Testing', Icon: CheckSquare, category: 'Quality Assurance' },
  { id: 'integration', name: 'Third-party Integration', Icon: Link2, category: 'Integration' },
  { id: 'legacy', name: 'Legacy System Modernization', Icon: RefreshCw, category: 'Modernization' },
  { id: 'consulting', name: 'IT Consulting & Strategy', Icon: Lightbulb, category: 'Consulting' },
  { id: 'maintenance', name: 'Application Maintenance & Support', Icon: Wrench, category: 'Support' },
  { id: 'performance', name: 'Performance Optimization', Icon: Gauge, category: 'Optimization' },
  { id: 'security-audit', name: 'Security Audit & Penetration Testing', Icon: Search, category: 'Security' },
  { id: 'training', name: 'Staff Training & Onboarding', Icon: Users, category: 'Training' },
  { id: 'scalability', name: 'Scalability Planning', Icon: TrendingUp, category: 'Planning' },
];

const INDUSTRIES = [
  'E-commerce', 'Healthcare', 'Finance', 'Education', 'Real Estate', 'Manufacturing',
  'Retail', 'Logistics', 'Hospitality', 'Travel & Tourism', 'Media & Entertainment',
  'Telecommunications', 'Energy', 'Agriculture', 'Government', 'Non-Profit'
];

const ServicesPage: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <Head>
        <title>Services - DEV SEC IT | Professional IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including custom software development, DevOps, cloud solutions, AI/ML, cybersecurity, and more." />
      </Head>

      <Header activePage="services" />

      {isClient && (
      <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-900 light:bg-gradient-to-b light:from-gray-50 light:to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
            Comprehensive <span className="text-gradient">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-300 light:text-gray-600 mb-8">
            End-to-end technology solutions tailored to your unique requirements
          </p>
        </div>
      </section>

      {/* Main Services (from homepage) */}
      <section id="services" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Our <span className="text-gradient">Core Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Rocket,
                title: 'Custom Software Development',
                description: 'Bespoke applications for individuals, startups, and enterprises. Full-stack development with modern frameworks and scalable architecture.',
                features: ['Web & Mobile Apps', 'SaaS Platforms', 'Enterprise Solutions', 'Legacy Modernization']
              },
              {
                Icon: Shield,
                title: 'Cybersecurity Integration',
                description: 'Security-first development approach. Protect your digital assets with enterprise-grade security measures built into every layer.',
                features: ['Secure-by-Design', 'Penetration Testing', 'Compliance (GDPR, SOC 2)', 'Security Audits']
              },
              {
                Icon: Bot,
                title: 'AI & Automation',
                description: 'Harness the power of artificial intelligence and machine learning to automate processes and gain competitive advantages.',
                features: ['Machine Learning', 'Process Automation', 'Intelligent Analytics', 'AI Integration']
              },
              {
                Icon: Zap,
                title: 'Custom API Development',
                description: 'Build any API you need, no matter how specialized. 7-day MVP delivery for rapid prototyping and market validation.',
                features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Real-time APIs']
              },
              {
                Icon: Target,
                title: 'Full Project Outsourcing',
                description: 'Hand over your entire project to our expert team. From planning to deployment, we handle everything while you focus on your business.',
                features: ['End-to-End Delivery', 'Agile Development', 'DevOps & CI/CD', 'Maintenance & Support']
              },
              {
                Icon: Lightbulb,
                title: 'Digital Transformation',
                description: 'Modernize your business with cutting-edge technology. Cloud migration, digital solutions, and strategic IT consulting.',
                features: ['Cloud Solutions', 'System Integration', 'IT Strategy', 'Performance Optimization']
              }
            ].map((service, i) => (
              <div key={i} className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:dark:border-primary-500/50 transition-all group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white light:text-gray-900">{service.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 dark:text-gray-300 light:text-gray-700">
                      <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack (from homepage) */}
      <section id="techstack" className="py-20 dark:bg-dark-900 light:bg-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Our <span className="text-gradient">Technology Stack</span>
            </h2>
          </div>
          <div className="grid gap-8">
            {[
              { title: 'Frontend Development', techs: [{ name: 'React', icon: '⚛️' }, { name: 'Next.js', icon: '▲' }, { name: 'Vue.js', icon: '💚' }, { name: 'Angular', icon: '🅰️' }, { name: 'TypeScript', icon: '📘' }, { name: 'Tailwind CSS', icon: '🎨' }] },
              { title: 'Backend Development', techs: [{ name: 'Node.js', icon: '🟢' }, { name: 'Python', icon: '🐍' }, { name: 'Go', icon: '🔷' }, { name: 'Rust', icon: '⚙️' }, { name: 'Java', icon: '☕' }, { name: 'PHP', icon: '🐘' }] },
              { title: 'Database & Storage', techs: [{ name: 'PostgreSQL', icon: '🐘' }, { name: 'MongoDB', icon: '🍃' }, { name: 'Redis', icon: '🔴' }, { name: 'MySQL', icon: '🐬' }, { name: 'Firebase', icon: '🔥' }, { name: 'DynamoDB', icon: '⚡' }] },
              { title: 'Cloud & DevOps', techs: [{ name: 'AWS', icon: '☁️' }, { name: 'Azure', icon: '🌐' }, { name: 'GCP', icon: '🔵' }, { name: 'Docker', icon: '🐳' }, { name: 'Kubernetes', icon: '⚓' }, { name: 'CI/CD', icon: '🔄' }] },
              { title: 'Mobile Development', techs: [{ name: 'React Native', icon: '📱' }, { name: 'Flutter', icon: '🦋' }, { name: 'Swift', icon: '🍎' }, { name: 'Kotlin', icon: '🤖' }, { name: 'Ionic', icon: '⚡' }, { name: 'Xamarin', icon: '🔷' }] },
              { title: 'AI & Machine Learning', techs: [{ name: 'TensorFlow', icon: '🧠' }, { name: 'PyTorch', icon: '🔥' }, { name: 'OpenAI', icon: '🤖' }, { name: 'Scikit-learn', icon: '📊' }, { name: 'Hugging Face', icon: '🤗' }, { name: 'LangChain', icon: '🔗' }] }
            ].map((category, idx) => (
              <div key={idx} className="dark:bg-dark-800 light:bg-gray-50 p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.techs.map((tech, i) => (
                    <div key={i} className="dark:bg-dark-900 light:bg-white p-4 rounded-lg text-center hover:dark:border-primary-500/50 border dark:border-dark-700 light:border-gray-200 transition-all">
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <div className="text-sm dark:text-gray-300 light:text-gray-700">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section (from homepage) */}
      <section id="capabilities" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Elite <span className="text-gradient">Capabilities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '500+', highlight: 'Projects Delivered', description: 'Successful projects delivered to clients worldwide' },
              { metric: '99.9%', highlight: 'Uptime SLA', description: 'Reliable infrastructure ensuring maximum availability' },
              { metric: '7 Days', highlight: 'API MVP Delivery', description: 'Rapid prototyping and market validation' }
            ].map((cap, i) => (
              <div key={i} className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                <div className="text-5xl font-bold text-gradient mb-2">{cap.metric}</div>
                <div className="text-primary-400 font-semibold mb-4">{cap.highlight}</div>
                <p className="dark:text-gray-400 light:text-gray-600">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Submission Section */}
      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {showProjectForm ? (
            <>
              <button
                onClick={() => setShowProjectForm(false)}
                className="mb-6 flex items-center gap-2 dark:text-gray-400 light:text-gray-600 hover:text-primary-400"
              >
                ← Back to Services
              </button>
              <ProjectSubmissionForm onClose={() => setShowProjectForm(false)} />
            </>
          ) : (
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                Ready to Start Your <span className="text-gradient">Project?</span>
              </h2>
              <p className="text-xl dark:text-gray-400 light:text-gray-600 mb-8">
                Tell us about your requirements and we&apos;ll provide a detailed proposal with timeline and cost
              </p>
              <button
                onClick={() => setShowProjectForm(true)}
                className="px-10 py-4 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all text-lg"
              >
                Submit Your Project Requirements
              </button>
              <p className="text-sm dark:text-gray-500 light:text-gray-500 mt-4">
                Free consultation • Quick response within 24 hours • No obligations
              </p>
            </div>
          )}
        </div>
      </section>
      </>
      )}

      <Footer />
    </div>
  );
};

export default ServicesPage;
