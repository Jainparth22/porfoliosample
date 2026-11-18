'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import CertCard from '@/components/ui/CertCard';
import { certifications, certCategories, type CertCategory } from '@/data/certifications';
import { achievements } from '@/data/personal';

export default function Certifications() {
  const [active, setActive] = useState<CertCategory | 'all'>('all');

  const visible =
    active === 'all' ? certifications : certifications.filter((c) => c.category === active);

  const countFor = (id: CertCategory | 'all') =>
    id === 'all' ? certifications.length : certifications.filter((c) => c.category === id).length;

  return (
    <section id="certifications" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="IIT Madras diplomas and workshops, Coursera and NPTEL courses, and HackerRank skill tests."
          accent="violet"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {certCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-1.5 rounded-full border text-sm transition-colors ${
                active === cat.id
                  ? 'border-violet-400/60 bg-violet-400/10 text-violet-300'
                  : 'border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 bg-zinc-900/60'
              }`}
            >
              {cat.label} <span className="text-zinc-500">({countFor(cat.id)})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className={`flex gap-4 p-5 rounded-xl border bg-zinc-900/60 hover:bg-zinc-900 transition-all ${a.border}`}
              >
                <div>
                  <h4 className={`text-sm font-semibold ${a.color}`}>{a.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
