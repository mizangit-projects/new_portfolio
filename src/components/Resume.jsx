import React from 'react';

const Resume = ({ config }) => {
  const headline = config?.resume_section_headline || "Ready to Drive Data Decisions.";
  const downloadLink = config?.resume_download_link || "/resume.pdf";
  const buttonText = config?.resume_download_text || "Download CV";

  return (
    <section id="resume" className="section-padding relative overflow-hidden bg-[#f9fafb] dark:bg-[#15161d]">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-[40px] shadow-2xl shadow-accent/5 flex flex-col md:flex-row items-center gap-12 border border-white/40 dark:border-white/5">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Professional Background
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                {headline.includes("DATA") ? (
                  <>
                    {headline.split("DATA")[0]}
                    <span className="text-accent underline decoration-accent/20 underline-offset-8">DATA{headline.split("DATA")[1]}</span>
                  </>
                ) : headline}
              </h2>
              <p className="text-lg text-secondary dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                I am actively seeking opportunities where I can apply my expertise in statistical modeling and data storytelling to solve complex business challenges. Download my full resume to explore my technical proficiencies and career milestones.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 text-left">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-white mb-2">Technical Skills</h4>
                  <p className="text-xs text-secondary dark:text-gray-500">Python, SQL, R, Tableau, Power BI, ML Models</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-white mb-2">Soft Skills</h4>
                  <p className="text-xs text-secondary dark:text-gray-500">Storytelling, Stakeholder Mgmt, Strategic Strategy</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-accent/10 rounded-[32px] flex items-center justify-center text-accent animate-float">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <a 
                href={downloadLink} 
                download="Md_Mizanur_Rahman_Resume.pdf"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl text-base font-bold shadow-2xl shadow-accent/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                <span>{buttonText}</span>
                <svg className="w-5 h-5 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest italic">PDF Version Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
