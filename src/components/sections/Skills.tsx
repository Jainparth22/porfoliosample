import SectionHead from '@/components/ui/SectionHead';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="bg-sheet border-y border-rule">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          no="05"
          title="What I work with"
          note="Grouped by the job it does. Everything here is used in a repository above."
        />
        <dl className="border-t border-rule">
          {skillCategories.map((c) => (
            <div key={c.title} className="grid md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-rule">
              <dt className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-mute pt-1">{c.title}</dt>
              <dd className="md:col-span-9 leading-relaxed">{c.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
