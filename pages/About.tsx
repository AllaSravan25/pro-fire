import React from 'react';
import { Target, Award, MapPin } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">About {COMPANY_NAME}</h1>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Based in the heart of Hyderabad, {COMPANY_NAME} has established itself as a premier authority in fire safety solutions. We don't just sell equipment; we engineer safety.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over a decade of experience, our team of certified engineers and technicians works tirelessly to protect lives and property across residential, commercial, and industrial sectors. From intricate pump room designs to simple extinguisher refills, we bring the same level of dedication to every job.
            </p>
          </div>
          <div className="bg-slate-200 rounded-2xl h-80 w-full overflow-hidden">
             {/* Placeholder for Team Image */}
             <img src="https://images.unsplash.com/photo-1581092921461-eab6245b09dc?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Vision/Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
             <Target className="text-brand-red mb-4" size={32} />
             <h3 className="text-xl font-bold mb-2">Our Mission</h3>
             <p className="text-slate-600">To make every building in Hyderabad fire-safe through reliable engineering and proactive maintenance.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
             <Award className="text-brand-red mb-4" size={32} />
             <h3 className="text-xl font-bold mb-2">Our Standards</h3>
             <p className="text-slate-600">We strictly adhere to the National Building Code (NBC) of India and IS standards for all installations.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
             <MapPin className="text-brand-red mb-4" size={32} />
             <h3 className="text-xl font-bold mb-2">Service Area</h3>
             <p className="text-slate-600">Serving greater Hyderabad, Secunderabad, and surrounding industrial districts.</p>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="bg-brand-red text-white rounded-2xl p-12">
           <h2 className="text-3xl font-bold text-center mb-8">Why we are trusted</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="text-red-100 text-sm">Extinguishers Refilled/Yr</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-red-100 text-sm">AMC Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-red-100 text-sm">Large Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-red-100 text-sm">Compliance Rate</div>
              </div>
           </div>
        </div> */}

      </div>
    </div>
  );
};

export default About;