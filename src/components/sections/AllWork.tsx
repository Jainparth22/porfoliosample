'use client';

import { useState } from 'react';
import SectionHead from '@/components/ui/SectionHead';
import { projects, type ProjectCategory } from '@/data/projects';

const tabs: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'Everything', value: 'all' },
  { label: 'Backend and full-stack', value: 'backend' },
  { label: 'ML and AI', value: 'ml' },
  { label: 'Distributed systems', value: 'distributed' },
  { label: 'Notes', value: 'coursework' },
];

export default function AllWork() {
  const [active, setActive] = useState<'all' | ProjectCategory>('all');
  const seen = new Set<string>();
  const list = projects.filter((p) => {
    if (active !== 'all' && !p.category.includes(active)) return false;
    if (seen.has(p.title)) return false;
    seen.add(p.title);
    return true;
  });

  return (
    <section id="all-work" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        no="04"
        title="Everything else I have built"
        note="The index from GitHub, 36 public repositories in total. One project per line."
      />

      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm">
        {tabs.map((t) => (
          <button
            key={t.value}
            onClick={() => setActive(t.value)}
            className={
              active === t.value
                ? 'text-ink underline decoration-accent underline-offset-8 decoration-2'
                : 'text-mute hover:text-ink'
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul className="border-t border-rule">
        {list.map((p) => (
          <li key={p.title} className="grid md:grid-cols-12 gap-2 md:gap-6 py-5 border-b border-rule">
            <div className="md:col-span-4">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-serif text-xl hover:text-accent">
                {p.title}
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="ml-3 font-mono text-xs text-accent underline underline-offset-4">
                  live
                </a>
              )}
            </div>
            <p className="md:col-span-5 text-sm text-ink/80 leading-relaxed">{p.description}</p>
            <p className="md:col-span-3 font-mono text-[11px] text-mute leading-relaxed">{p.tech.slice(0, 4).join(' / ')}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm">
        <a href="https://github.com/Jainparth22?tab=repositories" target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-4">
          Open GitHub
        </a>
      </p>
    </section>
  );
}
