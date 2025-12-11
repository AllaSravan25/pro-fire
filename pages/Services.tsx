import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600">
            We offer a complete spectrum of fire safety solutions, from initial installation to annual maintenance and statutory compliance.
          </p>
        </div>
      </div>

      {/* Service Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imagePlaceholder} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-50 rounded-lg text-brand-red">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{service.title}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-brand-red transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;