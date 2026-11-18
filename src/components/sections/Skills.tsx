import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/ui/Reveal';
import { skillCategories } from '@/data/skills';

// The tools I reach for first, shown large. Edit freely.
const core = ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'PyTorch', 'Hugging Face', 'Docker'];

export default function Skills() {
  return (
    <section id="skills" className="bg-sheet border-y border-rule">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead
          no="05"
          title="What I work with"
          note="Grouped by the job it does. Everything here is used in a repository above."
        />

        <div className="mb-14 border-y border-rule py-8">
          <p className="font-mono text-xs uppercase tracking-widest text-mute mb-4">Reach for first</p>
          <p className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
            {core.map((c, i) => (
              <span key={c}>
                {c}
                {i < core.length - 1 && <span className="text-accent"> / </span>}
              </span>
            ))}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.05}>
              <div className="h-full border border-rule bg-paper p-6 transition-colors hover:border-ink">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-serif text-xl leading-tight">{c.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span key={s} className="border border-rule px-2 py-1 text-xs text-ink/80 hover:border-accent hover:text-accent transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
