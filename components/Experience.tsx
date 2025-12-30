
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full" />
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[-41px] top-0 bottom-0 w-[2px] bg-brand-border" />
              
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-accent font-bold">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-brand-muted text-sm">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-3xl bg-brand-panel border border-brand-border hover:border-brand-accent/50 transition-colors group">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{exp.role}</h3>
                      <p className="text-lg text-brand-muted font-medium flex items-center gap-2 mt-1">
                        <Briefcase size={18} />
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-brand-muted leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
