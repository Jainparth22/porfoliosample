'use client';

import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { degrees, iitmMilestones, campusActivities } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Education"
          subtitle="Two degrees in parallel: CS on campus and Data Science online."
          accent="violet"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {degrees.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border bg-zinc-900/60 transition-all hover:-translate-y-0.5 ${
                edu.color === 'cyan'
                  ? 'border-cyan-400/20 hover:border-cyan-400/40'
                  : 'border-violet-400/20 hover:border-violet-400/40'
              }`}
            >
              <div className="flex items-start gap-3">
                                <div className="min-w-0">
                  <h3 className="font-semibold text-white">{edu.institution}</h3>
                  <p
                    className={`text-sm font-medium mt-0.5 ${
                      edu.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                    }`}
                  >
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" /> {edu.mode}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* IITM progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60"
          >
            <h3 className="text-base font-semibold text-white mb-4">IIT Madras BS: progress so far</h3>
            <ul className="space-y-3">
              {iitmMilestones.map((m) => (
                <li key={m.title} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 flex-1">{m.title}</span>
                  {m.date && <span className="text-xs text-zinc-500 shrink-0">{m.date}</span>}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Campus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60"
          >
            <h3 className="text-base font-semibold text-white mb-4">Campus and school activities</h3>
            <ul className="space-y-3">
              {campusActivities.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
