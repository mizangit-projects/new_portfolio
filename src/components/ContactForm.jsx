import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);
        
      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white dark:bg-[#111218]">
      {/* Visual background details */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-6">
              Let's Start a <span className="text-accent underline decoration-accent/20 underline-offset-8">Data Dialogue.</span>
            </h2>
            <p className="text-lg text-secondary dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              Have a complex dataset or a business challenge? I'd love to help you find the narrative within the numbers.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="glass p-8 sm:p-12 rounded-[40px] shadow-2xl shadow-accent/5 border border-white/40 dark:border-white/5"
          >
            <div className="grid grid-cols-1 gap-8">
              <div className="group">
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-500 mb-3 ml-2 group-focus-within:text-accent transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-6 py-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 focus:border-accent dark:focus:border-accent rounded-3xl outline-none transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 font-medium"
                  placeholder="e.g. Md. Mizanur Rahman"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-500 mb-3 ml-2 group-focus-within:text-accent transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-6 py-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 focus:border-accent dark:focus:border-accent rounded-3xl outline-none transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 font-medium"
                  placeholder="hello@yourbusiness.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-500 mb-3 ml-2 group-focus-within:text-accent transition-colors">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full px-6 py-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 focus:border-accent dark:focus:border-accent rounded-3xl outline-none transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 font-medium resize-none"
                  placeholder="Tell me about your data goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-accent hover:bg-accent/90 disabled:bg-gray-400 text-white font-bold py-6 rounded-[24px] transition-all shadow-2xl shadow-accent/30 flex items-center justify-center gap-4 transform hover:-translate-y-1 active:scale-95 text-lg"
              >
                {status === 'sending' ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing Submission...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-center text-xs font-bold uppercase tracking-widest animate-shake">
                  Error during submission. Please verify and try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
