
import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal, Database, Activity, Sparkles } from 'lucide-react';
import { METRICS } from '../constants';

const CountUp: React.FC<{ target: number; suffix: string; duration?: number }> = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            <Activity size={14} />
            Optimization Specialist
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent2">Efficiency</span> through Logic.
          </h2>
          
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
            I build robust backends and automated pipelines that transform complex manual tasks into scalable, audit-ready systems. Currently optimizing operations for <span className="text-white font-medium">500+ users</span> at Zuari Industries.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="group bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
              Work Together
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/TejasRai09" target="_blank" rel="noreferrer" className="bg-brand-panel border border-brand-border text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:bg-white/10">
              <Terminal size={20} />
              View Source
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {METRICS.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-bold text-white">
                  <CountUp target={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs font-medium text-brand-muted uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative z-10 rounded-3xl p-8 md:p-10 bg-brand-panel border border-brand-border shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-accent2/10" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} />
                Delivery Snapshot
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-bold">Backend, Automation, Data.</h4>
                <p className="text-brand-muted leading-relaxed">Building resilient ETL pipelines, role-based workflows, and internal tools that replace hours of manual prep with minutes of reliable outputs.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-4 rounded-2xl bg-white/5 border border-brand-border">
                  <p className="text-brand-muted text-xs uppercase tracking-[0.2em]">Current</p>
                  <p className="text-white font-semibold">Senior Developer</p>
                  <p className="text-brand-muted">Zuari Industries</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-brand-border">
                  <p className="text-brand-muted text-xs uppercase tracking-[0.2em]">Education</p>
                  <p className="text-white font-semibold">M.Tech, IIT Guwahati</p>
                  <p className="text-brand-muted">Chemical Engineering</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-brand-border">
                  <p className="text-brand-muted text-xs uppercase tracking-[0.2em]">Reach</p>
                  <p className="text-white font-semibold">500+ users</p>
                  <p className="text-brand-muted">served across BUs</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-brand-border">
                  <p className="text-brand-muted text-xs uppercase tracking-[0.2em]">Tooling</p>
                  <p className="text-white font-semibold">Python, Flask, SQL</p>
                  <p className="text-brand-muted">React, Node (MERN)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative frames */}
          <div className="absolute top-6 -right-6 w-full h-full border border-brand-accent/20 rounded-3xl -z-10" />
          <div className="absolute -bottom-6 -left-10 w-2/3 h-2/3 bg-brand-accent2/10 blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
