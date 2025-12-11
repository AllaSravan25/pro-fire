import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, PhoneCall } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-brand-dark overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-banner.png')"
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-800 text-brand-red px-4 py-1 rounded-full text-sm font-semibold border border-slate-700">
                <Shield size={16} /> Hyderabad's #1 Fire Safety Partner
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Design. Install. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                  Protect.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
                Certified fire protection solutions with 24/7 AMC support. We ensure your business is compliant, safe, and ready for any emergency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2">
                  <PhoneCall size={20} /> Request Site Survey
                </Link>
                <Link to="/services" className="px-8 py-4 bg-transparent border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  View Services <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1595111728256-4d2bc3303649?auto=format&fit=crop&q=80&w=800" 
                alt="Fire Safety Engineer" 
                className="rounded-2xl shadow-2xl border-4 border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">100% Compliant</p>
                    <p className="text-sm text-slate-500">NBC & ISO Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Fire Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`} className="group p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="h-12 w-12 bg-red-100 text-brand-red rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{service.shortDescription}</p>
                <div className="text-brand-red font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/services" className="inline-block px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border border-slate-700 rounded-2xl bg-slate-800/50">
                 <h3 className="text-4xl font-bold text-brand-red mb-2">10+</h3>
                 <p className="text-xl font-semibold mb-2">Years Experience Team</p>
                 <p className="text-slate-400 text-sm">We have a team of experienced engineers and technicians who are dedicated to providing the best possible service to our clients.</p>
              </div>
              <div className="p-8 border border-slate-700 rounded-2xl bg-slate-800/50">
                 <h3 className="text-4xl font-bold text-brand-red mb-2">20+</h3>
                 <p className="text-xl font-semibold mb-2">Experienced Technical Team</p>
                 <p className="text-slate-400 text-sm"> We have dedicated technical team who are experts in their field and are dedicated to providing the best possible service to our clients.</p>
              </div>
              <div className="p-8 border border-slate-700 rounded-2xl bg-slate-800/50">
                 <h3 className="text-4xl font-bold text-brand-red mb-2">24/7</h3>
                 <p className="text-xl font-semibold mb-2">Emergency Support</p>
                 <p className="text-slate-400 text-sm">Dedicated rapid response team for breakdowns.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Trusted by Hyderabad's Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                 <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                 </div>
                 <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                 <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}, {t.company}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-brand-red">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to secure your premises?</h2>
            <Link to="/contact" className="inline-block px-8 py-4 bg-white text-brand-red font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-xl">
               Get a Free Quote
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;