'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import CertCard from '@/components/ui/CertCard';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning through structured programs from top institutions."
          accent="violet"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* Achievements section embedded here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🏆 Achievements & Milestones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '🔥',
                title: '900+ Day Coding Streak',
                desc: 'Daily coding on GeeksforGeeks — one of the longest active streaks.',
                color: 'text-orange-400',
                border: 'border-orange-400/20',
              },
              // {
              //   icon: '⚡',
              //   title: '100+ LeetCode Problems',
              //   desc: 'Arrays, trees, graphs, DP, backtracking — focused on time & space complexity.',
              //   color: 'text-yellow-400',
              //   border: 'border-yellow-400/20',
              // },
              {
                icon: '📊',
                title: 'Kaggle MAP@3: 0.75084',
                desc: 'SmartMCQ Solver — 2.8% above competition cutoff on private leaderboard.',
                color: 'text-violet-400',
                border: 'border-violet-400/20',
              },
              {
                icon: '🥈',
                title: '2nd Rank — State NCSC',
                desc: 'Silver Medal at National Children Science Congress, State Level.',
                color: 'text-slate-300',
                border: 'border-slate-400/20',
              },
              {
                icon: '🚀',
                title: 'Multiple Production Deployments',
                desc: 'Live apps on Vercel, Render, and Hugging Face Spaces.',
                color: 'text-cyan-400',
                border: 'border-cyan-400/20',
              },
              {
                icon: '📦',
                title: '34 Public GitHub Repos',
                desc: 'ML, distributed systems, full-stack apps, and CS fundamentals.',
                color: 'text-emerald-400',
                border: 'border-emerald-400/20',
              },
            ].map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className={`flex gap-4 p-5 rounded-xl border bg-zinc-900/60 hover:bg-zinc-900 transition-all ${a.border}`}
              >
                <span className="text-2xl shrink-0">{a.icon}</span>
                <div>
                  <h4 className={`text-sm font-semibold ${a.color}`}>{a.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

