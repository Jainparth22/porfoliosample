'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Skills & Tech Stack"
          subtitle="Full-spectrum technical skills from systems to machine learning."
          accent="emerald"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-zinc-700 transition-all hover:-translate-y-0.5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={cn('font-semibold text-base', cat.color)}>{cat.title}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      'text-xs px-2.5 py-1 rounded-lg border font-medium transition-all hover:scale-105',
                      cat.bgColor
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Domain expertise callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40"
        >
          <h3 className="text-sm font-semibold text-zinc-300 mb-4 text-center">
            Domain Expertise
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Backend Engineering', color: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
              { label: 'Distributed Systems', color: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
              { label: 'Machine Learning / NLP', color: 'bg-violet-400/10 text-violet-400 border-violet-400/20' },
              { label: 'System Design (HLD)', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
              { label: 'REST API Design', color: 'bg-orange-400/10 text-orange-400 border-orange-400/20' },
              { label: 'Production Deployment', color: 'bg-pink-400/10 text-pink-400 border-pink-400/20' },
              { label: 'Data Science', color: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' },
              { label: 'Full-Stack Development', color: 'bg-teal-400/10 text-teal-400 border-teal-400/20' },
            ].map((d) => (
              <span
                key={d.label}
                className={cn('px-4 py-1.5 rounded-full border text-sm font-medium', d.color)}
              >
                {d.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

