import SectionHead from '@/components/ui/SectionHead';
import CaseStudy from '@/components/ui/CaseStudy';
import { projects } from '@/data/projects';

export default function Shipped() {
  const live = projects.filter((p) => p.live);
  return (
    <section id="shipped" className="bg-sheet border-y border-rule">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          no="01"
          title="Shipped, and running right now"
          note="Three full-stack systems with public demos. Each one is built around a failure I wanted to survive, not just a feature list."
        />
        {live.map((p, i) => (
          <CaseStudy key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
