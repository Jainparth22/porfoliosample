import SectionHead from '@/components/ui/SectionHead';
import CaseStudy from '@/components/ui/CaseStudy';
import { projects } from '@/data/projects';

// The big case studies, by repository name, in this order.
const slugs = ['PlacementPortalApp', 'MayaCardio', 'Healthcare-Appointment-Follow-up-Manager', 'Inventory-app'];

export default function Shipped() {
  const list = slugs
    .map((s) => projects.find((p) => p.github.endsWith('/' + s)))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <section id="shipped" className="bg-inv text-invfg">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead
          no="01"
          title="Systems built to survive failure"
          note="Each one is built around something that goes wrong: a dead cache, two people booking one slot, a device unplugged mid-recording."
          inverse
        />
        {list.map((p, i) => (
          <CaseStudy key={p.title} p={p} index={i} inverse />
        ))}
      </div>
    </section>
  );
}
