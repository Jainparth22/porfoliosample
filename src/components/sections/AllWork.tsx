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

const labelFor: Record<string, string> = {
  featured: 'Featured',
  backend: 'Backend',
  ml: 'ML / AI',
  distributed: 'Systems',
  coursework: 'Notes',
};

export default function AllWork() {
  const [active, setActive] = useState<'all' | ProjectCategory>('all');
  const seen = new Set<string>();
  const list = projects.filter((p) => {
    if (active !== 'all' && !p.category.includes(active)) return false;
    if (seen.has(p.title)) return false;
    seen.add(p.title);
    return true;
  });

  const kind = (cats: ProjectCategory[]) => {
    const c = cats.find((x) => x !== 'featured') ?? cats[0];
    return labelFor[c] ?? c;
  };

  return (
    <section id="all-work" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHead
        no="04"
        title="Everything else I have built"
        note="The index from GitHub, 35 public repositories in total. Click a card to open the code."
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((t) => (
          <button
            key={t.value}
            onClick={() => setActive(t.value)}
            className={
              active === t.value
                ? 'px-4 py-1.5 text-sm bg-ink text-paper border border-ink'
                : 'px-4 py-1.5 text-sm border border-rule text-mute hover:border-ink hover:text-ink transition-colors'
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((p) => (
          <li key={p.title}>
            <article className="group h-full flex flex-col border border-rule bg-sheet p-6 transition-all duration-200 hover:border-ink hover:-translate-y-1">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">{kind(p.category)}</span>
                {p.live && (
                  <span className="font-mono text-[11px] uppercase tracking-widest text-mute">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-1.5 align-middle" />
                    live
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="after:absolute-none hover:text-accent">
                  {p.title}
                </a>
              </h3>

              <p className="mt-3 text-sm text-mute leading-relaxed line-clamp-4">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="border border-rule px-2 py-0.5 font-mono text-[10px] text-mute">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex gap-5 text-sm">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline decoration-rule group-hover:decoration-accent">
                  Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                    Live demo
                  </a>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm">
        <a href="https://github.com/Jainparth22?tab=repositories" target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-4">
          Open GitHub
        </a>
      </p>
    </section>
  );
}
