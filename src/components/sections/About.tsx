'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo, education } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="CS + Data Science student building production systems across backend, distributed architecture, and ML."
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-cyan-400">👋</span> Professional Summary
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                I&apos;m a Computer Science and Data Science student (dual degree) specializing in
                building <span className="text-cyan-400">production-grade backend systems</span>,{' '}
                <span className="text-cyan-400">distributed architectures</span>, and{' '}
                <span className="text-violet-400">deployable ML/NLP pipelines</span>.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                With proven expertise in REST APIs, relational databases, asynchronous workflows,
                semantic search, and model serving — I focus on correctness, maintainable service
                design, and practical cloud deployment.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                My{' '}
                <span className="text-orange-400 font-semibold">900+ day coding streak</span>{' '}
                reflects a daily commitment to sharpening problem-solving and algorithmic thinking.
              </p>
            </div>

            {/* Location + contact quick info */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> India
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              >
                📧 {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              >
                🐙 github.com/jainparth22
              </a>
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-5">
              <GraduationCap className="w-5 h-5 text-cyan-400" /> Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-5 rounded-2xl border bg-zinc-900/60 transition-all hover:-translate-y-0.5 ${
                  edu.color === 'cyan'
                    ? 'border-cyan-400/20 hover:border-cyan-400/40'
                    : 'border-violet-400/20 hover:border-violet-400/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{edu.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{edu.institution}</h4>
                    <p
                      className={`text-xs font-medium mt-0.5 ${
                        edu.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                      }`}
                    >
                      {edu.degree}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{edu.period}</p>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

