import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#projects' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'glass' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:rotate-12">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-display font-bold text-primary dark:text-white tracking-tight">
            Portfolio<span className="text-accent">.</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4b5563] dark:text-gray-400 hover:text-accent dark:hover:text-white transition-all rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-4" />
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl shadow-accent/25 hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl transition-all"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-20 bg-white dark:bg-[#111218] transition-all duration-500 md:hidden overflow-hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="p-8 flex flex-col gap-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-display font-bold text-primary dark:text-white hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-8 bg-accent text-white py-5 rounded-[24px] text-center font-bold text-lg shadow-2xl shadow-accent/20"
          >
            Start a Conversation
          </a>
          
          <div className="mt-auto border-t border-gray-100 dark:border-white/5 pt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Available for Strategic Roles
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
