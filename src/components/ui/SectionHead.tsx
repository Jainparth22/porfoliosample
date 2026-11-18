export default function SectionHead({ no, title, note }: { no: string; title: string; note?: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-4 mb-12">
      <p className="md:col-span-2 font-mono text-xs text-accent pt-2">{no}</p>
      <div className="md:col-span-10">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05]">{title}</h2>
        {note && <p className="mt-4 max-w-2xl text-mute leading-relaxed">{note}</p>}
      </div>
    </div>
  );
}
