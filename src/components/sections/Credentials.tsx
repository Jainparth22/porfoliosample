import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/ui/Reveal';
import { degrees, iitmMilestones } from '@/data/education';
import { certifications, certCategories } from '@/data/certifications';
import { badges, codingProfiles } from '@/data/badges';

export default function Credentials() {
  const groups = certCategories.filter((c) => c.id !== 'all');
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHead no="06" title="Education and credentials" />

      {/* degrees */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {degrees.map((d) => (
          <Reveal key={d.institution}>
            <div className="h-full border border-rule bg-sheet p-8">
              <p className="font-serif text-6xl md:text-7xl tracking-tight leading-none text-accent">
                {d.degree.split(',')[0].split(' ')[0]}
              </p>
              <h3 className="mt-6 font-serif text-2xl leading-tight">{d.institution}</h3>
              <p className="mt-1 text-sm">{d.degree}</p>
              <p className="mt-4 font-mono text-xs text-mute">
                {d.period} / {d.mode}
              </p>
              <p className="mt-4 text-sm text-mute leading-relaxed">{d.details}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* IITM timeline */}
      <div className="mb-20 border border-rule p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-mute mb-6">IIT Madras BS: progress so far</p>
        <ol className="relative ml-2 border-l border-rule">
          {iitmMilestones.map((m) => (
            <li key={m.title} className="relative pl-6 pb-5 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-sm leading-snug">{m.title}</p>
              {m.date && <p className="font-mono text-[11px] text-mute mt-0.5">{m.date}</p>}
            </li>
          ))}
        </ol>
      </div>

      {/* coding profiles */}
      <h3 className="font-serif text-3xl mb-6">Coding profiles</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-20">
        {codingProfiles.map((p) => (
          <Reveal key={p.platform}>
            <div className="h-full border border-rule bg-sheet p-8 flex flex-col">
              <p className="font-mono text-xs uppercase tracking-widest text-mute">{p.platform}</p>
              <p className="mt-4 font-serif text-6xl tracking-tight leading-none">{p.headline}</p>
              <p className="mt-2 text-sm text-mute">{p.headlineLabel}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 text-sm text-accent underline underline-offset-4 w-fit">
                  View profile
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* certificates */}
      <h3 className="font-serif text-3xl mb-6">Certificates</h3>
      <div className="space-y-10 mb-20">
        {groups.map((g) => (
          <div key={g.id}>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">{g.label}</p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications
                .filter((c) => c.category === g.id)
                .map((c) => (
                  <li key={c.title} className="border border-rule p-4 hover:border-ink transition-colors">
                    <p className="text-sm font-medium leading-snug">
                      {c.verifyUrl ? (
                        <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-rule hover:decoration-accent">
                          {c.title}
                        </a>
                      ) : (
                        c.title
                      )}
                    </p>
                    <p className="mt-2 text-xs text-mute leading-snug">{c.issuer}</p>
                    {c.year && <p className="mt-1 font-mono text-[11px] text-mute">{c.year}</p>}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* badges */}
      <h3 className="font-serif text-3xl mb-6">Badges</h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {badges.map((b) => (
          <li key={b.title} className="border border-rule bg-sheet p-4">
            <p className="text-sm font-medium leading-snug">{b.title}</p>
            <p className="mt-2 text-xs text-mute leading-snug">{b.issuer}</p>
            <p className="mt-1 font-mono text-[11px] text-mute">{b.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
