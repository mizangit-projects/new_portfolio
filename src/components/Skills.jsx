import React from 'react';

const Skills = ({ skills }) => {
  // If no skills are provided from Supabase yet, use a fallback set for visual integrity
  const expertiseItems = (skills && skills.length > 0) ? skills : [
    { name: 'Python', slug: 'python', color: '3776AB' },
    { name: 'SQL', slug: 'mysql', color: '4479A1' },
    { name: 'Excel', slug: 'local', src: '/Excel.png', color: '217346' },
    { name: 'Power BI', slug: 'local', src: '/powerbi.png', color: 'F2C811' },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-white dark:bg-[#111218]">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 opacity-20 dark:opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4 transition-all">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            My <span className="text-accent underline decoration-accent/20 underline-offset-8">Expertise.</span>
          </h2>
          <p className="text-lg text-secondary dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I leverage a powerful stack of analytical tools and programming languages to derive maximum value from raw data.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {expertiseItems.map((item) => (
            <div 
              key={item.name}
              className="group relative glass p-8 rounded-[32px] flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 active:scale-95 cursor-default overflow-hidden border border-gray-100 dark:border-white/5"
            >
              {/* Dynamic Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: `#${item.color}` }}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <div 
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 shadow-sm p-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                >
                  <img 
                    src={item.src || `https://cdn.simpleicons.org/${item.slug}/${item.color === 'ffffff' ? 'ffffff' : item.color}`}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-300 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
              </div>
              
              {/* Decorative Line */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-40"
                style={{ backgroundColor: `#${item.color}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
