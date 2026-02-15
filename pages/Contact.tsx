import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a random network error for robust testing (10% chance)
          // if (Math.random() < 0.1) {
          //   reject(new Error("Network error"));
          // } else {
            resolve(true);
          // }
        }, 1500);
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus('error');
      setErrorMessage('We encountered an issue sending your message. Please check your connection or try again later.');
    }
  };

  return (
    <>
      <Hero 
        title="Let’s Begin the Conversation" 
        subtitle="Whether you have questions or are ready to start matching, we’re here to listen and guide you."
        backgroundImage="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Left Panel */}
            <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
                <h2 className="text-4xl font-serif font-bold text-primary mb-8">Reach Out</h2>
                <div className="w-16 h-1.5 bg-primary/20 mb-10"></div>
                
                <div className="space-y-8 text-xl text-slate-700 font-normal">
                    <p>
                        If you have questions about our services or process, or if you’re ready to schedule your consultation, please connect with us by phone or email—or send us a message using the form.
                    </p>
                    
                    <div className="space-y-6 mt-10">
                        <div>
                            <strong className="block text-primary uppercase text-sm font-bold tracking-widest mb-2">Phone</strong>
                            <a href="tel:4243328049" className="hover:text-primary underline decoration-slate-300 underline-offset-8 text-2xl">(424) 332-8049</a>
                        </div>
                        <div>
                            <strong className="block text-primary uppercase text-sm font-bold tracking-widest mb-2">Text</strong>
                            <a href="sms:4243328049" className="hover:text-primary underline decoration-slate-300 underline-offset-8 text-2xl">(424) 332-8049</a>
                        </div>
                        <div>
                            <strong className="block text-primary uppercase text-sm font-bold tracking-widest mb-2">Email</strong>
                            <a href="mailto:info@regencycaregroup.com" className="hover:text-primary underline decoration-slate-300 underline-offset-8 text-2xl">info@regencycaregroup.com</a>
                        </div>
                        <div>
                            <strong className="block text-primary uppercase text-sm font-bold tracking-widest mb-2">Office</strong>
                            <span className="text-2xl">Costa Mesa, CA 92627</span>
                        </div>
                    </div>

                    <p className="text-base italic text-slate-500 pt-6 font-medium">Response within 24 hours.</p>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-4xl font-serif font-bold text-primary mb-8">Send a Message</h2>
                <div className="w-16 h-1.5 bg-primary/20 mb-10"></div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block text-base font-bold text-slate-700 mb-2">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-lg" 
                            placeholder="Jane Doe" 
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-base font-bold text-slate-700 mb-2">Your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-lg" 
                            placeholder="jane@example.com" 
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-base font-bold text-slate-700 mb-2">How can we help?</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={5} 
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-lg" 
                            placeholder="Tell us a little about your situation..."
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Error sending message</p>
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Message sent successfully</p>
                                <p className="text-sm">We'll get back to you within 24 hours.</p>
                            </div>
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === 'submitting' || status === 'success'}
                        className="w-full bg-primary text-white font-bold py-5 rounded-full hover:bg-slate-800 transition shadow-md text-lg uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 className="animate-spin" /> Sending...
                            </>
                        ) : 'Send Message'}
                    </button>
                    <p className="text-center text-sm text-slate-500 font-medium">We reply within 24 hours.</p>
                </form>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;