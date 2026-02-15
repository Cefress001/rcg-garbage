import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Feather, Gem, HandHeart, ChevronRight, User, Brain, Home as HomeIcon, Footprints, Moon, ChevronLeft, Quote, Star, CheckCircle2, Phone, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';

const testimonials = [
  { quote: "Regency made this process calm and clear. We found the right caregiver quickly — and felt supported the whole time.", author: "Sarah M." },
  { quote: "The match was perfect. Mom feels safe and cared for, and we finally have peace of mind.", author: "Emily R." },
  { quote: "Their team truly listened. It felt like working with a trusted advisor, not a typical agency.", author: "James L." },
  { quote: "We were overwhelmed until we found Regency. The quality of caregivers they introduced was night and day compared to others.", author: "Robert T." },
  { quote: "Professional, discreet, and incredibly effective. Finding help for my father was daunting, but they made it seamless.", author: "Michael K." },
  { quote: "The peace of mind we have now is priceless. The caregiver they found for us is exactly who we needed.", author: "Jennifer B." },
  { quote: "I was impressed by how they handled everything. From the first call to the final hire, it was a first-class experience.", author: "David S." },
  { quote: "A wonderful service for families who need help but don't want to deal with the hassle of finding someone on their own.", author: "Elizabeth W." }
];

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="animate-fade-in-up">
      <Hero 
        title="Private caregiver referrals for Coastal Orange County families."
        subtitle="Concierge-level vetting, thoughtful matching, and ongoing support — typically 30–40% less than agency care."
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
          <Link to="/contact" className="bg-accent text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl uppercase tracking-widest text-base md:text-lg border-2 border-transparent transform hover:-translate-y-1 w-full sm:w-auto">
            Schedule a Call
          </Link>
          <Link to="/process" className="bg-transparent border-2 border-white text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white/10 transition duration-300 uppercase tracking-widest text-base md:text-lg backdrop-blur-sm w-full sm:w-auto">
            How It Works
          </Link>
        </div>
        <p className="mt-8 md:mt-12 text-xs md:text-sm text-white font-bold tracking-[0.2em] uppercase drop-shadow-md opacity-90 px-4">
          Vetted Caregivers • 2–3 Curated Matches • Ongoing Support
        </p>
      </Hero>

      {/* Trust Strip - Premium Dark */}
      <div className="bg-primary text-white py-6 md:py-8 border-b border-white/5 relative shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-12 text-xs font-bold uppercase tracking-[0.25em] text-center opacity-90">
          <span className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-accent" /> Fully Vetted
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-3">
            <User size={16} className="text-accent" /> Private Referral
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-3">
            <Shield size={16} className="text-accent" /> 90-Day Guarantee
          </span>
        </div>
      </div>

      {/* Mission Intro */}
      <Section className="text-center !pb-12">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 md:mb-8 leading-tight">
               Care that feels less like a service <br className="hidden md:block"/> and more like <span className="text-accent italic">family.</span>
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-8 md:mb-10 rounded-full"></div>
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-normal mb-8">
               Navigating the world of home care can be overwhelming. Regency Care Group provides a boutique alternative to large agencies. We personally match Coastal Orange County families with experienced, independent caregivers who are thoroughly vetted and truly committed.
            </p>
         </div>
      </Section>

      <Section bg="gray">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Why Families Choose Regency</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            We bridge the gap between private hiring and agency support, ensuring you never have to compromise on safety or quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { 
              icon: Shield, 
              title: 'Uncompromising Safety', 
              text: 'Every caregiver undergoes a rigorous multi-point screening process, including identity checks, background verification, and deep reference vetting.' 
            },
            { 
              icon: Feather, 
              title: 'Effortless Process', 
              text: 'We handle the heavy lifting—sourcing, screening, and scheduling—so you can focus on being a family member, not a recruiter.' 
            },
            { 
              icon: Gem, 
              title: 'Exceptional Value', 
              text: 'Our direct-hire model typically saves families 30–40% compared to agencies, while allowing caregivers to earn a living wage.' 
            },
            { 
              icon: HandHeart, 
              title: 'Ongoing Partnership', 
              text: 'We don’t just walk away after the match. We remain your partner for backup care, conflict resolution, and guidance.' 
            }
          ].map((item, idx) => (
             <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden hover:-translate-y-1">
                {/* Accent Top Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="mb-6 md:mb-8 inline-flex p-4 rounded-xl bg-sand/50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{item.text}</p>
              </div>
          ))}
        </div>
      </Section>

      {/* How It Works - Clean White */}
      <Section> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-sand rounded-3xl -z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    srcSet="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80 1000w"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt="Two people shaking hands"
                    loading="lazy"
                    className="rounded-2xl shadow-xl w-full object-cover h-[400px] md:h-[600px]"
                />
                <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden sm:block">
                    <p className="font-serif font-bold text-primary text-xl mb-1">98%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Successful Matches</p>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 md:mb-8">A Simple, Human Process</h2>
                <div className="w-20 h-1.5 bg-accent mb-8 md:mb-10 rounded-full"></div>
                
                <div className="space-y-8 md:space-y-12">
                    {[
                        { step: 1, title: 'Discovery Call', desc: 'We clarify needs, schedule, preferences and budget.' },
                        { step: 2, title: 'Screening', desc: 'Thorough background checks and reference verification.' },
                        { step: 3, title: 'Introductions', desc: 'You receive 2–3 vetted candidates selected for fit.' },
                        { step: 4, title: 'Support', desc: 'We remain available for check-ins and guidance.' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 md:gap-6 group">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-primary text-lg md:text-xl font-serif font-bold rounded-full flex items-center justify-center border-2 border-slate-200 group-hover:border-accent group-hover:text-accent transition-colors shadow-sm">
                                    {item.step}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12">
                    <Link to="/process" className="inline-flex items-center text-primary font-bold hover:text-accent uppercase tracking-widest text-sm border-b-2 border-primary hover:border-accent pb-1 transition-all duration-300 hover:pb-2">
                        View Full Process <ChevronRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Who We Serve</h2>
           <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {[
             { icon: User, title: 'Post-Surgery Recovery', desc: 'Short-term support after a medical procedure or hospital stay.' },
             { icon: Brain, title: 'Dementia & Memory', desc: 'Compassionate assistance tailored to cognitive and emotional needs.' },
             { icon: HomeIcon, title: 'Daily Living', desc: 'Help with everyday tasks, hobbies and meaningful connection.' },
             { icon: Footprints, title: 'Mobility', desc: 'Assistance getting around safely—errands, appointments and outings.' },
             { icon: Moon, title: 'Overnight & 24/7', desc: 'Continuous support for peace of mind around-the-clock.' }
           ].map((item, idx) => (
             <div key={idx} className="flex gap-6 md:gap-8 p-8 md:p-10 bg-white hover:bg-white border border-slate-100 hover:border-accent/30 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-default group transform hover:-translate-y-1">
                <div className="flex-shrink-0 mt-1">
                    <item.icon className="text-slate-300 group-hover:text-accent transition-colors duration-300" size={32} strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="font-serif font-bold text-primary text-xl mb-3">{item.title}</h3>
                    <p className="text-base text-slate-600 font-normal leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </Section>

      <Section bg="cream">
          <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Kind Words</h2>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative px-0 md:px-12">
            {/* Carousel Container */}
            <div className="overflow-hidden py-10">
                <div 
                    className="flex transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div key={i} className="w-full flex-shrink-0 px-2 md:px-12">
                            <blockquote className="bg-white p-8 md:p-20 rounded-2xl shadow-soft relative flex flex-col items-center text-center min-h-[300px] md:min-h-[400px] justify-center border-none">
                                <div className="absolute -top-6 md:-top-8 bg-accent text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg">
                                    <Quote size={24} fill="currentColor" className="text-white" />
                                </div>
                                
                                <div className="flex gap-1 mb-6 md:mb-8 mt-4 md:mt-0">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-accent fill-accent" />
                                    ))}
                                </div>

                                <p className="text-primary/80 italic mb-8 md:mb-10 font-serif text-xl md:text-3xl leading-relaxed">"{t.quote}"</p>
                                <div className="w-12 h-1 bg-slate-100 mb-6"></div>
                                <cite className="not-italic font-bold text-primary text-sm uppercase tracking-[0.2em] block">{t.author}</cite>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Navigation Buttons */}
            <button 
                onClick={prevTestimonial}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 bg-white text-primary p-4 rounded-full shadow-lg hover:bg-primary hover:text-white transition duration-300 z-10 hover:scale-110"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextTestimonial}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 bg-white text-primary p-4 rounded-full shadow-lg hover:bg-primary hover:text-white transition duration-300 z-10 hover:scale-110"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

             {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-4 mt-2">
                <button 
                    onClick={prevTestimonial}
                    className="bg-white text-primary p-4 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextTestimonial}
                    className="bg-white text-primary p-4 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentTestimonial(i)}
                        className={`transition-all duration-300 rounded-full ${i === currentTestimonial ? 'bg-accent w-12 h-2' : 'bg-slate-200 w-2 h-2 hover:bg-accent/50'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
          </div>
      </Section>

      {/* Dark Premium CTA Section */}
      <div className="bg-primary text-white py-20 md:py-32 px-6 text-center relative overflow-hidden">
          {/* Background Gradient & Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900 z-0"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 md:mb-8 text-white">Not sure where to start?</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 md:mb-10 rounded-full"></div>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 md:mb-16 font-normal text-xl md:text-2xl leading-relaxed">
                We’ll ask a few questions about your loved one's needs and guide you to the right next step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
                <a href="tel:4243328049" className="bg-transparent border border-white/30 text-white px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-base font-bold flex items-center justify-center gap-3">
                    <Phone size={20} /> (424) 332-8049
                </a>
                <Link to="/contact" className="bg-accent text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-glow uppercase tracking-widest text-base transform hover:-translate-y-1 flex items-center justify-center gap-3">
                    <Calendar size={20} /> Schedule a Call
                </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;