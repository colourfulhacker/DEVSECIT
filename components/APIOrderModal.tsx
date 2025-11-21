import { useState } from 'react';
import { APIService } from '../lib/apiServices';

interface APIOrderModalProps {
  service: APIService | null;
  onClose: () => void;
}

export const APIOrderModal = ({ service, onClose }: APIOrderModalProps) => {
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    timeline: '',
    budget: ''
  });

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi DevSecIT! I'm interested in integrating *${service.name}* into my project.

*Details:*
Name: ${orderData.name}
Email: ${orderData.email}
Company: ${orderData.company}
Project: ${orderData.projectDescription}
Timeline: ${orderData.timeline}
Budget: ${orderData.budget}

Please help me integrate this API into my application.`;

    const whatsappLink = `https://wa.me/918101979855?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-900 rounded-2xl border border-dark-700 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-dark-900 border-b border-dark-700 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{service.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-white">{service.name}</h2>
              <p className="text-sm text-gray-400">{service.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-sm">Name *</label>
            <input
              type="text"
              required
              value={orderData.name}
              onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
              className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors text-sm"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-sm">Email *</label>
            <input
              type="email"
              required
              value={orderData.email}
              onChange={(e) => setOrderData({ ...orderData, email: e.target.value })}
              className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-sm">Company</label>
            <input
              type="text"
              value={orderData.company}
              onChange={(e) => setOrderData({ ...orderData, company: e.target.value })}
              className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors text-sm"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-sm">Project Description *</label>
            <textarea
              required
              value={orderData.projectDescription}
              onChange={(e) => setOrderData({ ...orderData, projectDescription: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors resize-none text-sm"
              placeholder="Describe your project and how you want to use this API..."
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-sm">Timeline *</label>
            <select
              required
              value={orderData.timeline}
              onChange={(e) => setOrderData({ ...orderData, timeline: e.target.value })}
              className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors text-sm"
            >
              <option value="">Select Timeline</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3+ months">3+ months</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-sm">Budget Range *</label>
            <select
              required
              value={orderData.budget}
              onChange={(e) => setOrderData({ ...orderData, budget: e.target.value })}
              className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100 transition-colors text-sm"
            >
              <option value="">Select Budget</option>
              <option value="Under $5k">Under $5k</option>
              <option value="$5k - $15k">$5k - $15k</option>
              <option value="$15k - $50k">$15k - $50k</option>
              <option value="$50k+">$50k+</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all text-white mt-6"
          >
            💬 Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};
