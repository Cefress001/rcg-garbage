import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ClipboardCheck, ArrowRight, Phone, Search, Users, Handshake } from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: Phone,
      title: 'Discovery Call',
      description: "We start by listening. We learn about your family's specific needs, schedule, personality preferences, and budget range to create a detailed profile.",
      boxTitle: "We Discuss:",
      boxItems: ['Medical & mobility needs', 'Personality compatibility', 'Schedule & budget range', 'Household preferences']
    },
    {
      id: 2,
      icon: Search,
      title: 'Screening & Vetting',
      description: "Our team conducts a rigorous vetting process. We only accept the top 5% of applicants who meet our standards for experience and character.",
      boxTitle: "Our Checks:",
      boxItems: ['Identity & Background', 'Reference Verification', 'Experience Validation', 'Interview Assessment']
    },
    {
      id: 3,
      icon: Users,
      title: 'Curated Introductions',
      description: "We present 2–3 vetted candidates who are uniquely suited to your situation. You review their profiles, and we coordinate interviews or paid trial shifts.",
      boxTitle: "The Selection:",
      boxItems: ['Candidate Bio & Resume', 'Interview Coordination', 'Trial Shift Setup', 'Selection Guidance']
    },
    {
      id: 4,
      icon: Handshake,
      title: 'Confident Start',
      description: "We facilitate a smooth start and remain available for check‑ins. If the match isn't right, our 90-day guarantee protects you.",
      boxTitle: "Peace of Mind:",
      boxItems: ['Work Agreement Templates', 'Start-Day Coordination', 'Regular Check-ins', '90-Day Guarantee']
    }
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
        // Scroll to contact CTA if at the end
        const ctaElement = document.getElementById('process-cta');
        if (ctaElement) ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in-up">
      <Hero 
        title="How Our Process Works" 
        subtitle="A clear four‑step approach to match your family with a trusted caregiver."
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section>
        <div className="max-w-7xl mx-auto">
            {/* Mobile Navigation (Horizontal) */}
            <div className="lg:hidden flex justify-between items-center mb-12 relative px-2">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 -z-10"></div>
                {steps.map((step, idx) => (
                    <button 
                        key={step.id}
                        onClick={() => setActiveStep(idx)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg transition-all duration-300 relative z-10 ${
                            activeStep === idx 
                                ? 'bg-primary text-white scale-110 shadow-lg ring-4 ring-white' 
                                : activeStep > idx 
                                    ? 'bg-accent text-white' 
                                    : 'bg-white text-slate-300 border-2 border-slate-200'
                        }`}
                    >
                        {activeStep > idx ? <CheckCircle2 size={20} /> : step.id}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Desktop Navigation (Vertical) */}
                <div className="hidden lg:block col-span-4 relative">
                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200"></div>
                    <div className="space-y-4 relative">
                        {steps.map((step, idx) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(idx)}
                                className={`w-full flex items-center gap-6 p-4 rounded-xl transition-all duration-300 group text-left ${
                                    activeStep === idx ? 'bg-sand/50 shadow-sm' : 'hover:bg-slate-50'
                                }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl transition-all duration-500 relative z-10 flex-shrink-0 ${
                                    activeStep === idx 
                                        ? 'bg-primary text-white shadow-xl scale-110' 
                                        : activeStep > idx
                                            ? 'bg-accent text-white'
                                            : 'bg-white text-slate-300 border-2 border-slate-200 group-hover:border-accent group-hover:text-accent'
                                }`}>
                                    {activeStep > idx ? <CheckCircle2 size={28} /> : step.id}
                                </div>
                                <div>
                                    <span className={`block font-serif font-bold text-xl mb-1 transition-colors ${
                                        activeStep === idx ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
                                    }`}>
                                        {step.title}
                                    </span>
                                    {activeStep === idx && (
                                        <span className="text-xs font-bold text-accent uppercase tracking-widest animate-fade-in-up">
                                            Current Step
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="col-span-1 lg:col-span-8">
                    <div className="relative min-h-[500px]">
                        {steps.map((step, idx) => {
                             if (activeStep !== idx) return null;
                             
                             return (
                                <div key={step.id} className="animate-fade-in-up">
                                    <div className="flex items-center gap-4 mb-6 lg:hidden">
                                        <span className="text-accent font-bold uppercase tracking-widest text-sm">Step 0{step.id}</span>
                                        <div className="h-px bg-slate-200 flex-grow"></div>
                                    </div>

                                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                                        {step.title}
                                    </h2>
                                    
                                    <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                                        {step.description}
                                    </p>

                                    {/* Detail Box */}
                                    <div className="bg-sand p-8 lg:p-10 rounded-2xl border border-accent/10 shadow-sm mb-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-white rounded-lg text-accent shadow-sm">
                                                <step.icon size={24} />
                                            </div>
                                            <h4 className="font-bold text-primary uppercase text-sm tracking-widest">{step.boxTitle}</h4>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {step.boxItems.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 text-slate-700 bg-white/60 p-3 rounded-lg">
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div> 
                                                    <span className="font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Actions */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button 
                                            onClick={handleNext}
                                            className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                                        >
                                            {activeStep === steps.length - 1 ? 'Start Consultation' : 'Next Step'}
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        
                                        {activeStep > 0 && (
                                            <button 
                                                onClick={() => setActiveStep(prev => prev - 1)}
                                                className="px-8 py-4 rounded-full font-bold text-slate-500 hover:text-primary transition-colors"
                                            >
                                                Go Back
                                            </button>
                                        )}
                                    </div>
                                </div>
                             );
                        })}
                    </div>
                </div>
            </div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Vetting Standard</h2>
                <div className="w-20 h-1.5 bg-accent mb-8 rounded-full"></div>
                <p className="text-xl text-slate-700 leading-relaxed font-normal mb-8">
                    We know that inviting someone into your home requires immense trust. That is why our screening process goes far beyond a simple database search. We interview every caregiver personally and check references thoroughly.
                </p>
                <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-widest">
                    <ShieldCheck size={24} /> 90-Day Replacement Guarantee
                </div>
             </div>

             <div className="bg-white p-10 rounded-2xl shadow-soft border-t-4 border-accent relative">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-primary text-white p-4 rounded-full shadow-lg">
                    <ClipboardCheck size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-b border-slate-100 pb-4">Screening Checklist</h3>
                <ul className="space-y-4">
                    {[
                        'Comprehensive Background Check',
                        'Identity Verification',
                        'Reference Interviews (Not just emails)',
                        'Employment History Verification',
                        'Certification Review (CNA, HHA, etc.)',
                        'Liability Insurance Verification',
                        'TB Test & Health Screening Review'
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-slate-700 text-lg">
                            <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
             </div>
        </div>
      </Section>

      <div id="process-cta" className="text-center py-20">
          <Link to="/contact" className="btn-primary inline-block bg-primary text-white px-12 py-5 rounded-full shadow-xl hover:bg-accent transition-all duration-300 font-bold text-lg uppercase tracking-wider transform hover:-translate-y-1">
             Begin Your Consultation
          </Link>
      </div>
    </div>
  );
};

export default Process;