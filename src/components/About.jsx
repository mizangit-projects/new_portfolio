import React from 'react';

const About = ({ data }) => {
  const { bio, years_experience, location } = data || {
    bio: "I am a dedicated Data Analyst with a passion for uncovering hidden patterns in complex datasets. My expertise lies in bridging the gap between raw data and strategic decision-making through advanced statistical modeling and interactive dashboards.",
    years_experience: 5,
    location: "United States"
  };

  const statCards = [
    { label: 'Years Experience', value: `${years_experience}+`, icon: '📊' },
    { label: 'Data Projects', value: '120+', icon: '✅' },
    { label: 'Success Rate', value: '98%', icon: '🚀' },
    { label: 'Location', value: location, icon: '📍' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#f9fafb] dark:bg-[#15161d]">
      <div className="container-wide relative z-10">
        <div className="lg:flex lg:items-center gap-16 xl:gap-24">
          
          {/* Content Side */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Who I Am
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary dark:text-white mb-8 leading-tight">
              Driven by <span className="text-accent underline decoration-accent/20 underline-offset-8">Data Insight.</span>
            </h2>
            <p className="text-lg text-secondary dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              {bio}
            </p>
            <div className="p-8 glass rounded-[32px] border border-gray-100 dark:border-white/5 shadow-xl shadow-accent/5">
              <p className="text-sm italic text-secondary dark:text-gray-400 leading-loose">
                {data?.philosophy_quote || "Data is only as valuable as the stories we can tell with it. I strive to make every dataset speak clearly to its stakeholders, turning numbers into narratives and insights into impact."}
              </p>
            </div>
          </div>

          {/* Stats Grid Side */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {statCards.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`p-6 sm:p-8 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 ${
                    idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'glass bg-accent/5 dark:bg-accent/10'
                  }`}
                >
                  <div className="text-3xl mb-4">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-primary dark:text-white mb-2">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary dark:text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
