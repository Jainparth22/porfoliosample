import type { Project } from '@/data/projects';
import Reveal from './Reveal';
import BarChart from './BarChart';

export default function CaseStudy({
  p,
  index,
  inverse = false,
}: {
  p: Project;
  index: number;
  inverse?: boolean;
}) {
  const rule = inverse ? 'border-invrule' : 'border-rule';
  const mute = inverse ? 'text-invmute' : 'text-mute';
  const body = inverse ? 'text-invfg/80' : 'text-ink/80';
  const first = p.highlights ? p.highlights.slice(0, 3) : [];
  const rest = p.highlights ? p.highlights.slice(3) : [];

  return (
    <Reveal>
      <article className={`grid md:grid-cols-12 gap-8 md:gap-12 py-14 border-t ${rule}`}>
        {/* left: sticky identity column */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl leading-tight tracking-tight">{p.title}</h3>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                  Live demo
                </a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline decoration-accent/40 hover:text-accent">
                Source code
              </a>
            </div>
            <p className={`mt-6 font-mono text-[11px] leading-relaxed ${mute}`}>{p.tech.join('  /  ')}</p>
          </div>
        </div>

        {/* right: story */}
        <div className="md:col-span-8">
          {p.longDescription && <p className="font-serif text-xl md:text-2xl leading-relaxed">{p.longDescription}</p>}

          {p.metrics && (
            <dl className={`mt-8 grid grid-cols-3 border-y ${rule}`}>
              {p.metrics.map((m, i) => (
                <div key={m.label} className={`py-5 pr-3 ${i > 0 ? `pl-4 border-l ${rule}` : ''}`}>
                  <dt className="font-serif text-3xl md:text-4xl tracking-tight">{m.value}</dt>
                  <dd className={`mt-1 text-xs leading-snug ${mute}`}>{m.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {p.flow && (
            <div className="mt-8">
              <ol className="flex flex-wrap items-center gap-y-2 text-sm">
                {p.flow.map((step, i) => (
                  <li key={step} className="flex items-center">
                    <span className={`border px-3 py-1.5 ${rule}`}>{step}</span>
                    {i < p.flow!.length - 1 && <span className="px-2 text-accent">&rarr;</span>}
                  </li>
                ))}
              </ol>
              {p.flowNote && <p className={`mt-3 text-sm ${mute}`}>{p.flowNote}</p>}
            </div>
          )}

          {p.chart && p.chartMin !== undefined && p.chartMax !== undefined && (
            <BarChart
              title={p.chartTitle}
              items={p.chart}
              min={p.chartMin}
              max={p.chartMax}
              mark={p.chartMark}
              inverse={inverse}
            />
          )}

          {first.length > 0 && (
            <ul className="mt-8 space-y-3">
              {first.map((h) => (
                <li key={h} className={`flex gap-3 text-[15px] leading-relaxed ${body}`}>
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {(rest.length > 0 || p.showcase) && (
            <details className="mt-5 group">
              <summary className={`cursor-pointer font-mono text-xs uppercase tracking-widest ${mute} hover:text-accent`}>
                More detail
              </summary>
              {rest.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {rest.map((h) => (
                    <li key={h} className={`flex gap-3 text-[15px] leading-relaxed ${body}`}>
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {p.showcase && (
                <p className={`mt-4 text-sm ${mute}`}>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">Look at </span>
                  {p.showcase}
                </p>
              )}
            </details>
          )}
        </div>
      </article>
    </Reveal>
  );
}
