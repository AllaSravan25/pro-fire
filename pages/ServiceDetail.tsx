import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowLeft, Phone } from 'lucide-react';
import { SERVICES, PHONE_NUMBER } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-slate-800 rounded-xl">
               <service.icon size={48} className="text-brand-red" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-slate-300 max-w-2xl">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                   Key Features
                 </h3>
                 <ul className="space-y-3">
                   {service.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <Check size={18} className="text-brand-red mt-1 flex-shrink-0" />
                       <span className="text-slate-700">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </section>

               <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                   Benefits
                 </h3>
                 <ul className="space-y-3">
                   {service.benefits.map((benefit, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <div className="h-2 w-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                       <span className="text-slate-700">{benefit}</span>
                     </li>
                   ))}
                 </ul>
               </section>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {[1,2,3,4].map((step) => (
                   <div key={step} className="relative">
                      <div className="text-6xl font-black text-slate-100 absolute -top-4 -left-2 z-0">0{step}</div>
                      <div className="relative z-10 pt-8">
                        <h4 className="font-bold text-slate-900 mb-2">Step {step}</h4>
                        <p className="text-sm text-slate-600">Site assessment and requirement analysis based on building type.</p>
                      </div>
                   </div>
                 ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
               <h3 className="text-lg font-bold text-slate-900 mb-4">Need this service?</h3>
               <p className="text-slate-600 text-sm mb-6">
                 Contact our experts today for a free consultation and site survey.
               </p>
               <Link to="/contact" className="block w-full text-center bg-brand-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mb-4">
                 Get a Quote
               </Link>
               <a href={`tel:${PHONE_NUMBER}`} className="block w-full text-center bg-white border border-slate-300 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                 <Phone size={18} /> {PHONE_NUMBER}
               </a>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
               <h3 className="text-lg font-bold mb-4">Why Pro Fire?</h3>
               <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                     <Check size={16} className="text-green-400" /> ISO Certified Processes
                  </li>
                  <li className="flex items-center gap-2">
                     <Check size={16} className="text-green-400" /> Certified Engineers
                  </li>
                  <li className="flex items-center gap-2">
                     <Check size={16} className="text-green-400" /> 100% NBC Compliance
                  </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;