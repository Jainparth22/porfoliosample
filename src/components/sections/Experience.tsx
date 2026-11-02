'use client';

import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Experience"
          subtitle="Internships and open source contributions where I've built real things."
          accent="cyan"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl shrink-0 z-10 ${
                      exp.color === 'cyan'
                        ? 'border-cyan-400/40 bg-cyan-400/10'
                        : 'border-violet-400/40 bg-violet-400/10'
                    }`}
                  >
                    {exp.logo}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl border bg-zinc-900/70 p-6 transition-all hover:-translate-y-0.5 ${
                    exp.color === 'cyan'
                      ? 'border-cyan-400/20 hover:border-cyan-400/40'
                      : 'border-violet-400/20 hover:border-violet-400/40'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <p
                        className={`text-sm font-medium mt-0.5 ${
                          exp.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <CalendarDays className="w-3 h-3" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          exp.type === 'Open Source'
                            ? 'text-violet-400 border-violet-400/30 bg-violet-400/10'
                            : 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10'
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-violet-400'
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {exp.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

