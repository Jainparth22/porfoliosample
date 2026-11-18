import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/ui/Reveal';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="bg-sheet border-y border-rule">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead no="03" title="Experience" />
        {experiences.map((e) => (
          <Reveal key={e.company}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-rule">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-mute">{e.period}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{e.role}</h3>
                <p className="mt-1 text-sm text-mute">
                  {e.company} / {e.type}
                </p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                {e.tech && <p className="mt-5 font-mono text-xs text-mute">{e.tech.join('  /  ')}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
