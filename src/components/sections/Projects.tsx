'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

const tabs: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: '✨ All', value: 'all' },
  { label: '⭐ Featured', value: 'featured' },
  { label: '🤖 ML / NLP', value: 'ml' },
  { label: '🏗️ Backend', value: 'backend' },
  { label: '⚡ Distributed', value: 'distributed' },
  { label: '📚 Coursework', value: 'coursework' },
];

export default function Projects() {
  const [active, setActive] = useState<'all' | ProjectCategory>('featured');

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(active));

  // Deduplicate by title (some appear in multiple categories)
  const seen = new Set<string>();
  const deduplicated = filtered.filter((p) => {
    if (seen.has(p.title)) return false;
    seen.add(p.title);
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          subtitle="34 public repos spanning ML, distributed systems, full-stack, and coursework."
          accent="violet"
        />

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
          <Filter className="w-4 h-4 text-zinc-500 shrink-0" />
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium border transition-all',
                active === tab.value
                  ? 'bg-cyan-500 text-zinc-950 border-cyan-500 shadow-glow-cyan'
                  : 'border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 bg-zinc-900/60'
              )}
            >
              {tab.label}
              <span className="ml-1.5 text-xs opacity-60">
                {tab.value === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category.includes(tab.value as ProjectCategory)).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {deduplicated.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>

        {deduplicated.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No projects found in this category.
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Jainparth22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all text-sm font-medium"
          >
            🐙 View all 34 repositories on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

