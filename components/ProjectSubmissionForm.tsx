import { useState } from 'react';

interface ProjectFormData {
  companyInfo: {
    companyName: string;
    industry: string;
    website: string;
    companySize: string;
  };
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    role: string;
  };
  projectDetails: {
    projectName: string;
    problemStatement: string;
    objectives: string;
    targetUsers: string;
  };
  technical: {
    projectType: string;
    preferredTech: string;
    integrations: string;
    scope: string[];
  };
  timeline: {
    budget: string;
    timeline: string;
    startDate: string;
    urgency: string;
  };
}

export function ProjectSubmissionForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProjectFormData>({
    companyInfo: { companyName: '', industry: '', website: '', companySize: '' },
    contactInfo: { name: '', email: '', phone: '', role: '' },
    projectDetails: { projectName: '', problemStatement: '', objectives: '', targetUsers: '' },
    technical: { projectType: '', preferredTech: '', integrations: '', scope: [] },
    timeline: { budget: '', timeline: '', startDate: '', urgency: '' }
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 5;

  const projectScopes = [
    'Web Application', 'Mobile App (iOS/Android)', 'API Development', 'E-commerce Platform',
    'CRM System', 'Admin Dashboard', 'Payment Integration', 'Real-time Features',
    'Database Design', 'Cloud Infrastructure', 'AI/ML Integration', 'Security Implementation'
  ];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.companyInfo.companyName) newErrors.companyName = 'Company name is required';
      if (!formData.companyInfo.industry) newErrors.industry = 'Industry is required';
    }

    if (currentStep === 2) {
      if (!formData.contactInfo.name) newErrors.name = 'Contact name is required';
      if (!formData.contactInfo.email) newErrors.email = 'Email is required';
      if (!formData.contactInfo.phone) newErrors.phone = 'Phone is required';
    }

    if (currentStep === 3) {
      if (!formData.projectDetails.projectName) newErrors.projectName = 'Project name is required';
      if (!formData.projectDetails.problemStatement) newErrors.problemStatement = 'Problem statement is required';
    }

    if (currentStep === 4) {
      if (!formData.technical.projectType) newErrors.projectType = 'Project type is required';
      if (formData.technical.scope.length === 0) newErrors.scope = 'Select at least one scope item';
    }

    if (currentStep === 5) {
      if (!formData.timeline.budget) newErrors.budget = 'Budget range is required';
      if (!formData.timeline.timeline) newErrors.timeline = 'Timeline is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScopeToggle = (scope: string) => {
    setFormData(prev => ({
      ...prev,
      technical: {
        ...prev.technical,
        scope: prev.technical.scope.includes(scope)
          ? prev.technical.scope.filter(s => s !== scope)
          : [...prev.technical.scope, scope]
      }
    }));
    if (errors.scope) setErrors(prev => ({ ...prev, scope: '' }));
  };

  const handleSubmit = () => {
    if (!validateStep(step)) return;

    const whatsappMessage = `*PROJECT SUBMISSION*\n\n` +
      `*Company Information:*\n` +
      `Company: ${formData.companyInfo.companyName}\n` +
      `Industry: ${formData.companyInfo.industry}\n` +
      `Website: ${formData.companyInfo.website || 'Not provided'}\n` +
      `Size: ${formData.companyInfo.companySize}\n\n` +
      `*Contact Person:*\n` +
      `Name: ${formData.contactInfo.name}\n` +
      `Email: ${formData.contactInfo.email}\n` +
      `Phone: ${formData.contactInfo.phone}\n` +
      `Role: ${formData.contactInfo.role}\n\n` +
      `*Project Details:*\n` +
      `Project: ${formData.projectDetails.projectName}\n` +
      `Problem: ${formData.projectDetails.problemStatement}\n` +
      `Objectives: ${formData.projectDetails.objectives}\n` +
      `Target Users: ${formData.projectDetails.targetUsers}\n\n` +
      `*Technical Requirements:*\n` +
      `Type: ${formData.technical.projectType}\n` +
      `Tech Stack: ${formData.technical.preferredTech || 'Open to suggestions'}\n` +
      `Integrations: ${formData.technical.integrations || 'None specified'}\n` +
      `Scope:\n${formData.technical.scope.map(s => `  • ${s}`).join('\n')}\n\n` +
      `*Timeline & Budget:*\n` +
      `Budget: ${formData.timeline.budget}\n` +
      `Timeline: ${formData.timeline.timeline}\n` +
      `Start Date: ${formData.timeline.startDate}\n` +
      `Urgency: ${formData.timeline.urgency}`;

    const whatsappLink = `https://wa.me/918101979855?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappLink;
  };

  const updateFormData = (section: keyof ProjectFormData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
              s < step ? 'bg-green-500 text-white' : s === step ? 'bg-primary-500 text-white' : 'dark:bg-dark-700 light:bg-gray-200 dark:text-gray-400 light:text-gray-500'
            }`}>
              {s < step ? '✓' : s}
            </div>
            <div className={`text-xs mt-2 text-center ${s === step ? 'text-primary-400 font-semibold' : 'dark:text-gray-500 light:text-gray-400'}`}>
              {s === 1 && 'Company'}
              {s === 2 && 'Contact'}
              {s === 3 && 'Project'}
              {s === 4 && 'Technical'}
              {s === 5 && 'Timeline'}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full dark:bg-dark-700 light:bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className="bg-primary-500 h-full transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
      </div>
    </div>
  );

  return (
    <div className="dark:bg-dark-900 light:bg-white rounded-2xl p-6 md:p-10 max-w-4xl mx-auto dark:border dark:border-dark-700 light:border light:border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold dark:text-white light:text-gray-900">Project Submission Form</h2>
        {onClose && (
          <button onClick={onClose} className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 text-2xl">&times;</button>
        )}
      </div>

      {renderStepIndicator()}

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Company Information</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Company Name *</label>
            <input
              type="text"
              value={formData.companyInfo.companyName}
              onChange={(e) => updateFormData('companyInfo', 'companyName', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Your company or project name"
            />
            {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Industry/Domain *</label>
            <select
              value={formData.companyInfo.industry}
              onChange={(e) => updateFormData('companyInfo', 'industry', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select industry</option>
              <option value="E-commerce & Retail">E-commerce & Retail</option>
              <option value="Healthcare & Medical">Healthcare & Medical</option>
              <option value="Finance & Banking">Finance & Banking</option>
              <option value="Education & EdTech">Education & EdTech</option>
              <option value="Real Estate & PropTech">Real Estate & PropTech</option>
              <option value="Logistics & Transportation">Logistics & Transportation</option>
              <option value="Food & Hospitality">Food & Hospitality</option>
              <option value="Entertainment & Media">Entertainment & Media</option>
              <option value="SaaS & Technology">SaaS & Technology</option>
              <option value="Other">Other</option>
            </select>
            {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Company Website (Optional)</label>
            <input
              type="url"
              value={formData.companyInfo.website}
              onChange={(e) => updateFormData('companyInfo', 'website', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="https://yourcompany.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Company Size</label>
            <select
              value={formData.companyInfo.companySize}
              onChange={(e) => updateFormData('companyInfo', 'companySize', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select size</option>
              <option value="Solo Entrepreneur">Solo Entrepreneur</option>
              <option value="2-10 employees">2-10 employees (Startup)</option>
              <option value="11-50 employees">11-50 employees (Small Business)</option>
              <option value="51-200 employees">51-200 employees (Mid-size)</option>
              <option value="201+ employees">201+ employees (Enterprise)</option>
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Primary Contact Person</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Full Name *</label>
            <input
              type="text"
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData('contactInfo', 'name', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Email Address *</label>
            <input
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) => updateFormData('contactInfo', 'email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="your.email@company.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Phone Number *</label>
            <input
              type="tel"
              value={formData.contactInfo.phone}
              onChange={(e) => updateFormData('contactInfo', 'phone', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Your Role/Position</label>
            <input
              type="text"
              value={formData.contactInfo.role}
              onChange={(e) => updateFormData('contactInfo', 'role', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="e.g., CEO, CTO, Product Manager, Founder"
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Project Details</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Project Name *</label>
            <input
              type="text"
              value={formData.projectDetails.projectName}
              onChange={(e) => updateFormData('projectDetails', 'projectName', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="What's the project called?"
            />
            {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Problem Statement *</label>
            <textarea
              value={formData.projectDetails.problemStatement}
              onChange={(e) => updateFormData('projectDetails', 'problemStatement', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="What problem does this project solve? What pain points are you addressing?"
            />
            {errors.problemStatement && <p className="text-red-500 text-sm mt-1">{errors.problemStatement}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Project Objectives</label>
            <textarea
              value={formData.projectDetails.objectives}
              onChange={(e) => updateFormData('projectDetails', 'objectives', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="What are the key goals and expected outcomes?"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Target Users/Audience</label>
            <input
              type="text"
              value={formData.projectDetails.targetUsers}
              onChange={(e) => updateFormData('projectDetails', 'targetUsers', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Who will use this product? (e.g., Small businesses, Students, etc.)"
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Technical Requirements</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Project Type *</label>
            <select
              value={formData.technical.projectType}
              onChange={(e) => updateFormData('technical', 'projectType', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select project type</option>
              <option value="Web Application">Web Application</option>
              <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
              <option value="Desktop Application">Desktop Application</option>
              <option value="API/Backend System">API/Backend System</option>
              <option value="E-commerce Platform">E-commerce Platform</option>
              <option value="SaaS Product">SaaS Product</option>
              <option value="Enterprise Software">Enterprise Software</option>
              <option value="AI/ML Solution">AI/ML Solution</option>
              <option value="Other">Other</option>
            </select>
            {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Preferred Technology Stack (Optional)</label>
            <input
              type="text"
              value={formData.technical.preferredTech}
              onChange={(e) => updateFormData('technical', 'preferredTech', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="e.g., React, Node.js, Python, Flutter (or leave blank for recommendations)"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Required Integrations (Optional)</label>
            <input
              type="text"
              value={formData.technical.integrations}
              onChange={(e) => updateFormData('technical', 'integrations', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="e.g., Stripe, AWS, Google Maps, Twilio, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-3 dark:text-gray-300 light:text-gray-700">Project Scope (Select all that apply) *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {projectScopes.map(scope => (
                <label key={scope} className="flex items-center dark:bg-dark-800 light:bg-gray-50 p-3 rounded-lg border dark:border-dark-700 light:border-gray-300 cursor-pointer hover:border-primary-500 transition">
                  <input
                    type="checkbox"
                    checked={formData.technical.scope.includes(scope)}
                    onChange={() => handleScopeToggle(scope)}
                    className="w-4 h-4 text-primary-500 rounded focus:ring-2 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm dark:text-gray-300 light:text-gray-700">{scope}</span>
                </label>
              ))}
            </div>
            {errors.scope && <p className="text-red-500 text-sm mt-1">{errors.scope}</p>}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Timeline & Budget</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Budget Range *</label>
            <select
              value={formData.timeline.budget}
              onChange={(e) => updateFormData('timeline', 'budget', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select budget range</option>
              <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
              <option value="₹1-3 Lakhs">₹1-3 Lakhs</option>
              <option value="₹3-5 Lakhs">₹3-5 Lakhs</option>
              <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
              <option value="₹10-25 Lakhs">₹10-25 Lakhs</option>
              <option value="₹25+ Lakhs">₹25+ Lakhs</option>
              <option value="Not decided yet">Not decided yet</option>
            </select>
            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Expected Timeline *</label>
            <select
              value={formData.timeline.timeline}
              onChange={(e) => updateFormData('timeline', 'timeline', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select timeline</option>
              <option value="1-2 weeks (Urgent)">1-2 weeks (Urgent)</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months (Long-term)</option>
              <option value="Flexible">Flexible</option>
            </select>
            {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Preferred Start Date</label>
            <input
              type="date"
              value={formData.timeline.startDate}
              onChange={(e) => updateFormData('timeline', 'startDate', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Project Urgency</label>
            <select
              value={formData.timeline.urgency}
              onChange={(e) => updateFormData('timeline', 'urgency', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select urgency level</option>
              <option value="Critical - Need ASAP">Critical - Need ASAP</option>
              <option value="High - Within a month">High - Within a month</option>
              <option value="Medium - Can wait 2-3 months">Medium - Can wait 2-3 months</option>
              <option value="Low - Just exploring options">Low - Just exploring options</option>
            </select>
          </div>
          <div className="dark:bg-blue-900/20 light:bg-blue-50 p-4 rounded-lg border dark:border-blue-700/50 light:border-blue-200">
            <p className="text-sm font-semibold dark:text-blue-300 light:text-blue-700 mb-2">
              What happens next?
            </p>
            <ul className="text-xs dark:text-blue-400 light:text-blue-600 space-y-1">
              <li>✓ We&apos;ll review your requirements within 24 hours</li>
              <li>✓ Schedule a free consultation call</li>
              <li>✓ Provide detailed proposal with timeline & cost</li>
              <li>✓ Assign dedicated project manager</li>
              <li>✓ Start development after approval</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition"
          >
            ← Back
          </button>
        )}
        {step < totalSteps && (
          <button
            onClick={handleNext}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition"
          >
            Next Step →
          </button>
        )}
        {step === totalSteps && (
          <button
            onClick={handleSubmit}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-bold text-white hover:shadow-lg transition"
          >
            Submit Project via WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
