import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_NAME, EMAIL, PHONE_NUMBER } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AMC Plans', path: '/amc' },
    { name: 'Training', path: '/training' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-brand-dark text-slate-300 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Hyderabad's Premier Fire Safety Partner</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-brand-red transition-colors flex items-center gap-2">
              <Phone size={14} /> 24/7 Emergency: {PHONE_NUMBER}
            </a>
            {/* <span className="text-slate-600">|</span> */}
            {/* <span>ISO 9001:2015 Certified</span>? */}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <img 
                  src="/images/pro-fire-logo-horizontal.png" 
                  alt="Pro Fire Protections Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    isActive(link.path) ? 'text-brand-red font-semibold' : 'text-slate-600 hover:text-brand-red'
                  } transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-brand-red text-white px-5 py-2.5 rounded-md font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-brand-red focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(link.path) ? 'bg-red-50 text-brand-red' : 'text-slate-600 hover:bg-slate-50'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.name}
                </Link>
              ))}
              <a href={`tel:${PHONE_NUMBER}`} className="block px-3 py-2 text-brand-red font-bold">
                Call Emergency: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        {children}
      </main>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center w-14 h-14 bg-brand-red text-white rounded-full shadow-2xl hover:bg-red-700 transition-all animate-bounce"
        >
          <Phone size={24} />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/pro-fire-logo-horizontal-white.png" 
                alt="Pro Fire Protections Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for fire safety solutions in Hyderabad. From installation to maintenance, we ensure your safety is never compromised.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link to="/amc" className="hover:text-brand-red transition-colors">AMC Plans</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Fire Safety Audits</li>
              <li>Pump Room Maintenance</li>
              <li>Fire Extinguisher Refilling</li>
              <li>NOC Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Pragathi Nagar, Hyderabad</p>
            <p className="text-sm mb-2">Telangana 500090</p>
            <p className="text-sm mb-2 font-bold text-white">{PHONE_NUMBER}</p>
            <p className="text-sm">{EMAIL}</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} <b>PRO FIRE PROTECTIONS & SAFETY SOLUTIONS</b>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;