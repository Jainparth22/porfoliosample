'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Dual-degree student building backend systems, full-stack apps, and deployable ML pipelines."
          accent="cyan"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              Professional Summary
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              I&apos;m pursuing a B.Tech in Computer Science at{' '}
              <span className="text-cyan-400">VIT Bhopal</span> and a BS in Data Science at{' '}
              <span className="text-violet-400">IIT Madras</span> at the same time. I build{' '}
              <span className="text-cyan-400">REST APIs and multi-role web platforms</span> with Flask
              and FastAPI, add Redis caching and Celery background jobs, and ship{' '}
              <span className="text-violet-400">NLP and semantic-search models</span> on Hugging Face
              Spaces.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm mt-3">
              Recent work includes a live placement platform with 53 documented APIs, a live healthcare
              booking system that prevents double-booking under concurrent load, and a deep-learning
              ensemble that scored 0.75084 MAP@3 on Kaggle. In 2026 I interned at MPOnline (Govt. of MP and TCS JV)
              on full-stack and ML work.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm mt-3">
              My{' '}
              <span className="text-orange-400 font-semibold">950+ day GeeksforGeeks streak</span>{' '}
              and 200+ solved LeetCode problems reflect a daily habit of practising algorithms.
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
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
            >
              github.com/jainparth22
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
