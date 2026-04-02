import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image_url, tags, github_url, live_url } = project;

  return (
    <div className="group bg-white dark:bg-[#1a1b23] rounded-[32px] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col h-full border-b-4 hover:border-b-accent">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img 
          src={image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111218]/80 via-[#111218]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
          <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             {github_url && (
               <a href={github_url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-accent transition-all border border-white/20">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               </a>
             )}
             {live_url && (
               <a href={live_url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-accent transition-all border border-white/20">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
               </a>
             )}
          </div>
        </div>
      </div>
      <div className="p-7 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-5">
          {tags && tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-white/5">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-sm text-secondary dark:text-gray-400 line-clamp-3 mb-6 flex-grow leading-relaxed">{description}</p>
        <div className="pt-5 border-t border-gray-100 dark:border-white/5 flex justify-between items-center group/btn cursor-pointer">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary dark:text-gray-500 group-hover/btn:text-accent transition-colors">Case Study</span>
           <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-white transition-all">
             <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
