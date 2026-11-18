import SectionHead from '@/components/ui/SectionHead';
import CaseStudy from '@/components/ui/CaseStudy';
import { projects } from '@/data/projects';

const slugs = ['SmartMCQsolver', 'Langchain-Workshop', 'MLtextclassificationpipeline', 'Cerebal-ross-store-sales-problem'];

export default function Research() {
  const list = slugs
    .map((s) => projects.find((p) => p.github.endsWith('/' + s)))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        no="02"
        title="Machine learning, with the experiment log"
        note="I keep the negative results. They are usually the most useful part: fine-tuning that lost to zero-shot, oversampling that hurt, a metric that lied."
      />
      {list.map((p, i) => (
        <CaseStudy key={p.title} p={p} index={i} />
      ))}
    </section>
  );
}
