import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck } from 'lucide-react';
import { AMC_PLANS } from '../constants';

const AMC: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold tracking-wider uppercase">Peace of Mind</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Annual Maintenance Contracts</h1>
          <p className="text-lg text-slate-600">
            Ensure your fire safety systems are always ready for action. Our AMC packages comply with local fire brigade norms and ensure zero downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMC_PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-2xl p-8 border ${
                plan.recommended 
                  ? 'border-brand-red bg-white shadow-xl scale-105 z-10' 
                  : 'border-slate-200 bg-slate-50 shadow-sm'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 mb-8 font-medium">{plan.priceLevel}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                  plan.recommended 
                    ? 'bg-brand-red text-white hover:bg-red-700' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Request Proposal
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-red-50 rounded-full text-brand-red">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Custom AMC Requirements?</h3>
              <p className="text-slate-600">We tailor contracts for large industrial complexes, hospitals, and high-rise apartments.</p>
            </div>
          </div>
          <Link to="/contact" className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors whitespace-nowrap">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AMC;