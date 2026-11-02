'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Certification } from '@/data/certifications';

interface CertCardProps {
  cert: Certification;
  index?: number;
}

export default function CertCard({ cert, index = 0 }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        'group flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5',
        'hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5'
      )}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5 shrink-0">{cert.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-zinc-100 leading-snug">
            {cert.title}
          </h3>
          <p className={cn('text-xs font-medium mt-1', cert.color)}>{cert.issuer}</p>
          {cert.platform && (
            <p className="text-xs text-zinc-500 mt-0.5">{cert.platform}</p>
          )}
        </div>
      </div>

      {cert.skills && cert.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {cert.verifyUrl && (
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors self-start"
        >
          Verify Certificate →
        </a>
      )}
    </motion.div>
  );
}

