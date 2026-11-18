'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { badges, codingProfiles } from '@/data/badges';

export default function Badges() {
  return (
    <section id="badges" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Coding Profiles & Badges"
          subtitle="Daily practice on competitive platforms, plus AWS, ServiceNow and HackerRank badges."
          accent="orange"
        />

        {/* Coding profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {codingProfiles.map((p, i) => (
            <motion.div
              key={p.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border bg-zinc-900/60 hover:bg-zinc-900 transition-all hover:-translate-y-0.5 ${p.border}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-xl">{p.icon}</span> {p.platform}
                </h3>
                <span className="text-xs text-zinc-500">{p.handle}</span>
              </div>
              <p className={`text-4xl font-bold font-mono ${p.color}`}>{p.headline}</p>
              <p className="text-xs text-zinc-500 mt-1 mb-4">{p.headlineLabel}</p>
              <ul className="space-y-1.5">
                {p.facts.map((f) => (
                  <li key={f} className="text-xs text-zinc-400 leading-relaxed">
                    • {f}
                  </li>
                ))}
              </ul>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View profile →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <h3 className="text-xl font-bold text-white mb-6 text-center">🏅 Badges</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`flex flex-col gap-2 p-5 rounded-xl border bg-zinc-900/60 hover:bg-zinc-900 transition-all ${b.border}`}
            >
              <span className="text-2xl">{b.icon}</span>
              <h4 className={`text-sm font-semibold leading-snug ${b.color}`}>{b.title}</h4>
              <p className="text-xs text-zinc-500">{b.issuer}</p>
              <p className="text-xs text-zinc-600">{b.date}</p>
              {b.url && (
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 self-start"
                >
                  View badge →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
