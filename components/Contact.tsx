
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText('tejasrai191@gmail.com');
    // Simple acknowledgement without blocking alerts
    console.info('Email copied to clipboard');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill in all fields.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:tejasrai191@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Opening your email client...');
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">Let's build <br/> something <span className="text-brand-accent">reliable</span>.</h2>
              <p className="text-xl text-brand-muted max-w-md">
                Have a pipeline to fix or a workflow to automate? I'm always open to discussing new opportunities or technical challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted uppercase font-bold tracking-widest">Email</p>
                  <button onClick={copyEmail} className="text-lg font-bold flex items-center gap-2 hover:text-brand-accent transition-colors">
                    tejasrai191@gmail.com
                    <Copy size={14} className="opacity-50" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent2/10 flex items-center justify-center text-brand-accent2 group-hover:bg-brand-accent2 group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted uppercase font-bold tracking-widest">Phone</p>
                  <p className="text-lg font-bold">+91 8700986892</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/tejasrai09" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-all"><Linkedin size={20}/></a>
              <a href="https://github.com/TejasRai09" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-all"><Github size={20}/></a>
            </div>
          </div>

          <div className="bg-brand-panel border border-brand-border rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-bold">Quick Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-white/5 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-accent/20"
              >
                Send Message
                <Send size={18} />
              </button>
              {status && <p className="text-sm text-brand-muted text-center">{status}</p>}
            </form>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-black text-sm">TR</div>
            <p className="text-sm text-brand-muted">© 2025 Tejas Rai. All rights reserved.</p>
          </div>
          <p className="text-xs text-brand-muted font-mono">
            Optimized for performance • Powered by Logic
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
