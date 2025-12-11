import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send form data would go here
    alert('Thank you! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600">Get in touch for quotes, site surveys, or emergency support.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-medium">Emergency Call</p>
                     <p className="text-xl font-bold text-slate-900">{PHONE_NUMBER}</p>
                     <p className="text-xs text-slate-400 mt-1">Available 24/7</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                     <Mail size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-medium">Email Us</p>
                     <p className="text-lg font-bold text-slate-900">{EMAIL}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-medium">Visit Office</p>
                     <p className="text-lg font-bold text-slate-900 max-w-xs">{ADDRESS}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                     <Clock size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-medium">Office Hours</p>
                     <p className="text-slate-900">Mon - Sat: 9:00 AM - 7:00 PM</p>
                     <p className="text-slate-900">Sunday: Emergency Support Only</p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333.2023157797361!2d78.39046327807179!3d17.523879062011424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f003bbaee23%3A0x911f4d67265fa27f!2sNizampet!5e0!3m2!1sen!2sin!4v1765430423132!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white"
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="AMC">Annual Maintenance Contract</option>
                  <option value="Extinguishers">Fire Extinguishers</option>
                  <option value="Pump Room">Pump Room Work</option>
                  <option value="Audit">Safety Audit</option>
                  <option value="Training">Training & Drills</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message / Requirement</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your building size or specific needs..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;