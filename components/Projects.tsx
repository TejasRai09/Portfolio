
import React from 'react';
import { ExternalLink, Github, FolderCode } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Selected Projects</h2>
            <p className="text-brand-muted max-w-xl">
              Focusing on high-impact tools that compress time-to-value and ensure data integrity.
            </p>
          </div>
          <a href="https://github.com/TejasRai09" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-accent font-bold hover:underline">
            View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-brand-panel border border-brand-border rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-2 overflow-hidden hover:border-brand-accent/50"
            >
              {/* Glow background on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/6 blur-3xl -z-10 group-hover:bg-brand-accent/14 transition-colors" />
              
              <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 text-brand-accent group-hover:bg-brand-accent/15 group-hover:text-black transition-colors">
                  <FolderCode size={24} />
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="text-xs font-bold text-brand-accent uppercase tracking-widest group-hover:text-brand-accent">{project.category}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-brand-muted leading-relaxed group-hover:text-white/90 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/6 border border-brand-border text-xs text-brand-muted transition-colors group-hover:text-white group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
