import SectionHead from '@/components/ui/SectionHead';
import { degrees, iitmMilestones } from '@/data/education';
import { certifications, certCategories } from '@/data/certifications';
import { badges, codingProfiles } from '@/data/badges';

export default function Credentials() {
  const groups = certCategories.filter((c) => c.id !== 'all');
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead no="06" title="Education and credentials" />

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {degrees.map((d) => (
          <div key={d.institution} className="border-t border-ink pt-4">
            <p className="font-mono text-xs text-mute">{d.period}</p>
            <h3 className="mt-2 font-serif text-2xl leading-tight">{d.institution}</h3>
            <p className="text-sm mt-1">{d.degree}</p>
            <p className="mt-3 text-sm text-mute leading-relaxed">{d.details}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="font-mono text-xs uppercase tracking-widest text-mute mb-4">IIT Madras BS: progress</h3>
        <ul className="border-t border-rule">
          {iitmMilestones.map((m) => (
            <li key={m.title} className="flex justify-between gap-4 py-3 border-b border-rule text-sm">
              <span>{m.title}</span>
              <span className="font-mono text-xs text-mute shrink-0">{m.date ?? ''}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
        {groups.map((g) => (
          <div key={g.id}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-mute mb-3">{g.label}</h3>
            <ul className="border-t border-rule">
              {certifications
                .filter((c) => c.category === g.id)
                .map((c) => (
                  <li key={c.title} className="py-2.5 border-b border-rule text-sm leading-snug">
                    {c.verifyUrl ? (
                      <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-rule hover:decoration-accent">
                        {c.title}
                      </a>
                    ) : (
                      c.title
                    )}
                    <span className="text-mute">
                      {' '}
                      / {c.issuer}
                      {c.year ? `, ${c.year}` : ''}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-mute mb-3">Badges</h3>
          <ul className="border-t border-rule">
            {badges.map((b) => (
              <li key={b.title} className="py-2.5 border-b border-rule text-sm leading-snug">
                {b.title}
                <span className="text-mute">
                  {' '}
                  / {b.issuer}, {b.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-mute mb-3">Coding profiles</h3>
          <ul className="border-t border-rule">
            {codingProfiles.map((p) => (
              <li key={p.platform} className="py-2.5 border-b border-rule text-sm leading-snug">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline decoration-rule hover:decoration-accent">
                    {p.platform}
                  </a>
                ) : (
                  p.platform
                )}
                <span className="text-mute">
                  {' '}
                  / {p.headline} {p.headlineLabel}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
