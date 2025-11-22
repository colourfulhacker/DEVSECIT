
import { useState } from 'react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface TeamOption {
  id: string;
  name: string;
  costPerMonth: number;
  duration: number; // in months
  description: string;
}

export const PricingCalculator = () => {
  // Service types with realistic base prices
  const services: ServiceOption[] = [
    {
      id: 'web-app',
      name: 'Web Application',
      basePrice: 299999,
      description: 'Full-stack responsive web application'
    },
    {
      id: 'mobile-app',
      name: 'Mobile App (iOS + Android)',
      basePrice: 399999,
      description: 'Native or cross-platform mobile application'
    },
    {
      id: 'api-service',
      name: 'API & Backend System',
      basePrice: 199999,
      description: 'RESTful or GraphQL API with microservices'
    },
    {
      id: 'saas',
      name: 'SaaS Platform',
      basePrice: 599999,
      description: 'Multi-tenant subscription-based platform'
    },
    {
      id: 'enterprise',
      name: 'Enterprise System',
      basePrice: 799999,
      description: 'Complex enterprise software with integration'
    },
    {
      id: 'mvp',
      name: 'MVP (7-day)',
      basePrice: 99999,
      description: 'Rapid MVP development and deployment'
    }
  ];

  // Feature modules with realistic pricing
  const features: FeatureOption[] = [
    { id: 'auth', name: 'User Authentication & Authorization', price: 50000, category: 'Backend' },
    { id: 'payment', name: 'Payment Gateway Integration', price: 75000, category: 'Backend' },
    { id: 'database', name: 'Database Design & Optimization', price: 60000, category: 'Backend' },
    { id: 'api-docs', name: 'API Documentation & Testing', price: 40000, category: 'Backend' },
    { id: 'analytics', name: 'Advanced Analytics Dashboard', price: 80000, category: 'Frontend' },
    { id: 'realtime', name: 'Real-time Notifications', price: 65000, category: 'Backend' },
    { id: 'admin', name: 'Admin Panel & Management', price: 55000, category: 'Frontend' },
    { id: 'mobile-ui', name: 'Mobile UI/UX Design', price: 85000, category: 'Design' },
    { id: 'seo', name: 'SEO Optimization', price: 35000, category: 'Frontend' },
    { id: 'security', name: 'Security Audit & Hardening', price: 95000, category: 'Security' },
    { id: 'cdn', name: 'CDN & Performance Optimization', price: 45000, category: 'Infrastructure' },
    { id: 'ci-cd', name: 'CI/CD Pipeline & DevOps', price: 70000, category: 'Infrastructure' },
    { id: 'ai-integration', name: 'AI/ML Integration', price: 120000, category: 'Advanced' },
    { id: 'blockchain', name: 'Blockchain Integration', price: 150000, category: 'Advanced' }
  ];

  // Team composition options
  const teamOptions: TeamOption[] = [
    {
      id: 'dedicated-dev',
      name: 'Dedicated Developer',
      costPerMonth: 150000,
      duration: 3,
      description: '1 full-time developer'
    },
    {
      id: 'dedicated-team',
      name: 'Dedicated Team (3 Devs + 1 PM)',
      costPerMonth: 450000,
      duration: 3,
      description: '3 developers + 1 project manager'
    },
    {
      id: 'support-3m',
      name: '3-Month Support & Maintenance',
      costPerMonth: 50000,
      duration: 3,
      description: 'Post-launch support for 3 months'
    },
    {
      id: 'support-6m',
      name: '6-Month Support & Maintenance',
      costPerMonth: 50000,
      duration: 6,
      description: 'Post-launch support for 6 months'
    },
    {
      id: 'support-12m',
      name: '12-Month Support & Maintenance',
      costPerMonth: 50000,
      duration: 12,
      description: 'Comprehensive annual support'
    }
  ];

  const [selectedService, setSelectedService] = useState<string>('web-app');
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [selectedTeam, setSelectedTeam] = useState<Set<string>>(new Set());
  const [timeline, setTimeline] = useState(30); // days

  // Calculate prices
  const baseService = services.find(s => s.id === selectedService);
  const selectedFeaturesList = features.filter(f => selectedFeatures.has(f.id));
  const selectedTeamList = teamOptions.filter(t => selectedTeam.has(t.id));

  const featuresCost = selectedFeaturesList.reduce((sum, f) => sum + f.price, 0);
  const teamCost = selectedTeamList.reduce((sum, t) => sum + (t.costPerMonth * t.duration), 0);
  
  // Timeline adjustment (after 90 days, additional cost applies)
  let timelineAdjustment = 0;
  if (timeline > 90) {
    timelineAdjustment = (timeline - 90) * 1000; // ₹1000 per extra day
  }

  const totalEstimate = (baseService?.basePrice || 0) + featuresCost + teamCost + timelineAdjustment;

  const handleFeatureToggle = (id: string) => {
    const newSet = new Set(selectedFeatures);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedFeatures(newSet);
  };

  const handleTeamToggle = (id: string) => {
    const newSet = new Set(selectedTeam);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedTeam(newSet);
  };

  return (
    <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
            Smart <span className="text-gradient">Pricing Calculator</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
            Get a realistic estimate for your project. Build your custom solution by selecting services and features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Left Column: Customization Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Selection */}
            <div className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 dark:text-white light:text-gray-900">1. Select Project Type</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedService === service.id
                        ? 'dark:bg-primary-500/20 light:bg-primary-100 dark:border-primary-500 light:border-primary-400'
                        : 'dark:bg-dark-900 light:bg-white dark:border-dark-700 light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-300'
                    }`}
                  >
                    <div className="font-bold dark:text-white light:text-gray-900 text-sm md:text-base">{service.name}</div>
                    <div className="text-xs dark:text-gray-400 light:text-gray-600 mt-1">{service.description}</div>
                    <div className="text-primary-400 font-semibold mt-2 text-sm">₹{service.basePrice.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features Selection */}
            <div className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 dark:text-white light:text-gray-900">2. Select Additional Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map(feature => (
                  <label
                    key={feature.id}
                    className="flex items-center p-3 dark:bg-dark-900 light:bg-white rounded-lg border dark:border-dark-700 light:border-gray-200 cursor-pointer dark:hover:border-primary-500/50 light:hover:border-primary-300 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFeatures.has(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="w-4 h-4 rounded"
                    />
                    <div className="ml-3 flex-1">
                      <div className="text-sm font-semibold dark:text-white light:text-gray-900">{feature.name}</div>
                      <div className="text-xs dark:text-gray-400 light:text-gray-600">{feature.category}</div>
                    </div>
                    <div className="text-primary-400 font-bold text-sm">+₹{feature.price.toLocaleString()}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Team & Support */}
            <div className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 dark:text-white light:text-gray-900">3. Team & Support Options</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {teamOptions.map(option => (
                  <label
                    key={option.id}
                    className="flex items-start p-3 dark:bg-dark-900 light:bg-white rounded-lg border dark:border-dark-700 light:border-gray-200 cursor-pointer dark:hover:border-primary-500/50 light:hover:border-primary-300 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTeam.has(option.id)}
                      onChange={() => handleTeamToggle(option.id)}
                      className="w-4 h-4 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="text-sm font-semibold dark:text-white light:text-gray-900">{option.name}</div>
                      <div className="text-xs dark:text-gray-400 light:text-gray-600">{option.description}</div>
                      <div className="text-primary-400 font-bold text-sm mt-1">₹{option.costPerMonth.toLocaleString()}/month × {option.duration}m</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 dark:text-white light:text-gray-900">4. Project Timeline</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold dark:text-white light:text-gray-900 mb-2">
                    Estimated Duration: {timeline} days
                  </label>
                  <input
                    type="range"
                    min="7"
                    max="180"
                    value={timeline}
                    onChange={(e) => setTimeline(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs dark:text-gray-400 light:text-gray-600 mt-2">
                    <span>7 days (MVP)</span>
                    <span>180 days (Large)</span>
                  </div>
                </div>
                {timeline > 90 && (
                  <div className="p-3 dark:bg-orange-500/10 light:bg-orange-50 border dark:border-orange-500/30 light:border-orange-200 rounded-lg">
                    <div className="text-sm dark:text-orange-400 light:text-orange-600">
                      <strong>Extended Timeline Charge:</strong> ₹{timelineAdjustment.toLocaleString()} ({timeline - 90} days × ₹1,000/day)
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Price Breakdown */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900">Cost Breakdown</h3>
              
              <div className="space-y-4 mb-6 pb-6 border-b dark:border-dark-700 light:border-gray-200">
                {/* Base Service */}
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold dark:text-white light:text-gray-900">{baseService?.name}</div>
                    <div className="text-xs dark:text-gray-400 light:text-gray-600">Base project</div>
                  </div>
                  <div className="text-primary-400 font-bold">₹{baseService?.basePrice.toLocaleString()}</div>
                </div>

                {/* Features Cost */}
                {selectedFeaturesList.length > 0 && (
                  <div>
                    <div className="font-semibold dark:text-white light:text-gray-900 mb-2">Features ({selectedFeaturesList.length})</div>
                    {selectedFeaturesList.map(feature => (
                      <div key={feature.id} className="flex justify-between text-sm dark:text-gray-400 light:text-gray-600 ml-2">
                        <span>{feature.name}</span>
                        <span>+₹{feature.price.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold dark:text-primary-400 light:text-primary-500 mt-2 pt-2 border-t dark:border-dark-700 light:border-gray-200">
                      <span>Features Total</span>
                      <span>+₹{featuresCost.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                {/* Team Cost */}
                {selectedTeamList.length > 0 && (
                  <div>
                    <div className="font-semibold dark:text-white light:text-gray-900 mb-2">Team & Support ({selectedTeamList.length})</div>
                    {selectedTeamList.map(team => (
                      <div key={team.id} className="flex justify-between text-sm dark:text-gray-400 light:text-gray-600 ml-2">
                        <span>{team.name}</span>
                        <span>+₹{(team.costPerMonth * team.duration).toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold dark:text-primary-400 light:text-primary-500 mt-2 pt-2 border-t dark:border-dark-700 light:border-gray-200">
                      <span>Team Total</span>
                      <span>+₹{teamCost.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                {/* Timeline Adjustment */}
                {timelineAdjustment > 0 && (
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold dark:text-white light:text-gray-900">Timeline Adjustment</div>
                      <div className="text-xs dark:text-gray-400 light:text-gray-600">{timeline - 90} extra days</div>
                    </div>
                    <div className="text-orange-400 font-bold">+₹{timelineAdjustment.toLocaleString()}</div>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-bold dark:text-white light:text-gray-900">Total Estimate</span>
                  <span className="text-3xl font-bold text-gradient">₹{totalEstimate.toLocaleString()}</span>
                </div>
                <div className="text-xs dark:text-gray-400 light:text-gray-600 text-center">
                  Prices exclude taxes (GST 18%)
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white text-center hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
              >
                Get Detailed Quote
              </a>

              {/* Notes */}
              <div className="mt-6 p-4 dark:bg-dark-900 light:bg-gray-100 rounded-lg">
                <div className="text-xs dark:text-gray-400 light:text-gray-600 space-y-2">
                  <p><strong>📌 Notes:</strong></p>
                  <p>• Prices are estimates and may vary based on complexity</p>
                  <p>• Final quote will be provided after project analysis</p>
                  <p>• Additional support months available at ₹50,000/month</p>
                  <p>• GST (18%) will be added to final invoice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
