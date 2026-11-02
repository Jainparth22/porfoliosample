'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: 'cyan' | 'violet' | 'emerald' | 'orange';
  className?: string;
}

const accentMap = {
  cyan: 'from-cyan-400 to-blue-500',
  violet: 'from-violet-400 to-purple-600',
  emerald: 'from-emerald-400 to-teal-500',
  orange: 'from-orange-400 to-red-500',
};

export default function SectionHeading({
  title,
  subtitle,
  accent = 'cyan',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 text-center', className)}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent',
          accentMap[accent]
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r',
          accentMap[accent]
        )}
      />
    </motion.div>
  );
}

