import React from 'react';
import { Link } from 'react-router-dom';
import { Users, AlertTriangle, BookOpen } from 'lucide-react';

const Training: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Fire Safety Training & Mock Drills</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Empower your team with the knowledge to act swiftly and safely during an emergency. We provide comprehensive onsite training and evacuation drills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
             <img src="/images/services/safety-training.png" alt="Training" className="w-full h-64 object-cover" />
             <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-brand-red" size={24} />
                  <h3 className="text-2xl font-bold text-slate-900">Staff Awareness Training</h3>
                </div>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li>• Understanding fire classes (A, B, C, D, K)</li>
                  <li>• Hands-on usage of Fire Extinguishers (PASS Method)</li>
                  <li>• Basic First Aid and CPR introduction</li>
                  <li>• Identification of emergency exits and assembly points</li>
                </ul>
                <Link to="/contact" className="text-brand-red font-bold hover:underline">Schedule Session →</Link>
             </div>
           </div>

           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
             <img src="/images/services/Fire-Mock-Drill.png" alt="Mock Drill" className="w-full h-64 object-cover" />
             <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-brand-red" size={24} />
                  <h3 className="text-2xl font-bold text-slate-900">Evacuation Mock Drills</h3>
                </div>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li>• Real-time simulation of fire scenarios</li>
                  <li>• Testing response time of ERT (Emergency Response Team)</li>
                  <li>• Crowd management and head-counting procedures</li>
                  <li>• Post-drill analysis and improvement report</li>
                </ul>
                <Link to="/contact" className="text-brand-red font-bold hover:underline">Plan a Drill →</Link>
             </div>
           </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
           <Users size={48} className="mx-auto mb-6 text-brand-red" />
           <h2 className="text-3xl font-bold mb-4">Certified Training Certificates</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
             Upon completion of training, we provide certification for your organization, essential for audit compliance and insurance purposes.
           </p>
           <Link to="/contact" className="inline-block px-8 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
             Book Training Now
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;