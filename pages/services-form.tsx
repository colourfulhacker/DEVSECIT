import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeToggle } from '../components/ThemeToggle';

const IT_SERVICES = [
  { id: 'web-dev', name: 'Web Application Development', icon: '🌐', category: 'Development' },
  { id: 'mobile-dev', name: 'Mobile App Development', icon: '📱', category: 'Development' },
  { id: 'api-dev', name: 'Custom API Development', icon: '⚡', category: 'Development' },
  { id: 'cloud-solutions', name: 'Cloud Solutions & Migration', icon: '☁️', category: 'Infrastructure' },
  { id: 'devops', name: 'DevOps & CI/CD Pipeline', icon: '🔄', category: 'Infrastructure' },
  { id: 'automation', name: 'Business Process Automation', icon: '🤖', category: 'Automation' },
  { id: 'ai-ml', name: 'AI & Machine Learning Solutions', icon: '🧠', category: 'AI' },
  { id: 'data-analytics', name: 'Data Analytics & BI', icon: '📊', category: 'Analytics' },
  { id: 'cybersecurity', name: 'Cybersecurity & Compliance', icon: '🔒', category: 'Security' },
  { id: 'database-design', name: 'Database Design & Optimization', icon: '💾', category: 'Database' },
  { id: 'microservices', name: 'Microservices Architecture', icon: '🏗️', category: 'Architecture' },
  { id: 'blockchain', name: 'Blockchain Development', icon: '⛓️', category: 'Emerging Tech' },
  { id: 'iot', name: 'IoT Solutions', icon: '🔌', category: 'Emerging Tech' },
  { id: 'testing', name: 'QA & Automation Testing', icon: '✔️', category: 'Quality Assurance' },
  { id: 'integration', name: 'Third-party Integration', icon: '🔗', category: 'Integration' },
  { id: 'legacy', name: 'Legacy System Modernization', icon: '🔄', category: 'Modernization' },
  { id: 'consulting', name: 'IT Consulting & Strategy', icon: '💡', category: 'Consulting' },
  { id: 'maintenance', name: 'Application Maintenance & Support', icon: '🛠️', category: 'Support' },
  { id: 'performance', name: 'Performance Optimization', icon: '⚡', category: 'Optimization' },
  { id: 'security-audit', name: 'Security Audit & Penetration Testing', icon: '🔍', category: 'Security' },
  { id: 'training', name: 'Staff Training & Onboarding', icon: '👥', category: 'Training' },
  { id: 'scalability', name: 'Scalability Planning', icon: '📈', category: 'Planning' },
];

const INDUSTRIES = [
  'E-commerce',
  'Healthcare',
  'Finance',
  'Education',
  'Real Estate',
  'Manufacturing',
  'Retail',
  'Logistics',
  'Hospitality',
  'Travel & Tourism',
  'Media & Entertainment',
  'Telecommunications',
  'Energy',
  'Agriculture',
  'Government',
  'Non-Profit'
];

const ServicesForm: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('clientEmail');
    const savedName = localStorage.getItem('clientName');
    const savedCompany = localStorage.getItem('clientCompany');

    if (savedEmail || savedName || savedCompany) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail || '',
        name: savedName || '',
        company: savedCompany || ''
      }));
    }
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem('clientEmail', formData.email);
    localStorage.setItem('clientName', formData.name);
    localStorage.setItem('clientCompany', formData.company);

    const selectedServiceNames = selectedServices
      .map(id => IT_SERVICES.find(s => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const mailBody = `
NAME: ${formData.name}
EMAIL: ${formData.email}
COMPANY: ${formData.company}
INDUSTRY: ${formData.industry}
BUDGET RANGE: ${formData.budget}
TIMELINE: ${formData.timeline}

REQUIRED IT SERVICES:
${selectedServiceNames}

PROJECT DESCRIPTION:
${formData.description}

---
This requirement was submitted via the IT Services Requirements Form on DevSecIT website.
`.trim();

    const mailtoLink = `mailto:sales@devsecit.com?subject=IT Services Requirement from ${formData.name}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoLink;
  };

  const servicesByCategory = IT_SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof IT_SERVICES>);

  return (
    <>
      <Head>
        <title>IT Services Requirements Form - DevSecIT</title>
        <meta name="description" content="Detailed IT services requirements form to collect your project details and service needs." />
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-dark-900/95 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg border-b border-dark-700 dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/" className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Back to Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen pt-24 pb-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
              IT Services <span className="text-gradient">Requirements Form</span>
            </h1>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Tell us about your project and select the services you need. Your information will be automatically prefilled on future submissions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="dark:bg-dark-800 light:bg-gray-50 p-8 md:p-12 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 transition-colors duration-300">
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Industry *</label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 transition-colors duration-300"
                  >
                    <option value="">Select Industry</option>
                    {INDUSTRIES.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">Project Details</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Budget Range *</label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 transition-colors duration-300"
                  >
                    <option value="">Select Budget</option>
                    <option value="Under $10K">Under $10K</option>
                    <option value="$10K - $50K">$10K - $50K</option>
                    <option value="$50K - $100K">$50K - $100K</option>
                    <option value="$100K - $500K">$100K - $500K</option>
                    <option value="$500K+">$500K+</option>
                  </select>
                </div>
                <div>
                  <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Timeline *</label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 transition-colors duration-300"
                  >
                    <option value="">Select Timeline</option>
                    <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block dark:text-gray-300 light:text-gray-700 mb-2 font-semibold transition-colors duration-300">Project Description *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 dark:bg-dark-900 light:bg-white dark:border dark:border-dark-700 light:border light:border-gray-300 rounded-lg dark:focus:border-primary-500 light:focus:border-primary-400 focus:outline-none dark:text-gray-100 light:text-gray-900 resize-none transition-colors duration-300"
                  placeholder="Describe your project, goals, challenges, and any specific requirements..."
                />
              </div>
            </div>

            {/* Services Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
                Required IT Services (Select all that apply) *
              </h2>
              {Object.entries(servicesByCategory).map(([category, services]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-primary-400 transition-colors duration-300">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map(service => (
                      <label key={service.id} className="flex items-center p-4 dark:bg-dark-900 light:bg-white rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 cursor-pointer hover:dark:border-primary-500/50 hover:light:border-primary-400 transition-all duration-300">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-4 h-4 text-primary-500 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
                        />
                        <span className="ml-3 text-2xl">{service.icon}</span>
                        <span className="ml-3 dark:text-gray-300 light:text-gray-700 transition-colors duration-300">{service.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={selectedServices.length === 0}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                📧 Send Requirements
              </button>
              <Link
                href="/"
                className="px-8 py-4 dark:border-2 dark:border-primary-500/50 light:border-2 light:border-primary-400 rounded-lg font-bold text-lg dark:text-gray-100 light:text-gray-900 dark:hover:bg-primary-500/10 light:hover:bg-primary-50 transition-all text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServicesForm;
