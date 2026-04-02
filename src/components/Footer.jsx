import React from 'react';

const Footer = ({ config }) => {
  const currentYear = new Date().getFullYear();
  const slogan = config?.site_footer_slogan || "Engineering Data stories with Precision.";
  
  return (
    <footer className="bg-white dark:bg-[#111218] border-t border-gray-100 dark:border-white/5 py-12 lg:py-16">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          {/* Brand Logo / Name */}
          <div className="flex items-center gap-2 mb-8 group cursor-default">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-500">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-display font-bold text-primary dark:text-white tracking-tight">
              Portfolio<span className="text-accent">.</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-12">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com' },
              { name: 'GitHub', href: 'https://github.com' },
              { name: 'Twitter', href: 'https://twitter.com' },
              { name: 'Email', href: 'mailto:hello@example.com' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-500 hover:text-accent dark:hover:text-white transition-all transform hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright & Info */}
          <div className="w-full pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600">
              &copy; {currentYear} Md. Mizanur Rahman. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-1 rounded-full bg-accent/30 hidden md:block"></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 italic">
                {slogan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
