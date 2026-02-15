import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Scale, UserCheck, HandCoins, Handshake, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Hero 
        title="About Regency Care Group"
        subtitle="Learn what makes us different and why families trust our private referral service."
        backgroundImage="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      >
      </Hero>

      <Section>
        {/* Purpose Section - Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Purpose</h2>
                <div className="w-20 h-1.5 bg-accent mb-8 rounded-full"></div>
                <p className="text-xl text-slate-600 leading-relaxed font-normal mb-6">
                  Regency Care Group was founded to solve a recurring problem in home care: families cycling through caregivers due to mismatches and miscommunication. We believe caregiving is a relationship, not a transaction. 
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-normal">
                  That’s why we listen deeply, understand your needs and values, and match you with a caregiver who feels like family. Our mission is to provide Orange County families with safety, ease, value and ongoing support.
                </p>
            </div>
            <div className="w-full md:w-1/2 relative">
                <div className="absolute top-4 -right-4 w-full h-full border-2 border-accent rounded-2xl z-0"></div>
                <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    srcSet="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80 1000w"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Caregiver holding hands with senior" 
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
            </div>
        </div>

        {/* Story Section - Image Left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
                <div className="w-20 h-1.5 bg-accent mb-8 rounded-full"></div>
                <p className="text-xl text-slate-600 leading-relaxed font-normal mb-6">
                  Our founder spent decades in family services and coaching. Through this work, he saw first‑hand how the right match can transform a household. Determined to raise the standard of private in‑home care, he built Regency to combine high‑touch service with careful screening and thoughtful matching.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-normal mb-8">
                  Today, we serve families throughout Coastal Orange County earning referrals from estate managers, family offices and professionals who trust our commitment to discretion.
                </p>
                {/* Simulated Signature */}
                <div className="font-serif italic text-4xl text-primary opacity-80">
                    Jonas Eisenberg
                </div>
                <div className="text-sm font-bold text-accent uppercase tracking-widest mt-2">Founder, Regency Care Group</div>
            </div>
            <div className="w-full md:w-1/2 relative">
                 <div className="absolute -top-4 -left-4 w-full h-full bg-sand rounded-2xl z-0"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    srcSet="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80 1000w"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Woman looking out window" 
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
            </div>
        </div>
      </Section>

      <Section bg="gray">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The principles that guide every referral and family interaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
                { icon: Scale, title: "Stability", text: "We cultivate long‑term relationships to provide a stable care experience." },
                { icon: UserCheck, title: "Discretion", text: "We handle every interaction with complete confidentiality and privacy." },
                { icon: HandCoins, title: "Stewardship", text: "We steward your trust by acting with integrity and transparency." },
                { icon: Handshake, title: "Partnership", text: "We see ourselves as partners, not vendors. Our success is your peace of mind." }
             ].map((item, idx) => (
                 <div key={idx} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-slate-100">
                    <div className="w-16 h-16 bg-cream text-primary flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                       <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-primary font-serif">{item.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
                 </div>
             ))}
          </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                 <h2 className="text-4xl font-serif font-bold text-primary mb-8">Serving Coastal Orange County</h2>
                 <p className="text-xl text-slate-800 leading-relaxed font-normal mb-8">
                    We specialize in serving the unique needs of families in our local coastal communities. This focus allows us to maintain close, personal relationships with our caregiver network.
                 </p>
                 <ul className="grid grid-cols-2 gap-4">
                    {['Newport Beach', 'Corona del Mar', 'Laguna Beach', 'Crystal Cove', 'Pelican Hill', 'Dana Point', 'Monarch Beach', 'San Clemente'].map((city, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 font-medium text-lg">
                            <MapPin size={18} className="text-accent" /> {city}
                        </li>
                    ))}
                 </ul>
            </div>
            <div className="bg-primary p-12 rounded-2xl text-white text-center">
                <h3 className="font-serif text-3xl font-bold mb-6">Not an Agency</h3>
                <p className="text-lg leading-relaxed text-slate-300 mb-8">
                    Families hire and supervise their caregivers directly, while we handle vetting, matching and ongoing support. Our approach blends the flexibility of private hiring with the safety net of a professional advisory service.
                </p>
                <div className="inline-block border border-accent px-6 py-2 rounded-full text-accent text-sm font-bold uppercase tracking-widest">
                    Referral Model
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default About;