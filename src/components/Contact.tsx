import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="w-full bg-luxury-black py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        
        {/* Left Column: Info */}
        <div className="flex flex-col justify-between">
            <FadeIn>
                <div>
                    <span className="block text-[10px] tracking-[0.2em] text-luxury-muted uppercase mb-8">Contact</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-luxury-offwhite mb-8 font-thin leading-[1.1]">
                    Let's Create <br />
                    <span className="italic">Together</span>
                    </h2>
                    
                    <div className="w-12 h-[1px] bg-luxury-divider mb-8"></div>

                    <p className="text-luxury-muted text-sm leading-relaxed mb-16 max-w-sm opacity-80 font-light">
                    For collaborations, commissions, or conversations about the intersection of digital craft and textile design&mdash;I welcome your inquiry.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <span className="block text-[10px] tracking-[0.2em] text-luxury-muted uppercase mb-4">Email</span>
                        <a href="mailto:studio@hasna.com" className="text-luxury-offwhite text-lg font-light hover:text-white transition-colors">studio@hasna.com</a>
                    </div>

                    <div>
                        <span className="block text-[10px] tracking-[0.2em] text-luxury-muted uppercase mb-4">Location</span>
                        <p className="text-luxury-offwhite text-lg font-light">Jakarta, Indonesia</p>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* Right Column: Form */}
        <div className="mt-12 md:mt-0">
            {formState === 'success' ? (
                <FadeIn>
                    <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-luxury-divider bg-luxury-charcoal/5">
                        <span className="text-3xl font-serif italic text-luxury-offwhite block mb-4">Message Sent</span>
                        <p className="text-luxury-muted text-sm font-light mb-8">Thank you. I will respond to your inquiry shortly.</p>
                        <button 
                            onClick={() => setFormState('idle')}
                            className="text-xs uppercase tracking-widest border-b border-luxury-muted pb-1 text-luxury-muted hover:text-luxury-offwhite hover:border-luxury-offwhite transition-all"
                        >
                            Send Another
                        </button>
                    </div>
                </FadeIn>
            ) : (
                <form onSubmit={handleSubmit} className="pt-2">
                    <FadeIn delay={200}>
                        {/* Name */}
                        <div className="mb-12 group">
                            <label className="block text-[10px] tracking-[0.2em] text-luxury-muted uppercase mb-4 group-focus-within:text-luxury-offwhite transition-colors">Name</label>
                            <input 
                                type="text"
                                required
                                placeholder="Your name" 
                                className="w-full bg-transparent border-b border-luxury-divider py-4 text-luxury-offwhite text-sm focus:outline-none focus:border-luxury-offwhite transition-all placeholder:text-luxury-divider/50 placeholder:font-light" 
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-12 group">
                            <label className="block text-[10px] tracking-[0.2em] text-luxury-muted uppercase mb-4 group-focus-within:text-luxury-offwhite transition-colors">Email</label>
                            <input 
                                type="email"
                                required 
                                placeholder="your@email.com" 
                                className="w-full bg-transparent border-b border-luxury-divider py-4 text-luxury-offwhite text-sm focus:outline-none focus:border-luxury-offwhite transition-all placeholder:text-luxury-divider/50 placeholder:font-light" 
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-16 group">
                            <label className="block text-[10px] tracking-[0.2em] text-luxury-muted uppercase mb-4 group-focus-within:text-luxury-offwhite transition-colors">Message</label>
                            <textarea 
                                required
                                rows={4} 
                                placeholder="Tell me about your project..." 
                                className="w-full bg-transparent border-b border-luxury-divider py-4 text-luxury-offwhite text-sm focus:outline-none focus:border-luxury-offwhite transition-all resize-none placeholder:text-luxury-divider/50 placeholder:font-light" 
                            />
                        </div>

                        {/* Button */}
                        <button 
                            type="submit" 
                            disabled={formState === 'submitting'}
                            className="w-full md:w-auto px-12 py-5 border border-luxury-divider text-luxury-offwhite text-[11px] uppercase tracking-[0.25em] hover:bg-luxury-offwhite hover:text-luxury-black hover:border-luxury-offwhite transition-all duration-500 disabled:opacity-50"
                        >
                            {formState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                        </button>
                    </FadeIn>
                </form>
            )}
        </div>

      </div>
    </div>
  );
};

export default Contact;