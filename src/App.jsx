import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState({
    hero: null,
    about: null,
    skills: [],
    projects: [],
    config: {}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllData() {
      try {
        setLoading(true);
        console.log('Fetching data from Supabase...');
        
        // Parallel fetching for performance
        const [heroRes, aboutRes, skillsRes, projectsRes, configRes] = await Promise.all([
          supabase.from('hero').select('*').limit(1),
          supabase.from('about').select('*').limit(1),
          supabase.from('skills').select('*').order('created_at', { ascending: true }),
          supabase.from('projects').select('*').order('created_at', { ascending: false }),
          supabase.from('global_config').select('*')
        ]);

        console.log('Hero Response:', heroRes);
        console.log('About Response:', aboutRes);

        if (heroRes.error) console.error('Hero Fetch Error:', heroRes.error);
        if (aboutRes.error) console.error('About Fetch Error:', aboutRes.error);
        if (configRes.error) console.error('Config Fetch Error:', configRes.error);

        // Convert key-value table to a simple object for easy access
        const configMap = (configRes.data || []).reduce((acc, curr) => {
          acc[curr.key] = curr.value;
          return acc;
        }, {});

        setData({
          hero: heroRes.data?.[0] || null,
          about: aboutRes.data?.[0] || null,
          skills: skillsRes.data || [],
          projects: projectsRes.data || [],
          config: configMap
        });

      } catch (err) {
        console.error('Unexpected error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#111218] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl border-4 border-accent/20 border-t-accent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            </div>
          </div>
          <p className="text-secondary dark:text-gray-400 font-display font-medium tracking-widest uppercase text-xs animate-pulse">Initializing Dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#111218] selection:bg-accent/30 selection:text-accent font-sans scroll-smooth transition-colors duration-500">
      <Header />
      
      <main>
        <Hero data={data.hero} />
        
        <About data={data.about} />
        
        <Skills skills={data.skills} />

        <Resume config={data.config} />
        
        <section id="projects" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
          </div>

          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary dark:text-white mb-6">Featured Projects</h2>
              <p className="text-lg text-secondary dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                A curated selection of case studies where deep data analysis translated into measurable business impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.length > 0 ? (
                data.projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                // Fallback projects if DB is empty
                [1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse bg-gray-50 dark:bg-white/5 rounded-[32px] h-[450px] border border-gray-100 dark:border-white/5 flex items-center justify-center p-8">
                    <div className="w-full h-full border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center">
                      <span className="text-secondary/40 font-display font-medium italic">Project {i} Loading...</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        
        <ContactForm />
      </main>
      
      <Footer config={data.config} />
    </div>
  );
}

export default App;
