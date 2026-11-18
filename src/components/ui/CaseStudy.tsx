import type { Project } from '@/data/projects';
import Reveal from './Reveal';

export default function CaseStudy({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal>
      <article className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-rule">
        <div className="md:col-span-4">
          <p className="font-mono text-xs text-mute">{String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight">{p.title}</h3>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                Live demo
              </a>
            )}
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline decoration-rule hover:decoration-accent">
              Source code
            </a>
          </div>
        </div>

        <div className="md:col-span-8">
          {p.longDescription && <p className="font-serif text-xl leading-relaxed">{p.longDescription}</p>}
          {p.highlights && (
            <ul className="mt-6 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          {p.showcase && (
            <p className="mt-6 text-sm text-mute">
              <span className="font-mono text-xs uppercase tracking-widest text-ink">Look at </span>
              {p.showcase}
            </p>
          )}
          <p className="mt-6 font-mono text-xs text-mute leading-relaxed">{p.tech.join('  /  ')}</p>
        </div>
      </article>
    </Reveal>
  );
}
