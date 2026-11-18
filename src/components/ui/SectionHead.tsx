export default function SectionHead({
  no,
  title,
  note,
  inverse = false,
}: {
  no: string;
  title: string;
  note?: string;
  inverse?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-4 mb-14">
      <p className="md:col-span-2 font-mono text-xs text-accent pt-3">{no}</p>
      <div className="md:col-span-10">
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.02]">{title}</h2>
        {note && (
          <p className={`mt-5 max-w-2xl leading-relaxed ${inverse ? 'text-invmute' : 'text-mute'}`}>{note}</p>
        )}
      </div>
    </div>
  );
}
