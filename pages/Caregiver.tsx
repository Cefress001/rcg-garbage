import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { AlertCircle, CheckCircle, Loader2, Shield, Heart, Award, Banknote, Calendar, UserCheck, Briefcase, Star, Upload, FileText, Quote } from 'lucide-react';

const Caregiver: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus('success');
      // In a real app, we might redirect or clear the form here.
      // e.currentTarget.reset(); // Optional: reset form fields
    } catch (error) {
      console.error("Application submission error:", error);
      setStatus('error');
      setErrorMessage('Unable to submit application at this time. Please try again later.');
    }
  };

  return (
    <div className="animate-fade-in-up">
      <Hero 
        title="Join Our Network" 
        subtitle="We partner with skilled, compassionate caregivers who value professionalism and long‑term relationships."
        backgroundImage="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Split Section: Standards & Benefits */}
      <div className="flex flex-col lg:flex-row">
            {/* Left: What We Look For (Dark/Exclusive) */}
            <div className="lg:w-1/2 bg-primary text-white p-12 lg:p-24 flex items-center">
                <div className="max-w-xl mx-auto">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-accent mb-8 border border-white/20">
                        <Shield size={32} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Regency Standard</h2>
                    <div className="w-20 h-1.5 bg-accent mb-8 rounded-full"></div>
                    <p className="text-slate-300 text-xl leading-relaxed mb-10 font-normal">
                        Our families expect discretion, proactive care, and total reliability. We are looking for career caregivers who take pride in their profession and view caregiving as a noble calling.
                    </p>
                    <ul className="space-y-8">
                        {[
                            { icon: Calendar, text: '3+ years of professional, verifiable experience' },
                            { icon: UserCheck, text: 'Impeccable references and clean background check' },
                            { icon: Heart, text: 'High emotional intelligence and patience' },
                            { icon: Shield, text: 'Commitment to privacy and absolute discretion' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-5">
                                <item.icon className="text-accent flex-shrink-0 mt-1" size={24} />
                                <span className="text-lg font-medium tracking-wide text-slate-100">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right: What You Receive (Light/Welcoming) */}
            <div className="lg:w-1/2 bg-sand text-primary p-12 lg:p-24 flex items-center">
                 <div className="max-w-xl mx-auto">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-8 shadow-md border border-slate-100">
                        <Award size={32} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Partnership</h2>
                    <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
                    <p className="text-slate-600 text-xl leading-relaxed mb-10 font-normal">
                        We don't just place you; we support you. We believe that happy, respected caregivers provide the best care. Joining us means entering a community of professionals.
                    </p>
                    <ul className="space-y-8">
                        {[
                            { icon: UserCheck, text: 'Direct matches with private-pay families' },
                            { icon: Banknote, text: 'Competitive market rates (you negotiate your pay)' },
                            { icon: Heart, text: 'Conflict support and ongoing guidance' },
                            { icon: Star, text: 'Respect for your expertise and time' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-5">
                                <div className="bg-primary/10 p-1.5 rounded-full shadow-sm mt-0.5">
                                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                </div>
                                <span className="text-lg font-bold text-slate-700">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                 </div>
            </div>
      </div>

      {/* Testimonial / Social Proof */}
      <Section bg="white" className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-accent mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-serif text-primary leading-relaxed italic mb-10">
                "Working with Regency has been a breath of fresh air. They respect my skills, match me with wonderful families, and always have my back. It feels less like an agency and more like a professional partnership."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Elena" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                    <div className="font-bold text-primary uppercase tracking-widest text-sm">Elena R.</div>
                    <div className="text-xs text-slate-500 font-medium">Caregiver since 2019</div>
                </div>
            </div>
        </div>
      </Section>

      {/* Section: Process Steps */}
      <Section>
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Application Journey</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">From application to placement, our process is designed to ensure a perfect fit.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-10"></div>
             
             {[
                { title: 'Apply', desc: 'Submit your professional profile below.' },
                { title: 'Interview', desc: 'A phone or video call to assess experience.' },
                { title: 'Verify', desc: 'Rigorous reference and background checks.' },
                { title: 'Match', desc: 'Introduction to families that fit your skills.' }
             ].map((step, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center bg-white md:bg-transparent p-8 md:p-0 rounded-xl border md:border-none border-slate-100 shadow-soft md:shadow-none group">
                    <div className="w-20 h-20 bg-white text-primary text-2xl font-serif font-bold rounded-full flex items-center justify-center mb-8 border-[4px] border-slate-100 shadow-lg relative z-10 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                        {idx + 1}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg px-2">{step.desc}</p>
                 </div>
             ))}
        </div>
      </Section>

      {/* Section: Form */}
      <Section bg="cream" className="border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-primary p-10 md:p-12 text-center relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                         <div className="absolute right-0 top-0 w-64 h-64 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                         <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    
                    <Briefcase className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 relative z-10">Professional Profile</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto relative z-10">Complete the form below to begin the screening process. All information is kept strictly confidential.</p>
                </div>
                
                <div className="p-8 md:p-16">
                     <form onSubmit={handleSubmit} className="space-y-10">
                        {status === 'success' ? (
                            <div className="text-center py-16 animate-fade-in-up">
                                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6">Application Received</h3>
                                <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto">Thank you for your interest in Regency Care Group. Our team will review your credentials and contact you within 72 hours if there is a potential match.</p>
                                <button 
                                    type="button" 
                                    onClick={() => setStatus('idle')}
                                    className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors shadow-md"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Personal Information Group */}
                                <div>
                                    <h3 className="text-lg font-bold text-primary uppercase tracking-widest border-b border-slate-200 pb-4 mb-8">Personal Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group">
                                            <label htmlFor="fullName" className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                                            <input type="text" id="fullName" name="fullName" required className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-lg text-lg focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder="e.g. Maria Rodriguez" />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="phone" className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                                            <input type="tel" id="phone" name="phone" required className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-lg text-lg focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder="(424) 332-8049" />
                                        </div>
                                        <div className="md:col-span-2 group">
                                            <label htmlFor="email" className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                                            <input type="email" id="email" name="email" required className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-lg text-lg focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder="you@example.com" />
                                        </div>
                                    </div>
                                </div>

                                {/* Experience Group */}
                                <div>
                                    <h3 className="text-lg font-bold text-primary uppercase tracking-widest border-b border-slate-200 pb-4 mb-8">Experience & Qualifications</h3>
                                    <div className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="group">
                                                <label htmlFor="experience" className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Years of Professional Experience</label>
                                                <div className="relative">
                                                    <select id="experience" name="experience" required className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-lg text-lg focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-slate-700">
                                                        <option value="" disabled selected>Select an option...</option>
                                                        <option value="0-2">0-2 Years</option>
                                                        <option value="3-5">3-5 Years</option>
                                                        <option value="5-10">5-10 Years</option>
                                                        <option value="10+">10+ Years</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="certs" className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Certifications</label>
                                                <input type="text" id="certs" name="certs" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-lg text-lg focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder="e.g. CNA, HHA, BLS" />
                                            </div>
                                        </div>
                                        
                                        {/* Resume Upload - New Feature */}
                                        <div className="group">
                                            <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Resume / CV</label>
                                            <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-10 text-center hover:bg-slate-50 hover:border-accent transition-all cursor-pointer group-hover:shadow-sm">
                                                <input 
                                                    type="file" 
                                                    id="resume" 
                                                    name="resume" 
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                                />
                                                <div className="flex flex-col items-center">
                                                    {fileName ? (
                                                        <div className="flex items-center gap-2 text-primary font-bold bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                                                            <FileText size={20} className="text-green-600" />
                                                            {fileName}
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:text-accent group-hover:bg-white group-hover:shadow-sm transition-all">
                                                                <Upload size={28} />
                                                            </div>
                                                            <p className="text-slate-700 font-bold text-lg mb-1">Click to upload or drag and drop</p>
                                                            <p className="text-sm text-slate-400">PDF, DOCX up to 5MB</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="example1" className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Share a time you built trust with a client. What did you do to earn it?</label>
                                            <textarea id="example1" name="example1" rows={3} required className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-lg text-lg focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-y placeholder:text-slate-300"></textarea>
                                        </div>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-start gap-4 animate-fade-in-up">
                                        <AlertCircle className="w-6 h-6 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-lg">Submission Error</p>
                                            <p>{errorMessage}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        disabled={status === 'submitting'}
                                        className="w-full bg-primary text-white font-bold py-5 rounded-full hover:bg-slate-800 transition-all duration-300 text-lg uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 className="animate-spin" /> Submitting...
                                            </>
                                        ) : 'Submit Application'}
                                    </button>
                                    <p className="text-center text-sm text-slate-400 font-medium mt-6">
                                        By submitting, you consent to Regency Care Group contacting you regarding your application.
                                    </p>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Caregiver;