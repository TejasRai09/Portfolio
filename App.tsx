
import React from 'react';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-brand-accent selection:text-black">
      <Background />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="container mx-auto px-6">
          {/* Subtle separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
        </div>

        <Experience />
        
        <div className="container mx-auto px-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
        </div>

        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
