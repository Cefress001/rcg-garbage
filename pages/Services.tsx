import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { Check, Star, Shield, Clock, HeartHandshake, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Hero 
        title="Our Services"
        subtitle="Flexible support tiers tailored to your family's needs — from matching to ongoing guidance."
        backgroundImage="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content - Tiers */}
            <div className="lg:w-2/3 space-y-12">
                <div className="mb-12">
                  <h2 className="text-4xl font-serif font-bold text-primary mb-6">Support Tiers</h2>
                  <div className="w-20 h-1.5 bg-accent rounded-full"></div>
                  <p className="text-xl text-slate-600 mt-6 leading-relaxed">
                    We offer three distinct levels of engagement to ensure your family receives the exact amount of support required.
                  </p>
                </div>
                
                {/* Tier 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-200 group-hover:bg-slate-300 transition-colors"></div>
                    <div className="pl-6">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-3xl font-serif font-bold text-primary group-hover:text-slate-700 transition-colors">Curated Placement</h3>
                             <Shield className="text-slate-300 group-hover:text-primary transition-colors" size={32} />
                        </div>
                        <p className="text-slate-500 mb-8 font-serif text-xl italic leading-relaxed">
                            For families who need a perfect match but prefer to manage the ongoing relationship themselves.
                        </p>
                        <div className="h-px w-full bg-slate-100 mb-8"></div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {['Deep-dive discovery call', 'Curated candidate shortlist', 'Rigorous background checks', 'Reference verification', 'Interview coordination', 'Employment agreement templates'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={20} className="text-slate-400 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tier 2 - Highlighted */}
                <div className="bg-primary text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-6 py-2 rounded-bl-xl uppercase tracking-widest">Most Popular</div>
                    
                    {/* Background decoration */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-3xl font-serif font-bold text-white">Placement + Continuity</h3>
                             <Star className="text-accent fill-accent" size={32} />
                        </div>
                        <p className="text-slate-300 mb-8 font-serif text-xl italic leading-relaxed border-l-2 border-accent pl-4">
                            Our signature service. Stability and peace of mind knowing we are there if things change.
                        </p>
                         <div className="h-px w-full bg-white/10 mb-8"></div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {['Everything in Curated Placement', '90-Day Replacement Guarantee', 'Post-placement check-ins (Days 3, 14, 30)', 'Conflict resolution mediation', 'Backup care coordination priority'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={20} className="text-accent mt-1 flex-shrink-0" />
                                    <span className="text-slate-100 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tier 3 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent group-hover:bg-accent/80 transition-colors"></div>
                    <div className="pl-6">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors">Private Family Office</h3>
                             <HeartHandshake className="text-slate-300 group-hover:text-accent transition-colors" size={32} />
                        </div>
                        <p className="text-slate-500 mb-8 font-serif text-xl italic leading-relaxed">
                            Comprehensive, high-touch management for complex care needs or multiple staffing requirements.
                        </p>
                        <div className="h-px w-full bg-slate-100 mb-8"></div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {['Everything in Placement + Continuity', 'Dedicated Care Manager', 'Monthly in-home visits', 'Payroll & tax coordination setup', 'Ongoing staff training coordination', '24/7 Priority Access'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={20} className="text-accent mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sidebar - Investment */}
            <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-8">
                    <div className="bg-sand p-10 rounded-2xl border border-sand shadow-soft">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Pricing Model</h3>
                        </div>
                        <p className="text-slate-700 mb-6 leading-relaxed">
                            We operate on a transparent, one-time placement fee model based on the caregiver's annual gross salary. 
                        </p>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 mb-8">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Agency vs. Regency</p>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-3xl font-serif font-bold text-primary">30-40%</span>
                                <span className="text-slate-600 font-medium">savings</span>
                            </div>
                            <p className="text-xs text-slate-500">Average annual savings compared to traditional hourly agency markups.</p>
                        </div>
                        <Link to="/contact" className="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold hover:bg-accent transition-colors shadow-lg uppercase tracking-widest text-sm">
                            Request Fee Schedule
                        </Link>
                    </div>

                    <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                         <h3 className="text-xl font-bold text-primary uppercase tracking-widest mb-6">FAQ</h3>
                         <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-2">Is there a deposit?</h4>
                                <p className="text-sm text-slate-600">A small engagement fee starts the search, fully credited toward the final placement success fee.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-2">What about taxes?</h4>
                                <p className="text-sm text-slate-600">You pay the caregiver directly. We connect you with our payroll partners to handle withholdings effortlessly.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* Additional Value Section */}
      <Section bg="gray">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">The Regency Difference</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               {[
                   { title: 'Private & Discreet', desc: 'We serve high-profile families who value privacy above all else. Your data is secure and our process is confidential.' },
                   { title: 'Conflict Free', desc: 'Unlike agencies that profit from high turnover, our goal is longevity. We only succeed when the match lasts.' },
                   { title: 'Expertly Vetted', desc: 'We don’t just check boxes. We verify character, emotional intelligence, and specific skill sets for complex needs.' }
               ].map((item, i) => (
                   <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                       <h3 className="font-serif font-bold text-2xl text-primary mb-4">{item.title}</h3>
                       <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                   </div>
               ))}
          </div>
      </Section>

      {/* CTA */}
      <div className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to find the perfect match?</h2>
            <p className="mb-12 text-slate-300 font-normal text-xl leading-relaxed">
                Schedule a complimentary 15-minute discovery call to discuss your family's needs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl uppercase tracking-widest text-sm transform hover:-translate-y-1">
                Book Consultation <ArrowRight size={18} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;