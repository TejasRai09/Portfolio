
import React from 'react';
import { Code2, Server, Layout, Database } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('Backend')) return <Server size={24} />;
    if (name.includes('Frontend')) return <Layout size={24} />;
    if (name.includes('Data')) return <Database size={24} />;
    return <Code2 size={24} />;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white/[0.02]">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Skill Mastery</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            A diverse toolkit built on engineering rigor and a passion for automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.name} className="p-8 rounded-3xl bg-brand-panel border border-brand-border hover:border-brand-accent2/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent2/10 text-brand-accent2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(cat.name)}
              </div>
              <h3 className="text-xl font-bold mb-6">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl bg-white/5 border border-brand-border text-sm font-medium hover:bg-brand-accent2/10 hover:border-brand-accent2/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl border border-dashed border-brand-border bg-brand-panel flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
              <Code2 size={32} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Pragmatic Problem Solver</h4>
              <p className="text-sm text-brand-muted">Always choosing the right tool for the job, from Python to Rust (exploring).</p>
            </div>
          </div>
          <a
            href="mailto:tejasrai191@gmail.com?subject=Resume%20request"
            className="px-6 py-3 rounded-xl bg-brand-border text-white text-sm font-bold hover:bg-brand-border/80 transition-colors"
          >
            Request Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
