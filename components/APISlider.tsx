
import { useState } from 'react';
import { APIService } from '../lib/apiServices';
import { APIServiceCard } from './APIServiceCard';

interface APISliderProps {
  title: string;
  apis: APIService[];
  onOrderClick: (service: APIService) => void;
}

export const APISlider = ({ title, apis, onOrderClick }: APISliderProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, apis.length - itemsPerView);

  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleApis = apis.slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold dark:text-white light:text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-2 dark:bg-dark-700 light:bg-gray-200 dark:hover:bg-primary-500/20 light:hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all dark:text-gray-300 light:text-gray-700"
            aria-label="Previous APIs"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            className="p-2 dark:bg-dark-700 light:bg-gray-200 dark:hover:bg-primary-500/20 light:hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all dark:text-gray-300 light:text-gray-700"
            aria-label="Next APIs"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleApis.map((api) => (
          <APIServiceCard
            key={api.id}
            service={api}
            onOrderClick={onOrderClick}
          />
        ))}
      </div>

      <div className="mt-4 text-center text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerView, apis.length)} of {apis.length}
      </div>
    </div>
  );
};
