'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default mailto fallback or simulated submit
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in collaborating on distributed systems, ML projects, or backend engineering? Let's connect!"
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Let&apos;s Talk
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                I am actively seeking software engineering internships and open-source collaborations.
                Feel free to reach out directly via email or social platforms!
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-xs text-zinc-500 block">Direct Email</span>
                  <span className="text-sm font-mono text-zinc-200 truncate block">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all shrink-0"
                  title="Copy email address"
                  type="button"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct links */}
              <div className="mt-6 space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-cyan-400 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-cyan-400 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all text-sm font-medium"
                >
                  <Github className="w-4 h-4 text-zinc-200 shrink-0" />
                  <span>Inspect Code on GitHub</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>India (IST / UTC +5:30)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm space-y-5"
            >
              <h3 className="text-lg font-semibold text-white">Send a Quick Message</h3>

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Parth, I saw your work on Distributed Rate Limiter / ML pipelines..."
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-950 font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-glow-cyan text-sm"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-zinc-950" />
                    Opening Mail Client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-zinc-950" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

