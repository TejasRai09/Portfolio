
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'py-4 bg-brand-bg/70 backdrop-blur-2xl border border-brand-border/60 shadow-lg shadow-black/20'
        : 'py-6 bg-brand-bg/40 backdrop-blur-xl border border-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent2 rounded-xl flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-brand-accent/20">
            TR
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">Tejas Rai</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-semibold leading-none">Backend Engineer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/TejasRai09" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/tejasrai09" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-brand-muted hover:text-brand-accent transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="mailto:tejasrai191@gmail.com" className="bg-brand-accent hover:bg-brand-accent/90 text-black px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-bg/85 backdrop-blur-2xl border-b border-brand-border/80 p-6 flex flex-col gap-4 md:hidden shadow-xl shadow-black/20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-brand-muted hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-brand-border">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex-1 bg-brand-accent text-black text-center py-3 rounded-xl font-bold"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
