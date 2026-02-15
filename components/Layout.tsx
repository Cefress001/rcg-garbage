import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/process', label: 'Process' },
    { path: '/services', label: 'Services' },
    { path: '/resources', label: 'Resources' },
    { path: '/caregiver', label: 'Caregivers' },
  ];

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed w-full top-0 z-50 border-b transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-md py-0' 
            : 'bg-white/90 backdrop-blur-sm border-transparent shadow-sm py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled || isMenuOpen ? 'h-20' : 'h-24 md:h-28'}`}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
                {/* Icon Mark: Shield + Lighthouse */}
                <div className={`relative flex items-center justify-center transition-all duration-300 ${isScrolled || isMenuOpen ? 'w-10 h-12 scale-90' : 'w-10 h-12 md:w-12 md:h-14'}`}>
                    {/* Shield Base */}
                    <Shield className="w-full h-full text-primary fill-primary" strokeWidth={0} />
                    
                    {/* Gold Laurels Hint (Bottom) */}
                    <svg className="absolute -bottom-1 w-full h-auto text-accent opacity-90" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M10 5 Q 0 15 25 15 Q 50 15 40 5" strokeLinecap="round" opacity="0.8" />
                    </svg>

                    {/* Lighthouse Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pt-1.5 pl-0.5">
                       <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 drop-shadow-sm">
                         {/* Tower */}
                         <path d="M8 21h8l-1.5-12h-5L8 21z" />
                         {/* Top */}
                         <path d="M9 6h6l-1-3h-4L9 6z" />
                         {/* Light Area */}
                         <path d="M10 6h4v3h-4z" fill="#FEF3C7" opacity="0.9" />
                         {/* Base line */}
                         <rect x="7" y="21" width="10" height="1.5" rx="0.5" />
                       </svg>
                    </div>
                </div>
                
                {/* Text Stack */}
                <div className={`flex flex-col items-start justify-center transition-all duration-300 ${isScrolled ? 'ml-0' : 'ml-0'}`}>
                    <span className={`font-serif font-bold text-primary leading-none tracking-tight group-hover:text-slate-900 transition-all duration-300 ${isScrolled || isMenuOpen ? 'text-2xl' : 'text-2xl md:text-3xl'}`}>Regency</span>
                    <div className={`flex flex-col leading-none mt-1.5 border-t border-accent/40 pt-1 w-full transition-all duration-300 ${isScrolled || isMenuOpen ? 'opacity-0 h-0 overflow-hidden mt-0 pt-0' : 'opacity-100'}`}>
                        <span className="font-sans text-[0.65rem] font-bold text-slate-500 tracking-[0.35em] uppercase">Care Group</span>
                    </div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className="group relative px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    {/* Text Label */}
                    <span className={`relative z-10 block text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-slate-500 group-hover:text-primary group-hover:-translate-y-0.5'
                    }`}>
                      {link.label}
                    </span>

                    {/* Hover Background - Subtle Pill */}
                    <span className={`absolute inset-0 bg-slate-50 rounded-lg opacity-0 transition-opacity duration-300 ease-out -z-0 ${
                      !isActive ? 'group-hover:opacity-100' : ''
                    }`}></span>

                    {/* Active State: Glowing Gold Line */}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-accent rounded-full shadow-[0_2px_10px_rgba(197,160,89,0.5)] animate-fade-in-up"></span>
                    )}
                  </Link>
                );
              })}
              
              {/* CTA Button */}
              <div className="ml-4 pl-4 border-l border-slate-200">
                <Link to="/contact" className={`bg-accent text-white rounded-full hover:bg-primary transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 font-bold tracking-wider text-xs uppercase ${isScrolled ? 'px-6 py-3' : 'px-8 py-3.5'}`}>
                  Schedule
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary hover:text-accent focus:outline-none transition-colors p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white fixed top-[80px] left-0 right-0 bottom-0 z-40 overflow-y-auto animate-fade-in-up border-t border-slate-100">
            <div className="flex flex-col p-6 min-h-full">
              <div className="space-y-2 mb-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`block px-6 py-5 rounded-xl text-xl transition-all duration-200 ${
                      location.pathname === link.path 
                        ? 'bg-slate-50 text-primary font-bold border-l-4 border-accent shadow-sm' 
                        : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-primary border-l-4 border-transparent'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto pb-8">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-accent text-white py-4 rounded-xl font-bold tracking-wide text-lg shadow-md hover:bg-primary transition-colors mb-6">
                    Schedule a Call
                  </Link>
                  
                  <div className="flex flex-col items-center gap-4 text-slate-400 text-sm">
                      <a href="tel:4243328049" className="font-bold hover:text-primary transition-colors">(424) 332-8049</a>
                      <span className="w-12 h-px bg-slate-200"></span>
                      <p>Costa Mesa, CA</p>
                  </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - Add top padding to account for fixed navbar */}
      <main className="flex-grow pt-24 md:pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-slate-300 py-16 md:py-24 border-t-8 border-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                 <Shield className="text-accent w-10 h-10" />
                 <span className="font-serif text-3xl font-bold text-white tracking-wide">REGENCY</span>
              </div>
              <p className="text-lg leading-relaxed max-w-md mx-auto md:mx-0 text-slate-400 font-normal">
                Private caregiver referrals for Coastal Orange County families. Concierge-level vetting, thoughtful matching, and ongoing support.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-sans text-xs font-bold uppercase tracking-[0.2em] mb-8">Explore</h4>
              <ul className="space-y-4 text-base font-medium text-slate-400">
                {navLinks.map(link => (
                    <li key={link.path}><Link to={link.path} className="hover:text-white transition duration-300">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-sans text-xs font-bold uppercase tracking-[0.2em] mb-8">Contact</h4>
              <ul className="space-y-4 text-base font-medium text-slate-400">
                <li><a href="tel:4243328049" className="hover:text-white transition duration-300">(424) 332-8049</a></li>
                <li><a href="mailto:info@regencycaregroup.com" className="hover:text-white transition duration-300">info@regencycaregroup.com</a></li>
                <li className="text-slate-500">Costa Mesa, CA 92627</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6 md:gap-0">
            <p>&copy; {new Date().getFullYear()} Regency Care Group, LLC. All rights reserved.</p>
            <div className="max-w-xl text-center md:text-right font-normal text-slate-600">
              The domestic workers referred by this service are not employees of this company. Clients hire and supervise their independent caregivers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;