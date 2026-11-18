import SectionHead from '@/components/ui/SectionHead';
import { aboutParagraphs } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="bg-sheet border-y border-rule">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead no="07" title="How I work" />
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-start-3 md:col-span-8 space-y-6">
            {aboutParagraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
