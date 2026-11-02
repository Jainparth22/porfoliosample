'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColors: Record<string, string> = {
  featured: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30',
  ml: 'bg-violet-400/10 text-violet-400 border-violet-400/30',
  backend: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',
  distributed: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
  coursework: 'bg-orange-400/10 text-orange-400 border-orange-400/30',
};

const categoryLabels: Record<string, string> = {
  featured: '⭐ Featured',
  ml: '🤖 ML/NLP',
  backend: '🏗️ Backend',
  distributed: '⚡ Distributed',
  coursework: '📚 Learning',
};

const statusDot: Record<string, string> = {
  production: 'bg-emerald-400',
  demo: 'bg-yellow-400',
  learning: 'bg-blue-400',
  archived: 'bg-zinc-500',
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const primaryCategory = project.category[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={cn(
        'group relative flex flex-col rounded-2xl border bg-zinc-900/60 backdrop-blur-sm p-5',
        'transition-all duration-300 hover:-translate-y-1',
        project.featured
          ? 'border-cyan-400/30 hover:border-cyan-400/70 shadow-glow-cyan hover:shadow-cyan-400/20 hover:shadow-xl'
          : 'border-zinc-800 hover:border-zinc-600 hover:shadow-card'
      )}
    >
      {/* Featured glow overlay */}
      {project.featured && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-violet-400/5 pointer-events-none" />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {project.featured && (
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
            )}
            <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Status + category badges */}
          <div className="flex items-center gap-2 flex-wrap">
            {project.status && (
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <span className={cn('w-1.5 h-1.5 rounded-full', statusDot[project.status])} />
                {project.status}
              </span>
            )}
            <span
              className={cn(
                'text-xs px-2 py-0.5 rounded-full border',
                categoryColors[primaryCategory] || categoryColors.backend
              )}
            >
              {categoryLabels[primaryCategory] || primaryCategory}
            </span>
          </div>
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          title="View on GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Key highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-4 space-y-1">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
              <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 6 && (
          <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-500 border border-zinc-700/50">
            +{project.tech.length - 6}
          </span>
        )}
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-800">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors font-medium"
        >
          <Github className="w-3.5 h-3.5" />
          View Code
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors font-medium ml-auto"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        ) : (
          <span className="ml-auto text-xs text-zinc-600 italic">Deploy coming soon</span>
        )}
      </div>
    </motion.div>
  );
}

