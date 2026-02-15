import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { 
  Home, Users, Handshake, FileText, BookOpen, 
  ChevronDown, Download, ExternalLink, ArrowRight,
  FileCheck, CalendarCheck, FileQuestion
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void 
}> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-xl font-serif font-bold transition-colors duration-300 pr-8 ${isOpen ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
          {title}
        </span>
        <div className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-accent' : 'group-hover:text-accent'}`}>
           <ChevronDown size={24} />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="text-lg text-slate-600 font-normal leading-relaxed pr-8">
            {children}
            </div>
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const downloads = [
      { icon: FileCheck, title: "Daily Care Log", desc: "Track medication, meals, and activities.", size: "PDF • 1.2 MB" },
      { icon: Users, title: "Emergency Contact Sheet", desc: "Vital info for caregivers in one place.", size: "PDF • 0.8 MB" },
      { icon: CalendarCheck, title: "Medication Schedule", desc: "Weekly tracker for dosage and times.", size: "PDF • 1.5 MB" },
      { icon: FileQuestion, title: "Interview Checklist", desc: "Key questions to ask during interviews.", size: "PDF • 1.1 MB" },
  ];

  const articles = [
    { 
        icon: Home, 
        category: "Home Safety",
        title: 'Preparing for In-Home Care', 
        desc: 'Practical steps to ensure your home is welcoming, safe, and ready for a caregiver’s arrival. Remove trip hazards and setup a dedicated space.' 
    },
    { 
        icon: Users, 
        category: "Family Dynamics",
        title: 'Aligning Family Decisions', 
        desc: 'Tips for ensuring siblings and family members are on the same page during the hiring process. How to handle disagreements effectively.' 
    },
    { 
        icon: Handshake, 
        category: "Relationships",
        title: 'Healthy Care Relationships', 
        desc: 'Best practices for establishing clear communication, boundaries, and mutual respect from day one to ensure longevity.' 
    },
    { 
        icon: FileText, 
        category: "Legal & Admin",
        title: 'Employer Obligations 101', 
        desc: 'A brief overview of household employer responsibilities, taxes, and best practices for compliance in California.' 
    },
  ];

  const faqs = [
    {
        question: "How is Regency different from a home care agency?",
        answer: "We are a private referral service, not an employer. You hire the caregiver directly, which gives you complete control over who enters your home and ensures consistency. This model typically costs 30–40% less than agency rates while allowing caregivers to earn a fairer wage."
    },
    {
        question: "How quickly can we find a caregiver?",
        answer: "We typically present 2–3 fully vetted candidates within 48 to 72 hours of our initial discovery call. For urgent needs, we can sometimes expedite this process, but we prioritize finding the right match over a fast placement."
    },
    {
        question: "Do you employ the caregivers?",
        answer: "No. The caregivers in our registry are independent domestic workers. You become their household employer. We guide you through this simple process and can refer you to payroll specialists who handle taxes and workers' compensation."
    },
    {
        question: "What if the caregiver isn't a good fit?",
        answer: "We offer a 90-day replacement guarantee. If for any reason the match doesn't work out within the first three months, we will restart the search and find a replacement at no additional cost to you."
    },
     {
        question: "Are the caregivers insured?",
        answer: "Yes. We require all caregivers in our network to carry their own professional liability insurance. We verify this coverage—along with their background checks and certifications—before presenting them to you."
    },
    {
        question: "What areas do you serve?",
        answer: "We specialize in Coastal Orange County, serving communities such as Newport Beach, Corona del Mar, Laguna Beach, Dana Point, and Pelican Hill."
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <Hero 
        title="Resources & Insights"
        subtitle="Expert guidance to help you hire wisely, prepare your home, and cultivate a healthy care relationship."
        backgroundImage="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Featured Guide Section - High Value */}
      <Section>
         <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-primary">
            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-6">
                    <BookOpen size={20} /> Featured Guide
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                    The OC Family Guide to Private Care
                </h2>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
                    Hiring privately offers control and savings, but it requires diligence. Our comprehensive guide covers everything from insurance to interviews in Coastal Orange County.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                        <Download size={20} /> Download Free PDF
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 bg-slate-800 relative min-h-[400px]">
                <img 
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    srcSet="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80 1000w"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Open book and glasses"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
                
                {/* Book Mockup Visual */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                     <div className="bg-cream p-1 rounded-r-lg shadow-2xl w-[240px] h-[340px] transform rotate-3 hover:rotate-0 transition-transform duration-500 border-l-8 border-primary relative">
                        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/20 to-transparent"></div>
                        <div className="border border-slate-200 p-6 text-center h-full flex flex-col justify-between bg-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-32 bg-slate-50 -z-10 rounded-b-full scale-150 translate-y-[-50%]"></div>
                            <div className="mt-4">
                                <div className="text-primary font-serif font-bold text-xl mb-1">REGENCY</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-8">Care Group</div>
                                <div className="text-2xl font-serif font-bold text-primary leading-tight mb-4">Hiring<br/>Safely</div>
                                <div className="w-8 h-1 bg-accent mx-auto rounded-full"></div>
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest">2025 Edition</div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
      </Section>

      {/* Toolkit Section - Cards Grid */}
      <Section bg="gray">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Family Toolkit</h2>
              <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Essential templates and checklists to help you manage care like a professional.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloads.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-sand rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <item.icon size={24} strokeWidth={1.5} />
                          </div>
                          <div className="text-slate-300 group-hover:text-accent transition-colors">
                              <Download size={20} />
                          </div>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 flex-grow">{item.desc}</p>
                      <div className="pt-4 border-t border-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {item.size}
                      </div>
                  </div>
              ))}
          </div>
      </Section>

      {/* Articles Section */}
      <Section>
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Expert Insights</h2>
              <div className="w-16 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Deep dives into the logistics, legalities, and emotions of home care.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               {articles.map((item, idx) => (
                   <div key={idx} className="group cursor-pointer">
                       <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {item.category}
                                </span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                                {item.desc}
                            </p>
                            <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest group-hover:underline underline-offset-4">
                                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                       </div>
                   </div>
               ))}
          </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="cream" className="border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h2>
                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-8 py-4">
                {faqs.map((faq, idx) => (
                    <AccordionItem 
                        key={idx} 
                        title={faq.question} 
                        isOpen={openFaqIndex === idx} 
                        onClick={() => toggleFaq(idx)}
                    >
                        {faq.answer}
                    </AccordionItem>
                ))}
            </div>

             <div className="mt-16 text-center">
                <p className="text-lg text-slate-600 mb-6 font-normal">
                    Looking for external support?
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                     <a href="#" className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-primary font-bold hover:border-accent hover:text-accent transition-colors">
                         <ExternalLink size={16} /> Alzheimer's Association
                     </a>
                     <a href="#" className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-primary font-bold hover:border-accent hover:text-accent transition-colors">
                         <ExternalLink size={16} /> Family Caregiver Alliance
                     </a>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Resources;