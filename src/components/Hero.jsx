import React from 'react';

const Hero = ({ data }) => {
  const heroData = data || {
    name: "Md. Mizanur Rahman",
    title: "Data Analyst",
    subtitle: "Turning complex datasets into actionable business narratives. Specializing in cohort analysis, retention modeling, and real-time interactive dashboards.",
    cta_text_1: "My Resume",
    cta_link_1: "/resume.pdf",
    cta_text_2: "Contact Me",
    cta_link_2: "#contact",
    image_url: "/profile.jpg"
  };

  const { name, title, subtitle, cta_text_1, cta_text_2, cta_link_2 } = heroData;
  
  // High-priority fix: ensure 'My Resume' always points to the local file
  const cta_link_1 = (cta_text_1 === "My Resume") ? "/resume.pdf" : heroData.cta_link_1;
  
  // Priority fix: if image is Unsplash placeholder, use local profile photo.
  const image_url = (heroData.image_url && !heroData.image_url.includes('unsplash')) 
    ? heroData.image_url 
    : "/profile.jpg";

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white dark:bg-[#111218]">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="container-wide relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between gap-12">
          {/* Info Side */}
          <div className="lg:w-3/5 text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 translate-y-0.5">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              Available for New Projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary dark:text-white leading-[1.1] mb-6">
              Empowering Business Through <span className="text-accent underline decoration-accent/20 underline-offset-8">Data Narrative.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-bold text-primary dark:text-white">{name}</span>. {subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={cta_link_1} className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-2xl shadow-xl shadow-accent/25 hover:bg-accent/90 transition-all hover:-translate-y-1 active:translate-y-0">
                {cta_text_1}
              </a>
              <a href={cta_link_2} className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-primary dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all hover:-translate-y-1 active:translate-y-0">
                {cta_text_2}
              </a>
            </div>

            {/* Quick Stats/Specialties */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100 dark:border-gray-900">
               <div>
                 <span className="block text-2xl font-bold text-primary dark:text-white">SQL/Python</span>
                 <span className="text-xs font-semibold text-secondary dark:text-gray-500 uppercase tracking-wider">Tech Stack</span>
               </div>
               <div>
                 <span className="block text-2xl font-bold text-primary dark:text-white">Tableau/BI</span>
                 <span className="text-xs font-semibold text-secondary dark:text-gray-500 uppercase tracking-wider">Visualization</span>
               </div>
               <div className="hidden md:block">
                 <span className="block text-2xl font-bold text-primary dark:text-white">ML/Stats</span>
                 <span className="text-xs font-semibold text-secondary dark:text-gray-500 uppercase tracking-wider">Methodology</span>
               </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-2/5 relative group flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              {/* Background gradient effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-transparent to-blue-500/20 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000" />
              
              <div className="relative border-2 border-white dark:border-gray-800 bg-white dark:bg-gray-900 rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src={image_url}
                  alt={name}
                  className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl z-20 border border-white/40 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-primary dark:text-white uppercase tracking-tighter italic">Strategic Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
