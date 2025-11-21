import { APIService } from '../lib/apiServices';

interface APIServiceCardProps {
  service: APIService;
  onOrderClick: (service: APIService) => void;
}

export const APIServiceCard = ({ service, onOrderClick }: APIServiceCardProps) => {
  return (
    <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all h-full flex flex-col">
      <div className="text-5xl mb-3">{service.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
      
      <div className="mb-4">
        <div className="text-xs font-semibold text-primary-400 mb-2">Features:</div>
        <div className="flex flex-wrap gap-2 mb-3">
          {service.features.slice(0, 2).map((feature, i) => (
            <span key={i} className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
          {service.features.length > 2 && (
            <span className="text-xs bg-dark-700 text-gray-400 px-2 py-1 rounded">
              +{service.features.length - 2} more
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => onOrderClick(service)}
        className="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white text-sm"
      >
        Get Started
      </button>
    </div>
  );
};
