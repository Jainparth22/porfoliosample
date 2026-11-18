import SectionHead from '@/components/ui/SectionHead';
import { aboutIntro, aboutSections, aboutStack, aboutClosing } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="bg-sheet border-y border-rule">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead no="07" title="How I work" />

        <div className="md:ml-[16.66%] max-w-3xl">
          {aboutIntro.map((p) => (
            <p key={p} className="font-serif text-2xl leading-snug mb-12">
              {p}
            </p>
          ))}

          <div className="border-t border-rule">
            {aboutSections.map((s) => (
              <div key={s.title} className="grid md:grid-cols-12 gap-2 md:gap-6 py-6 border-b border-rule">
                <h3 className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-accent pt-1">{s.title}</h3>
                <p className="md:col-span-8 leading-relaxed text-ink/90">{s.text}</p>
              </div>
            ))}
          </div>

          <dl className="mt-10 space-y-3 text-sm">
            {aboutStack.map((s) => (
              <div key={s.label} className="grid md:grid-cols-12 gap-2 md:gap-6">
                <dt className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-mute pt-0.5">{s.label}</dt>
                <dd className="md:col-span-8 text-ink/80">{s.items}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-lg leading-relaxed">{aboutClosing}</p>
        </div>
      </div>
    </section>
  );
}
